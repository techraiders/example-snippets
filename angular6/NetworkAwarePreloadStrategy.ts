// Checking for a Good Connection

export declare var navigator;
@Injectable({ providedIn: 'root' })
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.hasGoodConnection() ? load() : EMPTY;
  }
hasGoodConnection(): boolean {
    const conn = navigator.connection;
    if (conn) {
      if (conn.saveData) {
        return false; // save data mode is enabled, so dont preload
      }
      const avoidTheseConnections = [
        'slow-2g', '2g' 
        /* , '3g', '4g' */
      ];
      const effectiveType = conn.effectiveType || '';
      console.log(effectiveType);
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }
}


// Setting the Custom NetworkAwarePreloadStrategy
// Then when setting up your RouterModule, pass the router options including the preloadingStrategy to the forRoot() function.

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NetworkAwarePreloadStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// Reference: https://medium.com/dailyjs/preload-angular-bundles-when-good-network-connectivity-is-detected-60d5ac9a40ab
