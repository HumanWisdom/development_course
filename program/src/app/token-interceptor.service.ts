import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token = JSON.parse(localStorage.getItem("token"))

  constructor(private route: ActivatedRoute) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let wisdom = false;
    this.route.queryParams.subscribe(params => {
      if(params?.sId) {
        wisdom =true;
      }
  });
    this.token = JSON.parse(localStorage.getItem("token"))
    let tokenizedReq;
    if(wisdom) {
      tokenizedReq  = req.clone({
        setHeaders: {
          }
      })
    }else {
    tokenizedReq = req.clone({
        setHeaders: {
               Authorization: `Bearer ` + this.token
        }
      })
    }
    return next.handle(tokenizedReq)
  }
}
