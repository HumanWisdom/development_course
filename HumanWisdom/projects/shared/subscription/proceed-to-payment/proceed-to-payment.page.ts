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
  SelectedPlanModel: any;
  pricingModel: any;
  countryCode: string;
  defaultCountry: string;
  defaultCurrencySymbol: string;
  constructor(private datePipe: DatePipe,
    private router: Router,
    private logEventService: LogEventService,
    private location: Location,
    private onboardingService: OnboardingService) {
    this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;

  }

  ngOnInit() {
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
      const paymentIntent = JSON.parse(paymentIntentString) as paymentIntentModel;
      this.onboardingService.createSetupIntent(paymentIntent).subscribe(res => {
        if (res) {
          SharedService.setDataInLocalStorage(Constant.SelectedPlanModel, JSON.stringify(this.SelectedPlanModel));
          SharedService.setDataInSessionStorage(Constant.ClientSecret, res.toString());
          this.router.navigateByUrl('/adults/subscription/payment');
        }
      });
    }




  }

}
