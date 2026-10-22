import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-payment-plant-trees',
  templateUrl: './payment-plant-trees.page.html',
  styleUrls: ['./payment-plant-trees.page.scss'],
})
export class PaymentPlantTreesPage implements OnInit {
 referralCode:string='';
 isCopy=true;
  constructor(public ngNavigatorShareService:NgNavigatorShareService,public router:Router) {
    this.referralCode=localStorage.getItem('referralCode');
   }

  ngOnInit() {
  }

  copyText(): void {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.referralCode).catch(() => this.fallbackCopy(this.referralCode));
    } else {
      this.fallbackCopy(this.referralCode);
    }
    this.isCopy = false;
    setTimeout(() => {
      this.isCopy = true;
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
  
  share(){
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text:  "Hi! I’ve just subscribed to the amazing HappierMe app and joined their partnership program to help share this with others and make the world a better place. The app is free to download and browse. This is a short video introduction: https://youtu.be/GYbpYnkGJ0U. If you like it and want to subscribe use this referral code to get 10% off – "+this.referralCode+". If you want to find out more about the partnership program – https://humanwisdom.me/adults/partnership-webpage"
    }).then( (response) => {
      
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  routerToReport(){
    this.router.navigate(['adults/partnership-report/tree-plantation-report']);
  }
  routeToDashboard(){
    this.router.navigate(['/adults/today'])
  }
}
