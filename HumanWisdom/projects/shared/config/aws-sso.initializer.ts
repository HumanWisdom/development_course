import { OidcSecurityService } from 'angular-auth-oidc-client';
import { tap } from 'rxjs/operators';

export function awsSsoCallbackInitializer(oidcSecurityService: OidcSecurityService) {
  return () => {
    if (typeof window === 'undefined' || !window.location.search.includes('code=')) {
      return Promise.resolve();
    }

    console.log('[AWS SSO] APP_INITIALIZER: exchanging authorization code for tokens');

    return oidcSecurityService
      .checkAuth()
      .pipe(tap((result) => console.log('[AWS SSO] APP_INITIALIZER checkAuth result:', result)))
      .toPromise()
      .then(() => undefined)
      .catch((err) => {
        console.error('[AWS SSO] APP_INITIALIZER checkAuth failed:', err);
        return undefined;
      });
  };
}
