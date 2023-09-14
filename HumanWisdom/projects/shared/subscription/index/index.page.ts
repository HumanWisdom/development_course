import { Component, OnInit } from '@angular/core';
import { SubscriptionType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  selectedSubscription: string;
  Monthly:string;
  Annual:string;
  Redeem:string;
  constructor(private router:Router) {
    this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    this.Redeem =  Constant.Redeem;
    this.selectedSubscription = this.Annual;
   }

  ngOnInit() {
    this.InitializeDefaultValues();
  }

  InitializeDefaultValues() {
    this.selectedSubscription = (Object.keys(SubscriptionType).find((key) => SubscriptionType[key] === SubscriptionType.Annual))?.toString();
    SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan, this.selectedSubscription);
  }

  SelectSubscriptionType(subscriptionType: string) {
    if(subscriptionType != Constant.Redeem){
      SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan, subscriptionType);
    }
    this.selectedSubscription = subscriptionType;
  }
 
  tryFreeSubscribe(){
    if(this.selectedSubscription != this.Redeem ){
      this.router.navigateByUrl('/adults/subscription/proceed-to-payment');
    }else{
      this.router.navigateByUrl('/adults/subscription/redeem-activate-now');
    }
  }
}
