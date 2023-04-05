import {
  HttpBackend, HttpClient
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { TeenagerOnboardingService } from "../teenagerOnboarding/teenager-onboarding.service";

@Injectable({
  providedIn: 'root'
})
export class TeenagersService {
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


  constructor(private http: HttpClient, handler: HttpBackend,public services:TeenagerOnboardingService) { }

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

  GetVisitedScreen(moduleId) {
    return this.http.get(this.path + '/GetVisitedScreens/' + moduleId);
  }

  getModuleList(): Observable<any> {
    return this.http.get(this.path + '/modules');
  }

  GetWisdomScreens(): Observable<any> {
    return this.http.get(this.path + '/GetWisdomScreens');
  }

  isGuest() {
    return localStorage.getItem('guest') && localStorage.getItem('guest') === 'T' ? true : false;
  }

  GetWisdomShorts(): Observable<any> {
    return this.http.get(this.path + '/GetWisdomShortsListing');
  }

  GetAudioMeditation(): Observable<any> {
    return this.http.get(this.path + '/GetAudioMeditationsListing');
  }
  contactForm(form:any){
    return this.http.post(this.path + '/ContactCoach',form);
  }

  getAllEvents(): Observable<any>{
    return this.http.get(this.path + '/Events');
  }
  
  CheckStoryIsFree(data: any): Observable<any> {
    return this.http.get(this.path + `/CheckStoryIsFree/${data}`)
  }
  CheckShortsIsFree(data: any): Observable<any> {
    return this.http.get(this.path + `/CheckShortsIsFree/${data}`)
  }

  setmoduleID(id) {
    if (localStorage.getItem("isloggedin") === 'T') {
      this.activateModule(id);
    } else {
      this.emaillogin(id);
    }

  }

  activateModule(id) {
    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : 100;
    let discoveringWisdomResume;
    let mediaPercent;
    localStorage.setItem("moduleId", JSON.stringify(id))
    this.clickModule(id, userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        let qrList = res
        discoveringWisdomResume = "s" + res.lastVisitedScreen
        sessionStorage.setItem("discoveringWisdomResume", discoveringWisdomResume)
        mediaPercent = parseInt(res.MediaPercent);
        let freeScreens = res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(qrList))
      })
  }

  emaillogin(id = '') {
    let email = 'guest@humanwisdom.me';
    let password = '12345';
    let userId;
    let loginResponse;
    let modaldata = {};
    let name;
    let isSubscribe;
    let streak;
    let text = 2;
    let video = 3;
    let audio = 4;
    let question = 6;
    let reflection = 5;
    let feedbackSurvey = 7;
    let moduleId = 7;
    let Subscriber;
    let userName;
    let mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
    let mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
    let saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
    this.services.emailLogin(email, password)
      .subscribe(
        res => {
          // localStorage.setItem("isloggedin", 'T')
          // localStorage.setItem("remember", 'T')
          loginResponse = res
          userId = res.UserId
          if (res.Subscriber === 0) {
            isSubscribe = true;
          }
          let guest = localStorage.getItem('guest');
          // if (guest === 'T') localStorage.setItem('guest', 'F')
          if (res['Email'] === "guest@humanwisdom.me") localStorage.setItem('guest', 'T')
          else localStorage.setItem("guest", 'F')
          localStorage.setItem("text", JSON.stringify(2))
          sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse))
          localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
          localStorage.setItem("token", JSON.stringify(res.access_token))
          localStorage.setItem("Subscriber", res.Subscriber)
          localStorage.setItem("userId", JSON.stringify(userId))
          localStorage.setItem("email", email)
          localStorage.setItem("pswd", password)
          localStorage.setItem("name", res.Name)
          let nameupdate = localStorage.getItem(
            "nameupdate"
          );
          if (nameupdate) {
            name = nameupdate
          } else {
            name = res.Name
          }
          streak = res.Streak
          let namedata = localStorage.getItem('name').split(' ')
          modaldata['email'] = localStorage.getItem('email');
          modaldata['firstname'] = namedata[0];
          modaldata['lastname'] = namedata[1] ? namedata[1] : '';
          localStorage.setItem("video", JSON.stringify(video))
          localStorage.setItem("audio", JSON.stringify(audio))
          localStorage.setItem("moduleId", JSON.stringify(moduleId))
          localStorage.setItem("question", JSON.stringify(question))
          localStorage.setItem("reflection", JSON.stringify(reflection))
          localStorage.setItem("feedbackSurvey", JSON.stringify(feedbackSurvey))
          userId = JSON.parse(localStorage.getItem("userId"))
          Subscriber = localStorage.getItem('Subscriber')
          localStorage.setItem("mediaAudio", JSON.stringify(mediaAudio))
          localStorage.setItem("mediaVideo", JSON.stringify(mediaVideo))
          if (localStorage.getItem("token") && (saveUsername == true)) {
            userId = JSON.parse(localStorage.getItem("userId"))
            userName = JSON.parse(localStorage.getItem("userName"))
          }
          else {
            userId = JSON.parse(sessionStorage.getItem("userId"))
            userName = JSON.parse(sessionStorage.getItem("userName"))

          }
          //this.getBookmarks()
          setTimeout(() => {
            // this.getProgress()
            // this.freescreens();
            this.getBookmark(userId)
          }, 1000);

          if (res.UserId == 0) {

          }
          else {
            userId = res.UserId
            userName = res.Name
            sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse))
            localStorage.setItem("userId", JSON.stringify(userId))
            localStorage.setItem("token", JSON.stringify(res.access_token))
            if (saveUsername == true) {
              localStorage.setItem("userId", JSON.stringify(userId))
              localStorage.setItem("userEmail", JSON.stringify(email))
              localStorage.setItem("userName", JSON.stringify(userName))
            }
            else {
              sessionStorage.setItem("userId", JSON.stringify(userId))
              sessionStorage.setItem("userEmail", JSON.stringify(email))
              sessionStorage.setItem("userName", JSON.stringify(userName))
            }
          }
          if (id !== '') {
            this.activateModule(id);
          }
        },
        error => { console.log(error) },
        () => {
        }
      )
  }

  
  getBookmark(userid) {
    this.getBookmarks(userid)
      .subscribe(res => {
        let bookmarks = res
        bookmarks = bookmarks.map(a => parseInt(a.ScrNo));
        localStorage.setItem("bookmarkList", JSON.stringify(bookmarks))
      })

  }
}