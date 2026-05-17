import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OnboardingService } from "../../services/onboarding.service";
import { OktaAuthBridgeService } from "../../services/okta-auth-bridge.service";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-okta-callback",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tcenter p30">
      <p>Signing you in with Okta…</p>
    </div>
  `,
})
export class OktaCallbackPage implements OnInit {
  constructor(
    private okta: OktaAuthBridgeService,
    private onboarding: OnboardingService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const loginPath = `/${SharedService.getprogramName()}/onboarding/login`;

    if (!this.okta.isConfigured()) {
      this.router.navigate([loginPath]);
      return;
    }

    try {
      const parsed = await this.okta.parseRedirectTokens();
      if (!parsed) {
        this.router.navigate([loginPath]);
        return;
      }

      const c = parsed.claims;
      const email =
        (typeof c["email"] === "string" && c["email"]) ||
        (typeof c["preferred_username"] === "string" && c["preferred_username"]) ||
        "";
      const given =
        (typeof c["given_name"] === "string" && c["given_name"]) ||
        (typeof c["name"] === "string" ? (c["name"] as string).split(/\s+/)[0] : "") ||
        "";
      const family =
        (typeof c["family_name"] === "string" && c["family_name"]) ||
        (typeof c["name"] === "string"
          ? (c["name"] as string).split(/\s+/).slice(1).join(" ")
          : "") ||
        "";

      if (!email) {
        this.router.navigate([loginPath], { queryParams: { oktaError: "no_email" } });
        return;
      }

      this.onboarding
        .verifyOktaToken({
          TokenID: parsed.rawIdToken,
          FName: given,
          LName: family,
          Email: email,
          VCode: "",
          Pwd: "",
        })
        .subscribe({
          next: (res) => {
            if (res) {
              sessionStorage.setItem(
                "pendingSocialLogin",
                JSON.stringify({ res, provider: "okta" })
              );
              this.router.navigate([loginPath], { queryParams: { completeSocial: "1" } });
            } else {
              this.router.navigate([loginPath], { queryParams: { oktaError: "verify_failed" } });
            }
          },
          error: (err: unknown) => {
            console.error("verifyOktaTokenAndLogin failed", err);
            const status =
              err instanceof HttpErrorResponse ? String(err.status ?? "") : "";
            const message =
              err instanceof HttpErrorResponse && err.error && typeof err.error === "object" && "Message" in err.error
                ? String((err.error as { Message?: string }).Message ?? "")
                : err instanceof HttpErrorResponse
                  ? err.message
                  : "";
            this.router.navigate([loginPath], {
              queryParams: {
                oktaError: "api",
                ...(status ? { oktaStatus: status } : {}),
                ...(message ? { oktaDetail: message.slice(0, 200) } : {}),
              },
            });
          },
        });
    } catch {
      this.router.navigate([loginPath], { queryParams: { oktaError: "parse" } });
    }
  }
}
