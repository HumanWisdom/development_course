import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../../../../../../shared/services/constant';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { TeenagersService } from '../../teenagers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-your-emotions',
  templateUrl: './manage-your-emotions.page.html',
  styleUrls: ['./manage-your-emotions.page.scss'],
})
export class ManageYourEmotionsPage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;

  public anxietyP: any
  public depressionP: any
  public pleasureP: any
  public sorrowP: any
  public lonelinessP: any
  public angerP: any
  public deathP: any


  constructor(public router: Router, public service: TeenagersService,
    public logeventservice: LogEventService,
    private location: Location, private navigationService: NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
       this.anxietyP = d['ModUserScrPc'].find(e => e.ModuleId  == 112)?.Percentage;
      this.depressionP = d['ModUserScrPc'].find(e => e.ModuleId == 156)?.Percentage;
      this.pleasureP = d['ModUserScrPc'].find(e => e.ModuleId == 124)?.Percentage;
      this.sorrowP = d['ModUserScrPc'].find(e => e.ModuleId == 116)?.Percentage;
      this.lonelinessP = d['ModUserScrPc'].find(e => e.ModuleId == 117)?.Percentage;
      this.angerP = d['ModUserScrPc'].find(e => e.ModuleId == 118)?.Percentage;
      this.deathP = d['ModUserScrPc'].find(e => e.ModuleId == 130)?.Percentage;
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
