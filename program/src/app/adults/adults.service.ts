import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
export class AdultsService {
  //path="http://18.132.47.231/api";
  path=environment.apiURL;
  //path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
  //path="https://staging.humanwisdom.info/api"


  constructor( private http: HttpClient,handler: HttpBackend) { }

  submitProgressText(data:any):Observable<any>{
    return this.http.post(this.path+'/UserProgress',data)
  }

  submitProgressAv(data:any):Observable<any>{
    return this.http.post(this.path+'/UserProgressAv',data)
  }

  submitProgressQuestion(data:any):Observable<any>{
    return this.http.post(this.path+'/userProgressQuestion',data)
  }
  submitProgressReflection(data:any):Observable<any>{
    return this.http.post(this.path+'/UserProgressReflection',data)
  }
 createScreen(data:any):Observable<any>{
    return this.http.post(this.path+'/AddScreen',data)
  }
  clickModule(data:any,userId:any):Observable<any>{
    return this.http.get(this.path+`/clickModule/${data}/${userId}`)
  }
  getPoints(data:any):Observable<any>{
    return this.http.get(this.path+`/UserScore/${data}`)
  }
  viewJournal(data:any):Observable<any>{
    
    return this.http.get(this.path+`/viewJournalAndReflections/${data}`)
  }
  submitJournal(data:any):Observable<any>{
    return this.http.post(this.path+'/AddJournal',data)
  }

  getDailyQuestion(data:any):Observable<any>{
   
    return this.http.get(this.path+`/userDailyQuestion/${data}`)
  }
  addDailyQuestion(data:any):Observable<any>{
    return this.http.post(this.path+'/AddUserReflection',data)
  }
  getBookmarks(data:any):Observable<any>{
   
    return this.http.get(this.path+`/UserBookMarks/${data}`)
  }

  sessionPoints(data:any):Observable<any>{
    
    return this.http.post(this.path+`/sessionPoints`,data)
  }
  addReflection(data:any):Observable<any>{
    return this.http.post(this.path+'/AddUserReflection',data)
  }
  freeScreens():Observable<any>{
    return this.http.get(this.path+`/AllModulesFreeScrs`)
  }
  mediaPercent(data:any):Observable<any>{
   
    return this.http.get(this.path+`/mediaPercent/${data}`)
  }
  getScenarios():Observable<any>{
    return this.http.get(this.path+`/Scenarios`)
  }
  getScenarioswithId(data: any):Observable<any>{
    return this.http.get(this.path+`/Scenarios/${data}`)
  }
  readStories():Observable<any>{
    return this.http.get(this.path+`/wisdomStories`)
  }
  clickStory(data:any):Observable<any>{
    return this.http.post(this.path+`/clickStory/${data}`,null)
  }
  userQuestion(data:any,edit:any):Observable<any>{
   
   // let params = new HttpParams();
    //params = params.append('BeforeEdit', edit);
    return this.http.post(this.path+`/UserQuestions/?BeforeEdit=${edit}`,data)
  }

  screenProgress(data:any):Observable<any>{
    return this.http.get(this.path+`/getSessionProgress/${data}`)
  }
  UploadThumbnail(data:any):Observable<any>{
    
     return this.http.post(this.path+`/UploadThumbnail`,data)
   }
   wisdomScore(data:any):Observable<any>{
    
     return this.http.post(this.path+`/UserWisdomSurveyScore/${data}`,null)
   }
   wisdomSurveyinsights(data:any):Observable<any>{
    
     return this.http.get(this.path+`/GetYearlyWisdomScore/${data}`)
   }

   wisdomSurveyinsightsummary(data:any):Observable<any>{
    
     return this.http.get(this.path+`/GetYearlyWisdomScoreSummary/${data}`)
   }

   adminPopup():Observable<any> {
    return this.http.get(this.path+ `/GetAdminSetting/1`)
   }

   referfrd(data:any):Observable<any>{
    return this.http.post(this.path+'/AddRefer',data)
  }

  bookmark(data):Observable<any> {
    return this.http.get(this.path+ `/UserBookMarks/${data}`)
   }

   decrypt(encrypt){
    return this.http.post(this.path + `/decryptURL?EncryptedKey=${encrypt}`, {})
  }

  verifytoken(encrypt){
    return this.http.get(this.path + `/VerifyAuthToken?AccessToken=${encrypt}`)
  }

  verifyactkey(data):Observable<any> {
    return this.http.get(this.path+ `/VerifyActKey/${data}`)
   }

   resendotp(data):Observable<any> {
    return this.http.post(this.path+ `/ResendVerificationMail/${data}`, {})
    
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

  getDailypractiseQuestion(): Observable<any> {
    return this.http.get(this.path + `/GetDailyPractise_Question`)
  }

  submitDailypractiseQuestion(data): Observable<any> {
    return this.http.post(this.path + '/AddDailyQuestion_Response', data)
  }

  getDailypractiseQuestionbreath(): Observable<any> {
    return this.http.get(this.path + `/GetDailyPractiseBreath`)
  }

  getDailypractiseQuestionmeditation(): Observable<any> {
    return this.http.get(this.path + `/GetDailyPractise_Med`)
  }

  getDailypractiseQuestionins(): Observable<any> {
    return this.http.get(this.path + `/GetDailyPractise_Ins`)
  }

  getDailypractiseQuestiontoday(): Observable<any> {
    return this.http.get(this.path + `/GetDailyPractise_Try`)
  }

  getDailypractiseQuestionoftheday(): Observable<any> {
    return this.http.get(this.path + `/GetDailyPractise_Question`)
  }
}
