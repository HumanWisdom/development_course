import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from 'rxjs/operators';
import { SessionService } from "../../../../shared/services/session.service";
import { TeenagersService } from "../teenagers/teenagers.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token = '';

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      const storedToken = localStorage.getItem("token");
      if (storedToken === 'null' || storedToken === 'undefined' || !storedToken) {
        this.token = '';
      } else {
        this.token = JSON.parse(storedToken);
      }
    }
    catch (e) {
      this.token = localStorage.getItem("token") || '';
    }

    if (req.url.includes('/login') || req.url.includes('/VerifyAuthToken') || req.url.includes('/AddLearner')) {
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
            const teenagersService = this.injector.get(TeenagersService);

            if (localStorage.getItem("isloggedin") === 'T') {
              sessionService.notifySessionExpired();
            } else {
              // Guest user - silently refresh session and retry once
              return teenagersService.emailLoginReturningObservable('guest@humanwisdom.me', '12345').pipe(
                switchMap((res: any) => {
                  if (res && res.access_token) {
                    localStorage.setItem("token", JSON.stringify(res.access_token));
                    const retryReq = req.clone({
                      setHeaders: {
                        Authorization: `Bearer ` + res.access_token
                      }
                    });
                    return next.handle(retryReq);
                  }
                  return throwError(err);
                }),
                catchError(() => throwError(err))
              );
            }
          }
        }
        return throwError(err);
      })
    );
  }
}
