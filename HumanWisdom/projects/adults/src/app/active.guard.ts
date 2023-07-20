import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from '././adults/adults.service';
import { LogEventService } from '../../../shared/services/log-event.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate, OnInit {
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  t: any
  x = []
  scrId: any
  public canGoBack: boolean;
  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService, public logeventservice: LogEventService) {
    this.t = this.router.getCurrentNavigation().extractedUrl.queryParams.t
    this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);
    console.log("this.canGoBack", this.canGoBack)
  }

  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let screens= localStorage.getItem("freeScreens");
    let freeScreens = screens != 'undefined' ? JSON.parse(screens):null;
    let m: any = state.url;
    let loggedin = localStorage.getItem("isloggedin")
    let sub: any = localStorage.getItem("Subscriber")
    m = m.split('?')
    let str = next.routeConfig.path;
    this.logeventservice.logEvent(str);
    this.scrId = str.substring(1, str.length + 1);
    /* if (this.scrId !== '29000') {
      let substrin = this.scrId.substring(0, 2)
      if (substrin === '29') {
        this.scrId = (parseInt(this.scrId) - 1).toString();
      }
    } */
    if (!(m[0].includes("wisdom-shorts")) && sub === '1' || m[1]?.slice(0, 2) === 't=' || this.t !== undefined) {
      return true;
    } else if (m[0].includes("view-stories") === true) {
      let id = m[1].split("=")[1]
      this.service.CheckStoryIsFree(id).subscribe(res => {
        if (res === true) {
          return true;
        } else {
          this.router.navigate(['/onboarding/free-limit'], { replaceUrl: true, skipLocationChange: false })
          return false;
        }
      })
    } else if (m[0].includes("wisdom-shorts") === true) {
      let id = m[0].split("/")[3].split(".")[1]
      this.service.CheckShortsIsFree(id).subscribe(res => {
        if (res === true) {
          return true;
        } else {
          if(loggedin && loggedin === 'T' && sub && sub === '1') {
            return true;
          }else {
            this.router.navigate(['/onboarding/free-limit'])
            return false;
          }
        }
      })
    } else if (freeScreens !== null && freeScreens.includes(this.scrId.replace('t', ''))) {
      return true;
    } else {
      this.router.navigate(['/onboarding/free-limit'])
      return false
    }
  }
}
