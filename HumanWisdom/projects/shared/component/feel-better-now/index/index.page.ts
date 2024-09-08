import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LogEventService } from '../../../services/log-event.service';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { NavigationService } from "../../../services/navigation.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public isSubscriber = false;
  public isLoggedIn = false;
  isAdults = true;
  
  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location,
    private router: Router,
    private logeventservice:LogEventService,
    private navigationService:NavigationService
    ) {
    localStorage.setItem('feelbetternow', 'T')
   }

  ngOnInit() {
    this.isSubscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
    this.isLoggedIn = localStorage.getItem("isloggedin") === 'T' ? true : false;

    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  routeToBlog(){
    this.router.navigateByUrl('/'+ SharedService.getprogramName() + '/blog-article?sId=Difficult-emotions:-a-guide-to-freedom')
  }

    goBack() {
      var url = this.navigationService.navigateToBackLink();
      console.log("url=" + url)
      if (url == null) {
       this.location.back();
      }else{
        this.router.navigate([url]);
      }
     }

  enableRoute(url) {
     this.logeventservice.logEvent("click_"+ String(url).split("/")[2]);
     if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigate([`teenagers/${url}`]);
    }
    else if (SharedService.ProgramId == ProgramType.Adults) {
      this.router.navigate([`adults/${url}`]);
    }
    else {
      this.router.navigate([url]) 
    }
  }
}
