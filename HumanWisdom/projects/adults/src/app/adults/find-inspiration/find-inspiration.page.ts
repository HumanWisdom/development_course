import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LogEventService } from '../../../../../shared/services/log-event.service';

@Component({
  selector: 'app-find-inspiration',
  templateUrl: './find-inspiration.page.html',
  styleUrls: ['./find-inspiration.page.scss'],
})
export class FindInspirationPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location,private router:Router, public logeventservice: LogEventService) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }
   rightToJournal(){
    this.logeventservice.logEvent('click_guided-questions');
    this.router.navigate(["/adults/journal"], { queryParams: {isGuided: true}});
   }
   
  goBack() {
    this.location.back()
  }

  logEvent(event, url){
    this.logeventservice.logEvent(event);
    this.router.navigate([url]);
   }

}