import { Component, OnInit } from '@angular/core';
import { SubscriptionType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { DatePipe, Location } from '@angular/common';
import { paymentIntentModel } from '../../models/search-data-model';
@Component({
  selector: 'app-try-free-and-subscribe',
  templateUrl: './try-free-and-subscribe.page.html',
  styleUrls: ['./try-free-and-subscribe.page.scss'],
})
export class TryFreeAndSubscribePage implements OnInit {

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
  trialStatus : string = 'No Trial';
  isFromCancelled: boolean = false;
  cartList = [];
  startDate:any;
  expDate:any;
  constructor(private router: Router, private onboardingService: OnboardingService,
    private location: Location) {
    this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    this.Redeem = Constant.Redeem;
    this.onboardingService.checkTrial().subscribe(res=>{
      if(res){
        this.trialStatus = res[0].IsTrial;
         if(this.trialStatus != Constant.NoTrial){
          this.startDate = res[0].StartDate;
          this.expDate = res[0].ExpDate;
         }
      }
    })
  }

  ngOnInit() {
    this.InitializeDefaultValues();
    this.getCountry();
  }

  InitializeDefaultValues() {
    let canclled = SharedService.getDataFromLocalStorage(Constant.isFromCancelled);
    this.isFromCancelled =  (canclled == null || canclled == undefined || canclled =='null' || canclled =='') ? false : (canclled==Constant.ShortTrue) ? true:false;
    var sub = SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan);
    if (sub == Constant.AnnualPlan ||
      sub == Constant.MonthlyPlan) {
      this.selectedSubscription = sub;
    } else {
      this.selectedSubscription = (Object.keys(SubscriptionType).find((key) => SubscriptionType[key] === SubscriptionType.Annual))?.toString();
      SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan, this.selectedSubscription);
    }

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
        if(this.trialStatus == 'No Trial'){
          this.router.navigateByUrl('/adults/subscription/proceed-to-payment');
        }else {
          SharedService.setDataInLocalStorage(Constant.isFromCancelled,'');
          var amt = this.selectedSubscription == Constant.AnnualPlan ? this.pricingModel.Annual : this.pricingModel.Monthly;
          localStorage.setItem('totalAmount',amt);
          SharedService.setDataInLocalStorage(Constant.Checkout,'T')
          this.router.navigate(['/onboarding/payment'], { state: { quan: this.cartList.length.toString(), plan: this.selectedSubscription, rateId:this.pricingModel.RateID }})
        }
      } else {
        this.router.navigateByUrl('/adults/subscription/redeem-activate-now');
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }


  dashboard(){
    this.router.navigateByUrl('/adults/adult-dashboard');
  }

  checkout(){
    SharedService.setDataInLocalStorage(Constant.isFromCancelled,'');
    var amt = this.selectedSubscription == Constant.AnnualPlan ? this.pricingModel.Annual : this.pricingModel.Monthly;
    localStorage.setItem('totalAmount',amt);
    SharedService.setDataInLocalStorage(Constant.Checkout,'T')
    this.router.navigate(['/onboarding/payment'], { state: { quan: this.cartList.length.toString(), plan: this.selectedSubscription, rateId:this.pricingModel.RateID }})
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

  back() {
    this.location.back();
  }
  routeToDashboard() {
    this.router.navigateByUrl('/adults/adult-dashboard');
  }

  buyGift(){
    this.router.navigateByUrl('/adults/give-the-gift-of-wisdom');
  }

  terms(){
    this.router.navigateByUrl('/terms-and-conditions');
  }
}