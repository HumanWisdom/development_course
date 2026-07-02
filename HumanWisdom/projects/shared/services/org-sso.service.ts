import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ORGANIZATIONS } from '../config/organizations.config';
import { OrganizationConfig, OrgSsoDiscoverResult } from '../models/org-sso.model';

@Injectable({
  providedIn: 'root',
})
export class OrgSsoService {
  private readonly organizations = ORGANIZATIONS;

  discover(email?: string, org?: string): Observable<OrgSsoDiscoverResult> {
    const organization = this.findOrganization(email, org);
    return of(this.toDiscoverResult(organization, email));
  }

  private findOrganization(email?: string, org?: string): OrganizationConfig | undefined {
    const activeOrgs = this.organizations.filter((item) => item.IsActive && item.SsoEnabled);

    if (org) {
      const slug = org.trim().toLowerCase();
      return activeOrgs.find((item) => item.OrganizationSlug.toLowerCase() === slug);
    }

    if (!email) {
      return undefined;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const domain = normalizedEmail.split('@')[1];

    return activeOrgs.find((item) => {
      if (item.AllowedEmails?.length) {
        return item.AllowedEmails.some((allowedEmail) => allowedEmail.toLowerCase() === normalizedEmail);
      }

      return item.EmailDomains.some((emailDomain) => emailDomain.toLowerCase() === domain);
    });
  }

  private toDiscoverResult(
    organization: OrganizationConfig | undefined,
    email?: string
  ): OrgSsoDiscoverResult {
    if (!organization) {
      return {
        Found: false,
        Message: email
          ? 'No organization SSO is configured for this email address.'
          : 'Enter your work email to continue with SSO.',
      };
    }

    return {
      Found: true,
      SsoEnabled: organization.SsoEnabled,
      OrganizationId: organization.OrganizationId,
      OrganizationName: organization.OrganizationName,
      OrganizationSlug: organization.OrganizationSlug,
      CognitoIdentityProvider: organization.CognitoIdentityProvider,
      IdpDisplayName: organization.IdpDisplayName,
      SsoOnly: organization.SsoOnly,
    };
  }
}
