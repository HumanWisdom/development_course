import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LogEventService } from '../../../services/log-event.service';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public isSubscriber = false;
  public isLoggedIn = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location,
    private router: Router,
    private logeventservice:LogEventService
    ) {
    localStorage.setItem('feelbetternow', 'T')
   }

  ngOnInit() {
    this.isSubscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
    this.isLoggedIn = localStorage.getItem("isloggedin") === 'T' ? true : false;
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    // this.location.back()
    if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigate(['teenagers/teenager-dashboard']);
    } else {
      this.router.navigate(["/adults/adult-dashboard"])
    }
     }

  enableRoute(url) {
     this.logeventservice.logEvent("click_"+ String(url).split("/")[2]);
     if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigate([`teenagers/${url}`]);
    } else {
      this.router.navigate([url]) 
    }
  }
}
