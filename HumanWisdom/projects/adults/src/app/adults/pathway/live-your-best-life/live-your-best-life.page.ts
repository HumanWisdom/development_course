import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service'; 

@Component({
  selector: 'app-live-your-best-life',
  templateUrl: './live-your-best-life.page.html',
  styleUrls: ['./live-your-best-life.page.scss'],
})
export class LiveYourBestLifePage implements OnInit {

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
  public workP: any
  public leadershipP: any
  public moneyP: any
  public successP: any
  public decisionsP: any
  public peaceP: any
  public diversityP: any
  public kindnessP: any
  public socialmedP: any
 



  constructor(public router: Router, public service: AdultsService,
     private location: Location,   public logeventservice: LogEventService,
    private navigationService:NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.stressP = d['ModUserScrPc'].find(e => e.ModuleId  == 44)?.Percentage;
      this.relationshipsP = d['ModUserScrPc'].find(e => e.ModuleId == 47)?.Percentage;
      this.communicationP = d['ModUserScrPc'].find(e => e.ModuleId == 53)?.Percentage;
      this.happinessP = d['ModUserScrPc'].find(e => e.ModuleId == 23)?.Percentage;
      this.loveP = d['ModUserScrPc'].find(e => e.ModuleId == 62)?.Percentage;

      this.criticismP = d['ModUserScrPc'].find(e => e.ModuleId == 16)?.Percentage;
      this.addictionP = d['ModUserScrPc'].find(e => e.ModuleId == 45)?.Percentage;
      this.foodP = d['ModUserScrPc'].find(e => e.ModuleId == 46)?.Percentage;
      this.esteemP = d['ModUserScrPc'].find(e => e.ModuleId == 17)?.Percentage;
      this.bullyingP = d['ModUserScrPc'].find(e => e.ModuleId == 76)?.Percentage;

      this.opinionsP = d['ModUserScrPc'].find(e => e.ModuleId == 49)?.Percentage;
      this.workP = d['ModUserScrPc'].find(e => e.ModuleId == 58)?.Percentage;
      this.leadershipP = d['ModUserScrPc'].find(e => e.ModuleId == 59)?.Percentage;
      this.moneyP = d['ModUserScrPc'].find(e => e.ModuleId == 73)?.Percentage;
      this.successP = d['ModUserScrPc'].find(e => e.ModuleId == 48)?.Percentage;

      this.decisionsP = d['ModUserScrPc'].find(e => e.ModuleId == 77)?.Percentage;
      this.peaceP = d['ModUserScrPc'].find(e => e.ModuleId == 63)?.Percentage;
      this.diversityP = d['ModUserScrPc'].find(e => e.ModuleId == 143)?.Percentage;
      this.kindnessP = d['ModUserScrPc'].find(e => e.ModuleId == 158)?.Percentage;
      this.socialmedP = d['ModUserScrPc'].find(e => e.ModuleId == 159)?.Percentage;

    });
    
    this.logeventservice.logEvent('view_Succeed_in_life');
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);

  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if(url==null){
      this.location.back();
    }
    this.router.navigate([url]);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

}
