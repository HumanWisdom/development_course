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
import { OnboardingService } from '../../services/onboarding.service';

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
  amountGBP = "";
  defaultCurrencyName: any;


  constructor(private datePipe: DatePipe, private router: Router, private commonService:CommonService,
    private location: Location, private service: OnboardingService) {
    this.selectedSubscription =
      this.Monthly = Constant.MonthlyPlan;
    this.Annual = Constant.AnnualPlan;
    this.initializeModel();
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.getCountry();
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
   let am = this.GetAmount();

   let c = this.getCurrCode();

   this.commonService.getGBPcuurency(am, c).subscribe((res: any) => {
    this.amountGBP = res;
   },
     error => {
       console.log(error)
     });
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
          '.Input': {
            border: '1px solid rgba(50, 50, 50, 0.25)',
            borderRadius: '16px',
            height: '50px',
            boxShadow: '1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset'
          },
          '.p-Input': {
            height: '50px',
          },
         '.TermsText': {
            fontSize: '10px',
            color: 'rgba(0,0,0,0.50)'
          },

          /* '.Input::placeholder': {
            color: '#000000'
          },  */        
        },            
        variables: {
          colorBackground: (this.isAdults? '#fff' : '#0C2B5F' ) ,
          colorDanger: '#df1b41',
          fontFamily: 'Poppins,sans-serif !important;',
          borderRadius: '16px',
          border:'1px solid #ddd',         
          colorText: (this.isAdults? '#000' : '#fff' ) ,
          colorTextPlaceholder: (this.isAdults? 'rgba(0, 0, 0, 0.50)'  : 'rgba(255, 255, 255, 0.50)'  ) ,
          inputHeight: '50px',
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

        let am = this.amountGBP;
        let c = this.defaultCurrencyName;

        let discountCode = localStorage.getItem("discountCode");

        localStorage.setItem('stripeDiscountCode', discountCode ?? "");

        localStorage.setItem('stripeamount', am.toString());
        localStorage.setItem('stripecountrycode', c);
        localStorage.setItem('callAddtraction', "Y");

        // this.payementSubmitBtnClick.nativeElement.click();

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
        setTimeout(() => 
        {
            if (error) {
                  const messageContainer = document.querySelector('#error-message');
                  messageContainer.textContent = error.message;
                  this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/payment-failed`);
                } else {
                  this.router.navigateByUrl(`/${SharedService.getprogramName()}/subscription/free-trial`);
                }
        },
        5000);

       
      });
    }, 5000)
  }

  back() {
    if(sessionStorage.getItem('isPaymentBackClicked') && sessionStorage.getItem('isPaymentBackClicked')=='T'){
      this.location.back();
    }else{
      sessionStorage.setItem('isPaymentBackClicked','T');
      this.commonService.updateSurveyData(2);
      this.location.back();
    }
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

  getCountry() {
    this.service.getCountry().subscribe((res: any) => {
      this.defaultCurrencyName = res.currency
    },
      error => {
        console.log(error)
      });
  }

  getCurrCode(){
    return this.pricingModel.ISOCode;
  }
terms() {
    this.router.navigateByUrl('/terms-and-conditions');
  }
  privacy() {
    this.router.navigateByUrl('/privacy-policy');
  }
}
