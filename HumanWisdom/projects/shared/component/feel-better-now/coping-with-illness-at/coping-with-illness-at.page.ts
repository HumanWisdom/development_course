import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coping-with-illness-at',
  templateUrl: './coping-with-illness-at.page.html',
  styleUrls: ['./coping-with-illness-at.page.scss'],
})
export class CopingWithIllnessAtPage {

  isAdults = false;
  isShowTranscript = false;
  isShowAudio = true;
  constructor(
    private readonly location: Location,
    private readonly router: Router,
    private readonly navigationService: NavigationService
  ) { }


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
    }else{
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
