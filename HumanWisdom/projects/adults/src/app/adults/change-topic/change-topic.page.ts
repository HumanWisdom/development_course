import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AdultsService } from '../adults.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { NavigationService } from '../../../../../shared/services/navigation.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Constant } from '../../../../../shared/services/constant';


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

  constructor(private location: Location, private service: AdultsService, public logeventservice: LogEventService,
    public router: Router, public activatedRoute: ActivatedRoute,private navigation:NavigationService) {
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
    let loginResponse = JSON.parse(localStorage.getItem("loginResponse"))

    let NoOfVisits = loginResponse.NoOfVisits
    console.log("NoofVisits:" + NoOfVisits )
    this.isRoutedFromLogin = NoOfVisits === '1' ? true : false;
    
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

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack(){
    var url = this.navigation.navigateToBackLink();
    if(url==null){
      url = SharedService.getDataFromLocalStorage(Constant.NaviagtedFrom);
      if(url && url!=null && url != 'null'){
        this.router.navigate([url]);
      }else{
        this.location.back();
      }
     }else{
      this.router.navigate([url]);
    }
  }

  update() {
    console.log("update")
    this.service.AddUserPreference(this.selectedId).subscribe(res => {
      if (res) {
            if(this.isRoutedFromLogin==true)
            {
              this.logeventservice.logEvent('click_pick_topic_'+this.selectedname);
              this.url="/subscription/start-your-free-trial"

            }
            else{
              this.logeventservice.logEvent('click_change_topic_'+this.selectedname);
              this.url = localStorage.getItem('lastRoute')?.toString();
              if ( this.selectedname === 'Manage your emotions') {
                localStorage.setItem('curatedurl', '/adults/curated/manage-your-emotions');
                this.logeventservice.logEvent('click_emotions');
                this.url='/adults/curated/manage-your-emotions';
              } else if ( this.selectedname === 'Manage your mental health') {
                localStorage.setItem('curatedurl', '/adults/curated/overcome-stress-anxiety');
                this.logeventservice.logEvent('click_stress_anxiety');
                this.url='/adults/curated/overcome-stress-anxiety';
              } else if (this.selectedname === 'Work and Leadership') {
                localStorage.setItem('curatedurl', '/adults/curated/wisdom-for-workplace');
                this.logeventservice.logEvent('click_workplace');
                this.url='/adults/curated/wisdom-for-workplace';
              } else if (this.selectedname.includes('Relationship')) {
                localStorage.setItem('curatedurl', '/adults/curated/have-fulfilling-relationships');
                this.logeventservice.logEvent('click_relationships');
                this.url='/adults/curated/have-fulfilling-relationships';
              } else if (this.selectedname === 'Be happier') {
                localStorage.setItem('curatedurl', '/adults/curated/be-happier');
                this.logeventservice.logEvent('click_be_happier');
                this.url='/adults/curated/be-happier';
              } else if (this.selectedname === 'Habits and Addiction') {
                localStorage.setItem('curatedurl', '/adults/curated/change-unhelpful-habits');
                this.logeventservice.logEvent('click_be_happier');
                this.url='/adults/curated/change-unhelpful-habits';
              } else if (this.selectedname.includes('loss')) {
                localStorage.setItem('curatedurl', '/adults/curated/deal-with-sorrow-loss');
                this.logeventservice.logEvent('click_sorrow_loss');
                this.url='/adults/curated/deal-with-sorrow-loss';
              } else if (this.selectedname === 'Meditation') {
                localStorage.setItem('curatedurl', '/adults/curated/have-calm-mind');
                this.logeventservice.logEvent('click_calm_mind');
                this.url='/adults/curated/have-calm-mind';
              }

              
             /*  if (this.url == null) {
                this.url = '/adults/adult-dashboard';
              } */
            }
              localStorage.setItem('lastRoute', null);
              this.router.navigate([this.url]);

            

        
      }
    });
  }

  updateList(id,name) {
    this.selectedId = id;
    this.selectedname=name;

    if (parseInt(id) > 0) {
      this.isSelected = true;
    }
    this.update();
  }

  next(){
    console.log("next")
    window.history.state.routedFromLogin = false;
    this.service.AddUserPreference(this.selectedId).subscribe(res => {
      if (res) {
        this.url = '/adults/adult-dashboard';
        this.router.navigate([this.url]);
      }
    });
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
