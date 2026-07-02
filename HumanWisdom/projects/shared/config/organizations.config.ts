import { OrganizationConfig } from '../models/org-sso.model';

/** Organization SSO config — edit this file to add orgs or allowed users. */
export const ORGANIZATIONS: OrganizationConfig[] = [
  {
    OrganizationId: 'org-humanwisdom',
    OrganizationName: 'Human Wisdom',
    OrganizationSlug: 'humanwisdom',
    EmailDomains: ['humanwisdom.me', 'humanwisdom.info', 'gmail.com'],
    AllowedEmails: ['betsy@humanwisdom.me', 'jainpavish@gmail.com', 'tarini@humanwisdom.me'],
    CognitoIdentityProvider: 'humanwisdom-aws-sso',
    IdpDisplayName: 'AWS IAM Identity Center',
    SsoEnabled: true,
    SsoOnly: false,
    IsActive: true,
  },
];
