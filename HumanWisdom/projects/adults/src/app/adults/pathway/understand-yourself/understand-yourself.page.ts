import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service'; 

@Component({
  selector: 'app-understand-yourself',
  templateUrl: './understand-yourself.page.html',
  styleUrls: ['./understand-yourself.page.scss'],
})
export class UnderstandYourselfPage implements OnInit {

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
 



  constructor(public router: Router, public service: AdultsService,
     private location: Location, public logeventservice: LogEventService,
    private navigationService:NavigationService) { }

  ngOnInit() {

    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.benefitsSelfAwarenessP = d['ModUserScrPc'].find(e => e.ModuleId  == 26)?.Percentage;
      this.beginJourneyP = d['ModUserScrPc'].find(e => e.ModuleId == 36)?.Percentage;
      this.threeStepsEnquiryP = d['ModUserScrPc'].find(e => e.ModuleId == 37)?.Percentage;
      this.insightP = d['ModUserScrPc'].find(e => e.ModuleId == 38)?.Percentage;
      this.awarenessP = d['ModUserScrPc'].find(e => e.ModuleId == 39)?.Percentage;
      this.noJudgementP = d['ModUserScrPc'].find(e => e.ModuleId == 40)?.Percentage;
      this.questionKeyP = d['ModUserScrPc'].find(e => e.ModuleId == 41)?.Percentage;
      this.lookWithoutLanguageP = d['ModUserScrPc'].find(e => e.ModuleId == 42)?.Percentage;
      this.obstaclesEnquiryP = d['ModUserScrPc'].find(e => e.ModuleId == 43)?.Percentage;
   
    });

    this.logeventservice.logEvent('view_Learn-question-yourself');
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);

  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if(url==null){
      this.location.back();
    }
  }

}
