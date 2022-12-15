import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdultsService } from './adults/adults.service'

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate, OnInit {
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  t: any
  x = []
  scrId: any
  freeScreens = JSON.parse(localStorage.getItem("freeScreens"))
  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService) {
    this.t = this.router.getCurrentNavigation().extractedUrl.queryParams.t
   }
  ngOnInit() {
     
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     // let m: any = window.location.href;
      let m: any =state.url;
      let sub: any = localStorage.getItem("Subscriber")

      m = m.split('?')
      

    let str = next.routeConfig.path;
    this.scrId = str.substring(1, str.length + 1);
    if(this.scrId !== '29000') {
      let substrin = this.scrId.substring(0, 2)
      if(substrin === '29') {
        this.scrId = (parseInt(this.scrId) - 1).toString();
      }
    }
  
     
    if (sub === '1' || m[1]?.slice(0, 2) === 't=' || this.t !== undefined ) {
      return true;
    }
   else if(m[0].includes("view-stories") ===true  || m[0].includes("blog-article") ===true)
    {  
     if(sub==='1')    
     {
       return true;
     }
     else{

       if ((m[1]==="sId=1" || m[1]==="sId=2" || m[1]==="sId=3")==false){
         this.router.navigate(['/onboarding/free-limit'])
         return false;
       }
       else{
         return true;
       }
     }
   
   }
   else if (this.freeScreens !== null && this.freeScreens.includes(this.scrId)) {
      return true;
    } else {
      // window.alert('You Have Reached Free Limit')
      this.router.navigate(['/onboarding/free-limit'])
      return false
    }

  }

}
