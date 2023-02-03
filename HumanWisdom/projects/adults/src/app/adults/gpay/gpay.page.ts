import { Component } from '@angular/core';

@Component({
  selector: 'app-gpay',
  template: `
      <button (click)="payWithGooglePay()">Pay with Google Pay</button>
  `
})
export class GpayPage {
  payWithGooglePay() {
    const details = {
      total: {
        label: 'Total',
        amount: {
          currency: 'INR',
          value: '1.00', // sample amount
        },
      },
      displayItems: [{
        label: 'Original Amount',
        amount: {
          currency: 'INR',
          value: '1.00',
        },
      }],
    };


    if (this.isIOS()) {
      // Handle Apple Pay on iOS
    } else if (this.isAndroid() && window.PaymentRequest) {
      // Handle Google Pay on Android
      const paymentRequest = new PaymentRequest([{
        supportedMethods: 'https://google.com/pay',
        data: {
          environment: 'TEST',
          apiVersion: 2,
          apiVersionMinor: 0,
          merchantInfo: {
            merchantId: 'BCR2DN4T7CCPJ2AE',
            merchantName: 'KUNDAN STEEL AND HARDWARE'
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '1.00',
            currencyCode: 'INR'
          },
          allowedCardNetworks: ['VISA', 'MASTERCARD', 'AMEX'],
          paymentMethodTokenizationParameters: {
            tokenizationType: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            }
          }
        }
      }],details);
  
      paymentRequest.show().then(paymentResponse => {
        console.log(paymentResponse);
        paymentResponse.complete('success');
      }).catch(error => {
        console.error(error);
      });
    } else {
      console.error('Google Pay is not supported on this platform');
    }
  }

  isAndroid() {
    return navigator.userAgent.match(/Android/i);
  }

  isIOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }
}
