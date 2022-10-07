import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from './adults/adults.service';
import { OnboardingService } from './onboarding/onboarding.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  t: any
  x = []
  scrId: any
  freeScreens = JSON.parse(localStorage.getItem("freeScreens"))
  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService,private onboarding:OnboardingService) {
    this.t = this.router.getCurrentNavigation().extractedUrl.queryParams.t
  }
  ngOnInit() { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let ban = localStorage.getItem('enablebanner');
    if (!ban) {
      localStorage.setItem("enablebanner", 'T')
    }
    let m: any = window.location.href;
    let test = m.split('login')
    let affrefcode = '';
    let affreftoken = '';
    let aff = m.split('AffrefCode')
    let token = m.split('authtoken')
    if (aff[1] !== undefined && aff[1] !== '') {
      let afftoken = aff[1].split('=')[1]
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
    let cookie = localStorage.getItem('acceptcookie')
    if (token[1] !== undefined && token[1] !== '') {
      let persub = localStorage.getItem('personalised subscription');
      let pers = localStorage.getItem('personalised');
      let persdata = localStorage.getItem('personalisedlist');
      localStorage.clear()
      localStorage.setItem('personalised', 'T');
      pers = localStorage.getItem('personalised');
      if (affrefcode !== '') {
        localStorage.setItem("AffReferralCode", affrefcode)
      }
      if (affreftoken !== '') {
        localStorage.setItem("Affreftoken", affreftoken)
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

      localStorage.setItem("token", JSON.stringify(authtoken))
      return true
    }
    let pers = localStorage.getItem('personalised');
    if (!pers) {
      this.router.navigate(['/intro/intro-carousel'])
      return false;
    }
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
      // this.router.navigate(['/onboarding/login'])
      this.router.navigate(['/onboarding/login'])
      return false
    } else {
       if (     this.onboarding.navigateToUpgradeToPremium
        //localStorage.getItem('navigateToUpgradeToPremium') == 'true'
        ) {
        localStorage.setItem('btnclick', 'F');
        localStorage.setItem('guest', 'T');
        this.router.navigate(['/onboarding/login'])
        return false;
      }
      // localStorage.clear()
      localStorage.setItem('btnclick', 'F');
      localStorage.setItem('guest', 'T');
      return true
    }
  }
}
