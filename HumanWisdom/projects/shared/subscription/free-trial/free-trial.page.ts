import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType, SubscriptionType } from '../../models/program-model';
import { OnboardingService } from '../../services/onboarding.service';
@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.page.html',
  styleUrls: ['./free-trial.page.scss'],
})
export class FreeTrialPage implements OnInit {
  selectedSubscription: string;
  Monthly: string;
  Annual: string;
  MonthPlanFreeTrial = 7;
  AnnualPlanFreeTrial = 14;
  isAdults = true;
  @ViewChild('payementSubmitBtnClick') payementSubmitBtnClick: any;
  
  constructor(
    private router: Router,private onboardingService:OnboardingService){
    this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.onboardingService.updateUserDetails.next(true);
  }

  ngOnInit() {
   
    let addtraction = localStorage.getItem('callAddtraction');

    if(addtraction === 'Y') {
      let userId = JSON.parse(localStorage.getItem("userId"))
      this.onboardingService.getOrderId(userId).subscribe(res => {
        localStorage.setItem('stripeid', res);
        let am = localStorage.getItem('stripeamount');
        let getAt_Gt = localStorage.getItem("adtraction");

        let obj = {
          "OrderValue": am ? am : 0,
          "ActivationKey": res,
          "at_gd": getAt_Gt,
          "coupon": localStorage.getItem('stripeDiscountCode') ?? ""
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
    
    this.GetDataFromLocalStorage();
  }

  GetDataFromLocalStorage() {
    this.selectedSubscription = SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan)?.toString();
  }
  routeToDashboard(){
    this.clearData();
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }

  manageSubscription(){
    this.clearData();
    this.router.navigateByUrl(`/${SharedService.getprogramName()}/onboarding/myprogram`);
  }

  clearData(){
    SharedService.setDataInLocalStorage(Constant.ProgramModel, null);
    SharedService.setDataInLocalStorage(Constant.PaymentIntentModel, null);
    SharedService.setDataInLocalStorage(Constant.SelectedPlanModel,null);
    SharedService.setDataInSessionStorage(Constant.ClientSecret, null);
  }

  routeToPartnership(){
     this.router.navigate(['/adults/partnership-webpage/partnership-index']);
  }
}
