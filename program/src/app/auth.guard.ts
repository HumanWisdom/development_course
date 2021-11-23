import { Injectable, OnInit } from '@angular/core';
import { CanActivate,Router,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AdultsService} from './adults/adults.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,OnInit {
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  t:any
  x=[]
  scrId:any
  freeScreens=JSON.parse(localStorage.getItem("freeScreens"))
  constructor(public router:Router,private url:ActivatedRoute,private service:AdultsService) { 
    this.t=this.router.getCurrentNavigation().extractedUrl.queryParams.t
   
     
  }
  ngOnInit(){
   
  }
 
 canActivate( next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):boolean{
    let m: any = window.location.href;
    let test = m.split('login')

      m = m.split('?')
      
      if(!test || test === '' && m[1] !== undefined) {
        localStorage.setItem("isloggedin", 'T')
        let email = m[1].split('&')[0].split('=')[1].replace(/['"]+/g, '')
        if(m[1].includes('pswd')) {
          localStorage.setItem('socialLogin', 'F');
          let password = m[1].split('&')[1].split('=')[1].replace(/['"]+/g, '')
          localStorage.setItem("pswd", password)
        }else{
          localStorage.setItem('socialLogin', 'T');
          let firstname = m[1].split('&')[1].split('=')[1].replace(/['"]+/g, '')
          let lastname = m[1].split('&')[2].split('=')[1].replace(/['"]+/g, '')
          localStorage.setItem("FnName", firstname)
          localStorage.setItem("LName", lastname)
        }
        localStorage.setItem("email", email)
        localStorage.setItem('guest', 'F');
        localStorage.setItem('btnclick', 'F')
        localStorage.setItem("remember", 'T')
        localStorage.setItem('adult', 'T')
        return true;
      }
    let res = localStorage.getItem("isloggedin")
    let rem = localStorage.getItem("remember")
    let first = localStorage.getItem("first")
    let adult = localStorage.getItem("adult")
    let btnclick = localStorage.getItem('btnclick');
    if(res === 'T' && rem === 'T') {
      localStorage.setItem('adult', 'T')
      return true;
    }else if(first === 'T') {
      localStorage.setItem('adult', 'T')
      return true;
    }else if(adult === 'T' && rem !== 'T') {
      return true;
    } else if(btnclick !== null && btnclick === 'T') {
        // this.router.navigate(['/onboarding/login'])
        this.router.navigate(['/onboarding/login'])
        return false
    }else {
      // localStorage.clear()
      localStorage.setItem('btnclick', 'F');
      localStorage.setItem('guest', 'T');
      localStorage.setItem("isloggedin", 'F')
      return true
    }
//  this.x=[]
// console.log(this.t,"urlToken")
// console.log(this.freeScreens,"freeScreens")
//  console.log(next.routeConfig.path);
//let v=this.router.navigate(["/adults/"])

//  if(!this.loginResponse)
//  {
//    this.loginResponse=JSON.parse(sessionStorage.getItem("loginResponse"))
//    console.log(this.loginResponse,"taking session login")
//  }
    
// if(localStorage.getItem("token")){
//   console.log("there is token",this.loginResponse)
 //sessionStorage.setItem("loginResponse",this.loginResponse)
  
  
  // if(this.loginResponse !== null && this.loginResponse.Subscriber==1)
  // {
    //console.log("in subs =1")
    //localStorage.setItem("userId",this.loginResponse.UserId)
  //   return true
  // }
  // else{
    
   // call free pages to check if url is a free screen 
   
  //   let str = next.routeConfig.path.replace(/\D/g,'');
  //   this.scrId = str;
  //  console.log("str","id",this.scrId)
  //  if(this.freeScreens !== null && this.freeScreens.includes((this.scrId).toString()))
  //   return true
  // else{
  //   this.router.navigate(['/onboarding/login'])
  //   return false

  // }
  
  
  
//   }
// }
// else 
// {
//   console.log("not logged in",this.t)
//   if(this.t)    
//     return true 
//   else 
//     {
//       this.router.navigate(['/onboarding/login'])
//        return false 
//     }
// }
 


}

  
}
