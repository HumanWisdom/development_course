import {
  HttpBackend, HttpClient
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { UntypedFormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { OnboardingService } from "../onboarding/onboarding.service";

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

  mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";
  mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";

  video = 3;
  audio = 4;

  user: any;
  userId: any;
  idToken: any;
  email: any;
  password: any;
  showAlert = false;
  successPassword = JSON.parse(sessionStorage.getItem("successPassword"));
  showSuccessPassword: any;
  saveUsername = false;
  urlEmail: any;
  urlPassword: any;
  urlKey: any;
  loginResponse: any;
  socialFirstName: any;
  socialLastName: any;
  socialEmail: any;
  userName: any;
  deferredPrompt: any;
  showButton = true;
  enableLogin = false;
  scrId: any;
  x = [];

  constructor(private http: HttpClient, handler: HttpBackend, private fb: UntypedFormBuilder,
    private router: Router,
    private activate: ActivatedRoute,
    private authService: SocialAuthService,
    private aservice: AdultsService,
    private service: OnboardingService) { }

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

  storeuserlocaldata(res, social) {
    if (res) {
      this.loginResponse = res;
      if(social) {
        localStorage.setItem("socialLogin", "T");
      }else {
        localStorage.setItem("socialLogin", "F");
      }
      localStorage.setItem("isloggedin", "T");
      localStorage.setItem(
        "mediaAudio",
        JSON.stringify(this.mediaAudio)
      );
      localStorage.setItem(
        "mediaVideo",
        JSON.stringify(this.mediaVideo)
      );
      localStorage.setItem("video", JSON.stringify(this.video));
      localStorage.setItem("audio", JSON.stringify(this.audio));
      localStorage.setItem("remember", "T");
      localStorage.setItem("guest", "F");
      localStorage.setItem("btnclick", "F");
      localStorage.setItem("FnName", this.socialFirstName);
      localStorage.setItem("LName", this.socialLastName);
      localStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      sessionStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      localStorage.setItem(
        "token",
        JSON.stringify(this.loginResponse.access_token)
      );
      localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
      localStorage.setItem("email", this.socialEmail);
      localStorage.setItem("pswd", "");
      localStorage.setItem("name", this.loginResponse.Name);
      localStorage.setItem("first", "T");
      if (parseInt(this.loginResponse.UserId) == 0) {
        window.alert(
          "You have enetered wrong credentials. Please try again."
        );
        this.email = "";
        this.password = "";
      } else {
        this.userId = this.loginResponse.UserId;
        this.userName = this.loginResponse.Name;
        localStorage.setItem(
          "loginResponse",
          JSON.stringify(this.loginResponse)
        );
        sessionStorage.setItem(
          "loginResponse",
          JSON.stringify(this.loginResponse)
        );
        localStorage.setItem("userId", JSON.stringify(this.userId));
        localStorage.setItem(
          "token",
          JSON.stringify(this.loginResponse.access_token)
        );
        if (this.saveUsername == true) {
          localStorage.setItem("userId", JSON.stringify(this.userId));
          localStorage.setItem(
            "userEmail",
            JSON.stringify(this.socialEmail)
          );
          localStorage.setItem(
            "userName",
            JSON.stringify(this.userName)
          );
        } else {
          sessionStorage.setItem("userId", JSON.stringify(this.userId));
          sessionStorage.setItem(
            "userEmail",
            JSON.stringify(this.socialEmail)
          );
          sessionStorage.setItem(
            "userName",
            JSON.stringify(this.userName)
          );
        }
      }
    }

  }

  signInWithApple() {
    const CLIENT_ID = "humanwisdom.web.service"
    const REDIRECT_API_URL = "https://www.humanwisdom.info/api/verifyAppleToken_html"


    window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_API_URL)}&response_type=code id_token&scope=name email&response_mode=form_post`,
      '_self'
    );

  }
}
