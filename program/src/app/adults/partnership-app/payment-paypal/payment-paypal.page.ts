import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-paypal',
  templateUrl: './payment-paypal.page.html',
  styleUrls: ['./payment-paypal.page.scss'],
})
export class PaymentPaypalPage implements OnInit {

  referralCode:string='';
  constructor() {
    this.referralCode=localStorage.getItem('referralCode');
   }

  ngOnInit() {
  }

}
