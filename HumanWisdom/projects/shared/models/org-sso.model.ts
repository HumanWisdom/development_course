export interface OrgSsoDiscoverResult {
  Found: boolean;
  SsoEnabled?: boolean;
  OrganizationId?: string;
  OrganizationName?: string;
  OrganizationSlug?: string;
  CognitoIdentityProvider?: string;
  IdpDisplayName?: string;
  SsoOnly?: boolean;
  Message?: string;
}

export interface OrganizationConfig {
  OrganizationId: string;
  OrganizationName: string;
  OrganizationSlug: string;
  EmailDomains: string[];
  AllowedEmails?: string[];
  CognitoIdentityProvider: string;
  IdpDisplayName: string;
  SsoEnabled: boolean;
  SsoOnly?: boolean;
  IsActive: boolean;
}
