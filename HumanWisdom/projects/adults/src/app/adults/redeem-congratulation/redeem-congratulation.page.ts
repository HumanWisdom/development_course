import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'redeem-congratulation',
  templateUrl: './redeem-congratulation.page.html',
  styleUrls: ['./redeem-congratulation.page.scss'],
})
export class RedeemCongratulationPage {
  public yearormonth = ''

  constructor(
    private router: Router
  ) {
    this.yearormonth = localStorage.getItem('yearormonth');
  }

  route(event) {
    if(event === 'dash') {
      this.router.navigate(['/adults/adult-dashboard'])
    }else {
      this.router.navigate(['/onboarding/myprogram'])
    }
  }
}


