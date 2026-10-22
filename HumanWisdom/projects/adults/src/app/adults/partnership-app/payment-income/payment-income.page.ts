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
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      this.fallbackCopy(text);
    }
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

  private fallbackCopy(text: string): void {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Copy failed:', err);
    }
    document.body.removeChild(el);
  }

  share(type) {
    let textDes = '';
    if(type == 'link'){
     textDes = `I've just subscribed to the HappierMe app. I love the way it 
     guides you to deal with life's challenges and grow into the
      person you want to be. It covers mental health, relationships, 
      emotions, unhelpful habits and more. Its worth checking out, via this link ${this.ReferralLink}.`
    }else{
     textDes =  ` I've just subscribed to the HappierMe app. 
     I love the way it guides you to deal with life's challenges and grow into the 
     person you want to be. It covers mental health, relationships, emotions, unhelpful
      habits and more. Go to https://happierme.app and use this ${this.referralCode} code to get a 10% discount if you wish to subscribe.`
    }
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: textDes
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
    this.router.navigate(['/adults/today'])
  }
  routerToUpdatePaymentDetails() {
    this.router.navigate(['adults/partnership-app/payment-bank']);
  }
}
