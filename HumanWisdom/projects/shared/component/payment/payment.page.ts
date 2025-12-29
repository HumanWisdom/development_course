import { OnboardingService } from '../../services/onboarding.service';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnChanges,
  AfterContentChecked,
  DoCheck
} from '@angular/core';

import { NgForm } from "@angular/forms"
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LogEventService } from '../../services/log-event.service';

import { ProgramType  } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';



// var ADT = ADT || {};
// ADT.Tag = ADT.Tag || {};
// ADT.Tag.t = 0;
// ADT.Tag.c = "";
// ADT.Tag.tp = 0;
// ADT.Tag.am = 0;
// ADT.Tag.ti = "";
// ADT.Tag.xd = "";
// ADT.Tag.cpn = "";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
})
export class PaymentPage implements AfterViewInit, OnDestroy {
  //stripeKey = 'pk_live_51IDyEyLodCYBgHN8HSs0IYpVvumprrRytuEiat1sCrqELs9wj4L7J3GMMB8hk0H3uHl6wQePj4aKeatJNuOM56IJ005Bp6Cx0a';
  // stripeKey = 'pk_test_51IDyEyLodCYBgHN86w4iS8izVNRW5BrBHRvNR5hamoNsCx1ccQWEMKVSSONQKVqHyFh5FWuUXTEFqyPdMjc2Nld200mJgPGVrl';
  stripeKey = environment.stripeKey;

  cardCaptureReady = false
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;
  @ViewChild('payementSubmitBtnClick') payementSubmitBtnClick: any;

  stripe;
  enable = false;
  confirmation;

  card: any;
  error: string;
  stripeId: string;
  enableAlert = false;
  content = '';
  obj = {};
    isAdults = true;


  constructor(private cd: ChangeDetectorRef,
    private service: OnboardingService,
    private router: Router,
    private stripeService: AngularStripeService,
    public logeventservice: LogEventService
  ) {

     if (SharedService.ProgramId == ProgramType.Adults) {
          this.isAdults = true;
        } else {
          this.isAdults = false;
        }


    

    let quan = this.router.getCurrentNavigation().extras.state.quan;
    let plan = this.router.getCurrentNavigation().extras.state.plan;
    let userId = JSON.parse(localStorage.getItem("userId"))
    let couponid = localStorage.getItem("couponid")
    this.obj = {
      UserID: userId,
      ProgramID: '9',
      PlanId: plan === 'Annual' ? '2' : '1',
      DiscountCode: parseInt(couponid) ?? 0,
      Quantity: quan,
      AffReferralCode: localStorage.getItem("AffReferralCode") !== null ? localStorage.getItem("AffReferralCode") : ''
    }
    this.service.stripe(this.obj)
      .subscribe(res => {

        this.stripeId = res;
        this.enable = true;
        // this.keyList=res
        // localStorage.setItem("keyList",JSON.stringify(this.keyList))

      },
        (error: HttpErrorResponse) => {
          this.enable = true
          this.stripeId = error.error['Message']
        },
        () => {
          // this.router.navigate(["/onboarding/assign-key"])
        })
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.stripeId !== undefined) {

            
        var style = {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            fontFamily: 'Arial, sans-serif',
            color: "#fa755a",
            iconColor: "#fa755a"
          },
        
                  variables: {
                  colorBackground: (this.isAdults? '#fff' : '#0C2B5F' ) ,
                  colorDanger: '#df1b41',
                  fontFamily: 'Poppins,sans-serif !important;',
                  borderRadius: '16px',
                  border:'1px solid #ddd',         
                  colorText: (this.isAdults? '#000' : '#fff' ) ,
                  colorTermsText: (this.isAdults? 'rgba(0, 0, 0, 0.50)'  : 'rgba(255, 255, 255, 0.50)'  ) ,
                  colorTextPlaceholder: (this.isAdults? 'rgba(0, 0, 0, 0.50)'  : 'rgba(255, 255, 255, 0.50)'  ) ,
                  inputHeight: '50px',
                }     
        };
        let stripe = Stripe(this.stripeKey);
        let elements = stripe.elements();
        
        let card = elements.create('card', { style: style });
        card.mount('#card-element');

        card.on('change', function (event) {
          this.displayError(event);
        });

        

        const btn = document.querySelector('#btnsubmit');
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          this.logeventservice.logEvent('click_confirm_payment')
          // Create payment method and confirm payment intent.
          stripe.confirmCardPayment(this.stripeId, {
            payment_method: {
              card: card,
              billing_details: {
                name: (<HTMLInputElement>document.getElementById('name')).value,
              }
            }
          }).then((result) => {
           setTimeout(() => {             

            
           
            if (result.error) {
              // alert(result.error.message);
              this.content = result.error.message;
              this.enableAlert = true;
            } else {
              this.logeventservice.logEvent('click_confirm_payment');
              this.content = 'Your Payment Is Successfully Submitted';

              // ADT.Tag.cpn = this.obj['DiscountCode'];
              // ADT.Tag.t = this.obj['Quantity'];

              // let am = parseFloat(this.amount)*100;
              let ti = this.stripeId;
              // let cpn = this.obj['DiscountCode'];
              let t = this.obj['Quantity'];
              // let c = this.defaultCountryname;

              // localStorage.setItem('stripeamount', am.toString());
              localStorage.setItem('stripeid', ti);
              localStorage.setItem('stripeDiscountCode', localStorage.getItem('discountCode') ?? "0");
              localStorage.setItem('stripeqty', t);
              // localStorage.setItem('stripecountrycode', c);

              // this.payementSubmitBtnClick.nativeElement.click();

              this.enableAlert = true;
              // alert('Your Payment Is Successfully Submitted');
              if (localStorage.getItem('ispartnershipClick') == 'T') {
                this.router.navigate(['/adults/hwp-premium-congratulations']);
              }
              this.router.navigate(['/onboarding/myprogram'])
              // Successful subscription payment
            }

             }, 5000);
          });
        });
      }
    }, 9000)

    // this.stripeService.setPublishableKey(this.stripeId).then(
    //   stripe=> {
    //     this.stripe = stripe;
    // const elements = stripe.elements();
    // this.card = elements.create('card');
    // this.card.mount(this.cardInfo.nativeElement);
    // this.card.addEventListener('change', this.cardHandler);
    // });
  }

  ngOnDestroy() {
    // this.card.removeEventListener('change', this.cardHandler);
    // this.card.destroy();
  }

  ngOnInit() {

  }
  
   displayError(event) {

          let displayError = document.getElementById('card-element-errors');
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = '';
          }
        }
  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

}
