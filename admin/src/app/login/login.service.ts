import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpBackend,
  HttpParams
} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
// path="http://18.132.47.231/api";
path="https://www.humanwisdom.info/api"
// path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
// path="https://staging.humanwisdom.info/api"

  constructor(
    private http: HttpClient,
    handler: HttpBackend) {  //this.http = new HttpClient(handler);
  }

  emailLogin(email:any,password:any):Observable<any>{
    let param1=new HttpParams().set("email",email)
                              .set("pwd",password)
    return this.http.get(this.path+'/login',{params:param1})
  }
}