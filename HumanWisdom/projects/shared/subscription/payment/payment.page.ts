import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';
import { StripeModel } from '../../models/search-data-model';
import { environment } from '../../../environments/environment'
import { Location } from '@angular/common';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit, AfterViewInit {
  selectedSubscription: string;
  Monthly: string;
  Annual: string;
  pricingModel: any;
  stripeModel: StripeModel;
  cardCaptureReady = false;
  selectedPlanModel: any;
  isProduction: boolean = true;
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;
  constructor(private datePipe: DatePipe, private router: Router, private logEventService: LogEventService,
    private location: Location) {
    this.selectedSubscription =
      this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    this.initializeModel();
    this.GetDataFromLocalStorage();
  }

  initializeModel() {
    this.isProduction = environment.production;
    this.stripeModel = {
      stripeKey: environment.stripeKey,
      clientSecretId: SharedService.getDataFromSessionStorage(Constant.ClientSecret),
    } as StripeModel;

    this.selectedPlanModel = {
      startingDate: "",
      selectedPlan: ""
    }
  }

  onSubmit() {

  }

  ngOnInit() {

  }


  GetDataFromLocalStorage() {
    this.selectedSubscription = SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan)?.toString();
    let pricingData = SharedService.getDataFromLocalStorage(Constant.ProgramModel);
    let selectedPlan = SharedService.getDataFromLocalStorage(Constant.SelectedPlanModel);
    if (selectedPlan && selectedPlan != null) {
      this.selectedPlanModel = JSON.parse(selectedPlan);
    }
    if (pricingData && pricingData != null) {
      this.pricingModel = JSON.parse(pricingData);
    } else {
      this.pricingModel = null;
    }
  }

  numericValidator(control) {
    const numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(control.value)) {
      return { invalidNumeric: true };
    }
    return null;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      let stripe = Stripe(environment.stripeKey) as any;
      const options = {
        clientSecret: this.stripeModel.clientSecretId
      };



      const elements = stripe.elements(options);
      const paymentElement = elements.create('payment', options);
      paymentElement.mount('#payment-element');
      // Access the underlying input element and set autocomplete to "off"
      const cardInput = document.getElementById('Field-numberInput');
      if (cardInput) {
        cardInput.setAttribute('autocomplete', 'off');
      }
      const expiry = document.getElementById('Field-expiryInput');
      if (expiry) {
        expiry.setAttribute('autocomplete', 'off');
      }
     
      const form = document.getElementById('payment-form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('production ' + this.isProduction)
        const { error } = await stripe.confirmSetup({
          elements,
          confirmParams: {
            return_url: this.isProduction ? 'https://staging.happiermsite0e.app/adults/subscription/free-trial' : 'https://staging.happierme.app/adults/subscription/free-trial'
          }
        });

        if (error) {
          const messageContainer = document.querySelector('#error-message');
          messageContainer.textContent = error.message;
          this.router.navigateByUrl('/adults/subscription/payment-failed');
        } else {
          this.router.navigateByUrl('/adults/subscription/free-trial');
        }
      });
    }, 4000)
  }

  back() {
    this.location.back();
  }


}
