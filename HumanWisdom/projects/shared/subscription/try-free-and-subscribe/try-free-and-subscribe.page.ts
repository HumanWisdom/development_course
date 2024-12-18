import { Component, OnInit } from '@angular/core';
import { SubscriptionType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { DatePipe, Location } from '@angular/common';
import { paymentIntentModel } from '../../models/search-data-model';
import { LogEventService } from '../../services/log-event.service';
import { ProgramType } from '../../models/program-model';
import { NavigationService } from '../../services/navigation.service';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-try-free-and-subscribe',
  templateUrl: './try-free-and-subscribe.page.html',
  styleUrls: ['./try-free-and-subscribe.page.scss'],
})
export class TryFreeAndSubscribePage implements OnInit {

  selectedSubscription: string;
  countryCode: string='USA';
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
  isAdults = true;
  constructor(private router: Router, private onboardingService: OnboardingService,
    public logeventservice: LogEventService,
    private navigateService:NavigationService,
    private location: Location,
  private commonService:CommonService) {
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
         SharedService.setDataInLocalStorage('trialStatus',this.trialStatus);
      }
    })
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    this.logeventservice.logEvent('view_try_free_subscribe');
    this.InitializeDefaultValues();
    this.getUserDetails();
    this.getCountry();
  }

  getUserDetails() {
      this.onboardingService.getuser(this.userId).subscribe(res => {
        if (res) {
          let userDetails = res[0];
          localStorage.setItem('userDetails',res[0]);
          localStorage.setItem("isPartner", userDetails.IsPartner);
          localStorage.setItem("PartnerOption", userDetails.PartnerOption);
          localStorage.setItem("SubscriberType", res[0].SubscriberType);
          this.onboardingService.getUserDetails.next(true);
        }
      });
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
      "ProgID": "",
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
      UserID: "0",
      AffReferralCode: "0"
    } as paymentIntentModel
  }

  SelectSubscriptionType(subscriptionType: string) {
    this.logeventservice.logEvent("click_select_"+subscriptionType);

    if (subscriptionType != Constant.Redeem) {
      SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan, subscriptionType);
    }else if(subscriptionType == Constant.Redeem) {
      this.router.navigate([`/${SharedService.getprogramName()}/redeem-subscription`])
    }
    this.selectedSubscription = subscriptionType;
    this.tryFreeSubscribe();
  }

  tryFreeSubscribe() {
    if(this.trialStatus =="No Trial")
    {

      this.logeventservice.logEvent("click_try_free_subscribe");
    }
    else if(this.trialStatus =="ended")
    {
      this.logeventservice.logEvent("click_proceed_subscribe");
      
    }

  
    if (this.CheckIfUserIsLoggedIn()) {
      this.SetPaymentIntentModel();
      this.SetDataInLocalStorage();
      if (this.selectedSubscription != this.Redeem) {
        if(this.trialStatus == 'No Trial'){
          this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/proceed-to-payment`);
        }else {
          this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/proceed-to-payment`);
          // SharedService.setDataInLocalStorage(Constant.isFromCancelled,'');
          // var amt = this.selectedSubscription == Constant.AnnualPlan ? this.pricingModel.Annual : this.pricingModel.Monthly;
          // localStorage.setItem('totalAmount',amt);
          // SharedService.setDataInLocalStorage(Constant.Checkout,'T')
          // this.router.navigate(['/onboarding/payment'], { state: { quan: this.cartList.length.toString(), plan: this.selectedSubscription, rateId:this.pricingModel.RateID }})
        }
      } else {
        // `/${SharedService.getprogramName()}/redeem-subscription`
        //this.router.navigateByUrl('/adults/subscription/redeem-activate-now');
        this.router.navigateByUrl(`/${SharedService.getprogramName()}/redeem-subscription`);
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }


  dashboard(){
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }

  checkout(){
    SharedService.setDataInLocalStorage(Constant.isFromCancelled,'');
    var amt = this.selectedSubscription == Constant.AnnualPlan ? this.pricingModel.Annual : this.pricingModel.Monthly;
    localStorage.setItem('totalAmount',amt);
    SharedService.setDataInLocalStorage(Constant.Checkout,'T')
    this.router.navigate([`/${SharedService.getprogramName()}/onboarding/payment`], { state: { quan: this.cartList.length.toString(), plan: this.selectedSubscription, rateId:this.pricingModel.RateID }})
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
        this.getPricing();
      },
      () => {
      });
  }

  getPricing() {
    this.onboardingService.getPricing(this.countryCode).subscribe(res => {
      this.pricingModel = res.filter((d) => d[Constant.ProgID] === SharedService.ProgramId)[0];
      this.defaultCurrencySymbol = res[0][Constant.ISOCode]
      this.pricingModel.PerMonthAmountOnAnnual = SharedService.formatToDecimal((this.pricingModel.Annual / 12));
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
    const affref =localStorage.getItem('AffReferralCode');
    this.paymentIntentModel = {
      DiscountCode: "0",
      PlanID: this.selectedSubscription == Constant.MonthlyPlan ? SubscriptionType.Monthly.toString() : SubscriptionType.Annual.toString(),
      ProgID: SharedService.ProgramId.toString(),
      RateID: this.pricingModel?.RateID?.toString(),
      UserID: this.userId.toString(),
      AffReferralCode: (affref == null || affref == undefined) ?  '' : affref
    } as paymentIntentModel
  }

  CheckIfUserIsLoggedIn() {
    if (SharedService.getDataFromLocalStorage(Constant.Isloggedin) == Constant.ShortTrue) {
      return true;
    }
    return false;
  }

  back() {
    this.commonService.updateSurveyData(2);
    var url = this.navigateService.goBack();
    this.router.navigateByUrl(url);
    }
    
  routeToDashboard() {
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }

  buyGift(){
    this.router.navigateByUrl(`/${SharedService.getprogramName()}/give-the-gift-of-wisdom`);
  }

  terms(){
    this.router.navigateByUrl('/terms-and-conditions');
  }

  getIsoCode(){
    if(this.pricingModel.CurSymbol == '$'){
      return ` (${this.pricingModel.ISOCode})`;
    }
    return '';
  }
}