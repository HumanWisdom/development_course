import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hwp-project',
  templateUrl: './hwp-project.page.html',
  styleUrls: ['./hwp-project.page.scss'],
})
export class HwpProjectPage implements OnInit {

  constructor(public platform: Platform) { }

  ngOnInit() {
  }

  getApp() {
    if (this.platform.IOS || this.platform.SAFARI) {
      window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
    } else if (this.platform.ANDROID) {
      window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
    }
  }

}
