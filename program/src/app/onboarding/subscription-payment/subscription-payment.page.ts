import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-subscription-payment',
  templateUrl: './subscription-payment.page.html',
  styleUrls: ['./subscription-payment.page.scss'],
})
export class SubscriptionPaymentPage implements OnInit {
  //stripeKey = 'pk_live_51IDyEyLodCYBgHN8HSs0IYpVvumprrRytuEiat1sCrqELs9wj4L7J3GMMB8hk0H3uHl6wQePj4aKeatJNuOM56IJ005Bp6Cx0a';
  // stripeKey = 'pk_test_51IDyEyLodCYBgHN86w4iS8izVNRW5BrBHRvNR5hamoNsCx1ccQWEMKVSSONQKVqHyFh5FWuUXTEFqyPdMjc2Nld200mJgPGVrl';
  stripeKey= environment.stripeKey;
  cardCaptureReady = false
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  stripe;
  enable = false;
  confirmation;

  card: any;
  error: string;
  stripeId: string;
  amount: any;


  constructor(private service: OnboardingService,
    private router: Router) {
      this.amount = localStorage.getItem('totalAmount')
    let quan = this.router.getCurrentNavigation()?.extras?.state?.quan;
    let plan = this.router.getCurrentNavigation()?.extras?.state?.plan;
    let userId = JSON.parse(localStorage.getItem("userId"))
    let couponid = localStorage.getItem("couponid")
    let obj = {
      UserID: userId,
      ProgramID: '9',
      PlanId: plan === 'Annual' || 'Yearly' ? '2' : '1',
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
        var cardNumberElement = elements.create('cardNumber',{placeholder:'Card Number'});
        var cardExpiryElement = elements.create('cardExpiry');
        var cardCvcElement = elements.create('cardCvc');

        cardNumberElement.mount('#card-number');
        cardExpiryElement.mount('#card-expiry');
        cardCvcElement.mount('#card-cvc');

        const btn = document.querySelector('#btnsubmit');
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const nameInput = document.getElementById('name');
          const postalcode = document.getElementById('postal-code');
          // Create payment method and confirm payment intent.
          stripe.confirmCardPayment(this.stripeId, {
            payment_method: {
              card: cardNumberElement,
              billing_details: {
                name: (<HTMLInputElement>document.getElementById('name')).value,
                address: {
                  postal_code: (<HTMLInputElement>document.getElementById('postal-code')).value,
                }
              }
            }
          }).then((result) => {
            if (result.error) {
              alert(result.error.message);
            } else {
              localStorage.setItem('personalised', 'F');
              alert('Your Payment Is Successfully Submitted');
              this.router.navigate(['/onboarding/myprogram'])
            }
          });
        });

      }
    }, 9000)

  }

  ngOnInit() {
  }

}
