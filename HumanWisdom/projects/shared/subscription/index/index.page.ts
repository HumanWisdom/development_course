import { Component, OnInit } from '@angular/core';
import { SubscriptionType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { paymentIntentModel } from '../../models/search-data-model';
import { DatePipe, Location } from '@angular/common';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  selectedSubscription: string;
  countryCode: string;
  defaultCountry: string;
  defaultCurrencySymbol: string;
  Monthly: string;
  Annual: string;
  Redeem: string;
  paymentIntentModel: paymentIntentModel;
  pricingModel: any;
  userId: number;
  enabledModal = false;
  
  constructor(private router: Router, private onboardingService: OnboardingService,
    private location: Location) {
    this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    this.Redeem = Constant.Redeem;
    this.selectedSubscription = this.Annual;
  }

  ngOnInit() {
    this.InitializeDefaultValues();
    this.getCountry();
  }

  getClosemodalEvent(event){
    this.enabledModal = false;
  }

  InitializeDefaultValues() {
    this.selectedSubscription = (Object.keys(SubscriptionType).find((key) => SubscriptionType[key] === SubscriptionType.Annual))?.toString();
    SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan, this.selectedSubscription);
    this.userId = SharedService.getDataFromLocalStorage('userId') != null ? parseInt(SharedService.getDataFromLocalStorage('userId')) : 0;
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
    this.paymentIntentModel = {
      DiscountCode: "0",
      PlanID: "0",
      ProgID: "0",
      RateID: "0",
      UserID: "0"
    } as paymentIntentModel
  }

  SelectSubscriptionType(subscriptionType: string) {
    if (subscriptionType != Constant.Redeem) {
      SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan, subscriptionType);
    }
    this.selectedSubscription = subscriptionType;
  }

  tryFreeSubscribe() {
    if (this.CheckIfUserIsLoggedIn()) {
      this.SetPaymentIntentModel();
      this.SetDataInLocalStorage();
      if (this.selectedSubscription != this.Redeem) {
        this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/proceed-to-payment`);
      } else {
        this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/redeem-activate-now`);
      }
    } else {
      // this.router.navigateByUrl('/login');
      this.enabledModal = true;
    }
  }

  back(){
    this.location.back();
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

  SetDataInLocalStorage() {
    SharedService.setDataInLocalStorage(Constant.ProgramModel, JSON.stringify(this.pricingModel));
    SharedService.setDataInLocalStorage(Constant.PaymentIntentModel, JSON.stringify(this.paymentIntentModel));
  }


  SetPaymentIntentModel() {
    this.paymentIntentModel = {
      DiscountCode: "0",
      PlanID: this.selectedSubscription == Constant.MonthlyPlan ? SubscriptionType.Monthly.toString() : SubscriptionType.Annual.toString(),
      ProgID: SharedService.ProgramId.toString(),
      RateID: this.pricingModel?.RateID?.toString(),
      UserID: this.userId.toString()
    } as paymentIntentModel
  }

  CheckIfUserIsLoggedIn() {
    if (SharedService.getDataFromLocalStorage(Constant.Isloggedin) == Constant.ShortTrue) {
      return true;
    }
    return false;
  }

}
