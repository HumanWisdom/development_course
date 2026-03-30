import { Platform } from "@angular/cdk/platform";
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-session-end',
  templateUrl: './session-end.component.html',
  styleUrls: ['./session-end.component.scss'],
})

export class SessionEndComponent implements OnInit {
  @Input() link: string;
  @Input() name: string;
  @Input() progressImg: string;
  @Input() progressPercent: number;
  @Input() progressText: string;
  @Input() toc: string;
  @Input() bg: string;
  token = localStorage.getItem("shareToken")
  socialShare = false
  shareUrl: any
  isAdults: boolean = true; 


  constructor(private router: Router, public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService) {
    localStorage.setItem("progressbarvalue", '0')
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    
      if (SharedService.ProgramId == ProgramType.Adults) {
          this.isAdults = true;
        } else {
          this.isAdults = false;
        }
  }

  shareIndex() {
    
    //this.socialShare=true
    this.shareUrl = "https://happierme.app/adults/" + this.toc + `?t=${this.token}`
    

    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser) ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     }
   */

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.shareUrl
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });

  }

  proceed() {
    this.router.navigate([this.link])
  }
  routeJournal() {
    localStorage.setItem('NaviagtedFrom', this.router.url);
    if (this.isAdults) {
      this.router.navigate(['/adults/journal'])
    } else {
      this.router.navigate(['/teenagers/journal'])
    }
  }

  routeForum() {
    localStorage.setItem('NaviagtedFrom', this.router.url);
    if (this.isAdults) {
      this.router.navigate(['/forum'])
    } else {
      this.router.navigate(['/teenagers/forum'])
    }
  }
}
