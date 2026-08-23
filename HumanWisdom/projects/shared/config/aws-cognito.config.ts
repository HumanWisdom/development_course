import { environment } from '../../environments/environment';

/** Set localStorage enableAwsSsoLogin = 'F' to hide the Cognito SSO button. */
export const AWS_SSO_LOGIN_STORAGE_KEY = 'enableAwsSsoLogin';

export const AWS_COGNITO_OIDC_CONFIG_IDS = ['aws-cognito-adults', 'aws-cognito-teenagers'] as const;

export function isAwsSsoLoginVisible(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return localStorage.getItem(AWS_SSO_LOGIN_STORAGE_KEY) === 'T';
}

function getHostedUiBaseUrl(): string {
  const { domain } = environment.awsCognito;
  return `https://${domain}`;
}

export function getAwsCognitoWellKnownConfigurationUrl(): string {
  return `${getHostedUiBaseUrl()}/.well-known/openid-configuration`;
}

export function getAwsCognitoTokenEndpointUrl(): string {
  return `${getHostedUiBaseUrl()}/oauth2/token`;
}

/** Browser token exchange must use the Cognito hosted UI domain, not cognito-idp. */
export function buildAwsCognitoWellKnownEndpoints() {
  const { authority } = environment.awsCognito;
  const hostedUiBase = getHostedUiBaseUrl();

  return {
    issuer: authority,
    authorizationEndpoint: `${hostedUiBase}/oauth2/authorize`,
    tokenEndpoint: `${hostedUiBase}/oauth2/token`,
    userInfoEndpoint: `${hostedUiBase}/oauth2/userInfo`,
    endSessionEndpoint: `${hostedUiBase}/logout`,
    jwksUri: `${authority}/.well-known/jwks.json`,
  };
}

function isExpectedCognitoTokenEndpoint(tokenEndpoint: string | undefined): boolean {
  if (!tokenEndpoint) {
    return false;
  }

  const expected = getAwsCognitoTokenEndpointUrl();
  if (tokenEndpoint === expected) {
    return true;
  }

  // Reject cognito-idp token URLs — they hang/timeout from the browser.
  return !tokenEndpoint.includes('cognito-idp.') && tokenEndpoint.includes('amazoncognito.com/oauth2/token');
}

/**
 * angular-auth-oidc-client caches authWellKnownEndPoints under configId keys
 * (e.g. aws-cognito-teenagers), NOT under the Cognito clientId.
 * Stale cognito-idp token URLs cause browser timeouts on /oauth2/token.
 */
export function clearStaleAwsCognitoOidcCache(): void {
  if (typeof window === 'undefined' || !window.sessionStorage) {
    return;
  }

  const expectedEndpoints = buildAwsCognitoWellKnownEndpoints();
  const keysToFix = new Set<string>(AWS_COGNITO_OIDC_CONFIG_IDS);

  for (let i = 0; i < sessionStorage.length; i++) {
    const storageKey = sessionStorage.key(i);
    if (storageKey) {
      keysToFix.add(storageKey);
    }
  }

  keysToFix.forEach((storageKey) => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (!raw) {
        return;
      }

      const stored = JSON.parse(raw) as Record<string, unknown>;
      const tokenEndpoint = (stored?.authWellKnownEndPoints as { tokenEndpoint?: string } | undefined)?.tokenEndpoint;

      if (!stored.authWellKnownEndPoints || !isExpectedCognitoTokenEndpoint(tokenEndpoint)) {
        if (tokenEndpoint && tokenEndpoint !== expectedEndpoints.tokenEndpoint) {
          console.warn('[AWS SSO] Replacing stale OIDC token endpoint. Was:', tokenEndpoint);
        }
        stored.authWellKnownEndPoints = expectedEndpoints;
        sessionStorage.setItem(storageKey, JSON.stringify(stored));
      }
    } catch {
      // ignore malformed session entries
    }
  });
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

/** Set when HappierMe login came from Cognito / IAM IC SSO. */
export const AWS_SSO_LOGIN_METHOD = 'aws';
export const LOGIN_METHOD_STORAGE_KEY = 'loginMethod';

export function isAwsSsoSession(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return localStorage.getItem(LOGIN_METHOD_STORAGE_KEY) === AWS_SSO_LOGIN_METHOD
    || !!localStorage.getItem('enterpriseOrganization')
    || !!localStorage.getItem('ssoDepartment');
}

/**
 * Cognito hosted UI logout — clears the Cognito browser session so the next
 * SSO login is not stuck on the previous user.
 * logout_uri must be in the app client's Allowed sign-out URLs.
 */
export function buildAwsCognitoHostedLogoutUrl(app: 'adults' | 'teenagers' = 'adults'): string {
  const { clientId } = environment.awsCognito;
  const logoutUri = getAwsCognitoLogoutUrl(app);
  return `${getHostedUiBaseUrl()}/logout?client_id=${encodeURIComponent(clientId)}&logout_uri=${encodeURIComponent(logoutUri)}`;
}

export function redirectToAwsCognitoLogout(app?: 'adults' | 'teenagers'): void {
  if (typeof window === 'undefined') {
    return;
  }
  const program = app
    || (window.location.pathname.includes('/teenagers') ? 'teenagers' : 'adults');
  window.location.href = buildAwsCognitoHostedLogoutUrl(program);
}
