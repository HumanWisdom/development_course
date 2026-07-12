import { OpenIdConfiguration } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';
import {
  buildAwsCognitoWellKnownEndpoints,
  getAwsCognitoLogoutUrl,
  getAwsCognitoRedirectUrl,
  getAwsCognitoWellKnownConfigurationUrl,
} from './aws-cognito.config';

export function buildAwsCognitoAuthConfig(app: 'adults' | 'teenagers'): OpenIdConfiguration {
  const loginRoute = `/${app}/onboarding/login`;

  return {
    configId: `aws-cognito-${app}`,
    authority: environment.awsCognito.authority,
    redirectUrl: getAwsCognitoRedirectUrl(app),
    postLogoutRedirectUri: getAwsCognitoLogoutUrl(app),
    clientId: environment.awsCognito.clientId,
    scope: environment.awsCognito.scope,
    responseType: 'code',
    silentRenew: false,
    useRefreshToken: false,
    autoUserInfo: true,
    unauthorizedRoute: loginRoute,
    forbiddenRoute: loginRoute,
    triggerAuthorizationResultEvent: true,
    historyCleanupOff: false,
    // Must use hosted UI discovery — default authority (cognito-idp) returns a token URL that times out in browsers.
    authWellknownEndpointUrl: getAwsCognitoWellKnownConfigurationUrl(),
    authWellknownEndpoints: buildAwsCognitoWellKnownEndpoints(),
    refreshTokenRetryInSeconds: 3,
  };
}
