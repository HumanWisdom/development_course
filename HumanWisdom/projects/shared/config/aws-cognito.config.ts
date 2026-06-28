import { environment } from '../../environments/environment';

/** Set localStorage enableAwsSsoLogin = 'T' in devtools to show the SSO button. */
export const AWS_SSO_LOGIN_STORAGE_KEY = 'enableAwsSsoLogin';

export function isAwsSsoLoginVisible(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return localStorage.getItem(AWS_SSO_LOGIN_STORAGE_KEY) === 'T';
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
