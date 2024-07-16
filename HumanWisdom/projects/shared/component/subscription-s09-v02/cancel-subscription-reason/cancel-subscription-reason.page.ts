import { Component, OnInit, } from '@angular/core';
import { Location } from '@angular/common';
import { OnboardingService } from '../../../services/onboarding.service';
import { SharedService } from "../../../services/shared.service";
import { Constant } from '../../../services/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-subscription-reason',
  templateUrl: './cancel-subscription-reason.page.html',
  styleUrls: ['./cancel-subscription-reason.page.scss'],
})
export class CancelSubscriptionReasonPage implements OnInit {

  constructor(private location:Location,private onboardingService:OnboardingService,private router :Router) { }
   reasonList = [];
   selectedId = 1;
  ngOnInit() {
    this.getReason();
  }

   getReason(){
    this.onboardingService.getCancelReason().subscribe(res=>{
      if(res){
        this.reasonList = res;
      }
    });

   }

  cancelSubscription() {
    var key = SharedService.getDataFromLocalStorage(Constant.ActivationKey);
    if(key!=undefined && key != null && key !='null'){
    let event = new CustomEvent('cancelButtonClicked');
    window.dispatchEvent(event);
    this.onboardingService.cancelSubscription(key,this.selectedId).subscribe(res => {
      if (res) {
        this.router.navigate(["/"+ SharedService.getprogramName()+ "/onboarding/myprogram/cancelled"]);
      }
    });
  }
  }

  back(){
    this.location.back();
  }

}
