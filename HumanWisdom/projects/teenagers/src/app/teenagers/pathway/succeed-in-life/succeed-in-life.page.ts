import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../../../../../../shared/services/constant';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { TeenagersService } from '../../teenagers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-succeed-in-life',
  templateUrl: './succeed-in-life.page.html',
  styleUrls: ['./succeed-in-life.page.scss'],
})
export class SucceedInLifePage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;

  public natureP: any
  public breathingP: any
  public meditationP: any
  public ntP: any
  public gamP: any

  constructor(public router: Router, public service: TeenagersService,
    public logeventservice: LogEventService,
    private location: Location, private navigationService: NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.natureP = d['ModUserScrPc'].find(e => e.ModuleId  == 28)?.Percentage;
      this.breathingP = d['ModUserScrPc'].find(e => e.ModuleId == 29)?.Percentage;
      this.meditationP = d['ModUserScrPc'].find(e => e.ModuleId == 22)?.Percentage;
      this.ntP = d['ModUserScrPc'].find(e => e.ModuleId == 30)?.Percentage;
      this.gamP = d['ModUserScrPc'].find(e => e.ModuleId == 51)?.Percentage;
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
