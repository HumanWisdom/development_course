import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
// import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from "../../services/shared.service";
import { ProgramType } from "../../models/program-model";


@Component({
  selector: 'app-tn-close',
  templateUrl: './tn-close.component.html',
  styleUrls: ['./tn-close.component.scss'],
})
export class TnCloseComponent implements OnInit {
        isAdults = false;


  constructor(private location:Location, private navigationService: NavigationService, 
 
    private router: Router) { }

  ngOnInit() {
        if (SharedService.ProgramId == ProgramType.Adults) {
          this.isAdults = true;
        } else {
          this.isAdults = false;
        }
  }

 /*  goBack(){
    if (this.service.previousUrl !== '') {
      this.location.back()
    } else {
      if (SharedService.ProgramId == ProgramType.Teenagers) {
        this.router.navigate(['/teenagers/teenager-dashboard'])
      }
      else{
      this.router.navigate(['/adults/adult-dashboard'])
      }
      this.location.back()
    }
  } */

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url.includes("daily-checkin-save")) {
      this.router.navigate([SharedService.getDashboardUrls()]);
    } else if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }

}
