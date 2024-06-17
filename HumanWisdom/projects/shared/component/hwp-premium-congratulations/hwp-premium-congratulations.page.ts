import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
@Component({
  selector: 'app-hwp-premium-congratulations',
  templateUrl: './hwp-premium-congratulations.page.html',
  styleUrls: ['./hwp-premium-congratulations.page.scss'],
})
export class HwpPremiumCongratulationsPage implements OnInit {
   isAdults=true;
  constructor(public router:Router,private location: Location) { }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  JoinHumanWisdom(){
    localStorage.setItem('btnClickBecomePartner','true');
    this.router.navigate(['adults/partnership-app/referral-code']);
  }
  
  NotNow(){
    this.router.navigate([ `/${SharedService.getprogramName()}/hwp-premium-congratulations`])
  }
  GoToIndex(){
    this.router.navigate(['adults/partnership-webpage/partnership-index']);
  }

  goBack() 
  {
    this.location.back();
  }
  ProceedToDashboard(){
      this.router.navigate([SharedService.getDashboardUrls()]);
  }
}
