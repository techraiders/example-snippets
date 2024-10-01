// deduplication.interceptor.ts
import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, share } from 'rxjs/operators';

const ongoingRequests = new Map<string, { timestamp: number, observable: Observable<HttpEvent<unknown>> }>();

export const deduplicationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  // Check for the custom header to bypass deduplication
  if (req.headers.has('X-Bypass-Deduplication')) {
    const newHeaders = req.headers.delete('X-Bypass-Deduplication');
    const newReq = req.clone({ headers: newHeaders });
    return next(newReq);
  }

  // Create a unique key for the request based on URL, method, params, and body
  const requestKey = getRequestKey(req);
  const currentTime = Date.now();

  // Check if there is an ongoing request with the same key within the last second
  if (ongoingRequests.has(requestKey)) {
    const { timestamp, observable } = ongoingRequests.get(requestKey)!;
    if (currentTime - timestamp < 1000) {
      return observable;
    }
  }

  // Handle the request and store it in the ongoingRequests map
  const request$ = next(req).pipe(
    share(),
    finalize(() => ongoingRequests.delete(requestKey)),
    catchError(error => {
      ongoingRequests.delete(requestKey);
      throw error;
    })
  );

  // Store the request observable with the current timestamp
  ongoingRequests.set(requestKey, { timestamp: currentTime, observable: request$ });
  return request$;
};

/**
 * Creates a unique key for the request based on URL, method, params, and body.
 */
function getRequestKey(req: HttpRequest<unknown>): string {
  const { urlWithParams, method, body } = req;
  const bodyString = body ? JSON.stringify(body) : '';
  return `${method} ${urlWithParams} ${bodyString}`;
}
