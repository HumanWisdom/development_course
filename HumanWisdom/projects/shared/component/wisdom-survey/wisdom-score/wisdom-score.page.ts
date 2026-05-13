import { TeenagersService } from './../../../../teenagers/src/app/teenagers/teenagers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { NavigationService } from '../../../services/navigation.service';

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
  isGuest = false;
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  

  constructor(private router: Router,
    private service: TeenagersService,
    private navigation: NavigationService,
    private location: Location) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.points = localStorage.getItem("wisdomScore");
    if (!this.points || this.points == 'null') {
      this.points = this.loginResponse?.hwScore || 0;
    }

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
      const prefix = this.router.url.includes('/teenagers/')
        ? '/teenagers'
        : '/adults';

      return {
        ...item,
        image_path: item.image_path.startsWith('http')
          ? item.image_path
          : baseUrl + item.image_path,
        title: item.title,
        cleanPath: prefix + item.path
      };
    });

    this.enableDash = true;

    const visits = Number(this.loginResponse?.NoOfVisits || '0');
    const token = SharedService.getDataFromLocalStorage('token');
    this.isGuest = localStorage.getItem('guest') === 'T';
    const signupFlowFlag = localStorage.getItem('isFromSignupFlow');
    const isFromSignupFlow = signupFlowFlag === 'T';
    const isSignupFlowFinished = signupFlowFlag === 'F';
    const { routedFromLogin } = window.history.state;

    // Use a combination of flags to determine if the user just signed up/logged in for the first time
    // For teenagers, background initialization calls might increment visits slightly, so we use < 5
    // and prioritize the explicit signup flow flag.
    this.justSignedUp = !!token && !this.isGuest && !isSignupFlowFinished && (
      visits < 5 || 
      isFromSignupFlow || 
      SharedService.isRoutedFromLogin || 
      routedFromLogin === true || 
      routedFromLogin === 'true'
    );

    if (this.justSignedUp) {
      localStorage.setItem('isFromSignupFlow', 'F');
      SharedService.isRoutedFromLogin = false;
    }
  }

  navigateToRecommendation(item: any) {
    const isFree = item.isFree == 1 || item.isFree == '1' || item.isFree === true || item.isFree === 'true';
    if (!this.isSubscriber && item.module !== 'BLOG' && !isFree) {
      const isTeenagerRoute = this.router.url.includes('/teenagers/');
      const trialRedirectPath = isTeenagerRoute
        ? '/teenagers/subscription/start-your-free-trial'
        : '/subscription/start-your-free-trial';
      this.router.navigateByUrl(trialRedirectPath);
      return;
    }

    this.router.navigateByUrl(item.cleanPath, {
      state: { title: item.title }
    });
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
    SharedService.isRoutedFromLogin = false;
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }

  goToSubscribe() {
    if (this.isAdults) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    } else {
      this.router.navigate(['/teenagers/subscription/start-your-free-trial']);
    }
  }

  goBack() {
    var url = this.navigation.navigateToBackLink();
    if (url == null) {
      this.router.navigateByUrl("/" + SharedService.getprogramName() + "/wisdom-survey");
    } else {
      this.router.navigateByUrl(url);
    }
  }
}