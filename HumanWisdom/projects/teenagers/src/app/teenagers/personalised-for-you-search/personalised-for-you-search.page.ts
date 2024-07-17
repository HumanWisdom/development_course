import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

import { LogEventService } from '../../../../../shared/services/log-event.service';
import { TeenagersService } from '../teenagers.service';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Constant } from '../../../../../shared/services/constant';

@Component({
  selector: 'app-personalised-for-you-search',
  templateUrl: './personalised-for-you-search.page.html',
  styleUrls: ['./personalised-for-you-search.page.scss'],
})
export class PersonalisedForYouSearchPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('welcome') welcome: ElementRef;
  @ViewChild('closepopup') closepopup: ElementRef;

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

  wisdomExerciseList = [];
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
  public exerciseNo: any;
  public tourTotalIndex = 3;
  public tourIndex = 1;
  public Title: string = '';
  currentList = [];
  public day: string = '';

  constructor(private route: Router, private aservice: TeenagersService,
    public authService: SocialAuthService, public service: OnboardingService, public logeventservice: LogEventService,
    public cd: ChangeDetectorRef
  ) {

    this.logeventservice.logEvent('View_For_you');
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
      this.getModuleList();
      this.getProgress()
    }
    this.GetWisdomScreens();
    this.getUserPreference();
    this.isSubscribe = SharedService.isSubscriber();
    let closetour = localStorage.getItem('closeTour');

    if(!closetour && !localStorage.getItem('firstTimeSearchTour')) {
      this.continueTour();
    }
  }
  continueTour() {
    const driver = window['driver'].js.driver;
    let stepList = [
      {
        element: ".tour_pathway",
        popover: {
          title: 'PATHWAY',
          description: 'A step-by-step guide for a happier life',
          // side: "right"
          side: "right",
          align: 'end'
        }
      },
       {
        element: ".tour_exercises",
        popover: {
          title: 'Exercises',
          description: 'Tiny, guided exercises to improve your self-awareness',
          side: "right"
        }
      }
    ];

    const driverObj = driver({
      onNextClick: () => {
        localStorage.setItem('firstTimeSearchTour', 'T');
        this.tourIndex++;
        if (this.tourIndex >= this.tourTotalIndex) {
          document.body.classList.remove('overflow_hidden');
          document.body.classList.add('overflow_auto');
          this.tourIndex = 1;
        }
        driverObj.moveNext();
      },
      onPrevClick: () => {
        this.tourIndex--;
        driverObj.movePrevious();
        document.body.classList.remove('overflow_auto');
        document.body.classList.add('overflow_hidden');
      },
      onCloseClick:() => {
        localStorage.setItem('firstTimeSearchTour', 'T');
        this.tourIndex = 1;
        document.body.classList.remove('overflow_hidden');
        document.body.classList.add('overflow_auto');
        console.log('Close Button Clicked');
        driverObj.destroy();
      },
      allowClose: false,
      showButtons: [
        'next',
        //'previous',
        'close'
      ],
      nextBtnText: 'Next',
      //prevBtnText: 'Prev',
      doneBtnText: 'Done',
      showProgress: true,
      steps: stepList
    });

    driverObj.drive();

    document.body.classList.remove('overflow_auto');
    document.body.classList.add('overflow_hidden');

  }

  GetWisdomScreens() {
    this.aservice.GetWisdomScreens(157).subscribe(res => {
      this.wisdomExerciseList = res;
      var allCompletedScreen: boolean = false;
      let data = this.wisdomExerciseList.filter(x => x.completed == '1');
      if (this.wisdomExerciseList.length == data.length) {
        allCompletedScreen = true;
      }
      let exercise: any
      let emptyList = false;
      let increaseExcercise = false;
      //   Any of the exercise is not completed
      if (data.length == 0) {
        emptyList = true;
        data = this.wisdomExerciseList;
        exercise = data[0];
      }
      else {
        var incomppletedExercise = this.wisdomExerciseList.filter(x => x.completed == '0');
        if (incomppletedExercise.length > 0) {
          exercise = incomppletedExercise[0];
        } else {
          exercise = data[data.length - 1];
        }
        // It contains data may be some exercise is completed
        var completed = this.wisdomExerciseList.filter(x => x.SessionNo == exercise.SessionNo && x.completed == '0');
        if (completed.length == 0) {
          increaseExcercise = true;
          emptyList = true;
        }
      }
      // Setting final title and Exercise no
      this.Title = exercise.Title;

      this.exerciseNo = !increaseExcercise ? exercise.SessionNo.substring(exercise.SessionNo.length - 2)
        : ((parseInt(exercise.SessionNo.substring(exercise.SessionNo.length - 2))) + 1).toString();

      if (allCompletedScreen) {
        this.exerciseNo = "1";
      }
      if (this.exerciseNo == "13") {
        this.exerciseNo = "1";
      }
      // Checking the length if its less than 10  to append for current session number
      if (this.exerciseNo.length == 1) {
        this.exerciseNo = "0" + this.exerciseNo;
      }
      if (incomppletedExercise && incomppletedExercise.length > 0) {
        this.day = !emptyList ? (parseInt(exercise.ScreenNo.includes('p') ?  exercise.ScreenNo.split('p').pop() : '')).toString() : "0";
      } else {
        this.day = !emptyList ? (parseInt(exercise.ScreenNo.substring(6, exercise.ScreenNo.length)) + 1).toString() : "0";
      }
      var sessionNo = exercise.SessionNo.substring(0, exercise.SessionNo.length - 2) + this.exerciseNo;


      //Pushing final ist for display
      for (let item of this.wisdomExerciseList.filter(x => x.SessionNo == sessionNo)) {

        let obj = {
          "SessionNo": item.SessionNo,
          "ScreenNo": item.ScreenNo,
          "completed": item.completed,
          "day": item.ScreenNo.includes('p') ?  item.ScreenNo.split('p').pop() : '',
          "Title": item.Title
        }
        this.currentList.push(obj);
      }
      if (this.currentList.length > 0) {
        this.Title = this.currentList[0].Title;
      }
      // Dynamic Scroll
      setTimeout(() => {
        var editable = document.querySelector(".editable")?.getBoundingClientRect().x;
        var wediv = document.querySelector(".ae_days")?.getBoundingClientRect().x;
        if (document.querySelector(".ae_days")) {
          document.querySelector(".ae_days").scrollLeft = editable - wediv;
        }

      }, 5000);

    })
  }

  getWisdomClass(exercise) {
    if (exercise.completed == '1') {
      return ' uneditable';
    } else if (exercise.completed == '0' && this.day == exercise.day) {
      return ' editable';
    } else {
      return ' inactive';
    }
  }


  getModuleList(isLoad?) {
    this.aservice.getModuleList().subscribe(res => {
      this.moduleList = res;
      this.moduleList.push({"ModuleName":"Events"},{"ModuleName":"Blogs"},{"ModuleName":"Life stories"},
                          {"ModuleName":"Stories"},{"ModuleName":"Podcast"}, {"ModuleName":"Short videos"},
                          {"ModuleName":"Videos"}, {"ModuleName":"Audio meditations"},{"ModuleName":"Journal"},
                          {"ModuleName":"Forum"}, {"ModuleName":"Exercises"},{"ModuleName":"Awareness Exercises"},
                          {"ModuleName":"Develop a calm mind"},{"ModuleName":"Manage your emotions"},
                          {"ModuleName":"Understand yourself"},{"ModuleName":"Succeed in life"},
                          {"ModuleName":"Understand how your mind works"}, {"ModuleName":"Mental Health"},
                        )

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
    let perd = this.aservice.getperList();
    perd.forEach((r) => {
      let find = this.personalisedforyou.some((d) => d['name'] === r['name']);
      if (!find) {
        r['active'] = false;
        this.personalisedforyou.push(r);
      }
    })
  }

  getinp(event) {

    let url=""
    switch(event)
    {
      case "Events":{
          url = `/teenagers/events`
          break;
      }
      case "Blogs":{
        url = `/teenagers/blogs`
        break;
      }
      case "Life stories":
      case "Stories":{
        url = `/teenagers/wisdom-stories`
        break;
      }
      case "Podcast":{
        url = `/teenagers/podcast`
        break;
      }
      case "Audio meditations":{
        url = `/teenagers/audio-meditation`
        break;
      }
      case ("Short videos"):
      case ("Videos"):
        {
        url = `/teenagers/wisdom-shorts`
        break;
      }
     case "Journal":{
        url = `/teenagers/journal`
        break;
      }
      case "Exercises":
      case "Awareness Exercises":
        {
        url = `/teenagers/wisdom-exercise`
        break;
      }
      case "Forum":{
        url = `/teenagers/forum`
        break;
      }
      case "Develop a calm mind":{
        url = `/teenagers/pathway/develop-a-calm-mind`
        break;
      }
      case "Understand yourself":{
        url = `/teenagers/pathway/learn-to-question-yourself`
        break;
      }
      case "Understand how your mind works":{
        url = `/teenagers/pathway/understand-how-your-mind-works`
        break;
      }
      case "Manage your emotions":{
        url = `/teenagers/pathway/manage-your-emotions`
        break;
      }
      case "Succeed in life":{
        url = `/teenagers/pathway/succeed-in-life`
        break;
      }
      case "Mental Health":{
        url = `/teenagers/curated/overcome-stress-anxiety`
        break;
      }
     default: {
       url = `/teenagers/site-search/${this.searchinp}`
        break;
      }

    }

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
        this.logeventservice.logEvent('click_emotions');
        this.route.navigate(['/teenagers/curated/manage-your-emotions'])
      } else if (name === 'Overcome stress and anxiety') {
        this.logeventservice.logEvent('click_stress_anxiety');
        this.route.navigate(['/teenagers/curated/overcome-stress-anxiety'])
      } else if (name === 'Wisdom for the workplace') {
        this.logeventservice.logEvent('click_workplace');
        this.route.navigate(['/teenagers/curated/wisdom-for-workplace'])
      } else if (name === 'Have fulfilling relationships') {
        this.logeventservice.logEvent('click_relationships');
        this.route.navigate(['/teenagers/curated/have-fulfilling-relationships'])
      } else if (name === 'Be happier') {
        this.logeventservice.logEvent('click_be_happier');
        this.route.navigate(['/teenagers/curated/be-happier'])
      } else if (name === 'Change unhelpful habits') {
        this.logeventservice.logEvent('click_be_happier');
        this.route.navigate(['/teenagers/curated/change-unhelpful-habits'])
      } else if (name === 'Deal with sorrow and loss') {
        this.logeventservice.logEvent('click_sorrow_loss');
        this.route.navigate(['/teenagers/curated/deal-with-sorrow-loss'])
      } else if (name === 'Mindfulness') {
        this.logeventservice.logEvent('click_calm_mind');
        this.route.navigate(['/teenagers/curated/have-calm-mind'])
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

        //       //static progress

        this.benefitsWisdomP = res.ModUserScrPc.find(e => e.Module == "Benefits of Wisdom")?.Percentage
        this.guideP = res.ModUserScrPc.find(e => e.Module == "Start Here")?.Percentage
        this.identityP = res.ModUserScrPc.find(e => e.Module == "Identity")?.Percentage
        this.keyP = res.ModUserScrPc.find(e => e.Module == "Key Ideas")?.Percentage
        this.fiveCirclesP = res.ModUserScrPc.find(e => e.Module == "5 Circles of Wisdom")?.Percentage
        this.discoveringP = res.ModUserScrPc.find(e => e.Module == "Discovering Wisdom")?.Percentage
        this.hcwhP = res.ModUserScrPc.find(e => e.Module == "How can wisdom help?")?.Percentage
      })

  }




  // // introduction
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
            this.route.navigate([`/teenagers/discovering-wisdom/${discoveringWisdomResume}`])
          }
          else
            this.route.navigate([`/teenagers/discovering-wisdom/s27001`])
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
            this.route.navigate([`/teenagers/benefits-of-wisdom/${benefitsWisdomResume}`])
          }
          else
            this.route.navigate([`/teenagers/benefits-of-wisdom/s32001`])
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
            this.route.navigate([`/teenagers/five-circles/${fiveCirclesResume}`])
          }
          else
            this.route.navigate([`/teenagers/five-circles/s33001`])
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
            this.route.navigate([`/teenagers/how-can-wisdom-help/${hcwhR}`])
          }
          else
            this.route.navigate([`/teenagers/how-can-wisdom-help/s74001`])
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
            this.route.navigate([`/teenagers/key-ideas/${keyIdeasResume}`])
          }
          else
            this.route.navigate([`/teenagers/key-ideas/s34001`])
          /*if(!this.goToPage)
          {

            this.router.navigate([`/teenagers/key-ideas`])
          }
          else
            this.router.navigate([`/teenagers/key-ideas/s${keyIdeasResume}`])*/

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
            this.route.navigate([`/teenagers/program-guide/${pgResume}`])
          }
          else
            this.route.navigate([`/teenagers/program-guide/s35001`])
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

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  navigateToPathway(url) {
    this.logeventservice.logEvent("click_" + url.split("/")[3]);

    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.route.url);
    this.route.navigate([url]);
  }

  rightToJournal(journal) {
    if (journal) {
      this.route.navigate(["/teenagers/journal"]);
      this.logeventservice.logEvent("click_journal");
    } else {
      this.route.navigate(["/teenagers/journal"], { queryParams: { isGuided: true } });
      this.logeventservice.logEvent("click_guided_questions");
    }
  }

  logEvent(event, url) {
    this.logeventservice.logEvent(event);
    this.route.navigate([url]);
  }


  RouteToWisdomExercise(exercise) {

    this.logeventservice.logEvent("click_Awareness_exercise");

    if (exercise != null) {
      this.route.navigate(['teenagers/wisdom-exercise/s' + exercise.ScreenNo.substring(0, exercise.ScreenNo.length - 2)], {
        state: {
          day: exercise.day,
        }
      });
    } else {
      this.route.navigate(['teenagers/wisdom-exercise/']);
    }
  }

}

