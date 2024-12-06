import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { ProgramType, SubscriptionType } from '../../models/program-model';
import { CommonService } from '../../../shared/services/common.service';
@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.page.html',
  styleUrls: ['./payment-failed.page.scss'],
})
export class PaymentFailedPage implements OnInit {
  isAdults = false;
  constructor(private router:Router,private commonService:CommonService) { 
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.commonService.updateSurveyData(2);
  }

  ngOnInit() {
    SharedService.setDataInLocalStorage(Constant.ProgramModel, null);
    SharedService.setDataInLocalStorage(Constant.PaymentIntentModel, null);
    SharedService.setDataInLocalStorage(Constant.SelectedPlanModel,null);
    SharedService.setDataInSessionStorage(Constant.ClientSecret, null);
  }
  routeToIndex(){
    this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/index`);
  }

  routeToDashboard(){
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }
}
