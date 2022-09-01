import { Component, OnInit } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-payment-plant-trees',
  templateUrl: './payment-plant-trees.page.html',
  styleUrls: ['./payment-plant-trees.page.scss'],
})
export class PaymentPlantTreesPage implements OnInit {
 referralCode:string='';
  constructor(public ngNavigatorShareService:NgNavigatorShareService) {
    this.referralCode=localStorage.getItem('referralCode');
   }

  ngOnInit() {
  }

  copyText(): void {
    navigator.clipboard.writeText(this.referralCode).catch(() => {
      console.error("Unable to copy text");
    });
  }
  
  share(){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the partnership program and Login using my Referal Code'+ this.referralCode
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
