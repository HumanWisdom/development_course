import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class PodcastGuard implements CanActivate {

  constructor(
    private router: Router,
    private commonService: CommonService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const isSubscriber = localStorage.getItem('isloggedin') === 'T' && localStorage.getItem('Subscriber') === '1';
    
    if (isSubscriber) {
      return of(true);
    }

    // Get podcast ID from route params (assuming it's passed as 'id' in the audiopage route)
    const podcastId = route.paramMap.get('id');

    if (!podcastId) {
        return of(true); 
    }

    const trialRedirectPath = `/${SharedService.getprogramName()}/subscription/start-your-free-trial`;

    return this.commonService.GetPodcastList().pipe(
      map((list: any) => {
        if (list) {
          // Filter list for current program
          const filteredList = list.filter(x => x.ProgIDs.includes(SharedService.ProgramId.toString()));
          const currentPodcast = filteredList.find(item => item.PodcastID == podcastId);
          
          if (currentPodcast && currentPodcast.isFree === '0') {
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
