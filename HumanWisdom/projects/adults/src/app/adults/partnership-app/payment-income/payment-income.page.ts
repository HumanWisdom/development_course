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
    this.router.navigate(['/adults/adult-dashboard'])
  }
  routerToUpdatePaymentDetails() {
    this.router.navigate(['adults/partnership-app/payment-bank']);
  }
}
