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

  constructor(public router: Router, public service: AdultsService,
     private location: Location, public logeventservice: LogEventService,
    private navigationService:NavigationService) { }

  ngOnInit() {
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
