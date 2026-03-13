import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OnboardingService } from '../../../../shared/services/onboarding.service';
import { CommonService } from '../../../../shared/services/common.service';
import { SharedService } from '../../../../shared/services/shared.service';
@Injectable({
  providedIn: 'root'
})
export class autoLoginGuard implements CanActivate, OnInit {
  t: any

  constructor(public router: Router, private url: ActivatedRoute,
    private onboarding: OnboardingService,
    private commonService: CommonService) {

  }
  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let m: any = window.location.href;
    const isLoggedIn = localStorage.getItem('isloggedin');
    if (isLoggedIn === 'T') {
      // Already logged in as a real user — redirect to dashboard
      this.router.navigate([SharedService.getDashboardUrls()]);
      return false;
    } else if (isLoggedIn === 'F') {
      // Explicitly in free/guest mode — do guest login
      this.onboarding.guestEmailLogin('');
      setTimeout(() => {
        this.commonService.freescreens();
      }, 1000);
      return true;
    } else {
      // null/undefined = fresh incognito or new session — show logged-out state, do NOT auto-login as guest
      this.commonService.freescreens();
      return true;
    }
  }
}
