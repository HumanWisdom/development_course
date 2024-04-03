import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OnboardingService } from '../../shared/services/onboarding.service';

@Injectable({
  providedIn: 'root'
})
export class authLoginGuard implements CanActivate, OnInit {
  t: any

  constructor(public router: Router,private onboarding: OnboardingService) {

  }
  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let m: any = window.location.href;
    m = m.split('?')
    let cookie = false;
    let affrefcode = '';
    let affreftoken = '';
    let getalertdate = localStorage.getItem('getalertdate');
    let persub = localStorage.getItem('personalised subscription');
    let pers = localStorage.getItem('personalised');
    let persdata = localStorage.getItem('personalisedlist');
    let cartdata = localStorage.getItem('cartlist');
    let option = localStorage.getItem('introoption');
    let subscribepage = localStorage.getItem('subscribepage');
    let giftwisdom = localStorage.getItem("giftwisdom");
    let fromlanding = localStorage.getItem("fromlandingpage");
    let firstTimeTour = localStorage.getItem("firstTimeTour");
    let firstTimeSearchTour = localStorage.getItem("firstTimeSearchTour");
    if (localStorage.getItem('acceptcookie') === 'T') {
      cookie = true;
    }
    if (localStorage.getItem('AffReferralCode') !== null) {
      affrefcode = localStorage.getItem('AffReferralCode');
    }
    if (localStorage.getItem('Affreftoken') !== null) {
      affreftoken = localStorage.getItem('Affreftoken');
    }
    if (this.onboarding.navigateToUpgradeToPremium
      //  localStorage.getItem("navigateToUpgradeToPremium")=="true"
    ) {
      localStorage.clear()
      //localStorage.setItem("navigateToUpgradeToPremium","true")
    }
    else {
      localStorage.clear()
    }

    if(firstTimeTour === 'T') {
      localStorage.setItem('firstTimeTour', 'T');
    }

    if(firstTimeSearchTour === 'T') {
      localStorage.setItem('firstTimeSearchTour', 'T');
    }

    if (getalertdate !== null) {
      localStorage.setItem('getalertdate', getalertdate)
    }
    if (option === 'T') {
      localStorage.setItem('introoption', 'T')
    }
    if (affrefcode !== '') {
      localStorage.setItem("AffReferralCode", affrefcode)
    }
    if (affreftoken !== '') {
      localStorage.setItem("Affreftoken", affreftoken)
    }
    if (cookie) {
      localStorage.setItem('acceptcookie', 'T');
    }
    if (pers) {
      localStorage.setItem('personalised', pers);
    }
    if (subscribepage) {
      localStorage.setItem('subscribepage', subscribepage);
    }
    if (giftwisdom) {
      localStorage.setItem('giftwisdom', giftwisdom);
    }
    if (fromlanding) {
      localStorage.setItem('fromlandingpage', fromlanding);
    }
    if (m[1] !== undefined && m[1] !== '') {
    } else {
      localStorage.setItem("emailCode", 'F')
    }
    let res = localStorage.getItem("isloggedin")
    let rem = localStorage.getItem("remember")
    if (persub && pers === "T") {
      localStorage.setItem('personalised subscription', persub);
      localStorage.setItem('personalised', pers);
      localStorage.setItem('personalisedlist', persdata);
      localStorage.setItem('cartlist', cartdata);
    }
    if (fromlanding === 'T') {
      this.router.navigate(['/intro/intro-carousel'])
      return false;
    }
    if (res === null || res === 'F' || rem === 'F') {
      if (m[1] !== undefined) {
        m = m[1].replace('=', '')
        this.onboarding.decrypt(m).subscribe((res: any) => {
          if (res) {
            let s = res.split('=')[1]
            localStorage.setItem("userIdCode", s)
            localStorage.setItem("emailCode", 'T')
          }
        })
      }
      return true;
    } else {
      this.router.navigate(['/adults/adult-dashboard'])
      return false;
    }

  }


}
