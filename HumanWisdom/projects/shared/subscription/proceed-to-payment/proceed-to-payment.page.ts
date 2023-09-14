import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { DatePipe } from '@angular/common';
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
  SelectedPlanModel: {};
  constructor(private datePipe: DatePipe) {
    this.selectedSubscription =
      this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
  }

  ngOnInit() {
  }

  getSelectedSubscriptionLink() {
    this.selectedSubscription = SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan)?.toString();
  }

  InitializePlanModel() {
    this.SelectedPlanModel ={
      startingDate: this.GetCurrentDate(),
      selectedPlan:this.selectedSubscription
    }
  }

  GetCurrentDate() {
    let futureDate = new Date();
    if (this.selectedSubscription == this.Monthly) {
      futureDate.setDate(futureDate.getDate() + this.MonthPlanFreeTrial);
    }else{
      futureDate.setDate(futureDate.getDate() + this.AnnualPlanFreeTrial);
    }
    return this.datePipe.transform(new Date(), 'MMM dd, yyyy');
  }

}
