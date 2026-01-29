import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
import { Location } from '@angular/common'; 


@Component({
  selector: 'app-duplicate-subscription-payment',
  templateUrl: './duplicate-subscription-payment.component.html',
  styleUrls: ['./duplicate-subscription-payment.component.scss'],
})
export class DuplicateSubscriptionPaymentComponent implements OnInit, AfterViewInit {
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
  enableAlert = false;
  content = '';
  isAdults = false;
  constructor(private readonly service: OnboardingService,
    private readonly router: Router, private readonly location: Location) {
      this.amount = localStorage.getItem('totalAmount')
    this.uID = JSON.parse(localStorage.getItem("userId"));
    this.isAdults = SharedService.isAdultProgram();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initStripe();
    }, 9000);
  }

  private initStripe() {
    const style = {
      base: {
        iconColor: '#c4f0ff',
        color: this.isAdults ? '#000' : '#fff',
        '::placeholder': {
          color: this.isAdults ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
        },
        ':-webkit-autofill': {
          color: this.isAdults ? '#000' : '#fff',
        },
        ':focus': {
          color: this.isAdults ? '#000' : '#fff',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: this.isAdults ? '#000' : '#fff',
      },
    };
    const stripe = Stripe(this.stripeKey);
    const elements = stripe.elements();
    const cardNumberElement = elements.create('cardNumber', {
      style: style,
      classes: {
        base: 'form-control w-full',
        complete: 'is-valid',
        empty: 'is-empty',
        invalid: 'is-invalid',
      },
    });
    const cardExpiryElement = elements.create('cardExpiry', {
      style: style,
      classes: {
        base: 'form-control w-full',
        complete: 'is-valid',
        empty: 'is-empty',
        invalid: 'is-invalid',
      },
    });
    const cardCvcElement = elements.create('cardCvc', {
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
    if (btn) {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        this.handlePayment(stripe, cardNumberElement);
      });
    }
  }

  private handlePayment(stripe: any, cardNumberElement: any) {
    const nameInput = <HTMLInputElement>document.getElementById('name');
    const name = nameInput ? nameInput.value : '';

    stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
      billing_details: {
        name: name,
      },
    }).then((result) => {
      if (result.error) {
        this.content = result.error.message;
        this.enableAlert = true;
      } else {
        this.attachPayment(result.paymentMethod.id);
      }
    });
  }

  private attachPayment(paymentMethodId: string) {
    this.service.attachPaymentMethod(this.uID, paymentMethodId)
      .subscribe(res => {
        localStorage.setItem('personalised', 'F');
        this.content = 'Your Card Details Have Been Updated';
        this.enableAlert = true;
        this.router.navigate(['/onboarding/user-profile']);
      });
  }

  ngOnInit() {
    // ngOnInit is intentionally empty as no initialization logic is required here.
  }



  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

  goBack(){
    this.location.back();
  }

}
