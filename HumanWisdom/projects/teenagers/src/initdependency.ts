import { AdultsService } from "../../adults/src/app/adults/adults.service";
export function initDependency(adultsService: AdultsService): () => Promise<void> {
  return () => adultsService.initialLoginWithGuestUser()
    .toPromise()
    .then(() => {
      console.log('✅ Guest user login & init complete.');
    })
    .catch(err => {
      console.error('❌ Guest user login failed during app initialization.', err);
      throw err;
    });
}
