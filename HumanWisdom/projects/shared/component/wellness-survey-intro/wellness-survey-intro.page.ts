import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { LogEventService } from '../../services/log-event.service';
import { NavigationService } from '../../services/navigation.service';
import { Constant } from '../../services/constant';

@Component({
  selector: 'app-wellness-survey-intro',
  templateUrl: './wellness-survey-intro.page.html',
  styleUrls: ['./wellness-survey-intro.page.scss'],
})
export class WellnessSurveyIntroPage implements OnInit {
  isAdults = true;

  constructor(
    private location: Location,
    private router: Router,
    public logeventservice: LogEventService,
    private navigation: NavigationService
  ) { }

  startSurvey() {
      this.router.navigate(["/" + SharedService.getprogramName() + '/wellness-survey']);
    }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  goBack() {
    var url = this.navigation.navigateToBackLink();
    if (url == null) {
      url = SharedService.getDataFromLocalStorage(Constant.NaviagtedFrom);
      if (url && url != null && url != 'null') {
        this.router.navigate([url]);
      } else {
        this.location.back();
      }
    } else {
      this.router.navigate([url]);
    }
  }
}
