import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
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
    try{
       this.token=JSON.parse(localStorage.getItem("token"))
    }
    catch(e){ 
      this.token = localStorage.getItem("token");
    }
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ` + this.token
      }
    })
    return next.handle(tokenizedReq).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // Skip handling for login/signup related APIs to avoid breaking onboarding flows
          const excludedUrls = ['/login', '/AddLearner', '/verifyGoogleTokenAndLogin', '/verifyFaceBookTokenAndLogin', '/forgotPassword', '/verificationCode', '/VerifyUserByEmail'];
          const isExcluded = excludedUrls.some(url => err.url && err.url.includes(url));

          if (isExcluded) {
            return throwError(err);
          }

          localStorage.setItem('guest', 'T');
          localStorage.setItem('personalised', 'T');
          localStorage.setItem('acceptcookie', 'T');
          
          if (localStorage.getItem("isloggedin") === 'T') {
            this.showSessionExpiredAlert();
          } else {
            // For guest users, refresh to get a new guest token from emaillogin()
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
            this.router.navigate(['/adults/onboarding/login'], { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}
