import { OpenIdConfiguration } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';
import { getAwsCognitoLogoutUrl, getAwsCognitoRedirectUrl } from './aws-cognito.config';

export function buildAwsCognitoAuthConfig(app: 'adults' | 'teenagers'): OpenIdConfiguration {
  const loginRoute = `/${app}/onboarding/login`;
  const { authority, domain } = environment.awsCognito;
  const hostedUiBase = `https://${domain}`;

  return {
    authority,
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
    // Login via Hosted UI; exchange code via cognito-idp (more reliable from browser)
    authWellknownEndpoints: {
      issuer: authority,
      authorizationEndpoint: `${hostedUiBase}/oauth2/authorize`,
      tokenEndpoint: `${authority}/oauth2/token`,
      userInfoEndpoint: `${authority}/oauth2/userInfo`,
      endSessionEndpoint: `${hostedUiBase}/logout`,
      jwksUri: `${authority}/.well-known/jwks.json`,
    },
  };
}
