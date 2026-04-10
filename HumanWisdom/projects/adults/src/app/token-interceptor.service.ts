import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from '../../../shared/services/session.service';
import { AdultsService } from './adults/adults.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token = '';

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      this.token = JSON.parse(localStorage.getItem("token"))
    }
    catch (e) {
      this.token = localStorage.getItem("token");
    }

    if (req.url.includes('/login') || req.url.includes('/VerifyAuthToken') || 
        req.url.includes('/getuser') || req.url.includes('/Onboarding') ||
        req.url.includes('/VerifyEmail')) {
      return next.handle(req);
    }

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ` + this.token
      }
    })

    return next.handle(tokenizedReq).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            const sessionService = this.injector.get(SessionService);
            const adultsService = this.injector.get(AdultsService);

            if (localStorage.getItem("isloggedin") === 'T') {
              sessionService.notifySessionExpired();
            } else {
              // Guest user - refresh session
              adultsService.emaillogin();
            }
          }
        }
        return throwError(err);
      })
    );
  }
}
