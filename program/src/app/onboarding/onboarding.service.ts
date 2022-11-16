import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpBackend,
  HttpParams
} from "@angular/common/http";
import {Number} from './interfaces/number'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  //path="http://18.132.47.231/api";
  path=environment.apiURL;
  //path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
  //path="https://staging.humanwisdom.info/api"
  navigateToUpgradeToPremium:boolean=false;
  isActivationFlow:boolean=false;
  isAdvert_hwp:boolean=false;
  constructor(private http: HttpClient,handler: HttpBackend) {
   // this.http = new HttpClient(handler);
  }

  getPricing(id):Observable<any>{
    return this.http.get(this.path+`/CountryRates/${id}`)
  }

  getCurrencies():Observable<any>{
    return this.http.get(this.path+`/getCurrencies`)
  }

  getTestimonials():Observable<any>{
    return this.http.get(this.path+`/Testimonials`)
  }

  addUser(data:any):Observable<any>{
    return this.http.post(this.path+'/AddLearner',data)
  }

  verifyGoogle(data:any):Observable<any>{
    return this.http.post(this.path+'/verifyGoogleTokenAndLogin', data)
  }

  verifyFb(data:any):Observable<any>{
    return this.http.post(this.path+'/verifyFaceBookTokenAndLogin', data)
  }

  emailLogin(email:any,password:any):Observable<any>{
    let param1=new HttpParams().set("email",email)
                              .set("pwd",password)
    return this.http.get(this.path+'/login',{params:param1})
  }

  forgotPassword(data:any):Observable<any>{
    return this.http.post(this.path+'/forgotPassword',data)
  }

  setPassword(data:any):Observable<any>{
    return this.http.post(this.path+'/SetPassword',data)
  }

  addItem(data:any):Observable<any>{
    return this.http.post(this.path+'/Addcart',data)
  }

  editactiveCart(data:any):Observable<any>{
    return this.http.post(this.path+'/EditCart',data)
  }

  deleteItem(n:Number):Observable<any>{
    return this.http.post(this.path+`/Deletecart/${n.Id}`,null)
  }

  viewCart(n:Number):Observable<any>{
    console.log(n.Id)
    return this.http.get(this.path+`/ViewCart/${n.Id}`)
  }

  editCart(n:Number,q:Number):Observable<any>{
    console.log(n.Id,q.Id)
    return this.http.post(this.path+`/EditCart/${n.Id}/${q.Id}`,null)
  }

  couponValidation(data:any):Observable<any>{
    
    return this.http.post(this.path+`/couponValidation`,data)
  }

  verifyActivationKey(data:any,userId:any, code: any):Observable<any>{
    console.log(data,userId)
    return this.http.get(this.path+`/VerifyActKey/${userId}/${data}/${code}`)
  }

  sendPasswordLink(data:any):Observable<any>{
    let param1=new HttpParams().set("email",data)
                             
    return this.http.get(this.path+`/PasswordLink`,{params:param1})
  }
  assignKey(data:any):Observable<any>{
    
    return this.http.post(this.path+`/AssignKey`,data)
  }

  verifyUser(data:any):Observable<any>{
    
    return this.http.post(this.path+`/VerifyUserByEmail/${data}`,null)
  }

  learnerKeys(data:any):Observable<any>{
    
    return this.http.post(this.path+`/learnerKeys/${data}`,null)
  }
  verifyCode(data:any):Observable<any>{
    
    return this.http.post(this.path+`/verificationCode`,data)
  }

  socialLearner(data:any):Observable<any>{
    
    return this.http.post(this.path+`/LearnerSocial`,data)
  }

  public getCountry()  
  {  
    return this.http.get("https://ipapi.co/json");  
  } 
  getToken(){
    return JSON.parse(localStorage.getItem("token"))
  }
  addRefer(data:any):Observable<any>{
    
    return this.http.post(this.path+`/AddRefer`,data)
  }

  stripe(data:any):Observable<any>{
    
    return this.http.post(this.path+`/StripePay`,data)
  }

  myprogram(userId:any):Observable<any>{
    
    return this.http.get(this.path+`/myPrograms/${userId}`)
  }

  sendinvite(data:any):Observable<any>{
    
    return this.http.post(this.path+`/AssignKey`,data)
  }

  uploaderAvatar(data) {
    return this.http.post(this.path+`/UploadAvatar`,data)
  }

  getuser(data) {
    return this.http.get(this.path+`/Users/${data}`)
  }

  updateUser(data:any):Observable<any>{
    return this.http.post(this.path+'/AddUser',data)
  }
  deleteMyData(data:any):Observable<any>{
    return this.http.post(this.path+'/DeleteMydata/',data);
  } 

  getpaymentdetail(data:any):Observable<any>{
    return this.http.get(this.path+`/GetPaymentDetails/${data}`)
  }
  
  donotautorenew(ActCode: any):Observable<any>{
    return this.http.post(this.path+`/PauseSubscription/${ActCode}`, {})
  }
  autorenew(ActCode: any):Observable<any>{
    return this.http.post(this.path+`/ResumeSubscription/${ActCode}`, {})
  }
  attachPaymentMethod(UserID: any, StripePayMethodID):Observable<any>{
    return this.http.post(this.path+`/AttachPaymentMethod/${StripePayMethodID}/${UserID}`, {})
  }
}
