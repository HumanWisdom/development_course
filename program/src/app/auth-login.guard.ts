import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AdultsService } from './adults/adults.service'

@Injectable({
  providedIn: 'root'
})
export class authLoginGuard implements CanActivate, OnInit {
  t: any

  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService) {

  }
  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let m: any = window.location.href;
      m = m.split('?')
      let cookie = false;
      let affrefcode = '';
      let persub = localStorage.getItem('personalised subscription');
      let pers = localStorage.getItem('personalised');
      let persdata = localStorage.getItem('personalisedlist');
      let cartdata = localStorage.getItem('cartlist');
      let option = localStorage.getItem('introoption');
      if(localStorage.getItem('acceptcookie') === 'T') {
        cookie = true;
      }
      if(localStorage.getItem('AffReferralCode') !== null) {
        affrefcode = localStorage.getItem('AffReferralCode');
      }
      localStorage.clear()
      if(option === 'T') {
        localStorage.setItem('introoption', 'T')
      }
      if(affrefcode !== ''){
        localStorage.setItem("AffReferralCode", affrefcode)
      }
      if(cookie) {
        localStorage.setItem('acceptcookie', 'T');
      }
      if(m[1] !== undefined && m[1] !== '') {
      }else {
        localStorage.setItem("emailCode", 'F')
      }
    let res = localStorage.getItem("isloggedin")
    let rem = localStorage.getItem("remember")
    if(persub && pers === "T") {
      localStorage.setItem('personalised subscription', persub);
      localStorage.setItem('personalised', pers);
      localStorage.setItem('personalisedlist', persdata);
      localStorage.setItem('cartlist', cartdata);
    }
    if(!cookie && pers !== 'T') {
      this.router.navigate(['/intro/intro-carousel'])
      return false;
    }
    if (res === null || res === 'F' || rem === 'F') {
      if(m[1] !== undefined) {
        m = m[1].replace('=', '')
        this.service.decrypt(m).subscribe((res: any) => {
          if(res) {
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
