import { environment } from '../../environments/environment';

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
