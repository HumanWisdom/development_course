import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../../../../../adults/src/app/adults/adults.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location, private router: Router, private service: AdultsService,
      public logeventservice: LogEventService,private navigationService:NavigationService) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.defaultGoBack();
    }else{
      this.router.navigate([url]);
    }
  }

  defaultGoBack() {
    if (window.location.href.includes('teenagers')) {
      this.router.navigate(['/teenagers/feel-better-now']);
    } else {
      this.router.navigate(['/adults/feel-better-now']);
    }
  }

  logEvent(event, url){
    this.logeventservice.logEvent(event);
    this.router.navigate([url]);
   }


}
