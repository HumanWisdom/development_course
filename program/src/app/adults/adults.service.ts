import {
  HttpBackend, HttpClient
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdultsService {
  //path="http://18.132.47.231/api";
  path = environment.apiURL;
  //path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"

  personalisedforyoulist = [
    {
      id: "1",
      name: 'Wisdom for the workplace'
    },
    {
      id: "2",
      name: 'Overcome stress and anxiety'
    },
    {
      id: "3",
      name: 'Have fulfilling relationships'
    },
    {
      id: "4",
      name: 'Be happier'
    },
    {
      id: "5",
      name: 'Change unhelpful habits'
    },
    {
      id: "6",
      name: 'Deal with sorrow and loss'
    },
    {
      id: "7",
      name: 'Mindfulness',
    },
    {
      id: "8",
      name: 'Manage your emotions',
    }
  ]


  constructor(private http: HttpClient, handler: HttpBackend) { }

  submitProgressText(data: any): Observable<any> {
    return this.http.post(this.path + '/UserProgress', data)
  }

  submitProgressAv(data: any): Observable<any> {
    return this.http.post(this.path + '/UserProgressAv', data)
  }

  submitProgressQuestion(data: any): Observable<any> {
    return this.http.post(this.path + '/userProgressQuestion', data)
  }
  submitProgressReflection(data: any): Observable<any> {
    return this.http.post(this.path + '/UserProgressReflection', data)
  }
  createScreen(data: any): Observable<any> {
    return this.http.post(this.path + '/AddScreen', data)
  }
  clickModule(data: any, userId: any): Observable<any> {
    return this.http.get(this.path + `/clickModule/${data}/${userId}`)
  }
  getPoints(data: any): Observable<any> {
    return this.http.get(this.path + `/UserScore/${data}`)
  }
  viewJournal(data: any): Observable<any> {

    return this.http.get(this.path + `/viewJournalAndReflections/${data}`)
  }
  submitJournal(data: any): Observable<any> {
    return this.http.post(this.path + '/AddJournal', data)
  }

  getDailyQuestion(data: any): Observable<any> {

    return this.http.get(this.path + `/userDailyQuestion/${data}`)
  }
  addDailyQuestion(data: any): Observable<any> {
    return this.http.post(this.path + '/AddUserReflection', data)
  }
  getBookmarks(data: any): Observable<any> {

    return this.http.get(this.path + `/UserBookMarks/${data}`)
  }

  sessionPoints(data: any): Observable<any> {

    return this.http.post(this.path + `/sessionPoints`, data)
  }
  addReflection(data: any): Observable<any> {
    return this.http.post(this.path + '/AddUserReflection', data)
  }
  freeScreens(): Observable<any> {
    return this.http.get(this.path + `/AllModulesFreeScrs`)
  }
  mediaPercent(data: any): Observable<any> {

    return this.http.get(this.path + `/mediaPercent/${data}`)
  }
  getScenarios(): Observable<any> {
    return this.http.get(this.path + `/Scenarios`)
  }
  getScenarioswithId(data: any): Observable<any> {
    return this.http.get(this.path + `/Scenarios/${data}`)
  }
  readStories(): Observable<any> {
    return this.http.get(this.path + `/wisdomStories`)
  }
  clickStory(data: any): Observable<any> {
    return this.http.post(this.path + `/clickStory/${data}`, null)
  }
  userQuestion(data: any, edit: any): Observable<any> {

    // let params = new HttpParams();
    //params = params.append('BeforeEdit', edit);
    return this.http.post(this.path + `/UserQuestions/?BeforeEdit=${edit}`, data)
  }

  screenProgress(data: any): Observable<any> {
    return this.http.get(this.path + `/getSessionProgress/${data}`)
  }
  UploadThumbnail(data: any): Observable<any> {

    return this.http.post(this.path + `/UploadThumbnail`, data)
  }
  wisdomScore(data: any): Observable<any> {

    return this.http.post(this.path + `/UserWisdomSurveyScore/${data}`, null)
  }
  wisdomSurveyinsights(data: any): Observable<any> {

    return this.http.get(this.path + `/GetYearlyWisdomScore/${data}`)
  }

  wisdomSurveyinsightsummary(data: any): Observable<any> {

    return this.http.get(this.path + `/GetYearlyWisdomScoreSummary/${data}`)
  }

  adminPopup(): Observable<any> {
    return this.http.get(this.path + `/GetAdminSetting/1`)
  }

  referfrd(data: any): Observable<any> {
    return this.http.post(this.path + '/AddRefer', data)
  }

  bookmark(data): Observable<any> {
    return this.http.get(this.path + `/UserBookMarks/${data}`)
  }

  decrypt(encrypt) {
    return this.http.post(this.path + `/decryptURL?EncryptedKey=${encrypt}`, {})
  }

  verifytoken(encrypt) {
    return this.http.get(this.path + `/VerifyAuthToken?AccessToken=${encrypt}`)
  }

  verifyactkey(data): Observable<any> {
    return this.http.get(this.path + `/VerifyActKey/${data}`)
  }

  resendotp(data): Observable<any> {
    return this.http.post(this.path + `/ResendVerificationMail/${data}`, {})

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


  getSearchDataForSearchSite(data): Observable<any> {
    return this.http.post(this.path + `/SiteSearch/${data}`, {})
  }
  getForumSearchDataSite(data): Observable<any> {
    return this.http.get(this.path + `/GetAllPosts/${data}`);
  }
  postUserpreference(data): Observable<any> {
    return this.http.post(this.path + `/AddUserPreference/${data}`, {})
  }

  getUserpreference(): Observable<any> {
    return this.http.get(this.path + `/GetUserPreference`)
  }

  getperList() {
    return this.personalisedforyoulist;
  }

  getdashshorts(): Observable<any> {
    return this.http.get(this.path + `/GetDashboardShorts`)
  }

  getdashstories(): Observable<any> {
    return this.http.get(this.path + `/GetDashboardStories`)
  }
  GetGuidedQs_Topics(): Observable<any> {
    return this.http.get(this.path + `/GetGuidedQs_Topics`)
  }
  GetGuidedQs_Response(id: any, attempt: any): Observable<any> {
    return this.http.get(this.path + `/GetGuidedQs_Response/` + id + '/' + attempt)
  }
  AddGuidedQs_Response(data: any) {
    return this.http.post(this.path + `/AddGuidedQs_Response/`, data);
  }
  getcuratedstressdashstories(): Observable<any> {
    return this.http.get(this.path + `/GetDashboardStories/2`)
  }
  getcuratedemotionsdashstories(): Observable<any> {
    return this.http.get(this.path + `/GetDashboardStories/4`)
  }
  getcuratedrelationshipdashstories(): Observable<any> {
    return this.http.get(this.path + `/GetDashboardStories/3`)
  }

  getNotificationList(): Observable<any> {
    return this.http.get(this.path + `/GetNotifications`);
  }

  MarkNotificationAsRead(NotificationId: number): Observable<any> {
    return this.http.post(this.path + `/SetNotificationRead/` + NotificationId, null);
  }

  AddPartner(data: any): Observable<any> {
    return this.http.post(this.path + `/AddPartner/` + data, null);
  }

  UpdatePartner(data: any): Observable<any> {
    return this.http.post(this.path + `/UpdatePartnerDetails/`, data);
  }

  GetCountry() {
    return this.http.get(this.path + `/Countries`);
  }
  GetPartnerCommReport(): Observable<any> {
    return this.http.get(this.path + `/GetPartnerCommReport`);
  }
  getTreePlantationReport(): Observable<any> {
    return this.http.get(this.path + `/GetPartnerTreesReport`);
  }
  getPartnerBankDetails(): Observable<any> {
    return this.http.get(this.path + '/GetPartnerBankDetails')
  }

  addJournal(data: any): Observable<any> {
    return this.http.post(this.path + '/AddJournal', data);
  }

  GetMyPartners(): Observable<any> {
    return this.http.get(this.path + '/GetMyPartners');
  }

   GetVisitedScreen(moduleId){
    return this.http.get(this.path + '/GetVisitedScreens/'+moduleId);
   }

   getModuleList(): Observable<any> {
      return this.http.get(this.path + '/modules');
   }
}
