import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-signup-success",
  templateUrl: "./signup-success.page.html",
  styleUrls: ["./signup-success.page.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SignupSuccessPage implements OnInit {
  readonly freeDays = 10;
  readonly artUrl = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v_1_4/partset.svg";
  readonly trialIconUrl = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/calender.svg";

  trialEndDate = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.trialEndDate = this.formatDate(this.freeDays);
  }

  // Teenagers paint the column dark blue (sc_01_home), so the copy has to go white there
  get isAdults(): boolean {
    return Number(SharedService.ProgramId) === 9;
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
