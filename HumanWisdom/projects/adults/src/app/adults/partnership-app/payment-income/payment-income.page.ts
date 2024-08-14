import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-payment-income',
  templateUrl: './payment-income.page.html',
  styleUrls: ['./payment-income.page.scss'],
})
export class PaymentIncomePage implements OnInit {

  referralCode: string = '';
  ReferralLink: string = '';
  isCopy = true;
  isReferraLinkCopy = true;
  constructor(public ngNavigatorShareService: NgNavigatorShareService, public router: Router) {
    this.referralCode = localStorage.getItem('CouponCode');
    this.ReferralLink = localStorage.getItem('ReferralLink');
  }


  ngOnInit() {
  }
  copyText(text, type): void {
    navigator.clipboard.writeText(text).catch(() => {
      console.error("Unable to copy text");
    });
    if (type == 'link') {
      this.isReferraLinkCopy = false;
    } else {
      this.isCopy = false;
    }
    setTimeout(() => {
      if (type == 'link') {
        this.isReferraLinkCopy = true;
      } else {
        this.isCopy = true;
      }
    }, 4000);
  }

  share() {
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I’ve just subscribed to the amazing HappierMe app and joined their partnership program to help share this with others and make the world a better place. The app is free to download and browse. This is a short video introduction: https://youtu.be/GYbpYnkGJ0U. If you like it and want to subscribe use this referral code to get 10% off – " + this.referralCode + ". If you want to find out more about the partnership program – https://humanwisdom.me/adults/partnership-webpage"
    }).then((response) => {

    })
      .catch((error) => {
        console.log(error);
      });
  }

  routerToReport() {
    this.router.navigate(['adults/partnership-report/income-activity']);
  }
  routeToDashboard() {
    this.router.navigate(['/adults/adult-dashboard'])
  }
  routerToUpdatePaymentDetails() {
    this.router.navigate(['adults/partnership-app/payment-bank']);
  }
}
