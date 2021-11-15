import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  token=JSON.parse(localStorage.getItem("token"))

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let tokenizedReq=req.clone ({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    })
    return next.handle(tokenizedReq)
   }
}
