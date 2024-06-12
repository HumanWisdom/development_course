import { Platform } from "@angular/cdk/platform";
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
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
  token = localStorage.getItem("shareToken")
  socialShare = false
  shareUrl: any

  constructor(private router: Router, public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService,private el: ElementRef,private renderer: Renderer2) {
    localStorage.setItem("progressbarvalue", '0')
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    console.log(this.link, this.name, this.progressImg, this.progressText, this.progressPercent)
  }

  ngAfterViewInit() {
    const svgElement = this.el.nativeElement.querySelector('svg');
    if (svgElement) {
      const circleElement = svgElement.querySelector('circle');
      const pathElement = svgElement.querySelector('path');

      if (circleElement) {
        this.renderer.addClass(circleElement, 'we_ft_cl');
      }

      if (pathElement) {
        this.renderer.addClass(pathElement, 'we_ft_cl');
      }
    }
  }

  shareIndex() {
    console.log(this.toc)
    //this.socialShare=true
    this.shareUrl = "https://happierme.app/adults/" + this.toc + `?t=${this.token}`
    console.log(this.shareUrl)

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
