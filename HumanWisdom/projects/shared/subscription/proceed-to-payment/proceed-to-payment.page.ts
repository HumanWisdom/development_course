import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';
import { OnboardingService } from '../../services/onboarding.service';
import { paymentIntentModel } from '../../models/search-data-model';
@Component({
  selector: 'app-proceed-to-payment',
  templateUrl: './proceed-to-payment.page.html',
  styleUrls: ['./proceed-to-payment.page.scss'],
})
export class ProceedToPaymentPage implements OnInit {
  selectedSubscription: string;
  Monthly: string;
  Annual: string;
  MonthPlanFreeTrial = 7;
  AnnualPlanFreeTrial = 14;
  couponCodeApplied = false;
  discountCode:any;
  percentage = 20.00;
  totalCartValueDiscount:any;
  totalCartValue:any;
  SelectedPlanModel: any;
  discount:any;
  pricingModel: any;
  countryCode: string;
  defaultCountry: string;
  defaultCurrencySymbol: string;
  msg:any
  totalCartAmount='0.00';
  constructor(private datePipe: DatePipe,
    private router: Router,
    private logEventService: LogEventService,
    private location: Location,
    private onboardingService: OnboardingService,
    ) {
    this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;

  }

  ngOnInit() {
    localStorage.setItem("couponid", '0');
    this.GetDataFromLocalStorage();
    this.InitializePlanModel();
  }

  InitializePlanModel() {
    this.SelectedPlanModel = {
      startingDate: this.GetCurrentDate(),
      selectedPlan: this.selectedSubscription
    }
  }

  GetCurrentDate() {
    let futureDate = new Date();
    if (this.selectedSubscription == this.Monthly) {
      futureDate.setDate(futureDate.getDate() + this.MonthPlanFreeTrial);
    } else {
      futureDate.setDate(futureDate.getDate() + this.AnnualPlanFreeTrial);
    }
    return this.datePipe.transform(futureDate, 'MMM dd, yyyy');
  }

  proceedToPayment() {
    this.logEventService.logEvent('click_proceed_to_pay');
    this.createSetupIntent();
  }

  GetDataFromLocalStorage() {
    this.selectedSubscription = SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan)?.toString();
    let pricingData = SharedService.getDataFromLocalStorage(Constant.ProgramModel);
    if (pricingData && pricingData != null) {
      this.pricingModel = JSON.parse(pricingData);
    } else {
      this.pricingModel = null;
    }
  }

  back() {
    this.location.back();
  }

  createSetupIntent() {
    let paymentIntentString = SharedService.getDataFromLocalStorage(Constant.PaymentIntentModel);
    if (paymentIntentString && paymentIntentString != null) {
      let paymentIntent = JSON.parse(paymentIntentString) as paymentIntentModel;
      paymentIntent.DiscountCode = localStorage.getItem("couponid");
      this.onboardingService.createSetupIntent(paymentIntent).subscribe(res => {
        if (res) {
          SharedService.setDataInLocalStorage(Constant.SelectedPlanModel, JSON.stringify(this.SelectedPlanModel));
          SharedService.setDataInLocalStorage("IsCoupanApplied", JSON.stringify(this.couponCodeApplied));
          SharedService.setDataInLocalStorage("subscribeToPremiumAfterDiscount", JSON.stringify(this.totalCartValueDiscount));
          SharedService.setDataInSessionStorage(Constant.ClientSecret, res.toString());
          this.router.navigateByUrl('/adults/subscription/payment');
        }
      });
    }
  }
    

    buyGift(){
      this.router.navigateByUrl('/adults/give-the-gift-of-wisdom');
    }

    closeApplycoupon(){
    this.couponCodeApplied = false;
    this.discount = 0;
    this.discountCode = '';
    this.totalPrice();
    }
    


    totalPrice() {
      if(this.couponCodeApplied) {
        this.totalCartValueDiscount = this.totalCartValue - this.discount
      }else {
        this.totalCartValueDiscount = this.totalCartValue
      }
    }
  
    couponValidation() {
    if(this.selectedSubscription == Constant.MonthlyPlan){
        this.totalCartValue = this.pricingModel.Monthly;
     } else{
        this.totalCartValue = this.pricingModel.Annual;
     }

      this.onboardingService.couponValidation({
        "CouponCode": this.discountCode,
        "CartAmt": this.totalCartValue
      }).subscribe(
        res => {
          if (res.length !== 0) {
            this.couponCodeApplied = true;
            this.onboardingService.toastrService.success('', 'Coupon applied successfully');
            this.msg = 'Coupon applied successfully'
            this.discount = parseFloat(res[0].Discount)
            localStorage.setItem("couponid", res[0]['CouponID'])
            this.totalCartValueDiscount = this.totalCartValue - this.discount;
            this.percentage = res[0].Percentage
          }
  
          else {
            this.onboardingService.toastrService.error('', 'Please enter a valid coupon code. ');
            this.msg = 'Please enter a valid coupon code. '
          }
  
          setTimeout(() => {
            this.msg = ''
          }, 3000)
        }
      )
    }
}
