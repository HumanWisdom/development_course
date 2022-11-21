import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Platform } from "@angular/cdk/platform";

@Component({
  selector: 'HumanWisdom-wisdom-shorts-index',
  templateUrl: './wisdom-shorts-index.page.html',
  styleUrls: ['./wisdom-shorts-index.page.scss'],
})
export class WisdomShortsIndexPage implements OnInit {
  path: string;
  address: string;
  constructor(private ngNavigatorShareService: NgNavigatorShareService, public platform: Platform, private router: Router,
    private location: Location) {
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.address = this.router.url
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }
  share() {
    if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
    console.log("url")
    this.path = "https://humanwisdom.me/course" + this.address;
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }
}
