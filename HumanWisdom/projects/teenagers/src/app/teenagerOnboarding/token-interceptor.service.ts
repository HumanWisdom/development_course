import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/internal/operators/catchError';
import {
  getStoredAccessToken,
  isWithinPostLoginGracePeriod,
  shouldShowSessionExpiredAlert,
} from '../../../../shared/config/session-auth.config';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token = '';
  private sessionExpiredAlertShown = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Never attach app Bearer token to Cognito OIDC requests
    if (req.url.includes('amazoncognito.com') || req.url.includes('cognito-idp.')) {
      return next.handle(req);
    }

    this.token = getStoredAccessToken();
    let tokenizedReq = req;
    if (this.token) {
      tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    }
    return next.handle(tokenizedReq).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          const browserUrl = window.location.href;
          const isAuthPage = browserUrl.includes('login') || browserUrl.includes('signup') || browserUrl.includes('onboarding') || browserUrl.includes('wisdom-survey');
          const isFromSignupFlow = localStorage.getItem('isFromSignupFlow') === 'T';

          // Skip handling for login/signup related APIs
          const excludedUrls = ['/login', '/AddLearner', '/verifyGoogleTokenAndLogin', '/verifyFaceBookTokenAndLogin', '/verifyAwsSSOTokenAndLogin', '/forgotPassword', '/verificationCode', '/VerifyUserByEmail'];
          const isExcluded = excludedUrls.some(url => err.url && err.url.includes(url));

          if (isExcluded || isAuthPage || isFromSignupFlow) {
            return throwError(err);
          }
          
          const userEmail = localStorage.getItem('email');
          const isGuestEmail = userEmail === 'guest@humanwisdom.me' || userEmail === '"guest@humanwisdom.me"';
          const isLoggedIn = localStorage.getItem("isloggedin") === 'T';

          if (isLoggedIn && !isGuestEmail && shouldShowSessionExpiredAlert()) {
            this.showSessionExpiredAlert();
          } else if (isLoggedIn && !isGuestEmail && isWithinPostLoginGracePeriod()) {
            return throwError(err);
          } else if (isGuestEmail && !isLoggedIn && !isAuthPage && !isFromSignupFlow) {
            // ONLY refresh for actual guest users who are NOT in an onboarding flow
            localStorage.removeItem('token');
            window.location.reload();
          }
        }
        return throwError(err);
      }
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
