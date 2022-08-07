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
export class FrameworksService {
// path="http://18.132.47.231/api";
path="https://www.humanwisdom.info/api"
// path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
//path="https://staging.humanwisdom.info/api"

  constructor(
    private http: HttpClient,
    handler: HttpBackend) {  //this.http = new HttpClient(handler);
  }

  getAffliateCommision(id){
    return this.http.get(this.path + `/GetAffliateCommision/${id}`)
  }

  getUserByID(id){
    return this.http.get(this.path + `/GetAffUsers/${id}`)
  }
  
  addUser(data: any): Observable<any> {
    return this.http.post(this.path + '/AddUser', data)
  }
}