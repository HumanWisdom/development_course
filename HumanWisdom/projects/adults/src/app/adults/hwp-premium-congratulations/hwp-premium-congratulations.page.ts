import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hwp-premium-congratulations',
  templateUrl: './hwp-premium-congratulations.page.html',
  styleUrls: ['./hwp-premium-congratulations.page.scss'],
})
export class HwpPremiumCongratulationsPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  JoinHumanWisdom(){
    localStorage.setItem('btnClickBecomePartner','true');
    this.router.navigate(['adults/partnership-app/referral-code']);
  }
  NotNow(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
  GoToIndex(){
    this.router.navigate(['adults/partnership-webpage/partnership-index']);
  }
}
