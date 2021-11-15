import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AdultsService } from './adults/adults.service'

@Injectable({
  providedIn: 'root'
})
export class authLoginGuard implements CanActivate, OnInit {
  t: any

  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService) {

  }
  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let m: any = window.location.href;
      m = m.split('?')
      localStorage.clear()
      if(m[1] !== undefined && m[1] !== '') {
      }else {
        localStorage.setItem("emailCode", 'F')
      }
    let res = localStorage.getItem("isloggedin")
    let rem = localStorage.getItem("remember")
    if (res === null || res === 'F' || rem === 'F') {
      if(m[1] !== undefined) {
        m = m[1].replace('=', '')
        this.service.decrypt(m).subscribe((res: any) => {
          if(res) {
            let s = res.split('=')[1]
            localStorage.setItem("userIdCode", s)
            localStorage.setItem("emailCode", 'T')
          }
        })
      }
      return true;
    } else {
      this.router.navigate(['/adults/adult-dashboard'])
      return false;
    }

  }


}
