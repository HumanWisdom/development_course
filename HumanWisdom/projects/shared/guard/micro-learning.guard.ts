import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class MicroLearningGuard implements CanActivate {

  constructor(
    private router: Router,
    private commonService: CommonService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const isSubscriber = localStorage.getItem('isloggedin') === 'T' && localStorage.getItem('Subscriber') === '1';
    
    if (isSubscriber) {
      return of(true);
    }

    let contentId = route.paramMap.get('id');

    if (!contentId && state.url.includes('/end')) {
      contentId = localStorage.getItem("m_learningId");
    }

    if (!contentId) {
        return of(true); 
    }

    const trialRedirectPath = `/${SharedService.getprogramName()}/subscription/start-your-free-trial`;

    return this.commonService.GetMicrolearningList(SharedService.ProgramId).pipe(
      map((list: any) => {
        if (list) {
          const currentItem = list.find(item => item.microlearningID == contentId);
          if (currentItem && currentItem.isFree === '0') {
            this.router.navigate([trialRedirectPath]);
            return false;
          }
        }
        return true;
      }),
      catchError(() => {
        return of(true); // Allow navigation if API fails
      })
    );
  }
}
