import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { StripeModel } from '../../models/search-data-model';
import { environment } from '../../../environments/environment'
import { Location } from '@angular/common';
import { ProgramType, SubscriptionType } from '../../models/program-model';
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
  isAdults = true;
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;
  constructor(private datePipe: DatePipe, private router: Router, private commonService:CommonService,
    private location: Location) {
    this.selectedSubscription =
      this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    this.initializeModel();
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
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
      
      const appearance = {
        theme: 'flat',  
        rules: {
          '.Label': {
            fontSize: '0'
          },
          /* '.Input::placeholder': {
            color: '#000000'
          },  */        
        },            
        variables: {
          colorBackground: (this.isAdults? '#120F40' : '#0C2B5F' ) ,
          colorDanger: '#df1b41',
          fontFamily: 'Poppins,sans-serif !important;',
          spacingUnit: '4px',
          borderRadius: '16px',
          colorText: '#ffffff',
          colorTextPlaceholder: "rgba(255, 255, 255, 0.50)"
        }
      };

      

     
      const options = {
        clientSecret: this.stripeModel.clientSecretId,
        appearance: appearance,
        loader: 'auto',              
      };
      const elements = stripe.elements(options);
      const paymentElement = elements.create('payment', options);
      paymentElement.mount('#payment-element');
      // Access the underlying input element and set autocomplete to "off"
     
      

     
      const cardInput = document.getElementById('Field-numberInput');
      if (cardInput) {
        cardInput.setAttribute('::placeholder', "Card number");
        cardInput.setAttribute('autocomplete', 'off');
      }

      const expiry = document.getElementById('Field-expiryInput');
      if (expiry) {
        expiry.setAttribute('autocomplete', 'off');
      }

      const form = document.getElementById('payment-form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('production ' + this.isProduction);
        var url  = `/${SharedService.getprogramName()}/subscription/free-trial`;
        if (localStorage.getItem('ispartnershipClick') == 'T' && localStorage.getItem('isMonthlySelectedForPayment') == 'T') {
          localStorage.setItem('ispartnershipClick', 'F');
          url = `/${SharedService.getprogramName()}/hwp-premium-congratulations`;
        }
        const { error } = await stripe.confirmSetup({
          elements,
          confirmParams: {
            return_url: environment.clientUrl + url,
            payment_method_data: {             
              billing_details: {
                name: (<HTMLInputElement>document.getElementById('name')).value,
                address: {
                  postal_code: (<HTMLInputElement>document.getElementById('postal-code')).value,
                }
              }
            }
          
          
          }
        });

        if (error) {
          const messageContainer = document.querySelector('#error-message');
          messageContainer.textContent = error.message;
          this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/payment-failed`);
        } else {
          this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/free-trial`);
        }
      });
    }, 4000)
  }

  back() {
    this.commonService.updateSurveyData(2);
    this.location.back();
  }

  GetAmount() {
    let isCoupanCode = JSON.parse(SharedService.getDataFromLocalStorage('IsCoupanApplied'));
    if(isCoupanCode == true || isCoupanCode =='true'){
      return JSON.parse(SharedService.getDataFromLocalStorage('subscribeToPremiumAfterDiscount'));
    }
    if (this.selectedSubscription == this.Monthly) 
    {  
      return this.pricingModel.Monthly
    }
    else { 
      return this.pricingModel.Annual 
    }
  }
  getIsoCode(){
    if(this.pricingModel.CurSymbol == '$'){
      return ` (${this.pricingModel.ISOCode})`;
    }
    return '';
  }

}
