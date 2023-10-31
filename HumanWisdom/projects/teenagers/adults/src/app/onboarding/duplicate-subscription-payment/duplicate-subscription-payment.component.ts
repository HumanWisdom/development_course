import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';

@Component({
  selector: 'app-duplicate-subscription-payment',
  templateUrl: './duplicate-subscription-payment.component.html',
  styleUrls: ['./duplicate-subscription-payment.component.scss'],
})
export class DuplicateSubscriptionPaymentComponent implements OnInit {
  // stripeKey = 'pk_live_51IDyEyLodCYBgHN8HSs0IYpVvumprrRytuEiat1sCrqELs9wj4L7J3GMMB8hk0H3uHl6wQePj4aKeatJNuOM56IJ005Bp6Cx0a';
//  stripeKey = 'pk_test_51IDyEyLodCYBgHN86w4iS8izVNRW5BrBHRvNR5hamoNsCx1ccQWEMKVSSONQKVqHyFh5FWuUXTEFqyPdMjc2Nld200mJgPGVrl';
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
  uID: any;


  constructor(private service: OnboardingService,
    private router: Router) {
      this.amount = localStorage.getItem('totalAmount')
    this.uID = JSON.parse(localStorage.getItem("userId"))
  }

  ngAfterViewInit() {
    setTimeout(() => {
      var style = {
        base: {
          iconColor: '#c4f0ff',
           color: '#fff',  
          '::placeholder': {
       
          },
          ':-webkit-autofill': {
            color: '#fff',
          },
          ':focus': {
            color: '#fff',
          },
        },
        invalid: {
          iconColor: '#FFC7EE',
          color: '#fff',
        },
      };
        let stripe = Stripe(this.stripeKey);
        let elements = stripe.elements();
        var cardNumberElement = elements.create('cardNumber', {
          style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },
        });
        var cardExpiryElement = elements.create('cardExpiry', {
          style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },
        });
        var cardCvcElement = elements.create('cardCvc',{
          style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },
        });

        cardNumberElement.mount('#card-number');
        cardExpiryElement.mount('#card-expiry');
        cardCvcElement.mount('#card-cvc');

        const btn = document.querySelector('#btnsubmit');
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          // Create payment method and confirm payment intent.
          stripe.createPaymentMethod({
            type: 'card',
            card: cardNumberElement,
            billing_details: {
              name:  (<HTMLInputElement>document.getElementById('name')).value,
            },
          }).then((result) => {
            if(result.error) 
            {
              alert(result.error.message);
            } 
            else 
            {
              this.service.attachPaymentMethod(this.uID, result.paymentMethod.id)
                    .subscribe(res => {
                      localStorage.setItem('personalised', 'F');
                      alert('Your Card Details Have Been Updated');
                      this.router.navigate(['/onboarding/user-profile'])
                    })
            }
          });
        });
    }, 9000)

  }

  ngOnInit() {
  }
  

}
