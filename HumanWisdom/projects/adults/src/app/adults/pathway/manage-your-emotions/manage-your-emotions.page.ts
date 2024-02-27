import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';  
import { Constant } from '../../../../../../shared/services/constant'; 
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service'; 

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


  constructor(public router: Router, public service: AdultsService,
     private location: Location,     public logeventservice: LogEventService,
     private navigationService: NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.anxietyP = d['ModUserScrPc'].find(e => e.ModuleId  == 19)?.Percentage;
      this.depressionP = d['ModUserScrPc'].find(e => e.ModuleId == 92)?.Percentage;
      this.pleasureP = d['ModUserScrPc'].find(e => e.ModuleId == 20)?.Percentage;
      this.sorrowP = d['ModUserScrPc'].find(e => e.ModuleId == 60)?.Percentage;
      this.lonelinessP = d['ModUserScrPc'].find(e => e.ModuleId == 61)?.Percentage;
      this.angerP = d['ModUserScrPc'].find(e => e.ModuleId == 14)?.Percentage;
      this.deathP = d['ModUserScrPc'].find(e => e.ModuleId == 64)?.Percentage;
    });
    this.logeventservice.logEvent('view_manage-your-emotions');
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
