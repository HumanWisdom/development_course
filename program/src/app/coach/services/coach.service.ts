import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  CoachService {
  path="https://staging.humanwisdom.info/api"
  constructor( private http: HttpClient) { }

  register(data:any):Observable<any>{
    return this.http.post(this.path+'/AddCoach',data)
  }
  emailLogin(email:any,password:any):Observable<any>{
    let param1=new HttpParams().set("email",email)
                              .set("pwd",password)
    return this.http.get(this.path+'/login',{params:param1})
  }
  getCountry(): Observable<any> {
    return this.http.get('https://staging.humanwisdom.info/api/Countries');
  }

  getState(id: number): Observable<any> {
    return this.http.get('https://staging.humanwisdom.info/api/State/'+id);
  }

  getLanguageList(): Observable<any> {
    return this.http.get('https://staging.humanwisdom.info/api/GetCoachLanguages');
  }

  getCoachDetails(id:number): Observable<any> {
    return this.http.get(this.path+'/GetCoach/'+id);
  }
  
  uploaderAvatar(data) {
    return this.http.post(this.path+`/UploadAvatar`,data)
  }
}