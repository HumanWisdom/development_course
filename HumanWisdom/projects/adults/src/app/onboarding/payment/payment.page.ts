import { OnboardingService } from '../../../../../shared/services/onboarding.service';
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
import { environment } from 'src/environments/environment';
import { LogEventService } from "src/app/log-event.service";
import { SharedService } from '../../../../../shared/services/shared.service';

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
  }
};

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements AfterViewInit, OnDestroy {
  //stripeKey = 'pk_live_51IDyEyLodCYBgHN8HSs0IYpVvumprrRytuEiat1sCrqELs9wj4L7J3GMMB8hk0H3uHl6wQePj4aKeatJNuOM56IJ005Bp6Cx0a';
  // stripeKey = 'pk_test_51IDyEyLodCYBgHN86w4iS8izVNRW5BrBHRvNR5hamoNsCx1ccQWEMKVSSONQKVqHyFh5FWuUXTEFqyPdMjc2Nld200mJgPGVrl';
  stripeKey = environment.stripeKey;

  cardCaptureReady = false
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  stripe;
  enable = false;
  confirmation;

  card: any;
  error: string;
  stripeId: string;
  enableAlert = false;
  content = '';

  constructor(private cd: ChangeDetectorRef,
    private service: OnboardingService,
    private router: Router,
    private stripeService: AngularStripeService,
    public logeventservice: LogEventService
  ) {
    let quan = this.router.getCurrentNavigation().extras.state.quan;
    let plan = this.router.getCurrentNavigation().extras.state.plan;
    let userId = JSON.parse(localStorage.getItem("userId"))
    let couponid = localStorage.getItem("couponid")
    let obj = {
      UserID: userId,
      ProgramID:SharedService.ProgramId,
      PlanId: plan === 'Annual' ? '2' : '1',
      DiscountCode: parseInt(couponid) ?? 0,
      Quantity: quan,
      AffReferralCode: localStorage.getItem("AffReferralCode") !== null ? localStorage.getItem("AffReferralCode") : ''
    }
    this.service.stripe(obj)
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
        let stripe = Stripe(this.stripeKey);
        let elements = stripe.elements();
        let card = elements.create('card', { style: style });
        card.mount('#card-element');

        card.on('change', function (event) {
          displayError(event);
        });

        function displayError(event) {

          let displayError = document.getElementById('card-element-errors');
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = '';
          }
        }

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
            
            if (result.error) {
              // alert(result.error.message);
              this.content = result.error.message;
              this.enableAlert = true;
            } else {
              this.logeventservice.logEvent('click_confirm_payment');
              this.content = 'Your Payment Is Successfully Submitted';
              this.enableAlert = true;
              // alert('Your Payment Is Successfully Submitted');
              if (localStorage.getItem('ispartnershipClick') == 'T') {
                this.router.navigate(['/adults/hwp-premium-congratulations']);
              }
              this.router.navigate(['/onboarding/myprogram'])
              // Successful subscription payment
            }
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

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

}
