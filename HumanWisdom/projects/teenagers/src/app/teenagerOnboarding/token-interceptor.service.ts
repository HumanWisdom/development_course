import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/internal/operators/catchError';

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
    this.token = JSON.parse(localStorage.getItem("token"))

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ` + this.token
      }
    })
    return next.handle(tokenizedReq).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          const browserUrl = window.location.href;
          const isAuthPage = browserUrl.includes('login') || browserUrl.includes('signup') || browserUrl.includes('onboarding') || browserUrl.includes('wisdom-survey');
          const isFromSignupFlow = localStorage.getItem('isFromSignupFlow') === 'T';

          // Skip handling for login/signup related APIs
          const excludedUrls = ['/login', '/AddLearner', '/verifyGoogleTokenAndLogin', '/verifyFaceBookTokenAndLogin', '/forgotPassword', '/verificationCode', '/VerifyUserByEmail'];
          const isExcluded = excludedUrls.some(url => err.url && err.url.includes(url));

          if (isExcluded || isAuthPage || isFromSignupFlow) {
            return throwError(err);
          }
          
          const userEmail = localStorage.getItem('email');
          const isGuestEmail = userEmail === 'guest@humanwisdom.me' || userEmail === '"guest@humanwisdom.me"';
          const isLoggedIn = localStorage.getItem("isloggedin") === 'T';

          if (isLoggedIn && !isGuestEmail) {
            this.showSessionExpiredAlert();
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
