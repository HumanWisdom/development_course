import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { CommonService } from '../../../shared/services/common.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudioVideoGuard implements CanActivate {

  constructor(
    public router: Router,
    private commonService: CommonService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    let enabled = route.paramMap.get('enable');
    let isloggedin = localStorage.getItem('isloggedin');
    let moduleName = route.paramMap.get('moduleName');
    let isSubscriber = localStorage.getItem('isloggedin') === 'T' && localStorage.getItem('Subscriber') === '1';
    
    const trialRedirectPath = `${SharedService.getprogramName()}/subscription/start-your-free-trial`;

    // For podcasts, verify with API to prevent URL manipulation
    if (moduleName === 'podcast') {
      if (isSubscriber) {
        return of(true);
      }

      const podcastId = route.paramMap.get('RowId');
      if (!podcastId) {
        return of(true);
      }

      return this.commonService.GetPodcastList().pipe(
        map((list: any) => {
          if (list) {
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

    // Original logic for non-podcast content
    if(enabled === 'T') {
      return true
    } else {
      if(isloggedin === 'T') {
        return true
      }else {
        this.router.navigate([trialRedirectPath]);
        return false
      }
    }
  }
}
