import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from './adults/adults.service';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { CommonService } from '../../../shared/services/common.service';
import { SharedService } from '../../../shared/services/shared.service';
@Injectable({
  providedIn: 'root'
})
export class autoLoginGuard implements CanActivate, OnInit {
  t: any

  constructor(public router: Router, private url: ActivatedRoute,
    private service: AdultsService, private onboarding: OnboardingService,
    private commonService: CommonService) {

  }
  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    debugger;
    let m: any = window.location.href;
    if (localStorage.getItem('isloggedin') == 'F' || localStorage.getItem('isloggedin') == null || localStorage.getItem('isloggedin') == undefined) {
      this.onboarding.guestEmailLogin('');
      setTimeout(() => {
        this.commonService.freescreens();
      }, 1000);
      return true;
    } else {
      debugger;
      this.router.navigate([SharedService.getDashboardUrls()])
      return false;
    }
  }
}
