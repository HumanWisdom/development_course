import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { LogEventService } from '../../services/log-event.service';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';

@Component({
  selector: 'app-start-your-free-trial',
  templateUrl: './start-your-free-trial.page.html',
  styleUrls: ['./start-your-free-trial.page.scss'],
})
export class StartYourFreeTrialPage implements OnInit {
  isAdults = false;
constructor(private router: Router,private location: Location, private servive: AdultsService,
 public logeventservice: LogEventService,
    private navigateService:NavigationService) { }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.logeventservice.logEvent('view_start_trial');
  }

  tryFreeSubscribe(){
    this.logeventservice.logEvent('click_start_trial');
      if (this.CheckIfUserIsLoggedIn()) {
        this.router.navigate([`/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`]);
      } else {
        SharedService.UrlToRedirect=`/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`;
        this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`]);
      }
  }

  back(){
    this.logeventservice.logEvent('click_back');
    let curr = this.servive.previousUrl;
    let loggedin = localStorage.getItem("isloggedin")
    if((!loggedin || loggedin || loggedin === 'F' || loggedin === 'T') && curr && (curr.includes('view-stories?sId') || curr.includes('wisdom-shorts/'))){
      window.history.go(-2)
    }else {
     

    var url = this.navigateService.goBack();

       console.log(url);

      if(url==null){
        this.router.navigateByUrl(SharedService.getDashboardUrls());
      }   
    }
  }


  CheckIfUserIsLoggedIn() {
    if (SharedService.getDataFromLocalStorage(Constant.Isloggedin) == Constant.ShortTrue) {
      return true;
    }
    return false;
  }

  routeToDashboard(){
    this.logeventservice.logEvent('click_will_do_later');

    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }
}
