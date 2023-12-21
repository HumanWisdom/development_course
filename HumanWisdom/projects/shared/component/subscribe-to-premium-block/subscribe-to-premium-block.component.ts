import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { OnboardingService } from '../../services/onboarding.service';
import {
  Platform,
} from "@angular/cdk/platform";
@Component({
  selector: 'app-subscribe-to-premium-block',
  templateUrl: './subscribe-to-premium-block.component.html',
  styleUrls: ['./subscribe-to-premium-block.component.scss'],
})
export class SubscribeToPremiumBlockComponent implements OnInit {
  isSubscriber:boolean = false;
  countryCode:string='';
  defaultCountry:string = '';
  pricingModel:any;
  defaultCurrencySymbol='';
  isIos = false;
  dataloaded = false;
  constructor(private router: Router,
    private onboardingService: OnboardingService,
    private platform: Platform) {
      if(this.platform.IOS || this.platform.SAFARI || this.iOS()){
        this.isIos = true; 
       }
     }

  ngOnInit() {

    setTimeout(() => {
      let sub: any = localStorage.getItem("Subscriber");
      if (sub == '1') {
        this.isSubscriber = true;
      } else {
        this.isSubscriber = false;
      }
    }, 2000);

    this.pricingModel = {
      "RateID": '',
      "ProgID": 0,
      "Country": "",
      "CurSymbol": "",
      "Program": "",
      "Monthly": "",
      "Annual": "",
      "Current": "",
      "Currency": "",
      "ISOCode": "",
      "PerMonthAmountOnAnnual": "",
    }
    this.getCountry();
    this.isSubscriber  = SharedService.isSubscriber();
  }

  SubscribeToPremium(){
    if(!this.isIos){
      this.router.navigate(['/subscription/start-your-free-trial']);
    }
  }
  
  getCountry() {
    this.onboardingService.getCountry().subscribe((res: any) => {
      if (res[Constant.In_eu]) {
        this.countryCode = Constant.EUR;
      } else {
        this.countryCode = res[Constant.Country_code_iso3]
      }
      this.getPricing()
      this.defaultCountry = res.country_name
    },
      error => {
        console.log(error)
      },
      () => {
      });
  }

  getPricing() {
    this.onboardingService.getPricing(this.countryCode).subscribe(res => {
      this.pricingModel = res.filter((d) => d[Constant.ProgID] === SharedService.ProgramId)[0];
      this.defaultCurrencySymbol = res[0][Constant.ISOCode]
      this.pricingModel.PerMonthAmountOnAnnual = this.formatToDecimal((this.pricingModel.Annual / 12));
      this.dataloaded=true;
    }, (err) => {
      window.alert(err.error['Message'])
    }
    )
  }

  iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  formatToDecimal(value) {
    if (Number.isInteger(value)) {
      return `${value}.00`;
    }
    return value.toFixed(2);
  }}
