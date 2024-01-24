import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';
import { Router } from '@angular/router';
import { LogEventService } from '../../../../../../shared/services/log-event.service'; 


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
