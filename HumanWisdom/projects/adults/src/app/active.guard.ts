import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from '././adults/adults.service';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate, OnInit {
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  t: any
  x = []
  scrId: any
  public canGoBack: boolean;
  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService) {
    this.t = this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
    this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);
  }

  ngOnInit() {}

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
    return this.service.ensureModuleContextForUrl(state.url).pipe(
      switchMap(() => {
        let screens = localStorage.getItem("freeScreens");
        let freeScreens = screens !== 'undefined' && screens !== null ? JSON.parse(screens) : null;
        let m: any = state.url;
        let loggedin = localStorage.getItem("isloggedin")
        let sub: any = localStorage.getItem("Subscriber")
        m = m.split('?')
        let str = next.routeConfig.path;
        this.scrId = str.substring(1, str.length + 1);
        let feelbetternow = localStorage.getItem('feelbetternow');

        // Subscribed users or token-shared links → always allow
        if (!(m[0].includes("wisdom-shorts")) && sub === '1' || m[1]?.slice(0, 2) === 't=' || this.t !== undefined) {
          return of(true);
        } else if (m[0].includes("view-stories") === true) {
          let id = m[1].split("=")[1]
          return this.service.CheckStoryIsFree(id).pipe(map(res => {
            if (res === true) {
              return true;
            } else {
              this.router.navigate(['adults/subscription/start-your-free-trial']);
              return false;
            }
          }))
        } else if (m[0].includes("wisdom-shorts") === true) {
          if (feelbetternow === 'T') {
            if (loggedin === 'T') {
              return of(true);
            } else {
              this.router.navigate(['adults/subscription/start-your-free-trial']);
              return of(false);
            }
          } else {
            let id = m[0].split("/")[3].split(".")[1]
            return this.service.CheckShortsIsFree(id).pipe(map(res => {
              if (res === true) {
                return true;
              } else {
                if (loggedin && loggedin === 'T' && sub && sub === '1') {
                  return true;
                } else {
                  this.router.navigate(['adults/subscription/start-your-free-trial']);
                  return false;
                }
              }
            }))
          }
        }
        
        // freeScreens check
        const scrIdClean = this.scrId.replace('t', '');
        if (freeScreens !== null && freeScreens.length > 0) {
          if (freeScreens.includes(parseInt(scrIdClean)) || freeScreens.includes(scrIdClean)) {
            return of(true);
          }
        }

        // If not explicitly free/subscribed, fetch freeScreens to be sure
        return this.service.freeScreens().pipe(map(res => {
          let x = [];
          if (res) {
            let result = res.map(a => a.FreeScrs);
            result.forEach(element => {
              if (element && element !== null) {
                x.push(element.map(a => a.ScrNo));
              }
            });
            let arr = Array.prototype.concat.apply([], x);
            localStorage.setItem("freeScreens", JSON.stringify(arr));

            if (arr.includes(parseInt(scrIdClean)) || arr.includes(scrIdClean)) {
              return true;
            }
          }
          this.router.navigate(['adults/subscription/start-your-free-trial']);
          return false;
        }));
      })
    );
  }
}
