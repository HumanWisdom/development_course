import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../teenagers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogEventService } from '../../../../../shared/services/log-event.service';

@Component({
  selector: 'app-repeat-user',
  templateUrl: './repeat-user.page.html',
  styleUrls: ['./repeat-user.page.scss'],
})
export class RepeatUserPage implements OnInit {
  public percentage: any
  public bookmarks = []
  public resume = [];
  public userId = 100;
  searchResult = [];
  mediaPercent: any
  freeScreens = []
  public qrList: any
  public goToPage: any
  public points: any
  public daysVisited: any
  public name;
  public loginResponse: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public userName: any
  public video = 3
  public audio = 4
  public password: any
  public saveUsername = false
  public mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public text = 2
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  searchinp = '';
  public moduleList = [];

  constructor(public service: TeenagersService, public router: Router, public logeventservice: LogEventService, private route: ActivatedRoute) {
    let authtoken;
    this.route.queryParams.subscribe(params => {
      authtoken = params?.authtoken
    });
    let app = localStorage.getItem("fromapp")
    if (authtoken && app && app === 'T') {
      localStorage.setItem('socialLogin', 'T');
      localStorage.setItem('acceptcookie', 'T')
      this.service.verifytoken(authtoken).subscribe((res) => {
        if (res) {
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          localStorage.setItem("userId", res['UserId'])
          let namedata = localStorage.getItem('name').split(' ')
          this.userId = res['UserId']
          localStorage.setItem("Subscriber", res['Subscriber'])
          this.name = res['Name'];
          this.loginadult(res)
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')


        }
      })
    } else if (localStorage.getItem("isloggedin") === 'T' && localStorage.getItem("userId")) {
      this.name = localStorage.getItem("name");
      this.userName = this.name;
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.getProgress();
      this.getBookmarks();
    }
  }

  ngOnInit() {
  }

  getProgress() {
    this.service.GetLastVisitedScreen(this.userId)
      .subscribe(res => {
        this.resume = res;
      });
  }

  loginadult(res) {
    this.loginResponse = res
    this.userId = res.UserId
    if (res['Email'] === "guest@humanwisdom.me") {
      localStorage.setItem('guest', 'T')
    }else {
      localStorage.setItem("guest", 'F')
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("token", JSON.stringify(res.access_token))
      localStorage.setItem("Subscriber", res.Subscriber)
      localStorage.setItem("userId", JSON.stringify(this.userId))
      localStorage.setItem("email", res['Email'])
      localStorage.setItem("name", res.Name)
      this.userName = res.Name;
      localStorage.setItem("text", JSON.stringify(this.text))
      localStorage.setItem("video", JSON.stringify(this.video))
      localStorage.setItem("audio", JSON.stringify(this.audio))
      localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
      localStorage.setItem("question", JSON.stringify(this.question))
      localStorage.setItem("reflection", JSON.stringify(this.reflection))
      localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
      this.userId = JSON.parse(localStorage.getItem("userId"))
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    }
    if (localStorage.getItem("token") && (this.saveUsername == true)) {
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.userName = JSON.parse(localStorage.getItem("userName"))
    } else {
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.userName = JSON.parse(localStorage.getItem("userName"))
    }
    this.getBookmarks()
    this.getProgress()
    if (res.UserId == 0) {
    }
    else {
      this.userId = res.UserId
      this.userName = res.Name
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("userId", JSON.stringify(this.userId))
      localStorage.setItem("token", JSON.stringify(res.access_token))
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId))
        localStorage.setItem("userEmail", JSON.stringify(res.Email))
        localStorage.setItem("userName", JSON.stringify(this.userName))

      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId))
        sessionStorage.setItem("userEmail", JSON.stringify(res.Email))
        sessionStorage.setItem("userName", JSON.stringify(this.userName))
      }
    }
  }

  getBookmarks() {
    this.service.getBookmarks(this.userId)
      .subscribe(res => {
        this.bookmarks = res
        this.bookmarks = this.bookmarks.map(a => parseInt(a.ScrNo));
        localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarks))
      })
  }

  routeResume() {
    this.logeventservice.logEvent("click_continue_where_u_left");
    localStorage.setItem("pageaction", 'next')
    let id = this.resume[0]['ModuleId'].toString();
    this.service.setmoduleID(id, this.resume[0]['ModuleUrl'].toString(), this.resume[0]['ModuleUrl'].toString()+'s'+this.resume[0]['screenno'].toString())
  }


  goToYourWisdomScoreComponent() {
    this.router.navigate(['/teenagers/wisdom-survey'], { state: { 'isUseCloseButton': true } });
  }

   logEvent(event, url){
    this.logeventservice.logEvent(event);
    this.router.navigate([url]);
   }

}
