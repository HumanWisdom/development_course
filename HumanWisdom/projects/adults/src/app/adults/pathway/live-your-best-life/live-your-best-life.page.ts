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

  constructor(public router: Router, public service: AdultsService,
     private location: Location,   public logeventservice: LogEventService,
    private navigationService:NavigationService) { }

  ngOnInit() {
    this.logeventservice.logEvent('view_Succeed_in_life');
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
