import { AdultsService } from "./adults/adults.service";

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
    // isLoggedIn === 'T' => real user. 
    // null => fresh/incognito session — do guest auto-login to ensure data/token is available.
    if (isLoggedIn === 'T') {
        return Promise.resolve();
    }
    
    return adultsService.initialLoginWithGuestUser()
      .toPromise()
      .then(() => {
        // If it was a fresh/incognito session, we want to REMAIN in a logged-out UI state
        // even though we have a guest token/userId now.
        if (isLoggedIn === null) {
             localStorage.setItem("isloggedin", "F"); // Keep UI in logged-out mode
             localStorage.setItem("guest", "T");
        }
        console.log('✅ Guest user login & init complete.');
      })
      .catch(err => {
        console.error('❌ Guest user login failed during app initialization.', err);
        return Promise.resolve(); // Don't block app load
      });
  };
}
