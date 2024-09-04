import {
  HttpBackend, HttpClient, HttpParams
} from "@angular/common/http";
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { environment } from '../../environments/environment'
import { Number } from '../../adults/src/app/onboarding/interfaces/number';
import { paymentIntentModel } from "../models/search-data-model";
import { ToastrService } from "ngx-toastr";
import { SharedService } from "./shared.service";
import {  from, throwError } from 'rxjs';  // Import 'from' and 'throwError' here
import { catchError } from 'rxjs/operators';

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
  updateUserDetails = new Subject<any>();
  getUserDetails = new Subject<any>();
  private clientId = '1840609876679041'; // Replace with your Instagram App Client ID
  private redirectUri = environment.clientUrl+"/adults/adult-dashboard"; 
  private authUrl = `https://api.instagram.com/oauth/authorize`;
  private accessToken: string | null = null;
  // Subscribe to the Subject
  constructor(private http: HttpClient, handler: HttpBackend, public toastr: ToastrService,private ngZone: NgZone) {
    // this.http =  new HttpClient(handler);
    this.toastrService = this.toastr;
    this.updateUserDetails.subscribe(val => {
      if (val) {
        let userId = JSON.parse(localStorage.getItem("userId"))
        if (userId != null) {
          this.getuser(userId).subscribe((res: any) => {
            localStorage.setItem("isPartner", res[0].IsPartner);
            localStorage.setItem('PartnerOption', res[0].PartnerOption);
            localStorage.setItem("SubscriberType", res[0].SubscriberType)
            if (localStorage.getItem("SubscriberType") == "Monthly" ||
              localStorage.getItem("SubscriberType") == "Annual") {
              localStorage.setItem("Subscriber", "1")
            }
            this.getUserDetails.next(res);
          });
        }
      }
      
    })
  }

  // authenticateInstagram(instagramClientId: string, instagramRedirectUri: string): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const popupWidth = 700;
  //     const popupHeight = 500;
  //     const popupLeft = (window.screen.width - popupWidth) / 2;
  //     const popupTop = (window.screen.height - popupHeight) / 2;
  
  //     const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${instagramClientId}&redirect_uri=${instagramRedirectUri}&response_type=code&scope=user_profile,user_media`;
  
  //     const popup = window.open(
  //       authUrl,
  //       'Instagram Auth',
  //       `width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`
  //     );
  
  //     if (popup) {
  //       const interval = setInterval(() => {
  //         try {
  //           if (popup.location.href.indexOf(instagramRedirectUri) === 0) {
  //             const urlParams = new URLSearchParams(popup.location.search);
  //             const authCode = urlParams.get('code');
  
  //             if (authCode) {
  //               popup.close();
  //               clearInterval(interval);
  //               resolve(authCode);  // Now resolving with the authorization code
  //             } else {
  //               reject('Authorization code not found in URL.');
  //             }
  //           }
  //         } catch (error) {
  //           console.error('Error accessing popup location:', error);
  //         }
  //       }, 100);
  //     } else {
  //       reject('Could not open the popup window');
  //     }
  //   });
  // }
  
  

  // // Function to handle Instagram login and fetch user data
  // loginWithInstagram(): Observable<any> {
  //   return from(
  //     this.authenticateInstagram(this.clientId, this.redirectUri)
  //       .then(() => this.getUserData().toPromise())
  //       .then(response => {
  //         const userData = response.data;

  //         // Save user data
  //         this.saveUserData(userData).subscribe();

  //         // Store user data in sessionStorage
  //         sessionStorage.setItem('userLoggedIn', '1');
  //         sessionStorage.setItem('provider', 'instagram');
  //         sessionStorage.setItem('userData', JSON.stringify(userData));

  //         return userData;
  //       })
  //       .catch(error => {
  //         console.error('Error during Instagram login:', error);
  //         throw error;
  //       })
  //   );
  // }

  // getUserData(): Observable<any> {
  //   if (!this.accessToken) {
  //     return throwError(() => new Error('Access token is not available'));
  //   }

  //   const url = `https://api.instagram.com/v1/users/self/`;
  //   const params = new HttpParams().set('access_token', this.accessToken);

  //   return this.http.get(url, { params }).pipe(
  //     catchError(error => {
  //       console.error('Error fetching Instagram user data:', error);
  //       return throwError(() => error);
  //     })
  //   );
  // }

  // // Save user data to the database
  // saveUserData(userData: any): Observable<any> {
  //   return this.http.post('userData.php', { oauth_provider: 'instagram', userData: JSON.stringify(userData) });
  // }

  loginWithInstagram() {
    const url = `${this.authUrl}?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=user_profile,user_media&response_type=code`;
    const popup = window.open(
      url,
      'instagram-login-popup',
      'width=500,height=600',
    );
    setTimeout(() => {
    this.pollPopup(popup)
    }, 1000);
  }



  
  // verifyRepatcha(){
  //   this.http.post("")
  // }
  
  private pollPopup(popup): void {
    const intervalId = setInterval(() => {
      if (popup && !popup.closed) {
        try {
          // Handle the URL if needed
          // const popupUrl = popup.location.href;
          // console.log('Popup URL:', popupUrl);

          // Check if the URL contains the expected data
          // if (popupUrl.includes('your_redirect_url_with_code')) {
          //   clearInterval(intervalId);
          //   // Handle the URL or extract data here
          // }
        } catch (e) {
          clearInterval(intervalId);
          // Handle cross-origin access errors
          console.error('Unable to access popup location:', e);
        }
      } else {
        clearInterval(intervalId);
        console.log('Popup was closed');
        this.getUserInfo(localStorage.getItem('instaToken'));
      }
    }, 1000); // Poll every 500 milliseconds
  }
  

  handleAuthCallback(code: string) {

    const tokenUrl = `https://api.instagram.com/oauth/access_token`;
    const body = {
      client_id: this.clientId,
      client_secret: '1b498f77e08b26728741d12e247ab2a3', 
      grant_type: 'authorization_code',
      redirect_uri: this.redirectUri,
      code: code
    };

    return this.http.post(tokenUrl, body).subscribe(res=>{
      if(res){
        console.log("response from instagram");
        console.log(res);
      }
    }
    )}

    getUserInfo(accessToken: string):Observable<any> {
      const params = {
        fields: 'id,username,account_type', // Define the fields you need
        access_token: accessToken,
      };
      return this.http.get<any>('https://graph.instagram.com/me', { params })
    }

  getuserDetail() {
    let userId = JSON.parse(localStorage.getItem("userId"))
    if (userId != null) {
      this.getuser(userId).subscribe((res: any) => {
        localStorage.setItem("isPartner", res[0].IsPartner);
        localStorage.setItem('PartnerOption', res[0].PartnerOption);
        localStorage.setItem("SubscriberType", res[0].SubscriberType)
      });
    }
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

  createSetupIntent(paymentIntent: paymentIntentModel) {
    return this.http.post(this.path + '/CreateSetupIntent/', paymentIntent);
  }

  cancelSubscription(code, reasonId): Observable<any> {
    return this.http.post(this.path + `/CancelSubscription/${code}/${reasonId}`, {});
  }

  getCancelReason(): Observable<any> {
    return this.http.get(this.path + '/cancelReasons/');
  }

  checkTrial(): Observable<any> {
    return this.http.get(this.path + `/CheckIsTrial/${SharedService.ProgramId}`);
  }

  ReviveSubscription(key): Observable<any> {
    return this.http.post(this.path + `/ReviveSubscription/${key}`, {});
  }

  verifyInstagramLogin(body): Observable<any> {
    const payLoad = {
      "TokenID":body
    }
    return this.http.post(this.path + `/verifyInstagramTokenAndLogin/`,payLoad);
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


  getNotificationList(): Observable<any> {
    return this.http.get(this.path + `/GetNotifications`);
  }

  MarkNotificationAsRead(NotificationId: number): Observable<any> {
    return this.http.post(this.path + `/SetNotificationRead/` + NotificationId, null);
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

  createScreen(data: any): Observable<any> {
    return this.http.post(this.path + '/AddScreen', data)
  }

  submitProgressQuestion(data: any): Observable<any> {
    return this.http.post(this.path + '/userProgressQuestion', data)
  }

  guestEmailLogin(id = '') {
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
    this.emailLogin(email, password)
      .subscribe(
        res => {
          loginResponse = res
          userId = res.UserId
          if (res.Subscriber === 0) {
            isSubscribe = true;
          }
          let guest = localStorage.getItem('guest');
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
          localStorage.setItem("name", res.Name);
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
          this.getBookmark(userId)
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
  getBookmarks(data: any): Observable<any> {
    return this.http.get(this.path + `/UserBookMarks/${data}`)
  }

  activateModule(id, lastVisitedurl = '', indexUrl = '') {
    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : 100;
    let pgResume;
    let mediaPercent;
    localStorage.setItem("moduleId", JSON.stringify(id))
    this.clickModule(id, userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        let qrList = res
        pgResume = "s" + res.lastVisitedScreen
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        sessionStorage.setItem("pgResume", pgResume)
        mediaPercent = parseInt(res.MediaPercent);
        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(qrList))
        console.log(qrList)
      }, error => {
        console.log(error)
      },
        () => {
          // if (lastVisitedurl !== '' && indexUrl !== '') {
          //   if (pgResume && pgResume !== '') {
          //     this.router.navigate([`${lastVisitedurl}/${pgResume}`])
          //   } else {
          //     this.router.navigate([`${indexUrl}`])
          //   }
          // }
        })
  }

  verifyCaptcha(token:any): Observable<any> {
    console.log("Recaptacha");
    console.log(token);
    return this.http.post(this.path + `/VerifyCaptcha?token=${token}`, null)
  }

}
