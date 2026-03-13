import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from '././adults/adults.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
    let screens= localStorage.getItem("freeScreens");
    let freeScreens = screens !== 'undefined' && screens !== null ? JSON.parse(screens):null;
    let m: any = state.url;
    let loggedin = localStorage.getItem("isloggedin")
    let sub: any = localStorage.getItem("Subscriber")
    m = m.split('?')
    let str = next.routeConfig.path;
    this.scrId = str.substring(1, str.length + 1);
    let feelbetternow = localStorage.getItem('feelbetternow');
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
      return this.service.CheckStoryIsFree(id).pipe(map(res => {
        if (res === true) {
          return true;
        } else {
          this.router.navigate(['adults/subscription/start-your-free-trial']);
          return false;
        }
      }))
    } else if (m[0].includes("wisdom-shorts") === true) {
      if(feelbetternow === 'T') {
          if(loggedin === 'T') {
            return true;
          }else {
            this.router.navigate(['adults/subscription/start-your-free-trial']);
            return false;
          }
      }else {
        let id = m[0].split("/")[3].split(".")[1]
        return this.service.CheckShortsIsFree(id).pipe(map(res => {
          if (res === true) {
            return true;
          } else {
            if(loggedin && loggedin === 'T' && sub && sub === '1') {
              return true;
            }else {
              this.router.navigate(['adults/subscription/start-your-free-trial']);
              return false;
            }
          }
        }))
      }
    } 
    // else if (freeScreens !== null && (!loggedin || loggedin !== 'T' ? freeScreens.includes(this.scrId.replace('t', '').toString()) : freeScreens.includes(parseInt(this.scrId.replace('t', ''))) )) {
     else if (freeScreens !== null && freeScreens.includes(parseInt(this.scrId.replace('t', '')))){
      return true;
    } 
    else if (freeScreens !== null && freeScreens.includes(this.scrId.replace('t', ''))){
      return true;
    }
    else if (freeScreens === null || freeScreens.length === 0) {
      return this.service.freeScreens().pipe(map(res => {
        let x = [];
        let result = res.map(a => a.FreeScrs);
        let arr = [];
        result.forEach(element => {
          if (element && element !== null) {
            x.push(element.map(a => a.ScrNo));
          }
        });
        if (x.length > 0) {
          arr = Array.prototype.concat.apply([], x);
        }
        localStorage.setItem("freeScreens", JSON.stringify(arr));
        
        if (arr.includes(parseInt(this.scrId.replace('t', ''))) || arr.includes(this.scrId.replace('t', ''))) {
          return true;
        } else {
          this.router.navigate(['adults/subscription/start-your-free-trial']);
          return false;
        }
      }));
    }
    else {
      this.router.navigate(['adults/subscription/start-your-free-trial']);
      return false
    }
  }
}
