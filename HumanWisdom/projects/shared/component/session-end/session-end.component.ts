import { Platform } from "@angular/cdk/platform";
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

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
  token = JSON.parse(localStorage.getItem("token"))
  socialShare = false
  shareUrl: any

  constructor(private router: Router, public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService) {
    localStorage.setItem("progressbarvalue", '0')
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    console.log(this.link, this.name, this.progressImg, this.progressText, this.progressPercent)
  }

  shareIndex() {
    console.log(this.toc)
    //this.socialShare=true
    this.shareUrl = "https://humanwisdom.me/adults/" + this.toc + `?t=${this.token}`
    console.log(this.shareUrl)

    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser) ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     }
   */

    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.shareUrl
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });

  }

  proceed() {
    this.router.navigate([this.link])
  }
  routeJournal() {
    this.router.navigate(['/adults/journal'])
  }

  routeForum() {
    this.router.navigate(['/forum'])
  }
}
