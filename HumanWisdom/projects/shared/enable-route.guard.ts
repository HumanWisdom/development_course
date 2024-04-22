import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './services/shared.service';
import { ProgramType } from './models/program-model';

@Injectable({
  providedIn: 'root'
})
export class EnableRouteGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      return true;
    } else {
      if (SharedService.ProgramId == ProgramType.Adults) {
             this.router.navigate(['/adults/onboarding/login']);
          } else {
            this.router.navigate(['/teenagers/onboarding/login']);
          }
      return false;
    }
  }
}
