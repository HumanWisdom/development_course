import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from './adults/adults.service';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { SharedService } from "../../../shared/services/shared.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  t: any
  x = []
  scrId: any
  freeScreens = JSON.parse(localStorage.getItem("freeScreens"));
  public saveUsername :any;
  public text = 2
  public video = 3
  public audio = 4
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  public userId:any;
  public userName: any
  public qrList: any
  public goToPage: any
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService, private onboarding: OnboardingService) {
    this.t = this.router.getCurrentNavigation().extractedUrl.queryParams.t
  }
  ngOnInit() { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(localStorage.getItem("saveUsername") && localStorage.getItem("saveUsername")!=null){
        this.saveUsername = JSON.parse(localStorage.getItem("saveUsername"));
      }

    let ban = localStorage.getItem('enablebanner');
    if (!ban) {
      localStorage.setItem("enablebanner", 'T')
    }
    let m: any = window.location.href;
    let test = m.split('login')
    let affrefcode = '';
    let affreftoken = '';
    let aff = m.split('AffrefCode=')
    let token = m.split('authtoken')
    if (aff[1] !== undefined && aff[1] !== '') {
      let afftoken = aff[1]
      localStorage.setItem("Affreftoken", afftoken)
      this.service.decrypt(afftoken).subscribe((res: any) => {
        if (res) {
          localStorage.setItem("AffReferralCode", res)
        }
      })

    }
    if (localStorage.getItem('AffReferralCode') !== null) {
      affrefcode = localStorage.getItem('AffReferralCode');
    }
    if (localStorage.getItem('Affreftoken') !== null) {
      affreftoken = localStorage.getItem('Affreftoken');
    }
    let getalertdate = localStorage.getItem('getalertdate');
    let fromlanding = localStorage.getItem("fromlandingpage");
    let cookie = localStorage.getItem('acceptcookie')
    let firstTimeTour = localStorage.getItem("firstTimeTour");
    let firstTimeSearchTour = localStorage.getItem("firstTimeSearchTour");
    if (token[1] !== undefined && token[1] !== '') {
      if(m.includes('repeat-user') || m.includes('change-topic') || m.includes('adult-dashboard') || m.includes('wisdom-survey')) {
        localStorage.setItem("isPWA", 'APP')
        if( m.includes('wisdom-survey'))
          SharedService.isRoutedFromLogin =true
      }
      let persub = localStorage.getItem('personalised subscription');
      let pers = localStorage.getItem('personalised');
      let persdata = localStorage.getItem('personalisedlist');
      localStorage.clear()
      localStorage.setItem('personalised', 'T');
      if(firstTimeTour === 'T') {
        localStorage.setItem('firstTimeTour', 'T');
      }
      if(firstTimeSearchTour === 'T') {
        localStorage.setItem('firstTimeSearchTour', 'T');
      }
      pers = localStorage.getItem('personalised');
      if (affrefcode !== '') {
        localStorage.setItem("AffReferralCode", affrefcode)
      }
      if (affreftoken !== '') {
        localStorage.setItem("Affreftoken", affreftoken)
      }
      if (fromlanding) {
        localStorage.setItem('fromlandingpage', fromlanding);
      }
      let authtoken = token[1].split('=')[1];
      localStorage.setItem("enablebanner", 'F')
      localStorage.setItem("fromapp", 'T')
      if (cookie) {
        localStorage.setItem('acceptcookie', 'T')
      }
      if (persub && pers === "T") {
        localStorage.setItem('personalised subscription', persub);
        localStorage.setItem('personalised', pers);
        localStorage.setItem('personalisedlist', persdata);
      }
      localStorage.setItem('guest', 'F');
      localStorage.setItem('btnclick', 'F')
      localStorage.setItem("remember", 'T')
      localStorage.setItem('adult', 'T')
      localStorage.setItem("isloggedin", 'T')
      if (getalertdate !== null) {
        localStorage.setItem('getalertdate', getalertdate)
      }
      localStorage.setItem("token", JSON.stringify(authtoken))
      if (authtoken) {
        localStorage.setItem('socialLogin', 'T');
      }
      return true
    }
   /*  let pers = localStorage.getItem('personalised');
    if (!pers) {
      this.router.navigate(['/intro/intro-carousel'])
      return false;
    } */
    if (!(localStorage.getItem("fromapp")) || localStorage.getItem("fromapp") !== 'T') {
      localStorage.setItem("fromapp", 'F')
    }
    let res = localStorage.getItem("isloggedin")
    let rem = localStorage.getItem("remember")
    let first = localStorage.getItem("firsttime")
    let adult = localStorage.getItem("adult")
    let btnclick = localStorage.getItem('btnclick');
    if (res === 'T' && rem === 'T') {
      localStorage.setItem('adult', 'T')
      return true;
    } else if (adult === 'T' && rem !== 'T') {
      return true;
    } else if (btnclick !== null && btnclick === 'T') {
      // this.router.navigate(['/adults/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
      this.router.navigate(['/adults/onboarding/login'])
      return false
    } else {
      if (this.onboarding.navigateToUpgradeToPremium
        //localStorage.getItem('navigateToUpgradeToPremium') == 'true'
      ) {
        localStorage.setItem('btnclick', 'F');
        localStorage.setItem('guest', 'T');
        this.router.navigate(['/' + SharedService.getprogramName() + '/onboarding/login'])
        return false;
      }
      // localStorage.clear()
      localStorage.setItem('btnclick', 'F');
      localStorage.setItem('guest', 'T');
      return true
    }
  }

  loginadult(res) {
    this.loginResponse = res
    this.userId = res.UserId
    if (res['Email'] === "guest@humanwisdom.me") localStorage.setItem('guest', 'T')
    else localStorage.setItem("guest", 'F')
    sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("token", JSON.stringify(res.access_token))
    localStorage.setItem("Subscriber", res.Subscriber)
    localStorage.setItem("userId", JSON.stringify(this.userId))
    localStorage.setItem("email", res['Email'])
    localStorage.setItem("name", res.Name)
    localStorage.setItem("text", JSON.stringify(this.text))
    localStorage.setItem("video", JSON.stringify(this.video))
    localStorage.setItem("audio", JSON.stringify(this.audio))
    localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
    localStorage.setItem("question", JSON.stringify(this.question))
    localStorage.setItem("reflection", JSON.stringify(this.reflection))
    localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    if (localStorage.getItem("token") && (this.saveUsername == true)) {
      this.userName = JSON.parse(localStorage.getItem("userName"))
    }
    else {
      this.userName = JSON.parse(sessionStorage.getItem("userName"))
    }
    if (res.UserId == 0) {
    }
    else {
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("userId", JSON.stringify(res.UserId))
      localStorage.setItem("token", JSON.stringify(res.access_token))
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(res.UserId))
        localStorage.setItem("userEmail", JSON.stringify(res.Email))
        localStorage.setItem("userName", JSON.stringify(res.Name))

      } else {
        sessionStorage.setItem("userId", JSON.stringify(res.UserId))
        sessionStorage.setItem("userEmail", JSON.stringify(res.Email))
        sessionStorage.setItem("userName", JSON.stringify(res.Name))
      }
    }
  }
}
