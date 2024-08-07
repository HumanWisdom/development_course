import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TeenagersService } from '../teenagers/teenagers.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate, OnInit {
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  t: any
  x = []
  scrId: any
  public canGoBack: boolean;

  constructor(public router: Router, private url: ActivatedRoute, private service: TeenagersService) {
    this.t = this.router.getCurrentNavigation().extractedUrl.queryParams.t
    this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);

  }
  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // let m: any = window.location.href;

    let screens= localStorage.getItem("freeScreens");
    let freeScreens = (screens != 'undefined')? JSON.parse(screens):null;
    let m: any = state.url;
    let sub: any = localStorage.getItem("Subscriber")
    let loggedin = localStorage.getItem("isloggedin")
/*     if(loggedin === 'T') {
      return true;
    }else {
      this.router.navigate(['teenagers/subscription/start-your-free-trial']);
      return false;
    } */
    m = m.split('?')

    let str = next.routeConfig.path;
    //this.logeventservice.logEvent(str);
    this.scrId = str.substring(1, str.length + 1);
    if (this.scrId !== '29000') {
      let substrin = this.scrId.substring(0, 2)
      if (substrin === '29') {
        this.scrId = (parseInt(this.scrId) - 1).toString();
      }
    }


    if ( sub === '1' || m[1]?.slice(0, 2) === 't=' || this.t !== undefined) {

      return true;
    }
   /*  else if (sub === '1' || m[1]?.slice(0, 2) === 't=' || this.t !== undefined) {
      return true;
    } */
    else if (m[0].includes("view-stories") === true)
      {

      let id = m[1].split("=")[1]
      this.service.CheckStoryIsFree(id).subscribe(res => {

        if (res === true) {
          /* localStorage.setItem("StoryType","Open") */
          return true;
        }
        else {
          /* localStorage.setItem("StoryType","Locked") */

          this.router.navigate(['teenagers/subscription/start-your-free-trial']);
          // this.router.navigate(['/start-your-free-trial']);
          return false;
        }

      })





    }
    else if (m[0].includes("wisdom-shorts") === true) {
      let id = m[0].split("/")[3].split(".")[1]


      this.service.CheckShortsIsFree(id).subscribe(res => {
        if (res === true) {

          return true;
        }
        else {
          /*     localStorage.setItem("StoryType","Locked") */

              this.router.navigate(['teenagers/subscription/start-your-free-trial']);
          return false;
        }

      })



    }
    else if (freeScreens !== null && (!loggedin || loggedin !== 'T' ? freeScreens.includes(this.scrId.replace('t', '').toString()) : freeScreens.includes(this.scrId.replace('t', '')) )) {
      return true;
    }
    else {
      // window.alert('You Have Reached Free Limit')
      this.router.navigate(['teenagers/subscription/start-your-free-trial']);
      return false
    }

  }

}
