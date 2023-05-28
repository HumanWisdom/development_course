import { Platform } from "@angular/cdk/platform";
import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { NgNavigatorShareService } from 'ng-navigator-share';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { LogEventService } from "./../../services/log-event.service";
import { OnboardingService } from "../../services/onboarding.service";
import { ForumService } from '../forum.service';
import { ProgramType } from "../../models/program-model";

@Component({
  selector: 'app-forum-landing',
  templateUrl: './forum-landing.page.html',
  styleUrls: ['./forum-landing.page.scss'],
})
export class ForumLandingPage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('closepopup') closepopup: ElementRef;

  @ViewChild('threadsearch', { static: true }) threadsearch: ElementRef;
  UserID = "107";
  activereply;
  commenttext = '';
  PostComment = ''
  replyflag = false;
  selectthread;
  searchText = '';
  path = '';
  posts = [];
  selectIndex = 0;
  token = '';
  urlT: any
  address = this.router.url;
  isLoggedIn: boolean = false;
  activeCommentPost;
  actionType: string = '';
  threadlist = [{
    value: 0, label: 'All threads'
  }, {
    value: 1, label: 'Threads I’m following'
  }, {
    value: 2, label: 'My threads'
  }, {
    value: 3, label: 'Reflections'
  }];

  isloggedIn = false;
  searchinp = '';
  public user: any
  public userId = 100
  public idToken: any
  public email: any;
  public showAlert = false
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
  public moduleList = [];
  public alertMsg: any
  public qrList: any
  public goToPage: any
  public benefitsWisdomP: any
  public discoveringP: any
  public guideP: any
  public identityP: any
  public keyP: any
  public fiveCirclesP: any
  public hcwhP: any
  public percentage: any

  mediaPercent: any
  freeScreens = []
  isWelcomePopup = false;
  public isSubscribe = false
  public modaldata = {}
  public x = []
  public text = 2
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  public bookmarks = []
  public resume = []
  public bookmarkLength: any
  public programType :ProgramType.Adults;
  constructor(private serivce: ForumService, public platform: Platform, private router: Router,
    private ngNavigatorShareService: NgNavigatorShareService, private location: Location,
    private meta: Meta, private title: Title, public authService: SocialAuthService, public service: OnboardingService, public logeventservice: LogEventService,
    public cd: ChangeDetectorRef) {
      this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
       const navigation  = this.router.getCurrentNavigation();
       this.programType = navigation.extras.state ? navigation.extras.state.programType : ProgramType.Adults;
      });
    this.UserID = localStorage.getItem('userId');
    console.log(this.UserID);
    this.token = JSON.parse(localStorage.getItem("token"));

    this.isLoggedIn = localStorage.getItem('isloggedin') == 'T' ? true : false;
  }
  like(item, index) {
    if (this.isLoggedIn) {
      this.serivce.likePost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res) {
          this.posts[index].PostLikeCount = res;
          this.posts[index].Liked = this.posts[index].Liked == "1" ? "0" : "1";
        }
      });
    }
  }
  list(data) {
    if (data) {
      let temp = [];
      let flag = false;
      data.forEach(element => {
        temp.forEach((res) => {
          if (res.PostID === Number(element.ParentPOstID)) {
            // res.child.push(element);
            flag = true;
          }
        })
        if (!flag) {
          element.child = [];
          temp.push(element);
          flag = false;
        } else {
          flag = false;
        }

      });
      temp.sort(function (a, b) {
        return b.PostID - a.PostID;
      });
      this.posts = temp;
    }
  }
  reportpost(item, actionType) {
    if (this.actionType == '' || this.actionType == actionType) {
      this.replyflag = !this.replyflag;
    }
    this.actionType = actionType;
    this.activereply = item;
    console.log(item);
  }


  commentPost(item) {
    this.replyflag = !this.replyflag;
    this.activeCommentPost = item;
  }
  commentPostSave(item) {

  }

  postreport(item, actionType) {
    console.log(item);
    this.replyflag = !this.replyflag;
    if (this.actionType == 'report') {
      this.serivce.reportPost({ PostID: item.PostID, UserID: this.UserID, Comment: this.commenttext }).subscribe(res => {
        if (res) {
          this.replyflag = !this.replyflag;
          this.getAllposts(0);
          this.actionType = '';
        }
      });
    }
    else {
      this.serivce.submitPost({ POST: this.PostComment, UserId: this.UserID, ParentPostID: item.PostID }).subscribe(res => {
        if (res) {
          this.getAllposts(0);
          this.actionType = '';
          this.PostComment = '';
        }
      })
    }
  }
  follow(item, index) {
    this.serivce.followPost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
      if (res == "1") {
        this.posts[index].Followed = item.Followed == '1' ? '0' : '1';
      }
    });
  }
  postnavigate(item) {
    this.serivce.postdataSource.next(item);
    this.router.navigateByUrl('/forum/forum-thread',{ state: { programType: this.programType }});
  }
  getAllposts(index) {
    this.serivce.getposts(this.selectthread, null, this.UserID).subscribe((res) => {
      if (res) {
        this.list(res);
      }
    });
  }
  onChange(e) {
    this.selectIndex = this.selectthread;
    this.getAllposts(e);
  }
  ngOnInit() {

    this.title.setTitle('Online Community for Wisdom Exchange')
    this.meta.updateTag({ property: 'title', content: 'Online Community for Wisdom Exchange' })
    this.meta.updateTag({ property: 'description', content: 'Join our discussion forum for inspirational discussions and exchange of wisdom on personal growth and mental wellness. Find emotional support and engage in mindful conversations.' })
    this.meta.updateTag({ property: 'keywords', content: 'Online community,Discussion forum,Wisdom exchange,Inspirational discussions,Self-improvement forum,Personal growth community,Mental wellness community,Mindful conversations,Emotional support forum,Personal development discussions' })







    this.selectthread = this.threadlist[0].value;
    this.getAllposts(0);
    fromEvent(this.threadsearch.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      console.log(text);
      this.serivce.getposts(this.selectIndex, text, this.UserID).subscribe((res) => {
        if (res) {

          this.list(res);

        }
      });

    });

  }

  share() {

    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser) ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    if (this.urlT) {
      console.log("url")
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.urlT}`

    }
    else {
      console.log("local")
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.token}`
    }

    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }
  getLocalPostDate(date: string) {
    var dateLocal = new Date(date);
    var newDate = new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000);
    return newDate;
  }

  getOrderbyLatestPost(childs) {
    childs.sort(function (a, b) {
      return b.PostID - a.PostID;
    });
    return childs;
  }

  goBack() {
    this.location.back();
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  fbLogin() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      this.user = user;
      this.idToken = user.authToken
      this.socialFirstName = user.firstName
      this.socialLastName = user.lastName
      this.socialEmail = user.email
      if (user.email !== undefined) {
        this.service.verifyFb({
          "TokenID": this.idToken,
          "FName": this.socialFirstName,
          "LName": this.socialLastName,
          "Email": this.socialEmail,
          "VCode": "",
          "Pwd": ""
        })
          .subscribe(res => {
            if (res) {
              this.loginResponse = res
              localStorage.setItem('socialLogin', 'T');
              localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
              localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
              localStorage.setItem("video", JSON.stringify(this.video))
              localStorage.setItem("audio", JSON.stringify(this.audio))
              localStorage.setItem("remember", 'T')
              localStorage.setItem('guest', 'F');
              localStorage.setItem('btnclick', 'F')
              localStorage.setItem("FnName", this.socialFirstName)
              localStorage.setItem("LName", this.socialLastName)
              localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
              sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
              localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
              localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
              localStorage.setItem("userId", JSON.stringify(this.userId))
              localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
              localStorage.setItem("email", this.socialEmail)
              localStorage.setItem("pswd", '')
              localStorage.setItem("name", this.loginResponse.Name)
              localStorage.setItem("first", 'T')
              if (parseInt(this.loginResponse.UserId) == 0) {
                this.showAlert = true
                window.alert('You have enetered wrong credentials. Please try again.')
                this.email = ""
                this.password = ""
              }
              else {
                this.showAlert = false
                this.userId = this.loginResponse.UserId
                this.userName = this.loginResponse.Name
                localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
                sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
                localStorage.setItem("userId", JSON.stringify(this.userId))
                localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
                if (this.saveUsername == true) {
                  localStorage.setItem("userId", JSON.stringify(this.userId))
                  localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                  localStorage.setItem("userName", JSON.stringify(this.userName))

                }
                else {
                  sessionStorage.setItem("userId", JSON.stringify(this.userId))
                  sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                  sessionStorage.setItem("userName", JSON.stringify(this.userName))
                }
                let acceptCookie = localStorage.getItem('activeCode');
                let subscribePage = localStorage.getItem('subscribepage');
                if (acceptCookie === 'T' || subscribePage === 'T') {
                  localStorage.setItem("isloggedin", 'T')
                  if (acceptCookie === 'T') {
                    localStorage.setItem("activeCode", 'F')
                  }
                  if (subscribePage === 'T') {
                    localStorage.setItem("subscribepage", 'F')
                  }
                } else {
                  localStorage.setItem("isloggedin", 'T')
                }
              }
              window.location.reload();
            }

          })
      } else {
        window.alert('Please ensure that you use an email based authentication with your Auth provider or try another method')
      }
    });
  }

  googleLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.idToken = user.idToken
      this.socialFirstName = user.firstName
      this.socialLastName = user.lastName
      this.socialEmail = user.email
      this.service.verifyGoogle({
        "TokenID": this.idToken,
        "FName": this.socialFirstName,
        "LName": this.socialLastName,
        "Email": this.socialEmail,
        "VCode": "",
        "Pwd": ""
      })
        .subscribe(res => {
          if (res) {
            this.loginResponse = res
            localStorage.setItem('guest', 'F');
            localStorage.setItem("remember", 'T')
            localStorage.setItem('socialLogin', 'T');
            localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
            localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
            localStorage.setItem("video", JSON.stringify(this.video))
            localStorage.setItem("audio", JSON.stringify(this.audio))
            localStorage.setItem('btnclick', 'F')
            localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
            sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
            localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
            localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
            localStorage.setItem("userId", JSON.stringify(this.userId))
            localStorage.setItem("email", this.socialEmail)
            localStorage.setItem("FnName", this.socialFirstName)
            localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
            localStorage.setItem("LName", this.socialLastName)
            localStorage.setItem("pswd", '')
            localStorage.setItem("name", this.loginResponse.Name)
            localStorage.setItem("first", 'T')
            if (parseInt(this.loginResponse.UserId) == 0) {
              this.showAlert = true
              window.alert('You have enetered wrong credentials. Please try again.')
              this.email = ""
              this.password = ""
            }
            else {
              this.showAlert = false
              this.userId = this.loginResponse.UserId
              this.userName = this.loginResponse.Name
              localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
              sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
              localStorage.setItem("userId", JSON.stringify(this.userId))
              localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
              if (this.saveUsername == true) {
                localStorage.setItem("userId", JSON.stringify(this.userId))
                localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                localStorage.setItem("userName", JSON.stringify(this.userName))

              }
              else {
                sessionStorage.setItem("userId", JSON.stringify(this.userId))
                sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                sessionStorage.setItem("userName", JSON.stringify(this.userName))
              }
              let acceptCookie = localStorage.getItem('activeCode');
              let subscribePage = localStorage.getItem('subscribepage');
              if (acceptCookie === 'T' || subscribePage === 'T') {
                localStorage.setItem("isloggedin", 'T')
                if (acceptCookie === 'T') {
                  localStorage.setItem("activeCode", 'F')
                }
                if (subscribePage === 'T') {
                  localStorage.setItem("subscribepage", 'F')
                }
              } else {
                localStorage.setItem("isloggedin", 'T')
              }
            }
            window.location.reload();
          }
        })
    },
      error => console.log(error),
      () => {
      });
  }

  signInWithApple() {
    const CLIENT_ID = "humanwisdom.web.service"
    const REDIRECT_API_URL = "https://www.humanwisdom.info/api/verifyAppleToken_html"


    window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_API_URL)}&response_type=code id_token&scope=name email&response_mode=form_post`,
      '_self'
    );
  }

  loginpage() {
    this.closepopup.nativeElement.click();
    this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
  }
}
