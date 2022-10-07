import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from './adults/adults.service';
import { OnboardingService } from './onboarding/onboarding.service';

@Injectable({
  providedIn: 'root'
})
export class authLoginGuard implements CanActivate, OnInit {
  t: any

  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService,private onboarding:OnboardingService) {

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
    let persub = localStorage.getItem('personalised subscription');
    let pers = localStorage.getItem('personalised');
    let persdata = localStorage.getItem('personalisedlist');
    let cartdata = localStorage.getItem('cartlist');
    let option = localStorage.getItem('introoption');
    if (localStorage.getItem('acceptcookie') === 'T') {
      cookie = true;
    }
    if (localStorage.getItem('AffReferralCode') !== null) {
      affrefcode = localStorage.getItem('AffReferralCode');
    }
    if (localStorage.getItem('Affreftoken') !== null) {
      affreftoken = localStorage.getItem('Affreftoken');
    }
    if(this.onboarding.navigateToUpgradeToPremium
    //  localStorage.getItem("navigateToUpgradeToPremium")=="true"
    ){
      localStorage.clear()
      //localStorage.setItem("navigateToUpgradeToPremium","true")
    }
    else{
      localStorage.clear()
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
    if (!pers) {
      this.router.navigate(['/intro/intro-carousel'])
      return false;
    }
    if (res === null || res === 'F' || rem === 'F') {
      if (m[1] !== undefined) {
        m = m[1].replace('=', '')
        this.service.decrypt(m).subscribe((res: any) => {
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
