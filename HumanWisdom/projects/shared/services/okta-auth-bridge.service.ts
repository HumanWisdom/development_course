import { Injectable } from "@angular/core";
import OktaAuth from "@okta/okta-auth-js";
import { environment } from "../../environments/environment";
import { SharedService } from "./shared.service";

/**
 * OIDC authorization-code + PKCE against Okta. Configure {@link environment.oktaIssuer}
 * and {@link environment.oktaClientId}; register the redirect URI in the Okta app as:
 * `{origin}/{adults|teenagers}/onboarding/okta-callback`
 */
@Injectable({ providedIn: "root" })
export class OktaAuthBridgeService {
  isConfigured(): boolean {
    const issuer = environment.oktaIssuer?.trim();
    const clientId = environment.oktaClientId?.trim();
    return !!issuer && !!clientId;
  }

  getRedirectUri(): string {
    const prog = SharedService.getprogramName();
    const path = `/${prog}/onboarding/okta-callback`;
    if (typeof window !== "undefined" && window.location?.origin) {
      return `${window.location.origin}${path}`;
    }
    const base = environment.clientUrl?.replace(/\/?$/, "") ?? "";
    return `${base}${path}`;
  }

  private createClient(): OktaAuth {
    return new OktaAuth({
      issuer: environment.oktaIssuer!.trim(),
      clientId: environment.oktaClientId!.trim(),
      redirectUri: this.getRedirectUri(),
      pkce: true,
      scopes: ["openid", "profile", "email"],
    });
  }

  async signInWithRedirect(): Promise<void> {
    if (!this.isConfigured()) {
      throw new Error("Okta is not configured (oktaIssuer / oktaClientId).");
    }
    const oktaAuth = this.createClient();
    await oktaAuth.signInWithRedirect();
  }

  /**
   * Call on the okta-callback route after Okta redirects back (authorization code in query).
   */
  async parseRedirectTokens(): Promise<{ rawIdToken: string; claims: Record<string, unknown> } | null> {
    if (!this.isConfigured()) {
      return null;
    }
    const oktaAuth = this.createClient();
    if (!oktaAuth.token.isLoginRedirect()) {
      return null;
    }

    const result = await oktaAuth.token.parseFromUrl();
    const tokens = result.tokens;
    if (tokens?.idToken) {
      await oktaAuth.tokenManager.setTokens(tokens);
    }
    const idTokenObj = (await oktaAuth.tokenManager.get("idToken")) as {
      idToken?: string;
      claims?: Record<string, unknown>;
    } | null;
    if (!idTokenObj?.idToken) {
      return null;
    }
    return {
      rawIdToken: idTokenObj.idToken,
      claims: idTokenObj.claims ?? {},
    };
  }
}
