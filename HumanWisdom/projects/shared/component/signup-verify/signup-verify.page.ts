import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { OnboardingService } from "../../services/onboarding.service";
import { CommonService } from "../../services/common.service";
import { SharedService } from "../../services/shared.service";
import { SignupCredentialsService } from "../../services/signup-credentials.service";
import { LogEventService } from "../../services/log-event.service";
import { markLoginCompleted } from "../../config/session-auth.config";

@Component({
  selector: "app-signup-verify",
  templateUrl: "./signup-verify.page.html",
  styleUrls: ["./signup-verify.page.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SignupVerifyPage implements OnInit, OnDestroy {
  @ViewChildren("otpInput") otpInputs: QueryList<ElementRef<HTMLInputElement>>;

  // Fixed list so the *ngFor never re-creates the inputs while the user types
  readonly otpIndexes = [0, 1, 2, 3, 4, 5];
  readonly otpLength = 6;

  digits: string[] = ["", "", "", "", "", ""];
  email = "";
  errorMessage = "";
  infoMessage = "";
  codeError = false;
  isVerifying = false;
  isResending = false;
  resendTimer = 30;

  private timerRef: any = null;
  private retryRef: any = null;
  private isDestroyed = false;

  private readonly loginAttempts = 3;
  private readonly loginRetryDelayMs = 1500;

  constructor(
    private router: Router,
    private service: OnboardingService,
    private commonService: CommonService,
    private signupCredentials: SignupCredentialsService,
    private logeventservice: LogEventService
  ) {
    const navigationState = this.router.getCurrentNavigation()?.extras?.state as any;
    const historyState = (window as any)?.history?.state;
    this.email = navigationState?.email || historyState?.email || localStorage.getItem("signupEmail") || "";
  }

  ngOnInit() {
    if (!this.email) {
      // Nothing left to verify: an already signed-in user goes straight into the app
      if (localStorage.getItem("isloggedin") === "T") {
        this.router.navigate([`/${SharedService.getprogramName()}/today`]);
        return;
      }
      this.goBack();
      return;
    }
    this.startResendTimer();
  }

  ngOnDestroy() {
    this.isDestroyed = true;
    this.clearTimer();
    if (this.retryRef) {
      clearTimeout(this.retryRef);
      this.retryRef = null;
    }
  }

  get code(): string {
    return this.digits.join("");
  }

  // Teenagers paint the column dark blue (sc_01_home), so the copy has to go white there
  get isAdults(): boolean {
    return Number(SharedService.ProgramId) === 9;
  }

  get timerLabel(): string {
    return "00:" + (this.resendTimer < 10 ? "0" + this.resendTimer : this.resendTimer);
  }

  get canResend(): boolean {
    return this.resendTimer === 0 && !this.isResending;
  }

  trackByIndex(index: number): number {
    return index;
  }

  onDigitInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = (input.value || "").replace(/\D/g, "");
    this.errorMessage = "";
    this.infoMessage = "";
    this.codeError = false;

    if (!value) {
      this.digits[index] = "";
      input.value = "";
      return;
    }

    // Mobile keyboards / autofill can drop the whole code into one box
    if (value.length > 1) {
      this.fillDigits(index, value);
      return;
    }

    this.digits[index] = value;
    input.value = value;

    if (index < this.otpLength - 1) {
      this.focusInput(index + 1);
    }
    this.maybeVerify();
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === "Backspace") {
      if (!this.digits[index] && index > 0) {
        event.preventDefault();
        this.digits[index - 1] = "";
        this.setInputValue(index - 1, "");
        this.focusInput(index - 1);
      }
      return;
    }
    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      this.focusInput(index - 1);
      return;
    }
    if (event.key === "ArrowRight" && index < this.otpLength - 1) {
      event.preventDefault();
      this.focusInput(index + 1);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      this.verifyCode();
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData("text") || "").replace(/\D/g, "");
    if (!pasted) {
      return;
    }
    this.errorMessage = "";
    this.infoMessage = "";
    this.codeError = false;
    this.fillDigits(0, pasted);
  }

  verifyCode() {
    if (this.isVerifying) {
      return;
    }
    if (this.code.length !== this.otpLength) {
      this.errorMessage = "Please enter the 6-digit code";
      return;
    }

    this.isVerifying = true;
    this.errorMessage = "";
    this.infoMessage = "";
    this.codeError = false;

    this.service.verifyCode({ Email: this.email, VCode: this.code }).subscribe(
      (res: any) => {
        this.isVerifying = false;
        if (this.isSuccess(res)) {
          localStorage.setItem("codeVerified", JSON.stringify(true));
          localStorage.setItem("email", JSON.stringify(this.email));
          localStorage.removeItem("signupEmail");
          this.logeventservice.logEvent("email_signup_verified");
          this.loginAndContinue();
        } else {
          this.codeError = true;
          this.errorMessage = "The code you entered is incorrect. Please try again.";
          this.clearDigits();
        }
      },
      (err) => {
        this.isVerifying = false;
        // A wrong code comes back as HTTP 400 with the reason in the response body
        this.codeError = true;
        this.errorMessage = this.getApiMessage(err, "The code you entered is incorrect. Please try again.");
        this.clearDigits();
      }
    );
  }

  resendCode() {
    if (!this.canResend) {
      return;
    }
    this.isResending = true;
    this.errorMessage = "";
    this.infoMessage = "";

    this.service.resendCode(this.email).subscribe(
      (res: any) => {
        this.isResending = false;
        if (!this.isSuccess(res)) {
          this.errorMessage = "Could not resend the code. Please try again.";
          return;
        }
        this.clearDigits();
        this.infoMessage = "Verification code resent";
        this.startResendTimer();
      },
      (err) => {
        this.isResending = false;
        this.errorMessage = this.getApiMessage(err, "Could not resend the code. Please try again.");
      }
    );
  }

  goBack() {
    this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`]);
  }

  private routeToSuccess() {
    this.router.navigate([`/${SharedService.getprogramName()}/onboarding/all-set`]);
  }

  /**
   * Logs the freshly verified user in, so the rest of the flow runs as a registered
   * user instead of a guest (APIs like AddUserPreference reject guests with a 400).
   * If the login cannot be completed the success screen sends the user to the login
   * page instead of the topic picker, so a guest never reaches the topic API.
   */
  private loginAndContinue() {
    if (!this.signupCredentials.hasCredentials()) {
      // Credentials gone (other tab, storage cleared) - success screen handles the rest
      localStorage.removeItem("signupLoginOk");
      this.routeToSuccess();
      return;
    }
    // Keep the boxes locked while the login round trip runs
    this.isVerifying = true;
    this.login(1);
  }

  private login(attempt: number) {
    // Same cleanup the login screen performs before an email login
    localStorage.removeItem("token");

    this.service.emailLogin(this.signupCredentials.email, this.signupCredentials.password).subscribe(
      (res: any) => {
        if (this.isDestroyed) {
          return;
        }
        if (res && res.UserId > 0) {
          this.saveLoginSession(res);
          this.signupCredentials.clear();
          this.isVerifying = false;
          this.routeToSuccess();
          return;
        }
        // UserId 0 = wrong credentials, -1 = email still unverified: retrying will not help
        const retryable = !!res && res.UserId !== 0 && res.UserId !== -1;
        this.finishLogin(attempt, retryable);
      },
      () => this.finishLogin(attempt, true)
    );
  }

  private finishLogin(attempt: number, retryable: boolean) {
    if (retryable && attempt < this.loginAttempts && !this.isDestroyed) {
      this.retryRef = setTimeout(() => {
        this.retryRef = null;
        if (!this.isDestroyed) {
          this.login(attempt + 1);
        }
      }, this.loginRetryDelayMs);
      return;
    }

    this.logeventservice.logEvent("email_signup_login_failed");
    localStorage.removeItem("signupLoginOk");
    this.signupCredentials.clear();
    this.isVerifying = false;
    this.routeToSuccess();
  }

  // Mirrors the storage the login screen writes for a regular email login
  private saveLoginSession(res: any) {
    this.commonService.loginadult(res);

    localStorage.setItem("isloggedin", "T");
    localStorage.setItem("remember", "T");
    localStorage.setItem("guest", "F");
    localStorage.setItem("btnclick", "F");
    localStorage.setItem("socialLogin", "F");
    localStorage.setItem("first", "T");
    localStorage.setItem("NoOfVisits", res.NoOfVisits ?? "");
    localStorage.setItem("signupfirst", res.NoOfVisits === 1 ? "T" : "F");
    // Marks that this browser finished the signup with a real session
    localStorage.setItem("signupLoginOk", "T");
    localStorage.setItem("userID", res.UserId);
    localStorage.setItem("userName", JSON.stringify(res.Name));
    localStorage.setItem("userEmail", JSON.stringify(res.Email));
    localStorage.setItem("Subscriber", res.Subscriber ?? "");
    localStorage.setItem("SubscriberType", res.SubscriberType ?? "");
    localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
    localStorage.setItem("IsPartner", res.IsPartner ?? "");
    localStorage.setItem("isPartner", res.IsPartner ?? "");
    localStorage.setItem("PartnerOption", res.PartnerOption ?? "");

    const nameParts = (res.Name || "").split(" ");
    localStorage.setItem("FnName", nameParts[0] || "");
    localStorage.setItem("LName", nameParts[1] || "");
    SharedService.syncUserDisplayName(res.Name);

    // Screens unlocked for free and the full user record - both non blocking
    this.service.freeScreens().subscribe(
      (screens: any[]) => {
        const lists = (screens || [])
          .map((item: any) => item?.FreeScrs)
          .filter((element: any) => element && element.length !== 0)
          .map((element: any[]) => element.map((screen: any) => Number.parseInt(screen.ScrNo)));
        localStorage.setItem("freeScreens", JSON.stringify(([] as any[]).concat.apply([], lists)));
      },
      () => {}
    );

    this.service.getuser(res.UserId).subscribe(
      (userInfo: any) => {
        if (userInfo && userInfo.length) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
        }
      },
      () => {}
    );

    markLoginCompleted();
  }

  // The API answers with the string "1" on success (both verify and resend)
  private isSuccess(res: any): boolean {
    return res === "1" || res === 1 || res === true || res === "true";
  }

  // Error bodies come back either as plain text or as a JSON object
  private getApiMessage(err: any, fallback: string): string {
    const body = err?.error;
    if (typeof body === "string" && body.trim()) {
      return body.trim().replace(/^"+|"+$/g, "");
    }
    if (body && typeof body === "object") {
      return body.Message || body.message || body.Error || body.error || fallback;
    }
    return fallback;
  }

  private maybeVerify() {
    if (this.code.length === this.otpLength) {
      this.verifyCode();
    }
  }

  private fillDigits(start: number, value: string) {
    const chars = value.slice(0, this.otpLength - start).split("");
    chars.forEach((char, offset) => {
      this.digits[start + offset] = char;
      this.setInputValue(start + offset, char);
    });
    this.focusInput(Math.min(start + chars.length, this.otpLength - 1));
    this.maybeVerify();
  }

  private clearDigits() {
    this.digits = ["", "", "", "", "", ""];
    this.otpIndexes.forEach((index) => this.setInputValue(index, ""));
    this.focusInput(0);
  }

  private setInputValue(index: number, value: string) {
    const input = this.otpInputs?.get(index)?.nativeElement;
    if (input) {
      input.value = value;
    }
  }

  private focusInput(index: number) {
    setTimeout(() => {
      const input = this.otpInputs?.get(index)?.nativeElement;
      if (input) {
        input.focus();
        input.select();
      }
    });
  }

  private startResendTimer() {
    this.clearTimer();
    this.resendTimer = 30;
    this.timerRef = setInterval(() => {
      if (this.resendTimer > 0) {
        this.resendTimer--;
      }
      if (this.resendTimer === 0) {
        this.clearTimer();
      }
    }, 1000);
  }

  private clearTimer() {
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
  }
}
