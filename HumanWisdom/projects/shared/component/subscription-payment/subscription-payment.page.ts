import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';
import { LogEventService } from "../../services/log-event.service";
import { Constant } from '../../services/constant';

import { Location } from '@angular/common';
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
  defaultCountryname: any;
  defaultCurrencySymbol: any
  obj:any;
  enableAlert = false;
  content = '';
  symbol: any
  isoCode:any;
  constructor(private service: OnboardingService,
    private location:Location,
    public logeventservice: LogEventService,
    private router: Router) {
    this.getCountry()
    this.amount = localStorage.getItem('totalAmount');
    this.symbol = localStorage.getItem('Currsymbol');
    this.isoCode = localStorage.getItem('ISOCode');
    let quan = this.router.getCurrentNavigation()?.extras?.state?.quan;
    let plan = this.router.getCurrentNavigation()?.extras?.state?.plan;
    let rateId = this.router.getCurrentNavigation()?.extras?.state?.rateId;

    let userId = JSON.parse(localStorage.getItem("userId"))
    let couponid = localStorage.getItem("couponid")
    var checkout = SharedService.getDataFromLocalStorage(Constant.Checkout);
    if(checkout == 'T'){
        this.obj = {
          UserID: userId,
          ProgramID: '9',
          PlanId:  plan === 'Annual' || plan === 'Yearly' ? '2' : '1',
          DiscountCode:  parseInt(couponid) ?? 0,
          Quantity: 1,
          AffReferralCode: localStorage.getItem("AffReferralCode") !== null ? localStorage.getItem("AffReferralCode") : '',
          MyselfSub: "1",
          RateID: rateId
        }
  }else{
    this.obj = {
      UserID: userId,
      ProgramID: '9',
      PlanId: plan === 'Annual' || plan === 'Yearly' ? '2' : '1',
      DiscountCode: parseInt(couponid) ?? 0,
      Quantity: quan,
      AffReferralCode: localStorage.getItem("AffReferralCode") !== null ? localStorage.getItem("AffReferralCode") : '',
    }
  }

    SharedService.setDataInLocalStorage(Constant.Checkout,'F')
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

  getCountry() {
    this.service.getCountry().subscribe((res: any) => {
      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
      this.defaultCountry = res.country_name
      this.defaultCountryname = res.country
    },
      error => {
        console.log(error)
      });
  }

  getPricing() {
    this.service.getPricing(this.countryCode).subscribe(res => {
      this.defaultCurrencySymbol = res[0]['ISOCode'];
    }, (err) => {
      this.content = err.error['Message'];
      this.enableAlert = true;
      // window.alert(err.error['Message'])
    }
    )
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.stripeId !== undefined) {
        var style = {
          base: {
            iconColor: '#c4f0ff',
             color: '#fff',
            '::placeholder': {
              fontFamily: "'Poppins', sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: "14px",
              color: "rgba(255, 255, 255, 0.50)"

            },
            ':-webkit-autofill': {
              color: '#000000',
              backgroundColor: '#120F40',
              colorBackground:'#120F40',
            },
            ':focus': {
              color: '#fff',
            },
          },
          invalid: {
            iconColor: '#FFC7EE',
            color: '#FFC7EE',
          },
        };
        let stripe = Stripe(this.stripeKey);
        let elements = stripe.elements();
        var paymentRequest = stripe.paymentRequest({
          country: this.defaultCountryname,
          currency: this.defaultCurrencySymbol.toLowerCase(),
          total: {
            label: 'Total Payable',
            amount: parseFloat(this.amount)*100,
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
              this.logEventService.logEvent('Payment_Fail');
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
                    this.logEventService.logEvent('Payment_Error');
                    // The payment failed -- ask your customer for a new payment method.
                  } else {
                    this.logEventService.logEvent('Payment_Complete');
                    // The payment has succeeded.
                    localStorage.setItem('personalised', 'F');
                    if (localStorage.getItem('ispartnershipClick') == 'T') {
                      if (localStorage.getItem('isMonthlySelectedForPayment') == 'T') {
                        localStorage.setItem('ispartnershipClick', 'F');
                        localStorage.setItem('isMonthlySelectedForPayment', 'F');
                        this.router.navigate([`${SharedService.getprogramName()}/humanwisdom-premium`]);
                      } else {
                        localStorage.setItem('ispartnershipClick', 'F');
                        localStorage.setItem('isMonthlySelectedForPayment', 'F');
                        this.router.navigate([`${SharedService.getprogramName()}/hwp-premium-congratulations`]);
                      }
                    } else {
                      this.content = 'Your Payment Is Successfully Submitted';
                      this.enableAlert = true;
                      // alert('Your Payment Is Successfully Submitted');
                      setTimeout(() => {
                        this.router.navigate([`${SharedService.getprogramName()}/onboarding/myprogram`])
                      }, 800);
                    }
                  }
                });
              } else {

                // The payment has succeeded.0.
                localStorage.setItem('personalised', 'F');
                if (localStorage.getItem('ispartnershipClick') == 'T') {
                  if (localStorage.getItem('isMonthlySelectedForPayment') == 'T') {
                    localStorage.setItem('ispartnershipClick', 'F');
                    localStorage.setItem('isMonthlySelectedForPayment', 'F');
                    this.router.navigate([`${SharedService.getprogramName()}/humanwisdom-premium`]);
                  } else {
                    localStorage.setItem('ispartnershipClick', 'F');
                    localStorage.setItem('isMonthlySelectedForPayment', 'F');
                    this.router.navigate([`${SharedService.getprogramName()}/hwp-premium-congratulations`]);
                  }
                } else {
                  this.content = 'Your Payment Is Successfully Submitted';
                  this.enableAlert = true;
                  // alert('Your Payment Is Successfully Submitted');
                  setTimeout(() => {
                    this.router.navigate([`${SharedService.getprogramName()}/onboarding/myprogram`])
                  }, 800);
                }

              }
            }
          });
        });


        var cardNumberElement = elements.create('cardNumber', {
        placeholder: 'Card Number' ,
        style: style,
        classes: {
          base: 'form-control w-full',
          complete: 'is-valid',
          empty: 'is-empty',
          invalid: 'is-invalid',
        },});
        var cardExpiryElement = elements.create('cardExpiry',{style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },});
        var cardCvcElement = elements.create('cardCvc',{ style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },});

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
              this.content = result.error.message;
              this.enableAlert = true;
              // alert(result.error.message);
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
                this.content = 'Your Payment Is Successfully Submitted';
                this.enableAlert = true;
                setTimeout(() => {
                  this.router.navigate([`${SharedService.getprogramName()}/onboarding/myprogram`])
                }, 800);
                // alert('Your Payment Is Successfully Submitted');
              }
            }
          });
        });

      }
    }, 9000)

  }

  back(){
    this.location.back();
  }

  ngOnInit() {
  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }
  getIsoCode(){
    if(this.symbol == '$'){
      return ` (${this.isoCode})`;
    }
    return '';
  }

}
