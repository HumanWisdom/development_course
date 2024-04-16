import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../../../../../../shared/services/constant';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { TeenagersService } from '../../teenagers.service';
import { Location } from '@angular/common';

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

  constructor(public router: Router, public service: TeenagersService,
    public logeventservice: LogEventService,
    private location: Location, private navigationService: NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.comparisonP = d['ModUserScrPc'].find(e => e.ModuleId  == 111)?.Percentage;
      this.conditioningP = d['ModUserScrPc'].find(e => e.ModuleId == 105)?.Percentage;
      this.reactiveP = d['ModUserScrPc'].find(e => e.ModuleId == 113)?.Percentage;
      this.selfImageP = d['ModUserScrPc'].find(e => e.ModuleId == 114)?.Percentage;
      this.selfInterestP = d['ModUserScrPc'].find(e => e.ModuleId == 115)?.Percentage;
      this.identityP = d['ModUserScrPc'].find(e => e.ModuleId == 119)?.Percentage;
      this.emotionalNeedsP = d['ModUserScrPc'].find(e => e.ModuleId == 120)?.Percentage;
      this.innerBoredomP = d['ModUserScrPc'].find(e => e.ModuleId == 121)?.Percentage;
      this.natureOfIP = d['ModUserScrPc'].find(e => e.ModuleId == 122)?.Percentage;
      this.approvalP = d['ModUserScrPc'].find(e => e.ModuleId == 123)?.Percentage;
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
    // this.logeventservice.logEvent('click_back');
    // var url = this.navigationService.navigateToBackLink();
    // if (url == null) {
      this.location.back();
    // }
  }
}
