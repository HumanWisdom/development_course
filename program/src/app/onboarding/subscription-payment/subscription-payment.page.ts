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
  stripeKey = environment.stripeKey;
  cardCaptureReady = false
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  stripe;
  enable = false;
  confirmation;

  card: any;
  error: string;
  stripeId: string;
  amount: any;
  countryCode: any = '';
  defaultCountry: any;
  defaultCurrencySymbol: any

  constructor(private service: OnboardingService,
    private router: Router) {
    this.getCountry()
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

  getCountry() {
    this.service.getCountry().subscribe((res: any) => {
      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
      this.defaultCountry = res.country_name
    },
      error => {
        console.log(error)
      });
  }

  getPricing() {
    this.service.getPricing(this.countryCode).subscribe(res => {
      this.defaultCurrencySymbol = res[0]['ISOCode'];
    }, (err) => {
      window.alert(err.error['Message'])
    }
    )
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.stripeId !== undefined) {
        let stripe = Stripe(this.stripeKey);
        let elements = stripe.elements();
        var paymentRequest = stripe.paymentRequest({
          country: this.defaultCurrencySymbol.toLowerCase() === 'usd' ? 'US' : this.countryCode,
          currency: this.defaultCurrencySymbol.toLowerCase(),
          total: {
            label: 'Total Payable',
            amount: parseFloat(this.amount),
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });


        var prButton = elements.create('paymentRequestButton', {
          paymentRequest: paymentRequest,
        });

        // Check the availability of the Payment Request API first.
        paymentRequest.canMakePayment().then(function (result) {
          if (result) {
            prButton.mount('#payment-request-button');
          } else {
            document.getElementById('payment-request-button').style.display = 'none';
          }
        });


        paymentRequest.on('paymentmethod', function (ev) {
          // Confirm the PaymentIntent without handling potential next actions (yet).
          stripe.confirmCardPayment(
            this.stripeId,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false }
          ).then(function (confirmResult) {
            if (confirmResult.error) {
              // Report to the browser that the payment failed, prompting it to
              // re-show the payment interface, or show an error message and close
              // the payment interface.
              ev.complete('fail');
            } else {
              // Report to the browser that the confirmation was successful, prompting
              // it to close the browser payment method collection interface.
              ev.complete('success');
              // Check if the PaymentIntent requires any actions and if so let Stripe.js
              // handle the flow. If using an API version older than "2019-02-11"
              // instead check for: `paymentIntent.status === "requires_source_action"`.
              if (confirmResult.paymentIntent.status === "requires_action") {
                // Let Stripe.js handle the rest of the payment flow.
                stripe.confirmCardPayment(this.stripeId).then(function (result) {
                  if (result.error) {
                    // The payment failed -- ask your customer for a new payment method.
                  } else {

                    // The payment has succeeded.
                    localStorage.setItem('personalised', 'F');
                    if (localStorage.getItem('ispartnershipClick') == 'T') {
                      if (localStorage.getItem('isMonthlySelectedForPayment') == 'T') {
                        localStorage.setItem('ispartnershipClick', 'F');
                        localStorage.setItem('isMonthlySelectedForPayment', 'F');
                        this.router.navigate(['/adults/humanwisdom-premium']);
                      } else {
                        localStorage.setItem('ispartnershipClick', 'F');
                        localStorage.setItem('isMonthlySelectedForPayment', 'F');
                        this.router.navigate(['/adults/hwp-premium-congratulations']);
                      }
                    } else {
                      alert('Your Payment Is Successfully Submitted');
                      this.router.navigate(['/onboarding/myprogram'])
                    }
                  }
                });
              } else {

                // The payment has succeeded.
                localStorage.setItem('personalised', 'F');
                if (localStorage.getItem('ispartnershipClick') == 'T') {
                  if (localStorage.getItem('isMonthlySelectedForPayment') == 'T') {
                    localStorage.setItem('ispartnershipClick', 'F');
                    localStorage.setItem('isMonthlySelectedForPayment', 'F');
                    this.router.navigate(['/adults/humanwisdom-premium']);
                  } else {
                    localStorage.setItem('ispartnershipClick', 'F');
                    localStorage.setItem('isMonthlySelectedForPayment', 'F');
                    this.router.navigate(['/adults/hwp-premium-congratulations']);
                  }
                } else {
                  alert('Your Payment Is Successfully Submitted');
                  this.router.navigate(['/onboarding/myprogram'])
                }

              }
            }
          });
        });


        var cardNumberElement = elements.create('cardNumber', { placeholder: 'Card Number' });
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
              if (localStorage.getItem('ispartnershipClick') == 'T') {
                if (localStorage.getItem('isMonthlySelectedForPayment') == 'T') {
                  localStorage.setItem('ispartnershipClick', 'F');
                  localStorage.setItem('isMonthlySelectedForPayment', 'F');
                  this.router.navigate(['/adults/humanwisdom-premium']);
                } else {
                  localStorage.setItem('ispartnershipClick', 'F');
                  localStorage.setItem('isMonthlySelectedForPayment', 'F');
                  this.router.navigate(['/adults/hwp-premium-congratulations']);
                }
              } else {
                alert('Your Payment Is Successfully Submitted');
                this.router.navigate(['/onboarding/myprogram'])
              }
            }
          });
        });

      }
    }, 9000)

  }

  ngOnInit() {
  }

}
