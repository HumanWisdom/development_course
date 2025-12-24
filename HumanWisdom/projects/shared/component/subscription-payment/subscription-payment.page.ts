import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from "../../services/log-event.service";
import { Constant } from '../../services/constant';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Location } from '@angular/common';

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
  @ViewChild('payementSubmitBtnClick') payementSubmitBtnClick: any;

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
  defaultCurrencyName: any;
  defaultCurrencySymbol: any
  obj: any;
  enableAlert = false;
  content = '';
  symbol: any
  isoCode: any;
  isAdults = false;
  amountGBP = "";
  cardNumberElement: any;
  cardExpiryElement: any;
  cardCvcElement: any;

  constructor(private service: OnboardingService,
    private location: Location,
    public logeventservice: LogEventService,
    private router: Router) {
    this.getCountry()
    this.amount = localStorage.getItem('totalAmount');


    this.symbol = localStorage.getItem('Currsymbol');
    this.isoCode = localStorage.getItem('ISOCode');
    this.getGBPcuurency();

    let quan = this.router.getCurrentNavigation()?.extras?.state?.quan;
    let plan = this.router.getCurrentNavigation()?.extras?.state?.plan;
    let rateId = this.router.getCurrentNavigation()?.extras?.state?.rateId;

    let userId = JSON.parse(localStorage.getItem("userId"))
    let couponid = localStorage.getItem("couponid")
    var checkout = SharedService.getDataFromLocalStorage(Constant.Checkout);
    if (checkout == 'T') {
      this.obj = {
        UserID: userId,
        ProgramID: SharedService.ProgramId,
        PlanId: plan === 'Annual' || plan === 'Yearly' ? '2' : '1',
        DiscountCode: parseInt(couponid) ?? 0,
        Quantity: 1,
        AffReferralCode: localStorage.getItem("AffReferralCode") !== null ? localStorage.getItem("AffReferralCode") : '',
        MyselfSub: "1",
        RateID: rateId
      }
    } else {
      this.obj = {
        UserID: userId,
        ProgramID: SharedService.ProgramId,
        PlanId: plan === 'Annual' || plan === 'Yearly' ? '2' : '1',
        DiscountCode: parseInt(couponid) ?? 0,
        Quantity: quan,
        AffReferralCode: localStorage.getItem("AffReferralCode") !== null ? localStorage.getItem("AffReferralCode") : '',
      }
    }

    SharedService.setDataInLocalStorage(Constant.Checkout, 'F')
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

    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  getGBPcuurency() {
    this.service.getGBPcuurency(this.amount, this.isoCode).subscribe((res: any) => {
      this.amountGBP = res;
    },
      error => {
        console.log(error)
      });
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
      this.defaultCurrencyName = res.currency

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
        const isLight = this.isAdults;
        var style = {
          base: {
            iconColor: isLight ? '#7a7a7a' : '#c4f0ff',
            color: isLight ? '#000000' : '#ffffff',
            '::placeholder': {
              fontFamily: "'Poppins', sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: "14px",
              color: isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'
            },
            ':-webkit-autofill': {
              color: isLight ? '#000000' : '#ffffff',
              backgroundColor: isLight ? '#ffffff' : '#120F40',
              colorBackground: isLight ? '#ffffff' : '#120F40',
            },
            ':focus': {
              color: isLight ? '#000000' : '#ffffff',
            },
          },
          invalid: {
            iconColor: '#FFC7EE',
            color: '#FF5A5F',
          },
        };
        let stripe = Stripe(this.stripeKey);
        let elements = stripe.elements();
        var paymentRequest = stripe.paymentRequest({
          country: this.defaultCountryname,
          currency: this.defaultCurrencySymbol.toLowerCase(),
          total: {
            label: 'Total Payable',
            amount: parseFloat(this.amount) * 100,
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

                    let am = this.amountGBP;
                    // let ti = ev.paymentMethod.id;
                    // let cpn = this.obj.DiscountCode;
                    let t = this.obj.Quantity;
                    let c = this.defaultCurrencyName;
                    localStorage.setItem('stripeamount', am.toString());
                    // localStorage.setItem('stripeid', ti);
                    localStorage.setItem('stripeDiscountCode', localStorage.getItem('discountCode') ?? "0");
                    localStorage.setItem('stripeqty', t);
                    localStorage.setItem('stripecountrycode', c);

                    this.getOrderId();
                    localStorage.setItem('personalised', 'F');
                    this.content = 'Payment Successful';
                    this.enableAlert = true;
                  }
                });
              } else {

                let am = this.amountGBP;
                // let ti = ev.paymentMethod.id;
                // let cpn = this.obj.DiscountCode;
                let t = this.obj.Quantity;
                let c = this.defaultCurrencyName;

                localStorage.setItem('stripeamount', am.toString());
                // localStorage.setItem('stripeid', ti);
                localStorage.setItem('stripeDiscountCode', localStorage.getItem('discountCode') ?? "0");
                localStorage.setItem('stripeqty', t);
                localStorage.setItem('stripecountrycode', c);
                localStorage.setItem('personalised', 'F');
                this.content = 'Payment Successful';
                this.enableAlert = true;

              }
            }
          });
        });


        this.cardNumberElement = elements.create('cardNumber', {
          placeholder: 'Card Number',
          style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },
        });
        this.cardExpiryElement = elements.create('cardExpiry', {
          style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },
        });
        this.cardCvcElement = elements.create('cardCvc', {
          style: style,
          classes: {
            base: 'form-control w-full',
            complete: 'is-valid',
            empty: 'is-empty',
            invalid: 'is-invalid',
          },
        });

        this.cardNumberElement.mount('#card-number');
        this.cardExpiryElement.mount('#card-expiry');
        this.cardCvcElement.mount('#card-cvc');

        const btn = document.querySelector('#btnsubmit');
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const nameInput = document.getElementById('name');
          const postalcode = document.getElementById('postal-code');
          // Create payment method and confirm payment intent.
          stripe.confirmCardPayment(this.stripeId, {
            payment_method: {
              card: this.cardNumberElement,
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

              let am = this.amountGBP;
              // let ti = this.stripeId;
              // let cpn = this.obj.DiscountCode;
              let t = this.obj.Quantity;
              let c = this.defaultCurrencyName;
            
              localStorage.setItem('stripeamount', am.toString());
              // localStorage.setItem('stripeid', ti);
              localStorage.setItem('stripeDiscountCode', localStorage.getItem('discountCode') ?? "0");
              localStorage.setItem('stripeqty', t);
              localStorage.setItem('stripecountrycode', c);

              this.getOrderId();
              localStorage.setItem('personalised', 'F');
              this.content = 'Payment Successful';
              this.enableAlert = true;
            }
          });
        });

      }
    }, 9000)

  }

  getOrderId() {
    
    let getAt_Gt = localStorage.getItem("adtraction");

    if (getAt_Gt != null && getAt_Gt != undefined && getAt_Gt != '') {
      let userId = JSON.parse(localStorage.getItem("userId"))
      setTimeout(() => {
          this.service.getOrderId(userId).subscribe(res => {  
           localStorage.setItem('stripeid', res);
        
            let obj = {
              "OrderValue": this.amountGBP,
              "ActivationKey": res,
              "at_gd": getAt_Gt,
              "coupon": localStorage.getItem('discountCode') ?? "",
              "userId": userId,
              "programId": SharedService.ProgramId,
            }
            this.service.callAddraction(obj).subscribe(res => {
                 this.payementSubmitBtnClick.nativeElement.click();

             }, (err) => {
              }
            )

          }, (err) => {
          }
        )
      }, 4000);

      
    }
  }

  back() {
    this.router.navigate([`/${SharedService.getprogramName()}/onboarding/viewcart`]);
  }

  ngOnInit() {
  }

  getAlertcloseEvent(event) {
    let isSuccess = this.content === 'Payment Successful';
    this.content = '';
    this.enableAlert = false;
    if (isSuccess) {
      this.router.navigate([`/${SharedService.getprogramName()}/onboarding/myprogram`]);
    }
    const nameEl = document.getElementById('name') as HTMLInputElement;
    const postalEl = document.getElementById('postal-code') as HTMLInputElement;
    const saveChk = document.getElementById('forum_post_checkbox') as HTMLInputElement;
    if (nameEl) nameEl.value = '';
    if (postalEl) postalEl.value = '';
    if (saveChk) saveChk.checked = false;
    if (this.cardNumberElement && this.cardNumberElement.clear) this.cardNumberElement.clear();
    if (this.cardExpiryElement && this.cardExpiryElement.clear) this.cardExpiryElement.clear();
    if (this.cardCvcElement && this.cardCvcElement.clear) this.cardCvcElement.clear();
  }
  getIsoCode() {
    if (this.symbol == '$') {
      return ` (${this.isoCode})`;
    }
    return '';
  }

}
