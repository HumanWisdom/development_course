import { AdultsService } from "./adults/adults.service";

export function initDependency(adultsService: AdultsService): () => Promise<void> {
  return () => {
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
    return Promise.resolve();
  };
}
