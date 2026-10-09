import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { getStoredAccessToken } from '../config/session-auth.config';
import { SharedService } from './shared.service';

export const GUEST_EMAIL = 'guest@humanwisdom.me';
const GUEST_PASSWORD = '12345';

const AUTH_ENDPOINTS = [
  '/login',
  '/AddLearner',
  '/verifyGoogleTokenAndLogin',
  '/verifyFaceBookTokenAndLogin',
  '/verifyAwsSSOTokenAndLogin',
  '/forgotPassword',
  '/verificationCode',
  '/VerifyUserByEmail',
  '/VerifyAuthToken',
];

@Injectable({
  providedIn: 'root'
})
export class GuestSessionService {
  private readonly http: HttpClient;
  private pendingToken$: Observable<string> | null = null;

  constructor(backend: HttpBackend) {
    // Must bypass HTTP_INTERCEPTORS: the token interceptor depends on this service
    this.http = new HttpClient(backend);
  }

  isRegisteredUserLoggedIn(): boolean {
    const email = localStorage.getItem('email');
    const isGuestEmail = email === GUEST_EMAIL || email === `"${GUEST_EMAIL}"`;
    return localStorage.getItem('isloggedin') === 'T' && !isGuestEmail;
  }

  isAuthEndpoint(url: string): boolean {
    return AUTH_ENDPOINTS.some(endpoint => url.includes(endpoint));
  }

  isAuthFlowActive(): boolean {
    const browserUrl = window.location.href;
    return browserUrl.includes('login')
      || browserUrl.includes('signup')
      || browserUrl.includes('onboarding')
      || browserUrl.includes('wisdom-survey')
      || browserUrl.includes('authtoken=')
      || localStorage.getItem('isFromSignupFlow') === 'T';
  }

  /** True when an API request is about to go out without any token for an anonymous visitor. */
  shouldAwaitGuestToken(url: string): boolean {
    return url.startsWith(environment.apiURL)
      && !getStoredAccessToken()
      && localStorage.getItem('isloggedin') !== 'T'
      && !this.isAuthEndpoint(url)
      && !this.isAuthFlowActive();
  }

  /**
   * Resolves with the stored token, logging in as guest first if none is stored.
   * Concurrent callers share a single in-flight login request.
   */
  getToken(): Observable<string> {
    const existing = getStoredAccessToken();
    if (existing) {
      return of(existing);
    }
    if (!this.pendingToken$) {
      const params = new HttpParams()
        .set('email', GUEST_EMAIL)
        .set('pwd', GUEST_PASSWORD)
        .set('ProgID', SharedService.ProgramId);
      this.pendingToken$ = this.http.get<any>(`${environment.apiURL}/login`, { params }).pipe(
        map(res => this.storeGuestToken(res?.access_token)),
        catchError(() => of(getStoredAccessToken())),
        finalize(() => (this.pendingToken$ = null)),
        shareReplay(1)
      );
    }
    return this.pendingToken$;
  }

  private storeGuestToken(token: string): string {
    // A real login, SSO or app authtoken may have stored a token while the guest login was in flight
    const current = getStoredAccessToken();
    if (current || !token || localStorage.getItem('isloggedin') === 'T') {
      return current;
    }
    localStorage.setItem('token', JSON.stringify(token));
    return token;
  }
}
