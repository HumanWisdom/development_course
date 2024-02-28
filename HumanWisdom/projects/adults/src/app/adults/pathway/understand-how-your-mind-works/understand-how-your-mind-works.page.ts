import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service'; 

@Component({
  selector: 'app-understand-how-your-mind-works',
  templateUrl: './understand-how-your-mind-works.page.html',
  styleUrls: ['./understand-how-your-mind-works.page.scss'],
})
export class UnderstandHowYourMindWorksPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  public comparisonP: any
  public conditioningP: any
  public reactiveP: any
  public selfImageP: any
  public selfInterestP: any
  public identityP: any
  public emotionalNeedsP: any
  public innerBoredomP: any
  public natureOfIP: any
  public approvalP: any



  constructor(public router: Router, public service: AdultsService, 
    public logeventservice: LogEventService,
    private location: Location,private navigationService:NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.comparisonP = d['ModUserScrPc'].find(e => e.ModuleId  == 7)?.Percentage;
      this.conditioningP = d['ModUserScrPc'].find(e => e.ModuleId == 15)?.Percentage;
      this.reactiveP = d['ModUserScrPc'].find(e => e.ModuleId == 54)?.Percentage;
      this.selfImageP = d['ModUserScrPc'].find(e => e.ModuleId == 25)?.Percentage;
      this.selfInterestP = d['ModUserScrPc'].find(e => e.ModuleId == 55)?.Percentage;
      this.identityP = d['ModUserScrPc'].find(e => e.ModuleId == 21)?.Percentage;
      this.emotionalNeedsP = d['ModUserScrPc'].find(e => e.ModuleId == 18)?.Percentage;
      this.innerBoredomP = d['ModUserScrPc'].find(e => e.ModuleId == 56)?.Percentage;
      this.natureOfIP = d['ModUserScrPc'].find(e => e.ModuleId == 57)?.Percentage;
      this.approvalP = d['ModUserScrPc'].find(e => e.ModuleId == 91)?.Percentage;
    });

    this.logeventservice.logEvent('view_understand-how-your-mind-works');
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);

  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if(url==null){
      this.location.back();
    }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }


}
