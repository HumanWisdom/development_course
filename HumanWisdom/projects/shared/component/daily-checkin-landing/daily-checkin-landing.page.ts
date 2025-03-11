import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute } from '@angular/router'; // Ensure ActivatedRoute is imported
import { LogEventService } from '../../services/log-event.service';
import { NavigationService } from "../../../shared/services/navigation.service";

@Component({
  selector: 'app-daily-checkin-landing',
  templateUrl: './daily-checkin-landing.page.html',
  styleUrls: ['./daily-checkin-landing.page.scss'],
})
export class DailyCheckInLandingPage implements OnInit {
  dailyCheckInList: any = [];
  name: string = '';
  isAdults = false;
  isFirstLogin: boolean = false;
  isRoutedFromLogin: boolean = false;
  userName: string = ''; // Declare userName variable
  loginResponse: any; // Declare loginResponse variable
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
   public bookmarks = []
   public userId = 100;
  constructor(
    public commonService: CommonService,
    public router: Router,
    private activatedRoute: ActivatedRoute, // Inject ActivatedRoute
    private navigationService: NavigationService,
    public logeventservice: LogEventService
  ) {
    this.initializeDailyCheckinList();
    this.name = localStorage.getItem("name");
    this.isAdults = SharedService.isAdultProgram();
    this.isFirstLogin = SharedService.isRoutedFromLogin;
    let authtoken;
    this.activatedRoute.queryParams.subscribe(params => {
      authtoken = params?.authtoken;
    });
    let app = localStorage.getItem("fromapp");
    if (authtoken && app && app === 'T') {
      localStorage.setItem('socialLogin', 'T');
      localStorage.setItem('acceptcookie', 'T');
      this.commonService.verifytoken(authtoken).subscribe((res) => {
        if (res) {
          this.isRoutedFromLogin = true;
          localStorage.setItem("email", res['Email']);
          localStorage.setItem("name", res['Name']);
          localStorage.setItem("userId", res['UserId']);
          let namedata = localStorage.getItem('name').split(' ');

          this.userId = res['UserId'];
          this.loginadult(res);
          localStorage.setItem("FnName", namedata[0]);
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '');
          localStorage.setItem("Subscriber", res['Subscriber']);
          localStorage.setItem("NoOfVisits", res['NoOfVisits']);
        }
      });
    }
  }

  loginadult(res) {
    this.loginResponse = res;
    this.userId = res.UserId;
    if (res['Email'] === "guest@humanwisdom.me") localStorage.setItem('guest', 'T');
    else localStorage.setItem("guest", 'F');
    sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
    localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
    localStorage.setItem("token", JSON.stringify(res.access_token));
    localStorage.setItem("Subscriber", res.Subscriber);
    localStorage.setItem("userId", JSON.stringify(this.userId));
    localStorage.setItem("email", res['Email']);
    localStorage.setItem("name", res.Name);
    localStorage.setItem("text", JSON.stringify(this.text));
    localStorage.setItem("video", JSON.stringify(this.video));
    localStorage.setItem("audio", JSON.stringify(this.audio));
    localStorage.setItem("moduleId", JSON.stringify(this.moduleId));
    localStorage.setItem("question", JSON.stringify(this.question));
    localStorage.setItem("reflection", JSON.stringify(this.reflection));
    localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey));
    this.userId = JSON.parse(localStorage.getItem("userId"));
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
    let NoOfVisits = this.loginResponse.NoOfVisits
    console.log("NoofVisits:" + NoOfVisits)
    this.isRoutedFromLogin = NoOfVisits.toString() === '1' ? true : false;
    SharedService.isRoutedFromLogin =  this.isRoutedFromLogin; 

    if (localStorage.getItem("token") && (this.saveUsername == true)) {
      this.userId = JSON.parse(localStorage.getItem("userId"));
      this.userName = JSON.parse(localStorage.getItem("userName"));
    } else {
      this.userId = JSON.parse(sessionStorage.getItem("userId"));
      this.userName = JSON.parse(sessionStorage.getItem("userName"));
    }
//    this.getBookmarks();
    if (res.UserId == 0) {
    } else {
      this.userId = res.UserId;
      this.userName = res.Name;
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("token", JSON.stringify(res.access_token));
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId));
        localStorage.setItem("userEmail", JSON.stringify(res.Email));
        localStorage.setItem("userName", JSON.stringify(this.userName));
      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId));
        sessionStorage.setItem("userEmail", JSON.stringify(res.Email));
        sessionStorage.setItem("userName", JSON.stringify(this.userName));
      }
    }
  }

  ngOnInit() {
    this.logeventservice.logEvent('view_daily_checkin_landing');

    this.commonService.getDailyCheckins().subscribe(res => {
      if (res) {
        this.dailyCheckInList = res;
      }
    });
  }

  initializeDailyCheckinList() {
    return [{ RowId: "", Expression: "", ImgPath: "", SearchTerm: "", Description: "" }];
  }

  dailyCheckInRowClick(item) {
    this.logeventservice.logEvent('click_emoji_' + item.Expression.toString());
    SharedService.setDataInLocalStorage('dailyCheckIn', JSON.stringify(item));
    this.router.navigate([SharedService.getUrlfromFeatureName('daily-checkin-save')]);
  }

  goToHome() {
    if (this.isFirstLogin) {
      this.continue();
    } else {
      var url = this.navigationService.goBack();
      if (url == null) {
        this.router.navigate([SharedService.getDashboardUrls()]);
      } else {
        this.router.navigate([url]);
      }
    }
  }

  continue() {
    this.router.navigate([`${SharedService.getprogramName()}/my-dashboard`]);
  }

  routetoBlog() {
    this.router.navigateByUrl('/' + SharedService.getprogramName() + '/blog-article?sId=66');
  }
}