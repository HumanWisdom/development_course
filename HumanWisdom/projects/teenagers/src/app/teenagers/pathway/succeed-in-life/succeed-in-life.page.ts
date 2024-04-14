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

  public stressP: any
  public relationshipsP: any
  public communicationP: any
  public happinessP: any
  public loveP: any
  public criticismP: any
  public addictionP: any
  public foodP: any
  public esteemP: any
  public bullyingP: any
  public opinionsP: any
  public socialmedP: any
  public kindnessP: any
  public examP: any

  // public workP: any
  // public leadershipP: any
  // public moneyP: any
  public successP: any
  public decisionsP: any
  public peaceP: any
  public diversityP: any
  

  constructor(public router: Router, public service: TeenagersService,
    public logeventservice: LogEventService,
    private location: Location, private navigationService: NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.stressP = d['ModUserScrPc'].find(e => e.ModuleId  == 125)?.Percentage;
      this.relationshipsP = d['ModUserScrPc'].find(e => e.ModuleId == 131)?.Percentage;
      this.communicationP = d['ModUserScrPc'].find(e => e.ModuleId == 132)?.Percentage;
      this.happinessP = d['ModUserScrPc'].find(e => e.ModuleId == 133)?.Percentage;
      this.loveP = d['ModUserScrPc'].find(e => e.ModuleId == 134)?.Percentage;

      this.criticismP = d['ModUserScrPc'].find(e => e.ModuleId == 136)?.Percentage;
      this.addictionP = d['ModUserScrPc'].find(e => e.ModuleId == 127)?.Percentage;
      this.foodP = d['ModUserScrPc'].find(e => e.ModuleId == 128)?.Percentage;
      this.esteemP = d['ModUserScrPc'].find(e => e.ModuleId == 126)?.Percentage;
      this.bullyingP = d['ModUserScrPc'].find(e => e.ModuleId == 135)?.Percentage;

      this.opinionsP = d['ModUserScrPc'].find(e => e.ModuleId == 140)?.Percentage;
      this.socialmedP = d['ModUserScrPc'].find(e => e.ModuleId == 138)?.Percentage;
      this.kindnessP = d['ModUserScrPc'].find(e => e.ModuleId == 137)?.Percentage;
      this.examP = d['ModUserScrPc'].find(e => e.ModuleId == 139)?.Percentage;
      // this.workP = d['ModUserScrPc'].find(e => e.ModuleId == 58)?.Percentage;
      // this.leadershipP = d['ModUserScrPc'].find(e => e.ModuleId == 59)?.Percentage;
      // this.moneyP = d['ModUserScrPc'].find(e => e.ModuleId == 73)?.Percentage;
      this.successP = d['ModUserScrPc'].find(e => e.ModuleId == 141)?.Percentage;

      this.decisionsP = d['ModUserScrPc'].find(e => e.ModuleId == 142)?.Percentage;
      this.peaceP = d['ModUserScrPc'].find(e => e.ModuleId == 129)?.Percentage;
      //this.diversityP = d['ModUserScrPc'].find(e => e.ModuleId == 143)?.Percentage;
     
     
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
