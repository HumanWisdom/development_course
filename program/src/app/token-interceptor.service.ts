import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor,HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';
import { OnboardingService } from './onboarding/onboarding.service';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token=JSON.parse(localStorage.getItem("token"))


  constructor() { 
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.token=JSON.parse(localStorage.getItem("token"))
    let tokenizedReq=req.clone({
      setHeaders: {
        Authorization: `Bearer ` + this.token
      }
    })
    return next.handle(tokenizedReq)
   }
}
