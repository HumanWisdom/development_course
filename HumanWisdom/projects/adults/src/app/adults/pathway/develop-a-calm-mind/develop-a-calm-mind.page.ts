import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service'; 

@Component({
  selector: 'app-develop-a-calm-mind',
  templateUrl: './develop-a-calm-mind.page.html',
  styleUrls: ['./develop-a-calm-mind.page.scss'],
})
export class DevelopACalmMindPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(public router: Router, public service: AdultsService,
    public logeventservice: LogEventService,
    private location: Location,private navigationService:NavigationService) { }

  ngOnInit() {

    this.logeventservice.logEvent('view_develop_calm_mind');
     SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }



 goBack() {
  this.logeventservice.logEvent('click_back');
    var url = this.navigationService.navigateToBackLink();
    if(url==null){
      this.location.back();
    }
  }
}
