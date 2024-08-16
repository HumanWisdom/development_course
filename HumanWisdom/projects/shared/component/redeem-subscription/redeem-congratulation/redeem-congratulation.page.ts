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
  public programName = '';

  constructor(
    private router: Router
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    let res = localStorage.getItem('yearormonth');

    this.yearormonth = res.split('-')[0];
    this.programName = res.split('-')[1];
  }

  route(event) {
    if (event === 'dash') {
      if (this.programName !== 'Teenagers') {
        this.router.navigate(['/adults/adult-dashboard'])
      } else {
        this.router.navigate(['/teenagers/teenager-dashboard'])
      }
    } else {
      this.router.navigate(['/' + this.programName.toLowerCase() + '/onboarding/myprogram'])
    }
  }
}


