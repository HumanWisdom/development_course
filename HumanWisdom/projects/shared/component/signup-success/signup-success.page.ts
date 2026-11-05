import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { SharedService } from "../../services/shared.service";
import { OnboardingService } from "../../services/onboarding.service";
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: "app-signup-success",
  templateUrl: "./signup-success.page.html",
  styleUrls: ["./signup-success.page.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, SpinnerComponent],
})
export class SignupSuccessPage implements OnInit {
  readonly freeDays = 10;
  isFreeTrialUsed: boolean = false;
  isLoaded: boolean = false;

  get artUrl(): string {
    return this.isAdults
      ? "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v_1_4/partset.svg"
      : "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v_1_4/dotteen.svg";
  }

  get trialEndedImgUrl(): string {
    return this.isAdults
      ? "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/freetrialadu.webp"
      : "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/freeteen.webp";
  }

  get trialIconUrl(): string {
    return this.isAdults
      ? "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/calender.svg"
      : "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v_1_4/caltten.svg";
  }

  trialEndDate = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private onboardingService: OnboardingService
  ) {}

  ngOnInit() {
    this.trialEndDate = this.formatDate(this.freeDays);
    this.checkTrialStatus();
  }

  checkTrialStatus() {
    const trialEndedParam = this.route.snapshot.queryParamMap.get("trialEnded");
    if (trialEndedParam !== null) {
      this.isFreeTrialUsed = trialEndedParam === "true" || trialEndedParam === "1";
      this.isLoaded = true;
      return;
    }

    this.onboardingService.checkFreeTrialUsed().subscribe(
      (res: any) => {
        this.isFreeTrialUsed = res === true || res === "true";
        this.isLoaded = true;
      },
      (error) => {
        console.error("Error checking free trial used:", error);
        this.isFreeTrialUsed = false;
        this.isLoaded = true;
      }
    );
  }

  // Teenagers paint the column dark blue (sc_01_home), so the copy has to go white there
  get isAdults(): boolean {
    return Number(SharedService.ProgramId) === 9;
  }

  subscribeNow() {
    const program = SharedService.getprogramName();
    this.router.navigate([`/${program}/subscription/try-free-and-subscribe`], {
      state: { fromTrialEnded: true }
    });
  }

  viewPlans() {
    const program = SharedService.getprogramName();
    this.router.navigate([`/${program}/subscription/try-free-and-subscribe`], {
      state: { fromTrialEnded: true }
    });
  }

  notNow() {
    const program = SharedService.getprogramName();
    this.router.navigateByUrl(`/${program}/today`);
  }

  continueToTopic() {
    const program = SharedService.getprogramName();
    // Picking a topic needs a real session (the API rejects guests), so fall back to the
    // login page if the automatic login after verification did not complete
    const signedIn = localStorage.getItem("isloggedin") === "T";
    const signupSession = localStorage.getItem("signupLoginOk") === "T";
    if (!signedIn || !signupSession) {
      this.router.navigate([`/${program}/onboarding/login`]);
      return;
    }
    // Same destination the app uses after a first login: the "pick a topic" screen
    this.router.navigate([`/${program}/change-topic`], {
      state: { routedFromLogin: true },
    });
  }

  private formatDate(daysFromToday: number): string {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
}
