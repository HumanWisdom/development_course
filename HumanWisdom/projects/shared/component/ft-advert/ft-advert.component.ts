import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from "../../services/onboarding.service";

@Component({
  selector: 'app-ft-advert',
  templateUrl: './ft-advert.component.html',
  styleUrls: ['./ft-advert.component.scss'],
})
export class FtAdvertComponent {
   isLoggedIn:boolean=false;
   isSubscribe:boolean=false;
   enablepopup:boolean=false;
  constructor(public readonly router: Router, public readonly service: OnboardingService) { 
    const res = localStorage.getItem("isloggedin");
    if(res=='T'){
     this.isLoggedIn=true;
    }
    const popup = JSON.parse(localStorage.getItem("Subscriber"));
    if(popup === 1) this.enablepopup = true
    this.isSubscribe = popup === 0 ? false : true;
  }


  RedeemCode(){
    this.service.isActivationFlow=true;
    this.service.isAdvert_hwp=true;
    this.router.navigate(['/onboarding/add-to-cart']);
  }

  navigate(url: string) {
    this.router.navigate([url],{replaceUrl:true,skipLocationChange:true});
  }

}
