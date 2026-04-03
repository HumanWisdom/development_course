import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionExpiredSource = new Subject<void>();
  sessionExpired$ = this.sessionExpiredSource.asObservable();

  constructor() {}

  /**
   * Notifies all subscribers that the user session has expired.
   * This is typically called by the TokenInterceptor when a 401 Unauthorized
   * error is received from the API.
   */
  notifySessionExpired() {
    this.sessionExpiredSource.next();
  }
}
