import {
  HttpBackend, HttpClient, HttpParams
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { environment} from '../../environments/environment'
import { Number } from '../../adults/src/app/onboarding/interfaces/number';
import { paymentIntentModel } from "../models/search-data-model";
import { ToastrService } from "ngx-toastr";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  //path="http://18.132.47.231/api";
  path = environment.apiURL;
  //path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
  //path="https://staging.humanwisdom.info/api"
  navigateToUpgradeToPremium: boolean = false;
  isActivationFlow: boolean = false;
  isAdvert_hwp: boolean = false;
  public toastrService: ToastrService
  private isEnableHam = new BehaviorSubject<boolean>(false);
  private isEnableTour = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, handler: HttpBackend,public toastr: ToastrService) {
    // this.http = new HttpClient(handler);
    this.toastrService=this.toastr;
  }

  setEnableTour(value: boolean): void {
    this.isEnableTour.next(value);
  }

  getEnableTour(): Observable<boolean> {
    return this.isEnableTour.asObservable();
  }

  setDataRecievedState(value: boolean): void {
    this.isEnableHam.next(value);
  }

  getDataRecivedState(): Observable<boolean> {
    return this.isEnableHam.asObservable();
  }

  getPricing(id): Observable<any> {
    return this.http.get(this.path + `/CountryRates/${id}`)
  }

  getCurrencies(): Observable<any> {
    return this.http.get(this.path + `/getCurrencies`)
  }

  getTestimonials(): Observable<any> {
    return this.http.get(this.path + `/Testimonials`)
  }

  addUser(data: any): Observable<any> {
    return this.http.post(this.path + '/AddLearner', data)
  }

  verifyGoogle(data: any): Observable<any> {
    return this.http.post(this.path + '/verifyGoogleTokenAndLogin', data)
  }

  verifyFb(data: any): Observable<any> {
    return this.http.post(this.path + '/verifyFaceBookTokenAndLogin', data)
  }

  emailLogin(email: any, password: any): Observable<any> {
    let param1 = new HttpParams().set("email", email)
      .set("pwd", password).set("ProgID", SharedService.ProgramId)
    return this.http.get(this.path + '/login', { params: param1 })
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post(this.path + '/forgotPassword', data)
  }
  freeScreens(): Observable<any> {
    return this.http.get(this.path + `/AllModulesFreeScrs`)
  }
  
  setPassword(data: any): Observable<any> {
    return this.http.post(this.path + '/SetPassword', data)
  }

  addItem(data: any): Observable<any> {
    return this.http.post(this.path + '/Addcart', data)
  }

  editactiveCart(data: any): Observable<any> {
    return this.http.post(this.path + '/EditCart', data)
  }

  deleteItem(n: Number): Observable<any> {
    return this.http.post(this.path + `/Deletecart/${n.Id}`, null)
  }

  viewCart(n: Number): Observable<any> {
    console.log(n.Id)
    return this.http.get(this.path + `/ViewCart/${n.Id}`)
  }

  editCart(n: Number, q: Number): Observable<any> {
    console.log(n.Id, q.Id)
    return this.http.post(this.path + `/EditCart/${n.Id}/${q.Id}`, null)
  }

  couponValidation(data: any): Observable<any> {

    return this.http.post(this.path + `/couponValidation`, data)
  }

  verifyActivationKey(data: any, userId: any, code: any): Observable<any> {
    console.log(data, userId)
    return this.http.get(this.path + `/VerifyActKey/${userId}/${data}/${code}`)
  }

  sendPasswordLink(data: any): Observable<any> {
    let param1 = new HttpParams().set("email", data).set("ProgramId", SharedService.ProgramId)
    return this.http.get(this.path + `/PasswordLink`, { params: param1 })
  }
  assignKey(data: any): Observable<any> {

    return this.http.post(this.path + `/AssignKey`, data)
  }

  verifyUser(data: any): Observable<any> {

    return this.http.post(this.path + `/VerifyUserByEmail/${data}`, null)
  }

  learnerKeys(data: any): Observable<any> {

    return this.http.post(this.path + `/learnerKeys/${data}`, null)
  }
  verifyCode(data: any): Observable<any> {

    return this.http.post(this.path + `/verificationCode`, data)
  }

  socialLearner(data: any): Observable<any> {

    return this.http.post(this.path + `/LearnerSocial`, data)
  }

  public getCountry() {
    return this.http.get("https://ipapi.co/json");
  }
  getToken() {
    return JSON.parse(localStorage.getItem("token"))
  }
  addRefer(data: any): Observable<any> {

    return this.http.post(this.path + `/AddRefer`, data)
  }

  stripe(data: any): Observable<any> {

    return this.http.post(this.path + `/StripePay`, data)
  }

  myprogram(userId: any): Observable<any> {

    return this.http.get(this.path + `/myPrograms/${userId}`)
  }

  sendinvite(data: any): Observable<any> {

    return this.http.post(this.path + `/AssignKey`, data)
  }

  uploaderAvatar(data) {
    return this.http.post(this.path + `/UploadAvatar`, data)
  }

  getuser(data) {
    return this.http.get(this.path + `/Users/${data}`)
  }

  updateUser(data: any): Observable<any> {
    return this.http.post(this.path + '/AddUser', data)
  }
  deleteMyData(data: any): Observable<any> {
    return this.http.post(this.path + '/DeleteMydata/', data);
  }

  getpaymentdetail(data: any): Observable<any> {
    return this.http.get(this.path + `/GetPaymentDetails/${data}`)
  }

  donotautorenew(ActCode: any): Observable<any> {
    return this.http.post(this.path + `/PauseSubscription/${ActCode}`, {})
  }
  autorenew(ActCode: any): Observable<any> {
    return this.http.post(this.path + `/ResumeSubscription/${ActCode}`, {})
  }
  attachPaymentMethod(UserID: any, StripePayMethodID): Observable<any> {
    return this.http.post(this.path + `/AttachPaymentMethod/${StripePayMethodID}/${UserID}`, {})
  }

  createSetupIntent(paymentIntent:paymentIntentModel){
    return this.http.post(this.path + '/CreateSetupIntent/', paymentIntent);
  }

  cancelSubscription(code,reasonId): Observable<any> {
    return this.http.post(this.path + `/CancelSubscription/${code}/${reasonId}`, {});
  }

  getCancelReason(): Observable<any> {
    return this.http.get(this.path + '/cancelReasons/');
  }

  checkTrial(): Observable<any>{
    return this.http.get(this.path + '/CheckIsTrial/');
  }

  ReviveSubscription(key): Observable<any>{
    return this.http.post(this.path + `/ReviveSubscription/${key}`,{});
  }

  getScenarios(): Observable<any> {
    return this.http.get(this.path + `/Scenarios`)
  }
  getScenarioswithId(data: any): Observable<any> {
    return this.http.get(this.path + `/Scenarios/${data}`)
  }

  CheckStoryIsFree(data: any): Observable<any> {
    return this.http.get(this.path + `/CheckStoryIsFree/${data}`)
  }
  clickStory(data: any): Observable<any> {
    return this.http.post(this.path + `/clickStory/${data}`, null)
  }
  clickModule(data: any, userId: any): Observable<any> {
    return this.http.get(this.path + `/clickModule/${data}/${userId}`)
  }
  readStories(): Observable<any> {
    return this.http.get(this.path + `/wisdomStories`)
  }


  getBlog(): Observable<any> {
    return this.http.get(this.path + `/GetBlogs`)
  }

  getBlogId(BlogID): Observable<any> {
    return this.http.get(this.path + `/GetBlogs/${BlogID}`)
  }

  likeblog(BlogID): Observable<any> {
    return this.http.post(this.path + `/AddBlogLikes/${BlogID}`, {})
  }

  commentblog(data): Observable<any> {
    return this.http.post(this.path + '/AddBlogComments', data)
  }


}
