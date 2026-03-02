import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { ProgramType } from '../../../../shared/models/program-model';
@Component({
  selector: 'app-anger-at',
  templateUrl: './anger-at.page.html',
  styleUrls: ['./anger-at.page.scss'],
})
export class AngerAtPage implements OnInit {

  isAdults = false;
  isShowTranscript = false;
  isShowAudio = true;

  constructor(private readonly location: Location, private readonly router: Router, private readonly navigationService: NavigationService) { }
  
  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  changeType() {
    if (this.isShowTranscript) {
      this.isShowTranscript = false;
      this.isShowAudio = true;
    } else {
      this.isShowTranscript = true;
      this.isShowAudio = false;
    }
  }

  goBack() {
    const url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.defaultGoBack();
    } else {
      this.router.navigate([url]);
    }
  }

  defaultGoBack() {
    // this.location.back()
    if (globalThis.location.href.includes('teenagers')) {
      this.router.navigate(['/teenagers/feel-better-now']);
    } else {
      this.router.navigate(['/adults/feel-better-now']);
    }
  }
}
