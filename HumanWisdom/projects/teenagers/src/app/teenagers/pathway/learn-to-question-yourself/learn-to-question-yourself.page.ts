import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../../../../../../shared/services/constant';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { TeenagersService } from '../../teenagers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-learn-to-question-yourself',
  templateUrl: './learn-to-question-yourself.page.html',
  styleUrls: ['./learn-to-question-yourself.page.scss'],
})
export class LearnToQuestionYourselfPage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;

  public benefitsSelfAwarenessP: any
  public beginJourneyP: any
  public threeStepsEnquiryP: any
  public insightP: any
  public awarenessP: any
  public noJudgementP: any
  public questionKeyP: any
  public lookWithoutLanguageP: any
  public obstaclesEnquiryP: any

  constructor(public router: Router, public service: TeenagersService,
    public logeventservice: LogEventService,
    private location: Location, private navigationService: NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.benefitsSelfAwarenessP = d['ModUserScrPc'].find(e => e.ModuleId  == 95)?.Percentage;
      this.beginJourneyP = d['ModUserScrPc'].find(e => e.ModuleId == 96)?.Percentage;
      this.threeStepsEnquiryP = d['ModUserScrPc'].find(e => e.ModuleId == 97)?.Percentage;
      this.insightP = d['ModUserScrPc'].find(e => e.ModuleId == 99)?.Percentage;
      this.awarenessP = d['ModUserScrPc'].find(e => e.ModuleId == 100)?.Percentage;
      this.noJudgementP = d['ModUserScrPc'].find(e => e.ModuleId == 101)?.Percentage;
      this.questionKeyP = d['ModUserScrPc'].find(e => e.ModuleId == 102)?.Percentage;
      this.lookWithoutLanguageP = d['ModUserScrPc'].find(e => e.ModuleId == 103)?.Percentage;
      this.obstaclesEnquiryP = d['ModUserScrPc'].find(e => e.ModuleId == 104)?.Percentage;
    });
    this.logeventservice.logEvent('view_develop_calm_mind');
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  getPoint() {

  }

  goBack() {
    this.logeventservice.logEvent('click_back');
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
  }
}
