import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { OnboardingService } from '../../../../../../shared/services/onboarding.service';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';

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



  }


  cancelSubscription() {
    // this.onboardingService.cancelSubscription(this.manageSubscriptionData.ActKey).subscribe(res=>{
    //   if(res){
    //        this.router.navigate(["onboarding/myprogram"]);
    SharedService.setDataInLocalStorage(Constant.ActivationKey,this.manageSubscriptionData.ActKey);
    this.router.navigate(["/myprogram/cancel-subscription"]);
  //}
  // })
  }


  goBack() {
    this.location.back();
  }
}
