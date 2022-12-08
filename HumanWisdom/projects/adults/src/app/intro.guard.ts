import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdultsService } from './adults/adults.service';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate, OnInit {
 
  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService) {
  }
  ngOnInit() {

  }

  canActivate(): boolean {
    let m: any = window.location.href;
    let token = m.split('authtoken')
    if (token[1] !== undefined && token[1] !== '') {
        localStorage.setItem("enablebanner", 'F')
        localStorage.setItem("fromapp", 'T')
      let authtoken = token[1].split('=')[1];
      localStorage.setItem('guest', 'F');
      localStorage.setItem('btnclick', 'F')
      localStorage.setItem("remember", 'T')
      localStorage.setItem('adult', 'T')
      localStorage.setItem("isloggedin", 'T')
      localStorage.setItem("token", JSON.stringify(authtoken))
      return true
    }else {
        return true
    }
  }
}
