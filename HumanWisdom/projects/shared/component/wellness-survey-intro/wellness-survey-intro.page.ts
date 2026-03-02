import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { LogEventService } from '../../services/log-event.service';
import { NavigationService } from '../../services/navigation.service';
import { Constant } from '../../services/constant';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-wellness-survey-intro',
  templateUrl: './wellness-survey-intro.page.html',
  styleUrls: ['./wellness-survey-intro.page.scss'],
})
export class WellnessSurveyIntroPage implements OnInit {
  isAdults = true;
  userId: any;
  loading = false;
  constructor(
    private location: Location,
    private router: Router,
    public logeventservice: LogEventService,
    private navigation: NavigationService,
    private service: OnboardingService
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
    this.userId = JSON.parse(localStorage.getItem("userId"))
    if (this.userId) {
      this.apiCall();
    }
  }

  apiCall() {
    this.loading = true;
    this.service.clickModule(50, this.userId)
      .subscribe(res => {
        let qrList = res
        let questionA = qrList.ListOfQueOpts;
        let obj = {};
        let result = [];
        questionA.forEach((d) => {
          let dataObj = {};

          if (obj[d['Que']]?.OptId) {
            dataObj['OptId'] = obj[d['Que']]['OptId'].concat(d['OptId'])
          } else {
            dataObj['OptId'] = [d['OptId']]
          }

          if (obj[d['Que']]?.OptStr) {
            dataObj['OptStr'] = obj[d['Que']]['OptStr'].concat(d['OptStr'])
          } else {
            dataObj['OptStr'] = [d['OptStr']]
          }

          if (obj[d['Que']]?.Points) {
            dataObj['Points'] = obj[d['Que']]['Points'].concat(d['Points'])
          } else {
            dataObj['Points'] = [d['Points']]
          }
          obj[d['Que']] = dataObj;
        });

        for (const property in obj) {
          let objRes = {
            "Que": property,
            "OptStr": obj[property]['OptStr'],
            "Points": obj[property]['Points'],
            "OptId": obj[property]['OptId'],
          };
          result.push(objRes);
        }

        localStorage.setItem("questionAns", JSON.stringify(result));
        this.loading = false;
      },
        e => {
          console.log(e);
          this.loading = false;
        })
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
