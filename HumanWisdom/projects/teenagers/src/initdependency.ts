import { AdultsService } from "../../adults/src/app/adults/adults.service";
export function initDependency(adultsService: AdultsService): () => Promise<void> {
  return () => {
    // Only call API if not logged in
    if (!(localStorage.getItem("isloggedin")) || localStorage.getItem("isloggedin") !== 'T') {
      return adultsService.initialLoginWithGuestUser()
        .toPromise()
        .then(() => {
          console.log('✅ Guest user login & init complete.');
        })
        .catch(err => {
          console.error('❌ Guest user login failed during app initialization.', err);
          throw err;
        });
    }
    // Already logged in, resolve immediately
    return Promise.resolve();
  };
}
