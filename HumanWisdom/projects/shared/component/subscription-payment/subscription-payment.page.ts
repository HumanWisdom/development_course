import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from "../../services/log-event.service";
import { Constant } from '../../services/constant';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Location } from '@angular/common';

declare var Stripe: any;
@Component({
  selector: 'app-subscription-payment',
  templateUrl: './subscription-payment.page.html',
  styleUrls: ['./subscription-payment.page.scss'],
})
export class SubscriptionPaymentPage implements AfterViewInit {

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

  constructor(private readonly service: OnboardingService,
    private readonly location: Location,
    public logeventservice: LogEventService,
    private readonly router: Router) {
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
    const checkout = SharedService.getDataFromLocalStorage(Constant.Checkout);
    if (checkout == 'T') {
      this.obj = {
        UserID: userId,
        ProgramID: SharedService.ProgramId,
        PlanId: plan === 'Annual' || plan === 'Yearly' ? '2' : '1',
        DiscountCode: Number.parseInt(couponid) ?? 0,
        Quantity: 1,
        AffReferralCode: localStorage.getItem("AffReferralCode") ?? '',
        MyselfSub: "1",
        RateID: rateId
      }
    } else {
      this.obj = {
        UserID: userId,
        ProgramID: SharedService.ProgramId,
        PlanId: plan === 'Annual' || plan === 'Yearly' ? '2' : '1',
        DiscountCode: Number.parseInt(couponid) ?? 0,
        Quantity: quan,
        AffReferralCode: localStorage.getItem("AffReferralCode") ?? '',
      }
    }

    SharedService.setDataInLocalStorage(Constant.Checkout, 'F')
    this.service.stripe(this.obj)
      .subscribe(res => {
        this.stripeId = res;
        this.enable = true;
      },
        (error: HttpErrorResponse) => {
          this.enable = true
          this.stripeId = error?.error?.['Message'] ?? ''
        },
        () => {
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
    },     (err) => {
      this.content = err?.error?.['Message'] ?? '';
      this.enableAlert = true;
    }
    )
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.stripeId !== undefined) {
        const isLight = this.isAdults;
        const style = {
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
        const stripe = Stripe(this.stripeKey);
        const elements = stripe.elements();
        const paymentRequest = stripe.paymentRequest({
          country: this.defaultCountryname,
          currency: this.defaultCurrencySymbol.toLowerCase(),
          total: {
            label: 'Total Payable',
            amount: Number.parseFloat(this.amount) * 100,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });


        const prButton = elements.create('paymentRequestButton', {
          paymentRequest: paymentRequest,
        });

        // Check the availability of the Payment Request API first.
        paymentRequest.canMakePayment().then((result) => {
          if (result) {
            prButton.mount('#payment-request-button');
          } else {
            document.getElementById('payment-request-button').style.display = 'none';
          }
        });


        paymentRequest.on('paymentmethod', async (ev) => {
          const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
            this.stripeId,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false }
          );

          if (confirmError) {
            this.logeventservice.logEvent('Payment_Fail');
            ev.complete('fail');
          } else {
            ev.complete('success');
            if (paymentIntent.status === "requires_action") {
              const { error: resultError } = await stripe.confirmCardPayment(this.stripeId);
              if (resultError) {
                this.logeventservice.logEvent('Payment_Error');
              } else {
                this.logeventservice.logEvent('Payment_Complete');
                this.handleSuccessfulPayment();
              }
            } else {
              this.handleSuccessfulPayment();
            }
          }
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

            } else {

              const am = this.amountGBP;
              const t = this.obj.Quantity;
              const c = this.defaultCurrencyName;
            
              localStorage.setItem('stripeamount', am.toString());
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
    
    const getAt_Gt = localStorage.getItem("adtraction");

    if (getAt_Gt) {
      const userId = JSON.parse(localStorage.getItem("userId"))
      setTimeout(() => {
          this.service.getOrderId(userId).subscribe(res => {  
           localStorage.setItem('stripeid', res);
        
            const obj = {
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
    // Check if user came from subscription flow (free trial ended)
    const previousUrl = this.location.getState();
    const cameFromSubscription = localStorage.getItem('cameFromSubscription') === 'true';
    
    if (cameFromSubscription) {
      // Navigate back to subscription flow
      this.router.navigate([`/${SharedService.getprogramName()}/subscription/proceed-to-payment`]);
    } else {
      // Navigate back to regular onboarding flow
      this.router.navigate([`/${SharedService.getprogramName()}/onboarding/viewcart`]);
    }
  }



  getAlertcloseEvent(event) {
    const isSuccess = this.content === 'Payment Successful';
    this.content = '';
    this.enableAlert = false;
    if (isSuccess) {
      // Clear the subscription flow flag after successful payment
      localStorage.removeItem('cameFromSubscription');
      this.router.navigate([`/${SharedService.getprogramName()}/onboarding/myprogram`]);
    }
    const nameEl = document.getElementById('name') as HTMLInputElement;
    const postalEl = document.getElementById('postal-code') as HTMLInputElement;
    const saveChk = document.getElementById('forum_post_checkbox') as HTMLInputElement;
    if (nameEl) nameEl.value = '';
    if (postalEl) postalEl.value = '';
    if (saveChk) saveChk.checked = false;
    if (this.cardNumberElement) this.cardNumberElement.clear?.();
    if (this.cardExpiryElement) this.cardExpiryElement.clear?.();
    if (this.cardCvcElement) this.cardCvcElement.clear?.();
  }

  handleSuccessfulPayment() {
    const am = this.amountGBP;
    const t = this.obj.Quantity;
    const c = this.defaultCurrencyName;
    localStorage.setItem('stripeamount', am.toString());
    localStorage.setItem('stripeDiscountCode', localStorage.getItem('discountCode') ?? "0");
    localStorage.setItem('stripeqty', t);
    localStorage.setItem('stripecountrycode', c);

    this.getOrderId();
    localStorage.setItem('personalised', 'F');
    // Clear the subscription flow flag after successful payment
    localStorage.removeItem('cameFromSubscription');
    this.content = 'Payment Successful';
    this.enableAlert = true;
  }

  getIsoCode() {
    if (this.symbol == '$') {
      return ` (${this.isoCode})`;
    }
    return '';
  }

}
