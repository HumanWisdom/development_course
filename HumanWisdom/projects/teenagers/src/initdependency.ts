import { AdultsService } from "../../adults/src/app/adults/adults.service";
export function initDependency(adultsService: AdultsService): () => Promise<void> {
  return () => {
    const isLoggedIn = localStorage.getItem("isloggedin");
    if (isLoggedIn === 'F') {
      // Explicitly set to free/guest mode — do guest login
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
    // isLoggedIn === 'T' => real user, or null => fresh/incognito session.
    // In both cases skip guest auto-login — show logged-out state in incognito.
    return Promise.resolve();
  };
}
