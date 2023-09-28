import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';
import { Constant } from '../services/constant';

@Injectable({
  providedIn: 'root',
})
export class RouteHistoryGuard implements CanActivate {
  private routeHistory: string[] = [];

  constructor(public router: Router) {
    // Subscribe to router events to track navigation history
    // this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
    //   this.routeHistory.push(event.urlAfterRedirects);
    // });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // You can do something with the route history here if needed
     debugger;
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);
   
    return true; // Allow navigation
  }
}