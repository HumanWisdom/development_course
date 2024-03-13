import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../../../../../adults/src/app/adults/adults.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location, private router: Router, private service: AdultsService,  public logeventservice: LogEventService) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    if((this.service.previousUrl.length>0 && this.service.previousUrl.includes("/pathway/")) || (this.service.previousUrl.length==0))
    {
      this.router.navigate(['/adults/search'])
    }
      else
    {
      this.location.back()

    }


  }

  logEvent(event, url){
    this.logeventservice.logEvent(event);
    this.router.navigate([url]);
   }


}
