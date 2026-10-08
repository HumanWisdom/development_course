import { HttpContextToken, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from 'rxjs/operators';
import {
  getStoredAccessToken,
  shouldShowSessionExpiredAlert,
} from '../../../../shared/config/session-auth.config';
import { GuestSessionService } from '../../../../shared/services/guest-session.service';

const GUEST_TOKEN_RETRIED = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  private sessionExpiredAlertShown = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private guestSession: GuestSessionService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Never attach app Bearer token to Cognito OIDC requests
    if (req.url.includes('amazoncognito.com') || req.url.includes('cognito-idp.')) {
      return next.handle(req);
    }

    if (this.guestSession.shouldAwaitGuestToken(req.url)) {
      return this.guestSession.getToken().pipe(switchMap(() => this.send(req, next)));
    }
    return this.send(req, next);
  }

  private send(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = getStoredAccessToken();
    const tokenizedReq = token
      ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      : req;
    return next.handle(tokenizedReq).pipe(catchError(err => {
      if (!(err instanceof HttpErrorResponse) || err.status !== 401) {
        return throwError(err);
      }
      if (this.guestSession.isAuthEndpoint(req.url) || this.guestSession.isAuthFlowActive()) {
        return throwError(err);
      }

      if (this.guestSession.isRegisteredUserLoggedIn()) {
        if (shouldShowSessionExpiredAlert()) {
          this.showSessionExpiredAlert();
        }
        return throwError(err);
      }

      if (localStorage.getItem('isloggedin') !== 'T' && !req.context.get(GUEST_TOKEN_RETRIED)) {
        // Only drop the token this request used; another request may already have stored a fresh one
        if (getStoredAccessToken() === token) {
          localStorage.removeItem('token');
        }
        return this.guestSession.getToken().pipe(
          switchMap(newToken => newToken
            ? this.send(req.clone({ context: req.context.set(GUEST_TOKEN_RETRIED, true) }), next)
            : throwError(err))
        );
      }
      return throwError(err);
    }));
  }

  private async showSessionExpiredAlert() {
    // Prevent multiple popups from showing when multiple API calls fail with 401
    if (this.sessionExpiredAlertShown) {
      return;
    }
    this.sessionExpiredAlertShown = true;

    const alert = await this.alertController.create({
      header: 'Session Expired',
      message: 'Your session has timed out due to inactivity. Please log in again to continue.',
      backdropDismiss: false,
      cssClass: 'session-expired-alert',
      buttons: [
        {
          text: 'Login',
          cssClass: 'session-expired-login-btn',
          handler: () => {
            this.sessionExpiredAlertShown = false;
            // Clear auth data
            localStorage.removeItem('token');
            localStorage.removeItem('isloggedin');
            localStorage.setItem('guest', 'T');
            this.router.navigate(['/teenagers/onboarding/login'], { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}
