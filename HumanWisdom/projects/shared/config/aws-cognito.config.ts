import { environment } from '../../environments/environment';

/** Set localStorage enableAwsSsoLogin = 'T' in devtools to show the SSO button. */
export const AWS_SSO_LOGIN_STORAGE_KEY = 'enableAwsSsoLogin';

export function isAwsSsoLoginVisible(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return localStorage.getItem(AWS_SSO_LOGIN_STORAGE_KEY) === 'T';
}

/** Browser token exchange must use the Cognito hosted UI domain, not cognito-idp. */
export function buildAwsCognitoWellKnownEndpoints() {
  const { authority, domain } = environment.awsCognito;
  const hostedUiBase = `https://${domain}`;

  return {
    issuer: authority,
    authorizationEndpoint: `${hostedUiBase}/oauth2/authorize`,
    tokenEndpoint: `${hostedUiBase}/oauth2/token`,
    userInfoEndpoint: `${hostedUiBase}/oauth2/userInfo`,
    endSessionEndpoint: `${hostedUiBase}/logout`,
    jwksUri: `${authority}/.well-known/jwks.json`,
  };
}

/**
 * angular-auth-oidc-client caches authWellKnownEndPoints in sessionStorage.
 * Older builds stored cognito-idp.../oauth2/token which times out from the browser.
 */
export function clearStaleAwsCognitoOidcCache(): void {
  if (typeof window === 'undefined' || !window.sessionStorage) {
    return;
  }

  const { clientId, domain } = environment.awsCognito;
  const expectedTokenPrefix = `https://${domain}/oauth2/token`;

  for (let i = 0; i < sessionStorage.length; i++) {
    const storageKey = sessionStorage.key(i);
    if (!storageKey?.includes(clientId)) {
      continue;
    }

    try {
      const raw = sessionStorage.getItem(storageKey);
      if (!raw) {
        continue;
      }

      const stored = JSON.parse(raw);
      const tokenEndpoint = stored?.authWellKnownEndPoints?.tokenEndpoint as string | undefined;
      if (!tokenEndpoint || tokenEndpoint === expectedTokenPrefix) {
        continue;
      }

      delete stored.authWellKnownEndPoints;
      sessionStorage.setItem(storageKey, JSON.stringify(stored));
      console.warn('[AWS SSO] Cleared stale OIDC endpoint cache. Was:', tokenEndpoint);
    } catch {
      // ignore malformed session entries
    }
  }
}

function isLocalDev(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1';
}

export function getAwsCognitoRedirectUrl(app: 'adults' | 'teenagers'): string {
  if (isLocalDev()) {
    return `${window.location.origin}/${app}/onboarding/login`;
  }
  return app === 'adults'
    ? environment.awsCognito.redirectUrlAdults
    : environment.awsCognito.redirectUrlTeenagers;
}

export function getAwsCognitoLogoutUrl(app: 'adults' | 'teenagers'): string {
  if (isLocalDev()) {
    return `${window.location.origin}/${app}/onboarding/login`;
  }
  return app === 'adults'
    ? environment.awsCognito.logoutUrlAdults
    : environment.awsCognito.logoutUrlTeenagers;
}
