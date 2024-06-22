import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coping-with-illness-at',
  templateUrl: './coping-with-illness-at.page.html',
  styleUrls: ['./coping-with-illness-at.page.scss'],
})
export class CopingWithIllnessAtPage implements OnInit {

  isAdults = false;
  isShowTranscript = false;
  isShowAudio = true;
  constructor(private location: Location,private router :Router,private navigationService:  NavigationService) { }

  ngOnInit() {
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
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.defaultGoBack();
    }else{
      this.router.navigate([url]);
    }
  }

  defaultGoBack() {
    // this.location.back()
    if (window.location.href.includes('teenagers')) {
      this.router.navigate(['/teenagers/feel-better-now']);
    } else {
      this.router.navigate(['/adults/feel-better-now']);
    }
  }

}
