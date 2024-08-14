import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../../../../../shared/services/onboarding.service';
import { SubscriptionType } from '../../../../../../shared/models/program-model';
import { Constant } from '../../../../../../shared/services/constant';
import { paymentIntentModel } from '../../../../../../shared/models/search-data-model';
import { SharedService } from '../../../../../../shared/services/shared.service';
import {AdultsService} from '../../adults.service';
@Component({
  selector: 'app-subscribed-unsubscribed',
  templateUrl: './subscribed-unsubscribed.page.html',
  styleUrls: ['./subscribed-unsubscribed.page.scss'],
})
export class SubscribedUnsubscribedPage implements OnInit {
  userType:string;
  cardlist=[];
  countryCode:any;
  selectedSubscription: string;
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
  isSubscriber:any;
// Create a new Subject
// Subscribe to the Subject

  constructor(private router :Router,private services: OnboardingService,public location:Location,public adultService:AdultsService) { }

  ngOnInit() {
    this.isSubscriber  = SharedService.isSubscriber();
    this.userType = localStorage.getItem('SubscriberType');
    if(this.userType!='Annual'){
      this.services.checkTrial().subscribe(res=>{
        if(res){
          this.trialStatus = res[0].IsTrial;
           if(this.trialStatus != Constant.NoTrial){
            this.startDate = res[0].StartDate;
            this.expDate = res[0].ExpDate;
           }
           SharedService.setDataInLocalStorage('trialStatus',this.trialStatus);
        }
      })
      this.InitializeDefaultValues();
   
    }
    this.getCountry();
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.services.getuser(userId).subscribe((res) => {
   //  let userdetail = res[0];
     localStorage.setItem("isPartner", res[0].IsPartner);
 
     localStorage.setItem('PartnerOption', res[0].PartnerOption);
     localStorage.setItem('SubscriberType', res[0].SubscriberType);

   })
   // this.userType=localStorage.getItem('SubscriberType');
  }

  Proceed(data) {
    this.adultService.AddPartner(data).subscribe(res=> {
      if(res!=null && res!="" && res.length>5){
        alert(res)
      }else{
        //localStorage.setItem("referralCode", res);
        localStorage.setItem("isPartner","1");
        localStorage.setItem("CouponCode", res[0].CouponCode);
        localStorage.setItem("ReferralLink", res[0].ReferralLink);
        this.services.isPartnerSubject.next( res[0].IsPartner);
        localStorage.setItem("isPartner","ReceiveIncome");
        this.NavigateRecieveIncome();
      }
    },
    error=>{
           if(error.Message == "Already added as Partner"){
            this.services.isPartnerSubject.next('1');
            this.NavigateRecieveIncome();
          }   
    },);
  }
  NavigateRecieveIncome(){
    this.router.navigate(["/adults/partnership-app/payment-income"]);
    //this.router.navigate(['adults/partnership-app/payment-bank']);
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
      UserID: "0",
      AffReferralCode: "0"
    } as paymentIntentModel
  }


  GetStarted(){
    this.services.navigateToUpgradeToPremium=true;
    this.Proceed('');
    //localStorage.setItem("navigateToUpgradeToPremium","true")
    // this.router.navigate(['adults/partnership-app/referral-code']);
  }
  
      goBack(){
    this.location.back();
      }
      UpgradeToPremium(){
        let val='Yearly';
        this.services.navigateToUpgradeToPremium=true;
        //localStorage.setItem("navigateToUpgradeToPremium","true")
        localStorage.setItem('cartlist', JSON.stringify(this.cardlist));
        localStorage.setItem('partnership-app', val);
        localStorage.setItem('upgradeToPremium', 'T');
        this.router.navigate(['/onboarding/viewcart'], { state: { quan:  '1', plan: val}})
      }
      getPricing(){
        this.services.getPricing(this.countryCode).subscribe(res=>
          {
            
            this.cardlist = res[0]; 
            this.pricingModel = res.filter((d) => d[Constant.ProgID] === SharedService.ProgramId)[0];
            this.defaultCurrencySymbol = res[0][Constant.ISOCode]
            this.pricingModel.PerMonthAmountOnAnnual = SharedService.formatToDecimal((this.pricingModel.Annual / 12));
          }, (err) => {
            window.alert(err.error['Message'])
          }
        )
      }
      getCountry(){
        this.services.getCountry().subscribe((res:any)=>{  
          
          if(res['in_eu']) {
            this.countryCode = 'EUR'
          }else {
            this.countryCode = res['country_code_iso3']
            this.defaultCountry = res.country_name
          }
          this.getPricing()
        },
    
          error=>{
            console.log(error)
          },
          ()=>{
          });  
    
      }

      GoToIndex(){
        this.router.navigate(['adults/partnership-webpage/partnership-index']);
      }

      CheckIfUserIsLoggedIn() {
        if (SharedService.getDataFromLocalStorage(Constant.Isloggedin) == Constant.ShortTrue) {
          return true;
        }
        return false;
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

      tryFreeSubscribe() {
        if (this.CheckIfUserIsLoggedIn()) {
          // this.SetPaymentIntentModel();
          // this.SetDataInLocalStorage();
          this.services.navigateToUpgradeToPremium=true;
          this.router.navigate(['/subscription/try-free-and-subscribe']);
        } else {
          SharedService.UrlToRedirect='/subscription/try-free-and-subscribe';
          this.router.navigate(['/adults/onboarding/login']);
        }
      }

      SetDataInLocalStorage() {
        SharedService.setDataInLocalStorage(Constant.ProgramModel, JSON.stringify(this.pricingModel));
        SharedService.setDataInLocalStorage(Constant.PaymentIntentModel, JSON.stringify(this.paymentIntentModel));
      }
    
}
