import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdultsService } from '../../../../../adults/src/app/adults/adults.service';
import { Constant } from '../../../../../shared/services/constant';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { NavigationService } from '../../../../../shared/services/navigation.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Location } from '@angular/common';
import { TeenagersService } from '../teenagers.service';

@Component({
  selector: 'app-change-topic',
  templateUrl: './change-topic.page.html',
  styleUrls: ['./change-topic.page.scss'],
})
export class ChangeTopicPage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;
  url: any;
  changeTopicList: any;
  isSelected: boolean = false;
  selectedId: any = "0";
  selectedname: any = "";

  isRoutedFromLogin = false;
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
  public bookmarks = []
  public userId = 100;
  public introLogs = [];
  constructor(private location: Location, private service: TeenagersService, public logeventservice: LogEventService,
    public router: Router, public activatedRoute: ActivatedRoute, private navigation: NavigationService) {
    let authtoken;
    this.activatedRoute.queryParams.subscribe(params => {
      authtoken = params?.authtoken
    });
    let app = localStorage.getItem("fromapp")
    if (authtoken && app && app === 'T') {
      localStorage.setItem('socialLogin', 'T');
      localStorage.setItem('acceptcookie', 'T')
      this.service.verifytoken(authtoken).subscribe((res) => {
        if (res) {
          this.isRoutedFromLogin = true;
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          localStorage.setItem("userId", res['UserId'])
          let namedata = localStorage.getItem('name').split(' ');

          this.userId = res['UserId']
          this.loginadult(res)
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')
          localStorage.setItem("Subscriber", res['Subscriber'])
          localStorage.setItem("NoOfVisits", res['NoOfVisits'])
        }
      })
    }
  }

  ngOnInit() {
    this.getIntroDashboardStatus();
    let loginResponse = JSON.parse(localStorage.getItem("loginResponse"))

    let NoOfVisits = loginResponse.NoOfVisits
    console.log("NoofVisits:" + NoOfVisits)

    const { routedFromLogin } = window.history.state;
    this.isRoutedFromLogin = (NoOfVisits.toString() === '1' || routedFromLogin) ? true : false;

    console.log(NoOfVisits);
    this.changeTopicList = this.service.personalisedforyoulist;
    this.getUserPreferenceMapping();
  }

  getUserPreferenceMapping() {
    this.service.getUserpreference().subscribe(res => {
      if (res) {
        this.selectedId = res;
      }
    })
  }

  getIntroDashboardStatus() {
    this.service.getIntroDashboardStatus().subscribe(res => {
      if (res) {
        this.introLogs = res;
      }
    });
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    // this.router.navigate(["/adults/adult-dashboard"]);
    var url = this.navigation.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }

  update(id, name) {
    console.log("update")
    this.service.AddUserPreference(this.selectedId).subscribe(res => {
      if (res) {
        if (this.isRoutedFromLogin == true) {
          SharedService.isRoutedFromLogin = true;
          this.logeventservice.logEvent('click_pick_topic_' + this.selectedname);
          localStorage.setItem('isFromSignupFlow', 'T');
          this.url=`${SharedService.getprogramName()}/wisdom-survey`
        }
        else {
          let data = this.redirectToDashboard(this.selectedname);
          if (data.status) {
            this.service.setIntroDashboardlogs(data.data.id).subscribe(res => {
              if (res) {
                console.log("Intro dashboard logs updated successfully");
                this.router.navigate(['/teenagers/dashboard/' + data.data.name]);
              }
            });
          } else {
            localStorage.setItem('storyNumber', this.selectedId);
            if (id==14) {
              localStorage.setItem('curatedurl', '/teenagers/curated/manage-your-emotions');
              this.logeventservice.logEvent('click_emotions');
              this.url = '/teenagers/curated/manage-your-emotions';
            } else if (id==10) {
              localStorage.setItem('curatedurl', '/teenagers/curated/overcome-stress-anxiety');
              this.logeventservice.logEvent('click_stress_anxiety');
              this.url = '/teenagers/curated/overcome-stress-anxiety';
            } else if (id==17) {
              localStorage.setItem('curatedurl', '/teenagers/curated/succeed-in-life');
              this.logeventservice.logEvent('click_workplace');
              this.url = '/teenagers/curated/succeed-in-life';
            } else if (id==11) {
              localStorage.setItem('curatedurl', '/teenagers/curated/have-fulfilling-relationships');
              this.logeventservice.logEvent('click_relationships');
              this.url = '/teenagers/curated/have-fulfilling-relationships';
            } else if (id==13) {
              localStorage.setItem('curatedurl', '/teenagers/curated/be-happier');
              this.logeventservice.logEvent('click_be_happier');
              this.url = '/teenagers/curated/be-happier';
            } else if (id==16) {
              localStorage.setItem('curatedurl', '/teenagers/curated/understand-yourself');
              this.logeventservice.logEvent('click_understand_yourself');
              this.url = '/teenagers/curated/understand-yourself';
            } else if (id==12) {
              localStorage.setItem('curatedurl', '/teenagers/curated/feel-calm');
              this.logeventservice.logEvent('click_feel_calm');
              this.url = '/teenagers/curated/feel-calm';
            } else if (id==15) {
              localStorage.setItem('curatedurl', '/teenagers/curated/overcome-unhelpful-habits');
              this.logeventservice.logEvent('click_overcome_unhelpful_habits');
              this.url = '/teenagers/curated/overcome-unhelpful-habits';
            }
             else if (id==20) {
              localStorage.setItem('curatedurl', '/teenagers/wisdom-exercise');
              this.logeventservice.logEvent('click_self_awareness');
              this.url = '/teenagers/wisdom-exercise';
            }
          }
        }
        localStorage.setItem('lastRoute', null);
        this.router.navigate([this.url], {
          state: {
            routedFromLogin: this.isRoutedFromLogin
          }
        });

      }
    });
  }

  updateList(id, name) {
    this.selectedId = id;
    this.selectedname = name;

    if (parseInt(id) > 0) {
      this.isSelected = true;
    }
    this.update(id, name);
  }

  redirectToDashboard(name) {
    let data = SharedService.contentIdDataUsingTitle(name);
    if (data) {
      let status = this.introLogs.filter(a => a.dashboardID.toString() == data.id.toString());
      if (status.length > 0 && status[0].Visited == 0) {
        return {
          status: true,
          data: data
        };
      }
      return {
        status: false,
        data: null
      };
    }
    return {
      status: false,
      data: null
    };
  }

  loginadult(res) {
    this.loginResponse = res
    this.userId = res.UserId
    if (res['Email'] === "guest@humanwisdom.me") localStorage.setItem('guest', 'T')
    else localStorage.setItem("guest", 'F')
    sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("token", JSON.stringify(res.access_token))
    localStorage.setItem("Subscriber", res.Subscriber)
    localStorage.setItem("userId", JSON.stringify(this.userId))
    localStorage.setItem("email", res['Email'])
    localStorage.setItem("name", res.Name)
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
    if (localStorage.getItem("token") && (this.saveUsername == true)) {
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.userName = JSON.parse(localStorage.getItem("userName"))
    }
    else {
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
      this.userName = JSON.parse(sessionStorage.getItem("userName"))
    }
    this.getBookmarks()
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

}
