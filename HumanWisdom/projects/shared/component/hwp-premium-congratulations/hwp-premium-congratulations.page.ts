import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { SharedService } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
import { ProgramType } from '../../models/program-model';
@Component({
  selector: 'app-hwp-premium-congratulations',
  templateUrl: './hwp-premium-congratulations.page.html',
  styleUrls: ['./hwp-premium-congratulations.page.scss'],
})
export class HwpPremiumCongratulationsPage implements OnInit {
  isAdults = true;
  @ViewChild('payementSubmitBtnClick') payementSubmitBtnClick: any;

  constructor(public router: Router,
    private location: Location,
    private onboardingService: OnboardingService

  ) {
    this.onboardingService.updateUserDetails.next(true);
  }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }

    let addtraction = localStorage.getItem('callAddtraction');

    if (addtraction === 'Y') {
      let userId = JSON.parse(localStorage.getItem("userId"))
      this.onboardingService.getOrderId(userId).subscribe(res => {
        localStorage.setItem('stripeid', res);
        let getAt_Gt = localStorage.getItem("adtraction");
        let am = localStorage.getItem('stripeamount');
        let obj = {
          "OrderValue": am ? am : 0,
          "ActivationKey": res,
          "at_gd": getAt_Gt,
          "coupon": localStorage.getItem('stripeDiscountCode') ?? "",
          "userId": userId,
          "programId": SharedService.ProgramId,
        }
        this.onboardingService.callAddraction(obj).subscribe(res => {

        }, (err) => {
        }
        )

        // this.payementSubmitBtnClick.nativeElement.click();
      }, (err) => {

      }
      )
    }
  }

  JoinHumanWisdom() {
    localStorage.setItem('btnClickBecomePartner', 'true');
    this.router.navigate(['adults/partnership-app/referral-code']);
  }

  NotNow() {
    this.router.navigate([`/${SharedService.getprogramName()}/hwp-premium-congratulations`])
  }
  GoToIndex() {
    this.router.navigate(['adults/partnership-webpage/partnership-index']);
  }

  goBack() {
    this.location.back();
  }
  ProceedToDashboard() {
    this.router.navigate([SharedService.getDashboardUrls()]);
  }
}
