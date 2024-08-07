import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../../services/onboarding.service';
import { SharedService } from "../../../services/shared.service";
import { Constant } from '../../../services/constant';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProgramType } from '../../../models/program-model';


@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.page.html',
  styleUrls: ['./manage-subscription.page.scss'],
})
export class ManageSubscriptionPage implements OnInit {
  manageSubscriptionData: any;
  pricingModel: any;
  public countryCode: any;
  public defaultCountry: any;
  public defaultCurrencySymbol: any;
  paymentDetail: any;
  isAdults: boolean = true;

  constructor(public onboardingService: OnboardingService, private datePipe: DatePipe,
    private router: Router, private location: Location) {

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

    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
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
    }, (err) => {
      window.alert(err.error['Message'])
    }
    )
  }

  formatToDecimal(value) {
    if (Number.isInteger(value)) {
      return `${value}.00`;
    }
    return value.toFixed(2);
  }

  formatDate(date) {
    return this.datePipe.transform(new Date(date), 'MMM dd, yyyy');
  }


  ngOnInit() {
    var localData = SharedService.getDataFromLocalStorage(Constant.ManageSubscriptionData);
    if (localData && localData != null && localData != 'null') {
      this.manageSubscriptionData = JSON.parse(localData);
    }
    this.getCountry();
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.onboardingService.getpaymentdetail(userId).subscribe((res) => {
      if (res) {
        this.paymentDetail = res[0]
      }
    });

    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }     
  
  }


  cancelSubscription() {
    // this.onboardingService.cancelSubscription(this.manageSubscriptionData.ActKey).subscribe(res=>{
    //   if(res){
    //        this.router.navigate(["onboarding/myprogram"]);
    SharedService.setDataInLocalStorage(Constant.ActivationKey,this.manageSubscriptionData.ActKey);
    this.router.navigate(["/"+ SharedService.getprogramName()+ "/onboarding/myprogram/cancel-subscription"]);
  //}
  // })
  }


  goBack() {
    this.location.back();
  }
}
