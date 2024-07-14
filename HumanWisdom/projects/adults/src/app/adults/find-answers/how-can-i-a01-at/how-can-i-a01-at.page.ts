import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from "../../../../../../shared/services/shared.service";
import { ProgramType } from "../../../../../../shared/models/program-model";
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'app-how-can-i-a01-at',
  templateUrl: './how-can-i-a01-at.page.html',
  styleUrls: ['./how-can-i-a01-at.page.scss'],
})
export class HowCanIA01AtPage implements OnInit {

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
