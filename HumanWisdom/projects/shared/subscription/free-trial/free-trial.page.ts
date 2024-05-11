import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType, SubscriptionType } from '../../models/program-model';
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
  constructor(
    private router: Router){
    this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    
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
}
