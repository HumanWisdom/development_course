import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'app-personalised-for-you-search',
  templateUrl: './personalised-for-you-search.page.html',
  styleUrls: ['./personalised-for-you-search.page.scss'],
})
export class PersonalisedForYouSearchPage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('welcome') welcome: ElementRef;
  @ViewChild('closepopup') closepopup: ElementRef;
  @ViewChild('enablemodal') enablemodal: ElementRef;

  searchResult = [];
  personalisedforyou = []

  indList = []
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

  constructor(private route: Router, private aservice: AdultsService,
    public authService: SocialAuthService, public service: OnboardingService,
    public cd: ChangeDetectorRef
  ) {
    let authtoken = JSON.parse(localStorage.getItem("token"))
    let app = localStorage.getItem("fromapp")
    if (authtoken && app && app === 'T') {
      localStorage.setItem('socialLogin', 'T');
      localStorage.setItem('acceptcookie', 'T')
      this.aservice.verifytoken(authtoken).subscribe((res) => {
        if (res) {
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          localStorage.setItem("userId", res['UserId'])
          let namedata = localStorage.getItem('name').split(' ')
          this.userId = res['UserId']
          this.loginadult(res)
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')
          localStorage.setItem("Subscriber", res['Subscriber'])
          
        }
      })
    }
  }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("userId"))
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
      if (window.history.state.routedFromLogin && window.history.state.routedFromLogin == true) {
        setTimeout(() => {
          this.aservice.adminPopup().subscribe((res) => {
            this.alertMsg = res;
          });
          this.welcome.nativeElement.click();
        }, 1000);
      }
      this.getUserPreference();
          this.getModuleList();
          this.getProgress()
    }
  }

  getModuleList(isLoad?) {
    this.aservice.getModuleList().subscribe(res => {
      this.moduleList = res;
      if (isLoad) {
        if (this.searchinp == '') {
          this.searchResult = this.moduleList;
        } else {
          this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
        }
      }
    })
  }
  getAutoCompleteList(value) {
    if (this.moduleList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.moduleList;
      } else {
        this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(value?.toLocaleLowerCase()));
      }
    }
  }

  getUserPreference() {
    this.aservice.getUserpreference().subscribe((res) => {
      let perd = this.aservice.getperList();
      this.personalisedforyou = []
      this.indList = []
      if (res && res !== "") {
        let arr = res.split('').filter((d) => d !== ',');
        arr.forEach((d) => {
          perd.forEach((r) => {
            if (d === r['id']) {
              r['active'] = true;
              this.personalisedforyou.push(r);
            }
          })
        })
        perd.forEach((r) => {
          let find = this.personalisedforyou.some((d) => d['name'] === r['name']);
          if (!find) {
            r['active'] = false;
            this.personalisedforyou.push(r);
          }
        })
        this.personalisedforyou.forEach((d) => {
          if (d['active']) {
            this.indList.push(d['id'])
          }
        })
      } else {
        perd.forEach((r) => {
          r['active'] = false;
          this.personalisedforyou.push(r);
        })
      }
    })
  }

  getinp(event) {
    let url = `/adults/site-search/${this.searchinp}`
    this.route.navigate([url])
  }

  searchEvent(module) {
    this.searchinp = module;
    this.searchResult = [];
    this.getinp(module);
  }

  clickbtn(name, val = '', event, ind, id) {
    if (val === '') {
      if (name === 'Manage your emotions') {
        this.route.navigate(['/adults/curated/manage-your-emotions'])
      } else if (name === 'Overcome stress and anxiety') {
        this.route.navigate(['/adults/curated/overcome-stress-anxiety'])
      } else if (name === 'Wisdom for the workplace') {
        this.route.navigate(['/adults/curated/wisdom-for-workplace'])
      } else if (name === 'Have fulfilling relationships') {
        this.route.navigate(['/adults/curated/have-fulfilling-relationships'])
      } else if (name === 'Be happier') {
        this.route.navigate(['/adults/curated/be-happier'])
      } else if (name === 'Change unhelpful habits') {
        this.route.navigate(['/adults/curated/change-unhelpful-habits'])
      } else if (name === 'Deal with sorrow and loss') {
        this.route.navigate(['/adults/curated/deal-with-sorrow-loss'])
      } else if (name === 'Mindfulness') {
        this.route.navigate(['/adults/curated/have-calm-mind'])
      }
    } else {
      if (this.isloggedIn) {
        let fill = this.personalisedforyou.filter((d) => d['name'] === name);
        const index = this.indList.indexOf(id);
        if (fill[0]['active']) {
          if (index > -1) {
            this.indList.splice(index, 1);
          }
        } else {
          this.indList.push(id)
        }
        let reqpay = this.indList.join();
        this.aservice.postUserpreference(reqpay).subscribe((res) => {
          if (res) {
            fill[0]['active'] = fill[0]['active'] ? false : true;
            this.personalisedforyou.splice(ind, 1)
            if (fill[0]['active']) {
              this.personalisedforyou.unshift(fill[0])
            } else {
              this.personalisedforyou.push(fill[0])
            }
            this.indList = []
            this.personalisedforyou.forEach((d) => {
              if (d['active']) {
                this.indList.push(d['id'])
              }
            })
            localStorage.setItem('perapidata', JSON.stringify(this.personalisedforyou));
          }
        })
      } else {
        this.enablepopup.nativeElement.click();
        // window.alert('Please Login to use  this feature.')
      }
    }
  }

  loginpage() {
    this.closepopup.nativeElement.click();
    this.route.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
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

  onFocus() {
    this.getModuleList(true);
    if (this.searchinp == '') {
      this.searchResult = this.moduleList;
    } else {
      this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
    }
  }

  onFocusOutEvent() {
    setTimeout(() => {
      this.searchResult = [];
    }, 400);
  }

  signInWithApple() {
    const CLIENT_ID = "humanwisdom.web.service"
    const REDIRECT_API_URL = "https://www.humanwisdom.info/api/verifyAppleToken_html"


    window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_API_URL)}&response_type=code id_token&scope=name email&response_mode=form_post`,
      '_self'
    );

  }

  clearSearch() {
    this.searchinp = "";
    this.searchResult = [];
  }


  getProgress() {
    this.aservice.getPoints(this.userId)
      .subscribe(res => {

        this.goToPage = res.LastScrNo
        this.percentage = parseInt(res.overallPercentage)

        localStorage.setItem("overallPercentage", this.percentage)
        //resume section
        res.ModUserScrPc.filter(x => {
          if (parseFloat(x.Percentage) < 100) {
            if (x.ModuleId != 71 && x.ModuleId != 72 && x.ModuleId != 75) {
              if (x.ModuleId < 10) {
                x.ModuleId = "0" + x.ModuleId

              }

              x.imgPath = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/${x.ModuleId}.png`
            }
          }
        })

        //static progress

        this.benefitsWisdomP = res.ModUserScrPc.find(e => e.Module == "Benefits of Wisdom")?.Percentage
        this.guideP = res.ModUserScrPc.find(e => e.Module == "User Guide")?.Percentage
        this.identityP = res.ModUserScrPc.find(e => e.Module == "Identity")?.Percentage
        this.keyP = res.ModUserScrPc.find(e => e.Module == "Key Ideas")?.Percentage
        this.fiveCirclesP = res.ModUserScrPc.find(e => e.Module == "5 Circles of Wisdom")?.Percentage
        this.discoveringP = res.ModUserScrPc.find(e => e.Module == "Discovering Wisdom")?.Percentage
        this.hcwhP = res.ModUserScrPc.find(e => e.Module == "How can wisdom help?")?.Percentage
      })

  }




  // introduction
  routeDiscoveringWisdom(cont: any = 1) {
    var discoveringWisdomResume
    localStorage.setItem("moduleId", JSON.stringify(27))
    this.aservice.clickModule(27, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        discoveringWisdomResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        sessionStorage.setItem("discoveringWisdomResume", discoveringWisdomResume)
        this.mediaPercent = parseInt(res.MediaPercent)
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.route.navigate([`/adults/discovering-wisdom/${discoveringWisdomResume}`])
          }
          else
            this.route.navigate([`/adults/discovering-wisdom/s27001`])
        })
  }

  routeBenefits(cont: any = 1) {
    var benefitsWisdomResume
    localStorage.setItem("moduleId", JSON.stringify(32))
    this.aservice.clickModule(32, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        benefitsWisdomResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("benefitsWisdomResume", benefitsWisdomResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.route.navigate([`/adults/benefits-of-wisdom/${benefitsWisdomResume}`])
          }
          else
            this.route.navigate([`/adults/benefits-of-wisdom/s32001`])
        })
  }

  routeCircles(cont: any = 1) {
    var fiveCirclesResume
    localStorage.setItem("moduleId", JSON.stringify(33))
    this.aservice.clickModule(33, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        fiveCirclesResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fiveCirclesResume", fiveCirclesResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.route.navigate([`/adults/five-circles/${fiveCirclesResume}`])
          }
          else
            this.route.navigate([`/adults/five-circles/s33001`])
        })


  }

  routehowcanwisdomhelp(cont: any = 1) {
    var hcwhR
    localStorage.setItem("moduleId", JSON.stringify(74))
    this.aservice.clickModule(74, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        hcwhR = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("hcwhR", hcwhR)
        this.mediaPercent = parseInt(res.MediaPercent)
        this.freeScreens = res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.route.navigate([`/adults/how-can-wisdom-help/${hcwhR}`])
          }
          else
            this.route.navigate([`/adults/how-can-wisdom-help/s74001`])
        })
  }



  routeIdeas(cont: any = 1) {
    var keyIdeasResume
    localStorage.setItem("moduleId", JSON.stringify(34))
    this.aservice.clickModule(34, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        keyIdeasResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("keyIdeasResume", keyIdeasResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.route.navigate([`/adults/key-ideas/${keyIdeasResume}`])
          }
          else
            this.route.navigate([`/adults/key-ideas/s34001`])
          /*if(!this.goToPage)
          {

            this.router.navigate([`/adults/key-ideas`])
          }
          else
            this.router.navigate([`/adults/key-ideas/s${keyIdeasResume}`])*/

        })

  }

  routeGuide(cont: any = 1) {
    var pgResume
    localStorage.setItem("moduleId", JSON.stringify(35))
    this.aservice.clickModule(35, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        pgResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pgResume", pgResume)
        pgResume = "s" + res.lastVisitedScreen
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.route.navigate([`/adults/program-guide/${pgResume}`])
          }
          else
            this.route.navigate([`/adults/program-guide/s35001`])
        })
  }
  // /introduction

  loginadult(res) {
    this.loginResponse = res
    this.userId = res.UserId
    if (res.Subscriber === 0) {
      this.isSubscribe = true;
    }
    let guest = localStorage.getItem('guest');
    // if (guest === 'T') localStorage.setItem('guest', 'F')
    if (res['Email'] === "guest@humanwisdom.me") localStorage.setItem('guest', 'T')
    else localStorage.setItem("guest", 'F')

    sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("token", JSON.stringify(res.access_token))
    localStorage.setItem("Subscriber", res.Subscriber)
    localStorage.setItem("userId", JSON.stringify(this.userId))
    localStorage.setItem("email", res['Email'])
    localStorage.setItem("name", res.Name)
    let nameupdate = localStorage.getItem(
      "nameupdate"
    );
    let namedata = localStorage.getItem('name').split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    this.modaldata['firstname'] = namedata[0];
    this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    this.freescreens();
    localStorage.setItem("text", JSON.stringify(this.text))
    localStorage.setItem("video", JSON.stringify(this.video))
    localStorage.setItem("audio", JSON.stringify(this.audio))
    localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
    localStorage.setItem("question", JSON.stringify(this.question))
    localStorage.setItem("reflection", JSON.stringify(this.reflection))
    localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
    this.userId = JSON.parse(localStorage.getItem("userId"))
    this.cd.detectChanges();
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


  freescreens() {
    this.aservice.freeScreens().subscribe(res => {
      this.x = []
      let result = res.map(a => a.FreeScrs);
      let arr;
      result = result.forEach(element => {
        if (element && element.length !== 0) {
          this.x.push(element.map(a => a.ScrNo))
          arr = Array.prototype.concat.apply([], this.x);
        }
      })
      localStorage.setItem("freeScreens", JSON.stringify(arr))
    }



    )
  }

  getBookmarks() {
    this.aservice.getBookmarks(this.userId)
      .subscribe(res => {
        this.bookmarks = res
        this.bookmarks = this.bookmarks.map(a => parseInt(a.ScrNo));
        localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarks))

      })

  }
}
