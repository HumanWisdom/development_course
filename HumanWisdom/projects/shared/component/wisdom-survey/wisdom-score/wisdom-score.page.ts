import { TeenagersService } from './../../../../teenagers/src/app/teenagers/teenagers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

@Component({
  selector: 'app-wisdom-score',
  templateUrl: './wisdom-score.page.html',
  styleUrls: ['./wisdom-score.page.scss'],
})
export class WisdomScorePage implements OnInit {

 formatTitle = (percent: number): string => `${percent}%`;

  bg = "purple_blue_w2"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))

  overallPercentage: any
  bookmark = 0
  toc = ""
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  points = localStorage.getItem("wisdomScore");
  enableDash = false;
  isAdults: boolean = true;

  isUseCloseButton: boolean;
  wisdomRecomm: any[] = [];
  isSubscriber: boolean = false;
  justSignedUp = false;
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  

  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
      this.isSubscriber = true;
    }
    if (this.saveUsername == false) {
      this.userId = JSON.parse(sessionStorage.getItem("userId"));
    } else {
      this.userId = JSON.parse(localStorage.getItem("userId"));
    }

    const { isUseCloseButton } = window.history.state;
    this.isUseCloseButton = isUseCloseButton;

    const recomm = localStorage.getItem('wisdomRecomm');
    this.wisdomRecomm = recomm ? JSON.parse(recomm) : [];

    const baseUrl = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";

    this.wisdomRecomm = this.wisdomRecomm.map(item => {
      let cleanPath = '';
      if (item.module === 'BLOG') {
        cleanPath = item.path;
      } else {
        const pathParts = item.path.split('/');
        cleanPath = pathParts.slice(0, -1).join('/');
      }

      const prefix = this.router.url.includes('/teenagers/')
        ? '/teenagers'
        : '/adults';

      return {
        ...item,
        image_path: item.image_path.startsWith('http')
          ? item.image_path
          : baseUrl + item.image_path,
        title: item.title,
        cleanPath: prefix + cleanPath   
      };
    });

    this.enableDash = true;

    // const visits = Number(localStorage.getItem('NoOfVisits') || '0');
      const visits = Number(this.loginResponse?.NoOfVisits || '0');
    const token = SharedService.getDataFromLocalStorage('token');
    const isGuest = localStorage.getItem('guest') === 'T';
    const isFromSignupFlow = localStorage.getItem('isFromSignupFlow') === 'T';
    this.justSignedUp = !!token && !isGuest && (visits < 2 || isFromSignupFlow);
  }

  navigateToRecommendation(item: any) {
    if (!this.isSubscriber && item.module !== 'BLOG' && item.isFree != 1) {
      const isTeenagerRoute = this.router.url.includes('/teenagers/');
      const trialRedirectPath = isTeenagerRoute
        ? '/teenagers/subscription/start-your-free-trial'
        : '/subscription/start-your-free-trial';
      this.router.navigate([trialRedirectPath]);
      return;
    }

    if (item.module === 'BLOG') {
      this.router.navigateByUrl(item.cleanPath, {
        state: { title: item.title }
      });
    } else {
      this.router.navigate([item.cleanPath], {
        state: { title: item.title }
      });
    }
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
  }


  submitProgress() {

    this.router.navigateByUrl('/' + SharedService.getprogramName() + '/discovering-wisdom/s27032');

  }
  prev() {
    this.router.navigateByUrl('/' + SharedService.getprogramName() + '/discovering-wisdom/s27020');

  }

  parseint(val) {
    return parseInt(val)
  }

  routeToDashboard() {
    localStorage.setItem('isFromSignupFlow', 'F');
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }
}


