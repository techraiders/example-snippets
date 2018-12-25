// MODULE
import { NgModule } from '@angular/core';
import { AuthInterceptor } from "./auth.inceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class SharedModule {
}



// INTERCEPTOR
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    console.log('intercepted', req);
    // const copiedReq = req.clone({headers: req.headers.append('', '')});
    // const copiedReq = req.clone({params: req.params.set('auth', '')});
    return next.handle(req);
  }

}
