import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogEventService } from "./../../services/log-event.service";
import { OnboardingService } from "../../services/onboarding.service";

@Component({
  selector: 'app-ft-advert',
  templateUrl: './ft-advert.component.html',
  styleUrls: ['./ft-advert.component.scss'],
})
export class FtAdvertComponent implements OnInit {
   isLoggedIn:boolean=false;
   isSubscribe:boolean=false;
   enablepopup:boolean=false;
  constructor(public router: Router,public service:OnboardingService) { 
    let res = localStorage.getItem("isloggedin")
    if(res=='T'){
     this.isLoggedIn=true;
    }
    let popup = JSON.parse(localStorage.getItem("Subscriber"))
    if(popup === 1) this.enablepopup = true
    this.isSubscribe = popup === 0 ? false : true;
  }

  ngOnInit( ) {}
  RedeemCode(){
    this.service.isActivationFlow=true;
    this.service.isAdvert_hwp=true;
    this.router.navigate(['/onboarding/add-to-cart']);
  }

  navigate(url){
    this.router.navigate([url],{replaceUrl:true,skipLocationChange:true});
  }

}
