import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token = '';

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try{
       this.token=JSON.parse(localStorage.getItem("token"))
    }
    catch(e){ 
      this.token = localStorage.getItem("token");
    }
    let headers = {};
    if (this.token && this.token !== 'null') {
      headers['Authorization'] = `Bearer ` + this.token;
    }
    let tokenizedReq = req.clone({
      setHeaders: headers
    })
    return next.handle(tokenizedReq).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // localStorage.clear()
          localStorage.setItem('guest', 'T');
          localStorage.setItem('personalised', 'T');
          localStorage.setItem('acceptcookie', 'T');
          // this.router.navigate(['/adults/adult-dashboard'])
        }
        return throwError(err);
      }
    }));
  }
}
