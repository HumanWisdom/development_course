import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from '../../../../shared/models/program-model';

@Component({
  selector: 'redeem-congratulation',
  templateUrl: './redeem-congratulation.page.html',
  styleUrls: ['./redeem-congratulation.page.scss'],
})
export class RedeemCongratulationPage {
  public yearormonth = ''
  public isAdults = true;
  public programName = SharedService.getprogramName();

  constructor(
    private router: Router
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.yearormonth = localStorage.getItem('yearormonth');
  }

  route(event) {
    if(event === 'dash') {
      if (this.isAdults) {
        this.router.navigate(['/adults/adult-dashboard'])
      } else {
        this.router.navigate(['/teenagers/teenager-dashboard'])
      }
    }else {
      this.router.navigate(['/'+ SharedService.getprogramName() +'/onboarding/myprogram'])
    }
  }
}


