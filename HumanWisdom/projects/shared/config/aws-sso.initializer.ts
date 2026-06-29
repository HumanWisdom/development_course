import { OidcSecurityService } from 'angular-auth-oidc-client';
import { tap } from 'rxjs/operators';
import { clearStaleAwsCognitoOidcCache } from './aws-cognito.config';

/** Runs before OIDC init to drop cached cognito-idp token URLs from sessionStorage. */
export function awsSsoStorageCleanupInitializer() {
  return () => {
    clearStaleAwsCognitoOidcCache();
    return Promise.resolve();
  };
}

export function awsSsoCallbackInitializer(oidcSecurityService: OidcSecurityService) {
  return () => {
    clearStaleAwsCognitoOidcCache();

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
        const body = err?.error ?? err?.message ?? err;
        console.error('[AWS SSO] APP_INITIALIZER checkAuth failed:', body);
        return undefined;
      });
  };
}
