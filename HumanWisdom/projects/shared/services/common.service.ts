import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { OnboardingService } from './onboarding.service';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //path="http://18.132.47.231/api";
  path = environment.apiURL;
  constructor(private http: HttpClient,
    handler: HttpBackend,
    private services: OnboardingService,
    private router: Router
  ) { }

  submitProgressText(data: any): Observable<any> {
    return this.http.post(this.path + '/UserProgress', data)
  }

  GetAudioMeditation(): Observable<any> {
    return this.http.get(this.path + '/GetAudioMeditationsListing');
  }
  setmoduleID(id, lastVisitedurl = '', indexUrl = '') {
    if (localStorage.getItem("isloggedin") === 'T') {
      this.activateModule(id, lastVisitedurl, indexUrl);
    } else {
      this.emaillogin(id);
    }

  }

  CheckShortsIsFree(data: any): Observable<any> {
    return this.http.get(this.path + `/CheckShortsIsFree/${data}`)
  }

  GetWisdomShorts(): Observable<any> {
    return this.http.get(this.path + '/GetWisdomShortsListing');
  }

  GetGuidedQs_Topics(): Observable<any> {
    return this.http.get(this.path + `/GetGuidedQs_Topics`)
  }

  GetGuidedQs_Response(id: any, attempt: any): Observable<any> {
    return this.http.get(this.path + `/GetGuidedQs_Response/` + id + '/' + attempt)
  }

  verifytoken(encrypt) {
    return this.http.get(this.path + `/VerifyAuthToken?AccessToken=${encrypt}&progID=${SharedService.ProgramId}`)
    }
  
    verifyactkey(data): Observable<any> {
      return this.http.get(this.path + `/VerifyActKey/${data}`)
    }

  AddGuidedQs_Response(data: any) {
    return this.http.post(this.path + `/AddGuidedQs_Response/`, data);
  }

  submitProgressAv(data: any): Observable<any> {
    return this.http.post(this.path + '/UserProgressAv', data)
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

  addReflection(data: any): Observable<any> {
    return this.http.post(this.path + '/AddUserReflection', data)
  }

  submitProgressQuestion(data: any): Observable<any> {
    return this.http.post(this.path + '/userProgressQuestion', data)
  }
  submitProgressReflection(data: any): Observable<any> {
    return this.http.post(this.path + '/UserProgressReflection', data)
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
        // let freeScreens = res.FreeScrs?.map(a => a.ScrNo);
        // localStorage.setItem("freeScreens", JSON.stringify(freeScreens))

        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(qrList))
        console.log(qrList)
      }, error => {
        console.log(error)
      },
        () => {
          if (lastVisitedurl !== '' && indexUrl !== '') {
            if (pgResume && pgResume !== '') {
              this.router.navigate([`${lastVisitedurl}/${pgResume}`])
            } else {
              this.router.navigate([`${indexUrl}`])
            }
          }
        })
  }


  GetPodcastList(): Observable<any> {
    return this.http.get(this.path + '/GetPodcastsListing');
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
          localStorage.setItem("name", res.Name);
          this.freescreens();
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
  getBookmarks(data: any): Observable<any> {

    return this.http.get(this.path + `/UserBookMarks/${data}`)
  }

  freeScreens(): Observable<any> {
    return this.http.get(this.path + `/AllModulesFreeScrs`)
  }

  freescreens() {
    console.log("freeScreens");
    let x = [];
    this.freeScreens().subscribe(res => {
      let result = res.map(a => a.FreeScrs);
      let arr;
      result = result.forEach(element => {
        x.push(element?.map(a => a.ScrNo))
        arr = Array.prototype.concat.apply([], x);
      })
      localStorage.setItem("freeScreens", JSON.stringify(arr))
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

  createScreen(data: any): Observable<any> {
    return this.http.post(this.path + '/AddScreen', data)
  }
  clickModule(data: any, userId: any): Observable<any> {
    return this.http.get(this.path + `/clickModule/${data}/${userId}`)
  }


  getAllEvents(): Observable<any> {
    // return this.http.get(this.path + '/Events');
    return this.http.get(this.path + '/AllEvents');
  }

  getEventbyId(eventID): Observable<any> {
    return this.http.get(this.path + `/Events/${eventID}`)
  }

  registerevent(data): Observable<any> {
    return this.http.post(this.path + '/RegisterEvents', data);
  }
  GetCountry() {
    return this.http.get(this.path + `/Countries`);
  }

  getSearchDataForSearchSite(data): Observable<any> {
    return this.http.post(this.path + `/SiteSearch/${data}/${SharedService.ProgramId}`, {})
  }
  getForumSearchDataSite(data): Observable<any> {
    return this.http.get(this.path + `/GetAllPosts/${data}`);
  }

  getDailyCheckins(): Observable<any> {
    return this.http.get(this.path + `/GetDailyCheckins/`);
  }
  
  getModuleList(): Observable<any> {
    return this.http.get(this.path + '/modules/9');
  }
}