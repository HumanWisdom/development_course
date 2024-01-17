import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-humanwisdom-premium',
  templateUrl: './humanwisdom-premium.page.html',
  styleUrls: ['./humanwisdom-premium.page.scss'],
})
export class HumanwisdomPremiumPage implements OnInit {

  constructor(public router :Router,private location: Location) { }

  ngOnInit() {
  }
  JoinHumanWisdom(){
    localStorage.setItem('btnClickBecomePartner','true');
    this.router.navigate(['adults/partnership-app'],{skipLocationChange:true,replaceUrl:true});
  }
  NotNow(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
  GoToIndex(){
    this.router.navigate(['adults/partnership-webpage/partnership-index']);
  }

  goBack() 
  {
    this.location.back();
  }
}
