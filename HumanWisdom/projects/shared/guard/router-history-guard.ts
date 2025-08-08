import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root',
})
export class RouteHistoryGuard implements CanActivate {
    private routeHistory: string[] = [];

  constructor(public router: Router,
    private commonService: CommonService
  ) {
        // Subscribe to router events to track navigation history
    // this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
    //   this.routeHistory.push(event.urlAfterRedirects);
    // });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const isGuest = localStorage.getItem("guest") === 'T';
    const isLoggedIn = localStorage.getItem("isloggedin") === 'T';
    const isSubscribed = localStorage.getItem("Subscriber") === '1' || localStorage.getItem("Subscriber") === 'T';

    const noOfDPVisits = parseInt(localStorage.getItem('NoOfDPVisits') || '0');
    const alreadyVisited = sessionStorage.getItem('dpSessionVisited');

    const isTeenagerRoute = state.url.includes('/teenagers/');
    const progId = isTeenagerRoute ? 11 : 9;
    const trialRedirectPath = isTeenagerRoute
      ? '/teenagers/subscription/start-your-free-trial'
      : '/subscription/start-your-free-trial';

    // Guest user → redirect
    if (isGuest) {
      this.router.navigate([trialRedirectPath]);
      return false;
    }

    // Subscribed user → allow
    if (isLoggedIn && isSubscribed) {
      return true;
    }

    // Logged in but not subscribed
    if (isLoggedIn && !isSubscribed) {

      // Limit reached → redirect
      if (noOfDPVisits >= 2) {
        this.router.navigate([trialRedirectPath]);
        return false;
      }

      // First visit in this session → Insert API
      if (!alreadyVisited) {

        this.commonService.InsertDailyPracticeVisitLog(progId).subscribe({
          next: (res) => {
            console.log('API Success:', res);

            // Increment local NoOfDPVisits
            const current = parseInt(localStorage.getItem('NoOfDPVisits') || '0');
            localStorage.setItem('NoOfDPVisits', (current + 1).toString());
          }
        });

        sessionStorage.setItem('dpSessionVisited', 'T');
      }
//       if (!alreadyVisited) {
//   console.log('Hitting Insert API:', progId);

//   this.commonService.InsertDailyPracticeVisitLog(progId).subscribe({
//     next: (res) => {
//       console.log('API Success:', res);
//     },
//     error: (err) => {
//       console.error('API Failed:', err);
//     }
//   });

//   sessionStorage.setItem('dpSessionVisited', 'T');
// }


      return true;
    }

    // Catch-all → redirect
    this.router.navigate([trialRedirectPath]);
    return false;
  }
}
