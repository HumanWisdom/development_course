import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AdultsService } from '../adults.service';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Constant } from '../../../../../shared/services/constant';
import { concat } from 'rxjs';
// import { driver } from "driver.js";
// import "driver.js/dist/driver.css";

@Component({
  selector: 'app-adult-dashboard',
  templateUrl: './adult-dashboard.page.html',
  styleUrls: ['./adult-dashboard.page.scss'],
})
export class AdultDashboardPage implements OnInit {
  @ViewChild('enablemodal') enablemodal: ElementRef;
  @ViewChild('closemodal') closemodal: ElementRef;
  @ViewChild('closerefermodal') closerefermodal: ElementRef;
  @ViewChild('enablecookiemodal') enablecookiemodal: ElementRef;
  @ViewChild('closecookiemodal') closecookiemodal: ElementRef;
  @ViewChild('actclosemodal') actclosemodal: ElementRef;
  @ViewChild('closepopup') closepopup: ElementRef;
  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('closetourmodal') closetourmodal: ElementRef;
  @ViewChild('enabletourmodal') enabletourmodal: ElementRef;

  public dasboardUrl = '/adults/adult-dashboard';
  //get global settings here
  public text = 2
  public video = 3
  public audio = 4
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  public userId = 100
  public userName: any
  public qrList: any
  public goToPage: any
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  public points: any
  public daysVisited: any
  public timeSpent: any
  public percentage: any
  public bookmarks = []
  public resume = []
  public resumeLastvisited = [];
  public dashboardFeature = [];
  public bookmarkLength: any
  searchinp = '';
  public dash = false;
  public isSubscriber = false;
  public guideP = '50';
  searchResult = [];
  isEnableHam = true;
  public Subscriber: any
  public alertMsg: any
  public friendemail = ''
  public friendname = ''
  public name = ''
  public streak = ''
  public isloggedIn = false
  public x = []
  public isSubscribe = false
  public enablebanner = false;
  public modaldata = {}
  public firstpage = true;
  public secondpage = false;
  public thirdpage = false;
  public fourthpage = false;
  public fifthpage = false;
  public sixthpage = false;
  public activationCode: any = ''
  public countryCode: any = '';
  public email: any = '';
  public verificationCode: any;
  public loginpassword: any = '';
  public loginemail: any = '';
  public subthirdpage = false;
  public subfirstpage = true;
  public subsecondpage = false;
  public user: any
  public idToken: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public yearormonth = ''
  public personalisedList = []
  public lifestoriesList = []
  public shortsList = []
  public sId: any
  hcwhP: any
  public moduleList = [];
  public exerciseNo: string = '';
  public Title: string = '';
  public day: string = '';
  public bullyingP: any
  public making_better_decisionsP: any
  public diversity_and_inclusionP: any
  public dealingwithdepressionP: any
  public externalapprovalP: any
  //static progress mapping
  public wisdomExerciseList = [];
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  mediaPercent: any
  freeScreens = []
  currentList = [];
  maxExceriseCount = "12;";
  public YourTopicofChoice = [];
  public registrationForm: any;
  public isIos = false;
  public tourTotalIndex = 10;
  public tourIndex = 1;
  public isSkip = false;

  constructor(
    public router: Router, public service: AdultsService, public services: OnboardingService,
    public cd: ChangeDetectorRef, public fb: UntypedFormBuilder,
    public platform: Platform,
    public logeventservice: LogEventService, private meta: Meta, private title: Title
  ) {
    localStorage.setItem("fromlandingpage", 'F')
    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    }, { validator: this.PasswordValidator })

    this.getUserPreference();
    this.GetWisdomScreens();

    this.logeventservice.logEvent('view_adult-dashboard');
    localStorage.setItem('feelbetternow', 'F')
    setTimeout(() => {
    }, 1500);
    let app = localStorage.getItem("fromapp")
    if (app && app === 'T') {
      localStorage.setItem('acceptcookie', 'T')
    }
    if (this.platform.IOS) {
      localStorage.setItem('acceptcookie', 'T')
    }
    localStorage.setItem('curatedurl', 'F');
    localStorage.setItem('curated', 'F');
    let authtoken = JSON.parse(localStorage.getItem("token"))
    if (authtoken) {
      this.services.setDataRecievedState(false);
      localStorage.setItem('socialLogin', 'T');
      this.service.verifytoken(authtoken).subscribe((res) => {
        if (res) {
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          let namedata = localStorage.getItem('name').split(' ')
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')
          localStorage.setItem("Subscriber", res['Subscriber']);
          this.isSubscriber = SharedService.isSubscriber();
          this.loginadult(res);
          this.services.setDataRecievedState(true);
        } else {
          localStorage.setItem("email", 'guest@humanwisdom.me');
          localStorage.setItem("pswd", '12345');
          localStorage.setItem('guest', 'T');
          localStorage.setItem('isloggedin', 'F');
          this.services.setDataRecievedState(true);
          // this.router.navigate(['/adults/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
        }
      }, error => {
        localStorage.setItem("email", 'guest@humanwisdom.me');
        localStorage.setItem("pswd", '12345');
        localStorage.setItem('guest', 'T');
        localStorage.setItem('isloggedin', 'F');

      },
      )
    } else {
      this.services.setDataRecievedState(true);
    }
    let ban = localStorage.getItem('enablebanner');
    if (ban === null || ban === 'T') {
      SharedService.enablebanner = true;
    } else {
      SharedService.enablebanner = false;
    }
    this.services.getCountry().subscribe((res: any) => {
      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
    },
      error => {
        console.log(error)
      },
      () => {
      });
    let sub: any = localStorage.getItem('Subscriber')
    let res = localStorage.getItem("isloggedin")
    if (sub && sub === '0' && res === 'T') {
      this.firstpage = false
      this.thirdpage = true;
      let namedata = localStorage.getItem('name').split(' ')
      this.modaldata['email'] = localStorage.getItem('email');
      this.modaldata['firstname'] = namedata[0];
      this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    }
    // /carousel multiple items increment by 1 - c1_w33_01
    localStorage.setItem('cicd', 'T')
    let userid = localStorage.getItem('isloggedin');
    let rem = localStorage.getItem('remember');
    let guest = localStorage.getItem('guest');
    let nameupdate = localStorage.getItem(
      "nameupdate"
    );
    if (nameupdate) {
      this.name = nameupdate
    } else {
      this.name = localStorage.getItem('name')
    }
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    localStorage.setItem("emailCode", 'F')
    localStorage.setItem('giftwisdom', 'F')
    if (userid === 'T') {
      this.isloggedIn = true;
    }
    if (rem === 'T' || guest === 'T') {
      if (guest === 'T') {
        localStorage.setItem("email", 'guest@humanwisdom.me');
        localStorage.setItem("pswd", '12345');
      }
      let app = localStorage.getItem("fromapp")
      if (!app || app === 'F') {
        if (localStorage.getItem('socialLogin') !== 'T') {
          // this.emaillogin()
        };
      } else if (app && app === 'T') {
        // let authtoken = JSON.parse(localStorage.getItem("token"))
        // this.fromapplogin(authtoken);
      }

    }

    if (localStorage.getItem("userId")) {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }

    // if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
    //   this.getProgress();
    // }

    this.getLastvisitedScr();
    if (localStorage.getItem("Affreftoken") !== null) {
      let token = localStorage.getItem("Affreftoken");
      this.service.decrypt(token).subscribe((res: any) => {
        if (res) {
          localStorage.setItem("AffReferralCode", res)
        }
      })
    }

    if (this.isloggedIn) {
      this.encryptUserId();
    }
  }

  encryptUserId() {
    this.service.encryptUserId(this.userId).subscribe((res: any) => {
      localStorage.setItem("shareToken", res)
    })
  }

  survey() {
    this.router.navigate(["/adults/wisdom-survey"], { state: { 'isUseCloseButton': true } });
  }

  viewDetails() {
    this.router.navigate(["/adults/onboarding/user-profile"]);
  }

  loginpage() {
    // $("#signuplogin").modal("hide");
    this.closepopup.nativeElement.click();
    localStorage.setItem('introoption', 'T')
    this.router.navigate(['/adults/onboarding/login'])
  }

  getLastvisitedScr() {
    this.userId = SharedService.getUserId();
    this.service.GetLastVisitedScreen(this.userId)
      .subscribe(res => {

        if (res && res[0] && res[0]['ModuleId'] == 75) {
          res[0]['screenno'] = res[0]['screenno'].substring(0, res[0]['screenno'].length - 2)
        }
        this.resumeLastvisited = res;
      });
  }

  GetDashboardFeatures() {
    let id = localStorage.getItem('userPreference') ? localStorage.getItem('userPreference') : '1';
    this.service.GetDashboardFeature(id)
      .subscribe(res => {

        this.dashboardFeature = res;
      });
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
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

  ngOnInit() {
    SharedService.isRoutedFromLogin = false;
    if (this.platform.IOS || this.platform.SAFARI || this.iOS()) {
      this.isIos = true;
    }
    const queryString = this.router.url.split('?')[1];
    if(queryString){
      const params = new URLSearchParams(queryString);
      const code = params.get('code');
      if(code && code != null){
        localStorage.setItem('instaToken',code)
        window.close();
      }

    
    }
    // Extract the query string from the URL

    this.title.setTitle('HappierMe App: Personal Growth & Self-Help')
    this.meta.updateTag({ property: 'title', content: 'HappierMe App: Personal Growth & Self-Help' })
    this.meta.updateTag({ property: 'description', content: 'Discover the ultimate tool for personal growth and self-help with the HappierMe app. Get daily inspiration, mindfulness practices, and effective techniques for managing anger and stress, building better relationships, improving self-esteem, overcoming addiction, thriving at work and in leadership, managing money and love, living with peace, dealing with death, handling criticism, navigating success and failure, making better decisions, and shaping opinions and beliefs.' })
    this.meta.updateTag({ property: 'keywords', content: 'human wisdom, app, personal growth, self-help, daily inspiration, mindfulness practices, anger management, stress management, relationships, self-esteem, addiction, work, workplace, leadership, money, love, food and health, living with peace, dealing with death, criticism, success and failure, decision making, opinions and beliefs' })


    this.dash = this.router.url.includes('adult-dashboard');
    this.isSubscriber = SharedService.isSubscriber();
    if (localStorage.getItem('acceptcookie') === null) {
      setTimeout(() => {
        this.enablecookiemodal.nativeElement.click();
      }, 1000)
    } else {
      if(!localStorage.getItem('firstTimeTour')) {
        setTimeout(() => {
          this.enabletourmodal.nativeElement.click();
        }, 100)
      }
    }



    setTimeout(() => {
      let sub: any = localStorage.getItem('Subscriber');
      if (sub === '0') {
        this.isSubscribe = true;
      } else {
        this.isSubscribe = false;
      }

      // carousel multiple items increment by 1 - c1_w33
      // Add minus icon for collapse element which is open by default
      $('.c1_w33 .item').each(function () {
        let itemToClone = $(this);

        for (let i = 1; i < 3; i++) {
          itemToClone = itemToClone.next();

          // wrap around if at end of item collection
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
          }

          // grab item, clone, add marker class, add to collection
          itemToClone.children(':first-child').clone()
            .addClass(`cloneditem-${i}`)
            .appendTo($(this));
        }
      });
      // /carousel multiple items increment by 1 - c1_w33

      // carousel multiple items increment by 1 - c2_w50
      // Add minus icon for collapse element which is open by default
      $('.c2_w50 .item').each(function () {
        let itemToClone = $(this);

        for (let i = 1; i < 2; i++) {
          itemToClone = itemToClone.next();

          // wrap around if at end of item collection
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
          }

          // grab item, clone, add marker class, add to collection
          itemToClone.children(':first-child').clone()
            .addClass(`cloneditem-${i}`)
            .appendTo($(this));
        }
      });
      // /carousel multiple items increment by 1 - c2_w50

      // carousel multiple items increment by 1 - c3_w100
      // Add minus icon for collapse element which is open by default
      $('.c3_w100 .item').each(function () {
        let itemToClone = $(this);

        for (let i = 1; i < 1; i++) {
          itemToClone = itemToClone.next();

          // wrap around if at end of item collection
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
          }

          // grab item, clone, add marker class, add to collection
          itemToClone.children(':first-child').clone()
            .addClass(`cloneditem-${i}`)
            .appendTo($(this));
        }
      });
      // /carousel multiple items increment by 1 - c3_w100

      // carousel multiple items increment by 1 - c1_w33_01
      // Add minus icon for collapse element which is open by default
      $('.c1_w33_01 .item').each(function () {
        let itemToClone = $(this);

        for (let i = 1; i < 6; i++) {
          itemToClone = itemToClone.next();

          // wrap around if at end of item collection
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
          }

          // grab item, clone, add marker class, add to collection
          itemToClone.children(':first-child').clone()
            .addClass(`cloneditem-${i}`)
            .appendTo($(this));
        }
      });


    }, 3000)
    localStorage.setItem("pageaction", 'next');

    setTimeout(() => {
      this.GetDashboardFeatures();
    }, 1000)
    setTimeout(() => {
      if(this.router.url.toLowerCase().includes('token'.toLowerCase())){
        window.close();
      }
     }, 1000);
  }

  getplaystore(event) {
    SharedService.enablebanner = false
  }


  closeTour(){
    if(!this.isSkip) {
      localStorage.setItem('closeTour', 'T');
    }
    localStorage.setItem('firstTimeTour', 'T');
  }

  continueTour() {
    this.isSkip = true;
    this.closetourmodal.nativeElement.click();
    const driver = window['driver'].js.driver;
    let stepList = [
      {
        element: ".tour_hamburger",
        popover: {
          title: 'Menu',
          description: 'Explore our menu for more options.',
          side: "bottom"
        }
      },
      {
        element: ".tour_notification",
        popover: {
          title: 'Notifications',
          description: 'Find all your notifications here.',
          side: "bottom"
        }
      },
      {
        element: ".tour_fbn",
        popover: {
          title: 'Feel better now',
          description: 'Find breathing exercises, meditations and videos to feel better now.',
          side: "bottom"
        }
      },
      {
        element: ".tour_dp",
        popover: {
          title: 'Daily practice',
          description: 'Short exercises for better everyday living. Come back for new exercises everyday.',
          side: "bottom"
        }
      },
      {
        element: ".tour_eatid",
        popover: {
          title: 'Change your topic of choice',
          description: 'Choose from 8 broad topics to explore in depth.',
          side: "bottom"
        }
      },


      /*{
        element: ".tour_find_inspiration",
        popover: {
          title: 'Find Inspiration',
          description: 'Explore our rich library of motivational content.',
          side: "right"
        }
      },*/
      {
        element: ".tour_exercises",
        popover: {
          title: 'Exercises',
          description: 'Tiny, guided exercises to improve your self-awareness',
          side: "right"
        }
      },
      {
        element: ".tour_explore",
        popover: {
          title: 'Explore',
          description: 'Explore more resources for personal growth and inspiration.',
          side: "top"
        }
      },
      {
        element: ".tour_journal",
        popover: {
          title: 'Journal',
          description: 'Your private journal with guided questions (visible only to you)',
          side: "top"
        }
      },
      {
        element: ".tour_forum",
        popover: {
          title: 'Forum',
          description: 'Join our community discussions. Ask a coach a question',
          side: "top"
        },
      },
      {
        element: ".tour_intro",
        popover: {
          title: 'Begin Here',
          description: 'Begin with this introduction. Explore the app for free. Start your free trial to unlock the full app. Cancel anytime.',
          side: "bottom"
        }
      }
    ];



    if(!this.isloggedIn) {
      this.tourTotalIndex = 8;
      stepList.splice(1, 1);
    }

    const driverObj = driver({
      onNextClick:() => {
        localStorage.setItem('firstTimeTour', 'T');
        this.tourIndex++;
        if(this.tourIndex > this.tourTotalIndex) {
          document.body.classList.remove('overflow_hidden');
          document.body.classList.add('overflow_auto');
          this.services.setEnableTour(false);
          this.tourIndex=1;
        }
        driverObj.moveNext();
      },
      onPrevClick:() => {
        this.tourIndex--;
        driverObj.movePrevious();
        document.body.classList.remove('overflow_auto');
        document.body.classList.add('overflow_hidden');
        this.services.setEnableTour(true);
      },
      onCloseClick:(event) => {
        console.log(event)
        localStorage.setItem('closeTour', 'T');
        localStorage.setItem('firstTimeTour', 'T');
        this.tourIndex = 1;
        document.body.classList.remove('overflow_hidden');
        document.body.classList.add('overflow_auto');
        this.services.setEnableTour(false);
        driverObj.destroy();
      },
      allowClose: false,
      showButtons: [
        'next',
        //'previous',
        'close',
      ],
      nextBtnText: 'Next',
      //prevBtnText: 'Prev',
      doneBtnText: 'Done',
      showProgress: true,
      steps: stepList
    });

    driverObj.drive();

    this.services.setEnableTour(true);

    document.body.classList.remove('overflow_auto');
    document.body.classList.add('overflow_hidden');

  }

  getUserPreference() {
    this.service.getUserpreference().subscribe((res) => {
      let perd = this.service.getperList();
      this.personalisedList = []
      if (res) {
        localStorage.setItem('userPreference', res);
        perd.forEach((r) => {
          if (res === r.id) {
            r['active'] = true;
            this.personalisedList.push(r);
          } else {
            r['active'] = false;
            this.personalisedList.push(r);
          }
        })
        this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
      }
    })
  }

  // toRead(obj) {
  //   localStorage.setItem("story", JSON.stringify(obj))
  //   let res = localStorage.getItem("isloggedin");
  //   this.sId = obj.ScenarioID
  //   if (res && res === 'T') {
  //     this.service.clickStory(obj.ScenarioID).subscribe(() => {

  //       this.router.navigate(['/wisdom-stories/view-stories'], { queryParams: { sId: `${this.sId}` } })
  //     })
  //   } else {
  //     this.router.navigate(['/wisdom-stories/view-stories'], { queryParams: { sId: `${this.sId}` } })
  //   }

  // }

  // getUsershorts() {
  //   this.shortsList = []
  //   this.service.getdashshorts().subscribe((res) => {
  //     if (res) {
  //       this.shortsList = res;
  //     }
  //   })
  // }

  // getUserstories() {
  //   this.lifestoriesList = []
  //   this.service.getdashstories().subscribe((res) => {
  //     if (res) {
  //       this.lifestoriesList = res
  //     }
  //   })
  // }

  wisdomshortsclick(url) {
    this.router.navigate([url])
  }

  // getsupport(url, id, ind = 0) {
  //   let index = ind + 1
  //   url = url === '/adults/get-support-now/s7100' ? '/adults/get-support-now/s7100' + index : url
  //   this.service.clickModule(id, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem('activemoduleid', id);
  //       localStorage.setItem('moduleId', id);
  //       this.router.navigate([url])
  //       localStorage.setItem("supportwisdomstories", JSON.stringify(res['scenarios']))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {

  //       })
  // }

  youtube(link) {
    this.router.navigate(['/adults/curated/youtubelink', link])
  }


  // solving global problems
  solving_global_problems(url, id) {
    this.service.clickModule(id, this.userId)
      .subscribe(res => {
        localStorage.setItem('activemoduleid', id);
        localStorage.setItem('moduleId', id);
        this.router.navigate([url])
        localStorage.setItem("supportwisdomstories", JSON.stringify(res['scenarios']))
      },
        error => {
          console.log(error)
        },
        () => {

        })
  }
  // /solving global problems

  carouselclick() {
    let videoPlayer: HTMLVideoElement = <HTMLVideoElement>document.getElementById('humanwisdomvideo')
    videoPlayer.pause()
  }

  acceptCookies() {
    localStorage.setItem('acceptcookie', 'T');
    this.closecookiemodal.nativeElement.click();
    setTimeout(() =>{
      this.enabletourmodal.nativeElement.click();
    }, 100);
    // this.enableDailypopup();
  }

  // freescreens() {
  //   this.service.freeScreens().subscribe(res => {
  //     this.x = []
  //     let result = res.map(a => a.FreeScrs);
  //     let arr;
  //     result = result.forEach(element => {
  //       if (element && element.length !== 0) {
  //         this.x.push(element.map(a => a.ScrNo))
  //         arr = Array.prototype.concat.apply([], this.x);
  //       }
  //     })
  //     localStorage.setItem("freeScreens", JSON.stringify(arr))
  //   }



  //   )
  // }


  subscribenow() {
    // if(localStorage.getItem("email") === 'guest@humanwisdom.me'){
    //   localStorage.setItem("subscribepage", 'T')
    //   this.router.navigate(['/adults/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
    // } else {
    //   this.router.navigate(['/onboarding/add-to-cart'])
    // }
  }

  get fname() {
    return this.registrationForm.get('fname')
  }
  get lname() {
    return this.registrationForm.get('lname')
  }
  get emailvalid() {
    return this.registrationForm.get('email')
  }
  get passwordvalid() {
    return this.registrationForm.get('password')
  }
  get confirmpasswordvalid() {
    return this.registrationForm.get('confirmPassword')
  }

  PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')
    if (password.pristine || confirmPassword.pristine)
      return null
    return password && confirmPassword && password.value != confirmPassword.value ?
      { 'misMatch': true } : null

  }

  // googleLogin(d = '') {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.idToken = user.idToken
  //     this.socialFirstName = user.firstName
  //     this.socialLastName = user.lastName
  //     this.socialEmail = user.email

  //     this.services.verifyGoogle({
  //       "TokenID": this.idToken,
  //       "FName": this.socialFirstName,
  //       "LName": this.socialLastName,
  //       "Email": this.socialEmail,
  //       "VCode": "",
  //       "Pwd": ""
  //     })
  //       .subscribe(res => {

  //         if (res) {

  //           this.firstpage = false
  //           this.fifthpage = false
  //           this.thirdpage = true
  //           this.loginResponse = res
  //           localStorage.setItem('guest', 'F');
  //           localStorage.setItem("remember", 'T')
  //           localStorage.setItem('socialLogin', 'T');
  //           localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
  //           localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
  //           localStorage.setItem("video", JSON.stringify(this.video))
  //           localStorage.setItem("audio", JSON.stringify(this.audio))
  //           localStorage.setItem('btnclick', 'F')
  //           localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //           sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //           localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //           localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
  //           localStorage.setItem("userId", JSON.stringify(this.userId))
  //           localStorage.setItem("email", this.socialEmail)
  //           localStorage.setItem("FnName", this.socialFirstName)
  //           localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
  //           localStorage.setItem("LName", this.socialLastName)
  //           localStorage.setItem("pswd", '')
  //           localStorage.setItem("name", this.loginResponse.Name)
  //           localStorage.setItem("first", 'T')
  //           let namedata = localStorage.getItem('name').split(' ')
  //           this.modaldata['email'] = localStorage.getItem('email');
  //           this.modaldata['firstname'] = namedata[0];
  //           this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
  //           if (parseInt(this.loginResponse.UserId) == 0) {
  //             // this.showAlert=true
  //             // window.alert('You have enetered wrong credentials. Please try again.')
  //             // this.email=""
  //             // this.password=""
  //           }
  //           else {
  //             // this.showAlert=false
  //             this.userId = this.loginResponse.UserId
  //             this.userName = this.loginResponse.Name
  //             localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             localStorage.setItem("userId", JSON.stringify(this.userId))
  //             localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //             if (this.saveUsername == true) {
  //               localStorage.setItem("userId", JSON.stringify(this.userId))
  //               localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //               localStorage.setItem("userName", JSON.stringify(this.userName))
  //             }
  //             else {
  //               sessionStorage.setItem("userId", JSON.stringify(this.userId))
  //               sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //               sessionStorage.setItem("userName", JSON.stringify(this.userName))
  //             }
  //             let acceptCookie = localStorage.getItem('activeCode');
  //             let subscribePage = localStorage.getItem('subscribepage');
  //             if (acceptCookie === 'T' || subscribePage === 'T') {
  //               localStorage.setItem("isloggedin", 'T')
  //               if (acceptCookie === 'T') {
  //                 localStorage.setItem("activeCode", 'F')
  //               }
  //               if (subscribePage === 'T') {
  //                 localStorage.setItem("subscribepage", 'F')
  //               }
  //               // this.router.navigate(['/onboarding/add-to-cart'])
  //             } else {
  //               localStorage.setItem("isloggedin", 'T')
  //               // this.router.navigate(['/adults/adult-dashboard'])
  //             }


  //             /* if(this.urlEmail)
  //               {
  //                 this.service.verifyUser(this.userId)
  //                 .subscribe(res=>{

  //                 })
  //               }*/

  //           }
  //           if (d === 'journal') {
  //             window.location.reload();
  //           }
  //         }

  //       })
  //   },
  //     error => console.log(error),
  //     () => {
  //       //this.router.navigate[('/onboarding/addcart')]
  //       // window.location.href="https://humanwisdom.me/hwp/webpages/index.php"
  //     });
  // }
  // getModuleList(isLoad?) {
  //   if (this.moduleList.length == 0) {
  //     this.service.getModuleList().subscribe(res => {
  //       this.moduleList = res;
  //       if (isLoad == true) {
  //         if (this.searchinp == '') {
  //           this.searchResult = this.moduleList;
  //         } else {
  //           this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
  //         }
  //       }
  //     });
  //   }
  // }

  fbLogin(d=''){

  }

  googleLogin(d=''){

  }
  // fbLogin(d = '') {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     // this.user = user;
  //     this.user = user;
  //     this.idToken = user.authToken
  //     this.socialFirstName = user.firstName
  //     this.socialLastName = user.lastName
  //     this.socialEmail = user.email
  //     if (user.email !== undefined) {
  //       this.services.verifyFb({
  //         "TokenID": this.idToken,
  //         "FName": this.socialFirstName,
  //         "LName": this.socialLastName,
  //         "Email": this.socialEmail,
  //         "VCode": "",
  //         "Pwd": ""
  //       })
  //         .subscribe(res => {

  //           if (res) {
  //             this.firstpage = false
  //             this.fifthpage = false
  //             this.thirdpage = true
  //             this.loginResponse = res
  //             localStorage.setItem('socialLogin', 'T');
  //             localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
  //             localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
  //             localStorage.setItem("video", JSON.stringify(this.video))
  //             localStorage.setItem("audio", JSON.stringify(this.audio))
  //             localStorage.setItem("remember", 'T')
  //             localStorage.setItem('guest', 'F');
  //             localStorage.setItem('btnclick', 'F')
  //             localStorage.setItem("FnName", this.socialFirstName)
  //             localStorage.setItem("LName", this.socialLastName)
  //             localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //             localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
  //             localStorage.setItem("userId", JSON.stringify(this.userId))
  //             localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
  //             localStorage.setItem("email", this.socialEmail)
  //             localStorage.setItem("pswd", '')
  //             localStorage.setItem("name", this.loginResponse.Name)
  //             localStorage.setItem("first", 'T')
  //             let namedata = localStorage.getItem('name').split(' ')
  //             this.modaldata['email'] = localStorage.getItem('email');
  //             this.modaldata['firstname'] = namedata[0];
  //             this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
  //             if (parseInt(this.loginResponse.UserId) == 0) {
  //               // this.showAlert=true
  //               // window.alert('You have enetered wrong credentials. Please try again.')
  //               // this.email=""
  //               // this.password=""

  //             }
  //             else {
  //               // this.showAlert=false
  //               this.userId = this.loginResponse.UserId
  //               this.userName = this.loginResponse.Name
  //               localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //               sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //               localStorage.setItem("userId", JSON.stringify(this.userId))
  //               localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //               if (this.saveUsername == true) {
  //                 localStorage.setItem("userId", JSON.stringify(this.userId))
  //                 localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //                 localStorage.setItem("userName", JSON.stringify(this.userName))
  //               }
  //               else {
  //                 sessionStorage.setItem("userId", JSON.stringify(this.userId))
  //                 sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //                 sessionStorage.setItem("userName", JSON.stringify(this.userName))
  //               }
  //               let acceptCookie = localStorage.getItem('activeCode');
  //               let subscribePage = localStorage.getItem('subscribepage');
  //               if (acceptCookie === 'T' || subscribePage === 'T') {
  //                 localStorage.setItem("isloggedin", 'T')
  //                 if (acceptCookie === 'T') {
  //                   localStorage.setItem("activeCode", 'F')
  //                 }
  //                 if (subscribePage === 'T') {
  //                   localStorage.setItem("subscribepage", 'F')
  //                 }
  //                 if (d === 'journal') {
  //                   window.location.reload();
  //                 } else {
  //                   this.router.navigate(['/onboarding/add-to-cart'])
  //                 }
  //               } else {
  //                 localStorage.setItem("isloggedin", 'T')
  //                 if (d === 'journal') {
  //                   window.location.reload();
  //                 } else {
  //                   this.router.navigate(['/adults/adult-dashboard'])
  //                 }
  //               }
  //               /* if(this.urlEmail)
  //                 {
  //                   this.service.verifyUser(this.userId)
  //                   .subscribe(res=>{

  //                   })
  //                 }*/

  //             }
  //             if (d === 'journal') {
  //               window.location.reload();
  //             }
  //           }

  //         })
  //     } else {
  //       window.alert('Please ensure that you use an email based authentication with your Auth provider or try another method')
  //     }
  //   });

  // }

  signup() {
    this.services.addUser({
      "FName": this.registrationForm.get('fname').value,
      "Lname": this.registrationForm.get('lname').value,
      "Email": this.registrationForm.get('email').value,
      "Pwd": this.registrationForm.get('password').value,
    })
      .subscribe(res => {
        if (res > 0) {
          this.userId = res
          this.email = this.registrationForm.get('email').value
          this.firstpage = false;
          this.secondpage = true;
        }
      },
        error => {
       //   window.alert(error.error.Message)
        },
        () => {
        }
      )
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  getcode(value) {
    this.activationCode = value;
  }

  verifyactkey() {
    this.service.verifyactkey(this.activationCode)
      .subscribe(
        res => {
          if (res) {
            this.yearormonth = res
            this.subthirdpage = false
            this.subfirstpage = false
            this.subsecondpage = true;
          } else {
            this.subsecondpage = false;
            this.subthirdpage = true
          }
        },
        error => {
          console.log(error);
          this.subsecondpage = false;
          this.subthirdpage = true
        },
        () => {
        }
      )
  }

  submitcode() {
    this.services.verifyActivationKey(this.activationCode, this.userId, this.countryCode)
      .subscribe(
        res => {
          if (res) {
            let code: any = 1
            localStorage.setItem('Subscriber', code)
            this.subthirdpage = false;
            this.subsecondpage = false;
            this.thirdpage = false;
            this.subfirstpage = true;
            this.sixthpage = true;
          } else {
          }
        },
        error => {
          console.log(error);
        },
        () => {
        }
      )
  }


  already(value) {
    if (value === 'home') {
      this.actclosemodal.nativeElement.click()
      let userid = localStorage.getItem('isloggedin');
      if (userid === 'T') {
        window.location.reload();
      }
    } else if (value === 'login') {
      this.firstpage = false;
      this.fourthpage = false;
      this.thirdpage = false;
      this.fifthpage = true;
    } else if (value === 'register') {
      this.firstpage = true;
      this.secondpage = false;
      this.fifthpage = false
    }
  }

  verifyCode() {
    this.services.verifyCode({
      "Email": this.registrationForm.get('email').value,
      "VCode": this.verificationCode
    })
      .subscribe(res => {

        if (res > 0) {
          localStorage.setItem("email", this.registrationForm.get('email').value)
          localStorage.setItem("pswd", this.registrationForm.get('password').value)
          this.emaillogin('second')
        }
      }, (err) => {
        window.alert(err.error['Message'])
      })
  }

  resendotp() {
    this.service.resendotp(this.userId)
      .subscribe(() => {
      }, (err) => {
        console.log(err);
      })

  }


  opennewTab() {
    // this.router.navigate([]).then(() => { window.open('https://humanwisdom.me/course/adults/cookie-policy', '_blank'); });
    window.open('/cookies-policy', '_blank');
  }

  socialLogin() {
    let socialFirstName = localStorage.getItem("FnName");
    let socialLastName = localStorage.getItem("LName");
    let socialEmail = localStorage.getItem("email");
    this.services.socialLearner({
      "FnName": socialFirstName,
      "LName": socialLastName,
      "Email": socialEmail
    })
      .subscribe(
        res => {
          this.loginResponse = res
          this.userId = res.UserId
          localStorage.setItem('guest', 'F');
          localStorage.setItem("remember", 'T')
          localStorage.setItem('socialLogin', 'T');
          localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
          localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
          localStorage.setItem("video", JSON.stringify(this.video))
          localStorage.setItem("audio", JSON.stringify(this.audio))
          localStorage.setItem('btnclick', 'F')
          localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
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
          if (res.Subscriber === 0) {
            this.isSubscribe = true;
          }

          localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
          localStorage.setItem("email", socialEmail)
          localStorage.setItem("pswd", '')
          let nameupdate = localStorage.getItem(
            "nameupdate"
          );
          if (nameupdate) {
            this.name = nameupdate
          } else {
            this.name = res.Name
          }
          this.streak = res.Streak

          // this.getProgress()
          // this.freescreens();
          localStorage.setItem("text", JSON.stringify(this.text))
          localStorage.setItem("video", JSON.stringify(this.video))
          localStorage.setItem("audio", JSON.stringify(this.audio))
          localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
          localStorage.setItem("question", JSON.stringify(this.question))
          localStorage.setItem("reflection", JSON.stringify(this.reflection))
          localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
          this.userId = JSON.parse(localStorage.getItem("userId"))
          this.Subscriber = localStorage.getItem('Subscriber')
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
          // this.getBookmarks()
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
              localStorage.setItem("userEmail", JSON.stringify(socialEmail))
              localStorage.setItem("userName", JSON.stringify(this.userName))

            }
            else {
              sessionStorage.setItem("userId", JSON.stringify(this.userId))
              sessionStorage.setItem("userEmail", JSON.stringify(socialEmail))
              sessionStorage.setItem("userName", JSON.stringify(this.userName))
            }
          }
        },
        error => { console.log(error) },
        () => {
        }
      )
  }

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
    if (nameupdate) {
      this.name = nameupdate
    } else {
      this.name = res.Name
    }
    this.streak = res.Streak

    let namedata = localStorage.getItem('name').split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    this.modaldata['firstname'] = namedata[0];
    this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    // this.getProgress()
    // this.freescreens();
    localStorage.setItem("text", JSON.stringify(this.text))
    localStorage.setItem("video", JSON.stringify(this.video))
    localStorage.setItem("audio", JSON.stringify(this.audio))
    localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
    localStorage.setItem("question", JSON.stringify(this.question))
    localStorage.setItem("reflection", JSON.stringify(this.reflection))
    localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
    this.userId = JSON.parse(localStorage.getItem("userId"))
    this.Subscriber = localStorage.getItem('Subscriber')
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
    // this.getBookmarks()
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


  emaillogin(val = '') {
    let email = val === '' || val === 'second' ? localStorage.getItem("email") : this.loginemail;
    let password = val === '' || val === 'second' ? localStorage.getItem("pswd") : this.loginpassword;
    this.services.emailLogin(email, password)
      .subscribe(
        res => {//
          if (val === 'act') {
            localStorage.setItem("isloggedin", 'T')
            localStorage.setItem("remember", 'T')
            this.fifthpage = false;
            this.thirdpage = true;
          } else if (val === 'second') {
            localStorage.setItem("isloggedin", 'T')
            localStorage.setItem("remember", 'T')
            this.secondpage = false;
            this.thirdpage = true;
          }
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
          localStorage.setItem("email", email)
          localStorage.setItem("pswd", password)
          localStorage.setItem("name", res.Name)
          let nameupdate = localStorage.getItem(
            "nameupdate"
          );
          if (nameupdate) {
            this.name = nameupdate
          } else {
            this.name = res.Name
          }
          this.streak = res.Streak

          let namedata = localStorage.getItem('name').split(' ')
          this.modaldata['email'] = localStorage.getItem('email');
          this.modaldata['firstname'] = namedata[0];
          this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
          // this.getProgress()
          // this.freescreens();
          localStorage.setItem("text", JSON.stringify(this.text))
          localStorage.setItem("video", JSON.stringify(this.video))
          localStorage.setItem("audio", JSON.stringify(this.audio))
          localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
          localStorage.setItem("question", JSON.stringify(this.question))
          localStorage.setItem("reflection", JSON.stringify(this.reflection))
          localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
          this.userId = JSON.parse(localStorage.getItem("userId"))
          this.Subscriber = localStorage.getItem('Subscriber')
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
              localStorage.setItem("userEmail", JSON.stringify(email))
              localStorage.setItem("userName", JSON.stringify(this.userName))
            }
            else {
              sessionStorage.setItem("userId", JSON.stringify(this.userId))
              sessionStorage.setItem("userEmail", JSON.stringify(email))
              sessionStorage.setItem("userName", JSON.stringify(this.userName))
            }
          }
        },
        error => { console.log(error) },
        () => {
        }
      )
  }


  fromapplogin(token) {
    this.services.setDataRecievedState(false);
    this.service.verifytoken(token)
      .subscribe(
        res => {//
          this.loginResponse = res
          this.userId = this.loginResponse.UserId
          if (this.loginResponse.Subscriber === 0) {
            this.isSubscribe = true;
          }
          let guest = localStorage.getItem('guest');
          if (guest === 'T') localStorage.setItem('guest', 'F')
          sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
          localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
          localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
          localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
          localStorage.setItem("userId", JSON.stringify(this.userId))
          localStorage.setItem("name", this.loginResponse.Name)
          let nameupdate = localStorage.getItem(
            "nameupdate"
          );
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          let namedata = localStorage.getItem('name').split(' ')
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')
          localStorage.setItem("Subscriber", res['Subscriber']);
          this.isSubscriber = SharedService.isSubscriber();
          this.services.setDataRecievedState(true);
          if (nameupdate) {
            this.name = nameupdate
          } else {
            this.name = this.loginResponse.Name
          }
          this.streak = this.loginResponse.Streak

          // this.getProgress()
          // this.freescreens();
          localStorage.setItem("text", JSON.stringify(this.text))
          localStorage.setItem("video", JSON.stringify(this.video))
          localStorage.setItem("audio", JSON.stringify(this.audio))
          localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
          localStorage.setItem("question", JSON.stringify(this.question))
          localStorage.setItem("reflection", JSON.stringify(this.reflection))
          localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
          this.userId = JSON.parse(localStorage.getItem("userId"))
          this.Subscriber = localStorage.getItem('Subscriber')
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
          // this.getBookmarks()
          if (this.loginResponse.UserId == 0) {
          }
          else {
            this.userId = this.loginResponse.UserId
            this.userName = this.loginResponse.Name
            sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
            localStorage.setItem("userId", JSON.stringify(this.userId))
            localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
            if (this.saveUsername == true) {
              localStorage.setItem("userId", JSON.stringify(this.userId))
              localStorage.setItem("userName", JSON.stringify(this.userName))
            }
            else {
              sessionStorage.setItem("userId", JSON.stringify(this.userId))
              sessionStorage.setItem("userName", JSON.stringify(this.userName))
            }
          }
        },
        error => { console.log(error) },
        () => {
        }
      )
  }

  enableDailypopup() {

    this.service.adminPopup().subscribe((res) => {
      this.alertMsg = res;
      let olddate = localStorage.getItem("getalertdate")
      if (olddate !== null) {
        let date1: any = new Date(olddate);
        let date2: any = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays: any = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (parseInt(diffDays) >= 7) {
          localStorage.setItem("getalertdate", new Date().toDateString())
          this.enablemodal.nativeElement.click();
        }
      } else {
        localStorage.setItem("getalertdate", new Date().toDateString())
        this.enablemodal.nativeElement.click();
      }
    }, error => {
      if (error.error['Message'] === 'Not generated') {
        this.alertMsg = '';
      }
      console.log(error)
    })
  }

  getrenew() {
    this.closemodal.nativeElement.click()
  }

  closeplaystore() {
    SharedService.enablebanner = false;
  }

  submitrefer() {
    let data = {
      "UserId": this.userId,
      "FriendName": this.friendname,
      "FriendEmail": this.friendemail,
      "ConvertedDate": '',
    }
    this.service.referfrd(data).subscribe(() => {

      this.closerefermodal.nativeElement.click()
    })
  }

  logout() {
    // localStorage.clear();
    localStorage.setItem('isloggedin', 'F')
    localStorage.setItem('guest', 'T')
    this.router.navigate(['/adults/onboarding/login'])
  }

  friendName(value) {
    this.friendname = value;
  }

  closerefer() {
    this.closerefermodal.nativeElement.click()
  }

  getLogin() {
    localStorage.setItem('btnclick', 'T')
    this.router.navigate(['/adults/onboarding/login', { queryParams: { email: '' } }])
  }

  friendEmail(value) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(regexEmail)) {
      this.friendemail = value;
    } else {
      this.friendemail = '';
    }
  }

  // getProgress() {
  //   this.service.getPoints(this.userId)
  //     .subscribe(res => {

  // this.points = parseInt(res.PointsScored)
  // this.goToPage = res.LastScrNo
  // this.daysVisited = res.noOfDaysVisited
  // this.timeSpent = res.noOfDaysVisited
  // this.percentage = parseInt(res.overallPercentage)
  // this.guideP = this.percentage;
  // this.resume = []
  // localStorage.setItem("overallPercentage", this.percentage)
  //resume section
  // res.ModUserScrPc.filter(x => {
  //   if (parseFloat(x.Percentage) < 100) {
  //     if (x.ModuleId != 71 && x.ModuleId != 72 && x.ModuleId != 75) {
  //       if (x.ModuleId < 10) {
  //         x.ModuleId = "0" + x.ModuleId
  //       }
  //       x.imgPath = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/${x.ModuleId}.png`
  //       this.resume.push(x)
  //       this.resume.sort((val1, val2) => { return <any>new Date(val2.LastUpdatedOn) - <any>new Date(val1.LastUpdatedOn) })
  //     }
  //   }
  // })

  //static progress
  // this.angerP = res.ModUserScrPc.find(e => e.Module == "Anger")?.Percentage
  // this.comparisonP = res.ModUserScrPc.find(e => e.Module == "Comparison & Envy")?.Percentage
  // this.awarenessP = res.ModUserScrPc.find(e => e.Module == "Awareness")?.Percentage
  // this.obstaclesP = res.ModUserScrPc.find(e => e.Module == "Obstacles to Enquiry")?.Percentage
  // this.meditationP = res.ModUserScrPc.find(e => e.Module == "Meditation")?.Percentage
  // this.benefitsWisdomP = res.ModUserScrPc.find(e => e.Module == "Benefits of Wisdom")?.Percentage
  // this.guideP = res.ModUserScrPc.find(e => e.Module == "Start Here")?.Percentage
  // this.fearP = res.ModUserScrPc.find(e => e.Module == "Fear & Anxiety")?.Percentage
  // this.benefitsEnquiryP = res.ModUserScrPc.find(e => e.Module == "Benefits of self-awareness")?.Percentage
  // this.questionsP = res.ModUserScrPc.find(e => e.Module == "Questions are Key")?.Percentage
  // this.identityP = res.ModUserScrPc.find(e => e.Module == "Identity")?.Percentage
  // this.keyP = res.ModUserScrPc.find(e => e.Module == "Key Ideas")?.Percentage
  // this.selfEsteemP = res.ModUserScrPc.find(e => e.Module == "Self Esteem")?.Percentage
  // this.conditioningP = res.ModUserScrPc.find(e => e.Module == "Conditioning")?.Percentage
  // this.fiveCirclesP = res.ModUserScrPc.find(e => e.Module == "5 Circles of Wisdom")?.Percentage
  // this.happinessP = res.ModUserScrPc.find(e => e.Module == "Happiness")?.Percentage
  // this.threeStepsP = res.ModUserScrPc.find(e => e.Module == "Three Steps to Enquiry")?.Percentage
  // this.noJudgementP = res.ModUserScrPc.find(e => e.Module == "No Judgement")?.Percentage
  // this.discoveringP = res.ModUserScrPc.find(e => e.Module == "Discovering Wisdom")?.Percentage
  // this.beginP = res.ModUserScrPc.find(e => e.Module == "How to Begin?")?.Percentage
  // this.insightP = res.ModUserScrPc.find(e => e.Module == "Insight")?.Percentage
  // this.pleasureP = res.ModUserScrPc.find(e => e.Module == "Pleasure")?.Percentage
  // this.withoutLanguageP = res.ModUserScrPc.find(e => e.Module == "Look without Language")?.Percentage
  // this.criticismP = res.ModUserScrPc.find(e => e.Module == "Criticism")?.Percentage
  // this.stressP = res.ModUserScrPc.find(e => e.Module == "Stress")?.Percentage
  // this.relationshipsP = res.ModUserScrPc.find(e => e.Module == "Relationships")?.Percentage
  // this.natureP = res.ModUserScrPc.find(e => e.Module == "Nature")?.Percentage
  // this.breathingP = res.ModUserScrPc.find(e => e.Module == "Breathing")?.Percentage
  // this.ntP = res.ModUserScrPc.find(e => e.Module == "Noticing Thoughts")?.Percentage
  // this.gamP = res.ModUserScrPc.find(e => e.Module == "Guided Audio Meditation")?.Percentage
  // this.communicationP = res.ModUserScrPc.find(e => e.Module == "Communication")?.Percentage
  // this.siP = res.ModUserScrPc.find(e => e.Module == "Self Image")?.Percentage
  // this.rmP = res.ModUserScrPc.find(e => e.Module == "Reactive Mind")?.Percentage
  // this.sinP = res.ModUserScrPc.find(e => e.Module == "Self Interest")?.Percentage
  // this.enP = res.ModUserScrPc.find(e => e.Module == "Emotional Needs")?.Percentage
  // this.ibP = res.ModUserScrPc.find(e => e.Module == "Inner Boredom")?.Percentage
  // this.wP = res.ModUserScrPc.find(e => e.Module == "Work")?.Percentage
  // this.lP = res.ModUserScrPc.find(e => e.Module == "Leadership")?.Percentage
  // this.niP = res.ModUserScrPc.find(e => e.Module == "The Nature of the I")?.Percentage
  // this.seP = res.ModUserScrPc.find(e => e.Module == "Self Esteem")?.Percentage
  // this.lonelinessP = res.ModUserScrPc.find(e => e.Module == "Loneliness")?.Percentage
  // this.livingwithpeaceP = res.ModUserScrPc.find(e => e.Module == "Living With Peace")?.Percentage
  // this.loveP = res.ModUserScrPc.find(e => e.Module == "Love")?.Percentage
  // this.dealingwithdeathP = res.ModUserScrPc.find(e => e.Module == "Dealing with Death")?.Percentage
  // this.opinionsandbeliefsP = res.ModUserScrPc.find(e => e.Module == "Opinions and Beliefs")?.Percentage
  // this.successandfailureP = res.ModUserScrPc.find(e => e.Module == "Success and Failure")?.Percentage
  // this.addictionP = res.ModUserScrPc.find(e => e.Module == "Addiction")?.Percentage
  // this.foodP = res.ModUserScrPc.find(e => e.Module == "Food and Health")?.Percentage
  // this.moneyP = res.ModUserScrPc.find(e => e.Module == "Money")?.Percentage
  // this.sorrowandlossP = res.ModUserScrPc.find(e => e.Module == "Sorrow and Loss")?.Percentage
  // this.hcwhP = res.ModUserScrPc.find(e => e.Module == "How can wisdom help?")?.Percentage
  // this.bullyingP = res.ModUserScrPc.find(e => e.Module == "Bullying")?.Percentage
  // this.making_better_decisionsP = res.ModUserScrPc.find(e => e.Module == "Making better decisions")?.Percentage
  // this.diversity_and_inclusionP = res.ModUserScrPc.find(e => e.Module == "Diversity and Inclusion")?.Percentage
  // this.dealingwithdepressionP = res.ModUserScrPc.find(e => e.Module == "Dealing with Depression")?.Percentage
  // this.externalapprovalP = res.ModUserScrPc.find(e => e.Module == "External Approval")?.Percentage

  //     })

  // }

  // getBookmarks() {
  //   this.service.getBookmarks(this.userId)
  //     .subscribe(res => {
  //       this.bookmarks = res
  //       this.bookmarks = this.bookmarks.map(a => parseInt(a.ScrNo));
  //       localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarks))
  //       this.bookmarkLength = this.bookmarks.length

  //     })

  // }
  routeResume(r, enableLastVisited = false) {
    console.log(r);
    let id = '', url='', screenNo='';
    if (enableLastVisited) {
      id = this.resumeLastvisited.length !== 0 ? this.resumeLastvisited[0]['ModuleId'].toString() : '23';
      url = this.resumeLastvisited.length !== 0 ? this.resumeLastvisited[0]['ModuleUrl'].toString() : '/adults/happiness/';
      this.service.setmoduleID(id,url, url );

    }
    // else {
    //   id = r.ModuleId.toString();
    // }
    localStorage.setItem("pageaction", 'next');
   /*  switch (id) {
      case "07": {
        this.service.setmoduleID(id, '/adults/comparison', '/adults/comparison/s0');
        // this.routeComparison(1)
        break
      }
      case "14": {
        this.service.setmoduleID(id, '/adults/anger', '/adults/anger/s162p0');
        // this.routeAnger(1)
        break
      }
      case "15": {
        this.service.setmoduleID(id, '/adults/conditioning', '/adults/conditioning/s232');
        // this.routeConditioning(1)
        break
      }
      case "16": {
        this.service.setmoduleID(id, '/adults/criticism', '/adults/criticism/s324');
        // this.routeCriticism(1)
        break
      }
      case "17": {
        this.service.setmoduleID(id, '/adults/self-esteem', '/adults/self-esteem/s433');
        // this.routeSelfEsteem(1)
        break
      }
      case "18": {
        this.service.setmoduleID(id, '/adults/emotional-needs', '/adults/emotional-needs/s18001');
        // this.routeEmotionalNeeds(1)
        break
      }
      case "19": {
        this.service.setmoduleID(id, '/adults/fear-anxiety', '/adults/fear-anxiety/s486');
        // this.routeFearAnxiety(1)
        break
      }
      case "20": {
        this.service.setmoduleID(id, '/adults/pleasure', '/adults/pleasure/s20001');
        // this.routePleasure(1)
        break
      }
      case "21": {
        this.service.setmoduleID(id, '/adults/identity', '/adults/identity/s21001');
        // this.routeIdentity(1)
        break
      }
      case "22": {
        this.service.setmoduleID(id, '/adults/meditation', '/adults/meditation/s22001');
        // this.routeMeditation(1)
        break
      }
      case "23": {
        this.service.setmoduleID(id, '/adults/happiness', '/adults/happiness/s23001');
        // this.routeHappiness(1)
        break
      }
      case "25": {
        this.service.setmoduleID(id, '/adults/self-image', '/adults/self-image/s25001');
        // this.routeSelfImage(1)
        break
      }
      case "26": {
        this.service.setmoduleID(id, '/adults/benefits-of-enquiry', '/adults/benefits-of-enquiry/s26001');
        // this.routeBenefitsEnquiry(1)
        break
      }
      case "27": {
        this.service.setmoduleID(id, '/adults/discovering-wisdom', '/adults/discovering-wisdom/s27001');
        // this.routeDiscoveringWisdom(1)
        break
      }
      case "28": {
        this.service.setmoduleID(id, '/adults/nature', '/adults/nature/s28001');
        // this.routeNature(1)
        break
      }
      case "29": {
        this.service.setmoduleID(id, '/adults/breathing', '/adults/breathing/s29000');
        // this.routeBreathing(1)
        break
      }
      case "30": {
        this.service.setmoduleID(id, '/adults/noticing-thoughts', '/adults/noticing-thoughts/s30001');
        // this.routeNoticingThoughts(1)
        break
      }
      case "32": {
        this.service.setmoduleID(id, '/adults/benefits-of-wisdom', '/adults/benefits-of-wisdom/s32001');
        // this.routeBenefits(1)
        break
      }
      case "33": {
        this.service.setmoduleID(id, '/adults/five-circles', '/adults/five-circles/s33001');
        // this.routeCircles(1)
        break
      }
      case "34": {
        this.service.setmoduleID(id, '/adults/key-ideas', '/adults/key-ideas/s34001');
        // this.routeIdeas(1)
        break
      }
      case "35": {
        this.service.setmoduleID(id, '/adults/program-guide', '/adults/program-guide/s35001');
        // this.routeGuide(1)
        break
      }
      case "36": {
        this.service.setmoduleID(id, '/adults/how-to-begin', '/adults/how-to-begin/s36000');
        // this.routeHowToBegin(1)
        break
      }
      case "37": {
        this.service.setmoduleID(id, '/adults/three-steps-enquiry', '/adults/three-steps-enquiry/s37000');
        // this.routeThreeSteps(1)
        break
      }
      case "38": {
        this.service.setmoduleID(id, '/adults/insight', '/adults/insight/s38000');
        // this.routeInsights(1)
        break
      }
      case "39": {
        this.service.setmoduleID(id, '/adults/awareness', '/adults/awareness/s39000');
        // this.routeAwareness(1)
        break
      }
      case "40": {
        this.service.setmoduleID(id, '/adults/no-judgement', '/adults/no-judgement/s40000');
        // this.routeNoJudgement(1)
        break
      }
      case "41": {
        this.service.setmoduleID(id, '/adults/questions-are-key', '/adults/questions-are-key/s41000');
        // this.routeQuestionsAreKey(1)
        break
      }
      case "42": {
        this.service.setmoduleID(id, '/adults/without-language', '/adults/without-language/s42000');
        // this.routeLookWithoutLanguage(1)
        break
      }
      case "43": {
        this.service.setmoduleID(id, '/adults/obstacles-enquiry', '/adults/obstacles-enquiry/s43000');
        // this.routeObstacles(1)
        break
      }
      case "44": {
        this.service.setmoduleID(id, '/adults/stress', '/adults/stress/s44001');
        // this.routeStress(1)
        break
      }
      case "45": {
        this.service.setmoduleID(id, '/adults/habit-addiction', '/adults/habit-addiction/s45001');
        // this.routeAddiction(1)
        break
      }
      case "46": {
        this.service.setmoduleID(id, '/adults/food-health', '/adults/food-health/s46001');
        // this.routeFood(1)
        break
      }
      case "47": {
        this.service.setmoduleID(id, '/adults/relationships', '/adults/relationships/s47000');
        // this.routeRelationships(1)
        break
      }
      case "48": {
        this.service.setmoduleID(id, '/adults/success-failure', '/adults/success-failure/s48001');
        // this.routeSuccessAndFailure(1)
        break
      }
      case "49": {
        this.service.setmoduleID(id, '/adults/opinions-beliefs', '/adults/opinions-beliefs/s49001');
        // this.routeOpinionsAndBeliefs(1)
        break
      }
      case "50": {
        this.goToYourWisdomScoreComponent();

        // this.service.setmoduleID(id, '/adults/wisdom-survey', '/adults/wisdom-survey/');
        // this.routeOpinionsAndBeliefs(1)
        break
      }
      case "51": {
        this.service.setmoduleID(id, '/adults/guided-meditation', '/adults/guided-meditation/s51000');
        // this.routeGuidedMeditation(1)
        break
      }
      case "53": {
        this.service.setmoduleID(id, '/adults/communication', '/adults/communication/s53001');
        // this.routeCommunication(1)
        break
      }
      case "54": {
        this.service.setmoduleID(id, '/adults/reactive-mind', '/adults/reactive-mind/s54001');
        // this.routeReactiveMind(1)
        break
      }
      case "55": {
        this.service.setmoduleID(id, '/adults/self-interest', '/adults/self-interest/s55001');
        // this.routeSelfInterest(1)
        break
      }
      case "56": {
        this.service.setmoduleID(id, '/adults/inner-boredom', '/adults/inner-boredom/s56001');
        // this.routeInnerBoredom(1)
        break
      }
      case "57": {
        this.service.setmoduleID(id, '/adults/nature-of-i', '/adults/nature-of-i/s57001');
        // this.routeNatureOfI(1)
        break
      }
      case "58": {
        this.service.setmoduleID(id, '/adults/work', '/adults/work/s58001');
        // this.routeWork(1)
        break
      }
      case "59": {
        this.service.setmoduleID(id, '/adults/leadership', '/adults/leadership/s59001');
        // this.routeLeadership(1)
        break
      }
      case "60": {
        this.service.setmoduleID(id, '/adults/sorrow', '/adults/sorrow/s60001');
        // this.routeSorrowandLoss(1)
        break
      }
      case "61": {
        this.service.setmoduleID(id, '/adults/loneliness', '/adults/loneliness/s61001');
        // this.routeLoneliness(1)
        break
      }
      case "62": {
        this.service.setmoduleID(id, '/adults/love', '/adults/love/s62001');
        // this.routeLove(1)
        break
      }
      case "63": {
        this.service.setmoduleID(id, '/adults/living-with-peace', '/adults/living-with-peace/s63001');
        // this.routeLivingWithPeace(1)
        break
      }
      case "64": {
        this.service.setmoduleID(id, '/adults/dealing-with-death', '/adults/dealing-with-death/s64001');
        // this.routeDealingWithDeath(1)
        break
      }
      case "73": {
        this.service.setmoduleID(id, '/adults/money', '/adults/money/s73001');
        // this.routeMoney(1)
        break
      }
      case "74": {
        this.service.setmoduleID(id, '/adults/how-can-wisdom-help', '/adults/how-can-wisdom-help/s74001');
        // this.routehowcanwisdomhelp(1)
        break
      }
      case "75": {
        this.wisdomexercise();
        break
      }

      case "76": {
        this.service.setmoduleID(id, '/adults/bullying', '/adults/bullying/s76001');
        // this.routeBullying(1)
        break
      }
      case "77": {
        this.service.setmoduleID(id, '/adults/making-better-decisions', '/adults/making-better-decisions/s77001');
        // this.routeMakingBetterDecisions(1)
        break
      }
      case "92": {
        this.service.setmoduleID(id, '/adults/dealing-with-depression', '/adults/dealing-with-depression/s92001');
        // this.routeDealingWithDepression(1)
        break
      }
      case "91": {
        this.service.setmoduleID(id, '/adults/external-approval', '/adults/external-approval/s91001');
        // this.routeExternalApproval(1)
        break
      }
      case "143": {
        this.service.setmoduleID(id, '/adults/diversity-and-inclusion', '/adults/diversity-and-inclusion/s143001');
        // this.routeDiversityandInclusion(1)
        break
      }
      }
    */

  }

  // introduction
  // routeDiscoveringWisdom(cont: any = 1) {
  // var discoveringWisdomResume
  // localStorage.setItem("moduleId", JSON.stringify(27))
  // this.service.clickModule(27, this.userId)
  //   .subscribe(res => {
  //     localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //     this.qrList = res
  //     discoveringWisdomResume = "s" + res.lastVisitedScreen
  //     this.goToPage = res.lastVisitedScreen
  // continue where you left
  //   if (res.lastVisitedScreen === '') {
  //     localStorage.setItem("lastvisited", 'F')
  //   }
  //   else {
  //     localStorage.setItem("lastvisited", 'T')
  //   }
  //   sessionStorage.setItem("discoveringWisdomResume", discoveringWisdomResume)
  //   this.mediaPercent = parseInt(res.MediaPercent)
  //   localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
  //   localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
  //   localStorage.setItem("qrList", JSON.stringify(this.qrList))
  // },
  //   error => {
  //     console.log(error)
  //   },
  //   () => {
  //     if (cont == "1") {
  //       this.router.navigate([`/adults/discovering-wisdom/${discoveringWisdomResume}`])
  //     }
  //     else
  //       this.router.navigate([`/adults/discovering-wisdom/s27001`])
  //   })
  // }

  // routeBenefits(cont: any = 1) {
  //   var benefitsWisdomResume
  //   localStorage.setItem("moduleId", JSON.stringify(32))
  //   this.service.clickModule(32, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       benefitsWisdomResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("benefitsWisdomResume", benefitsWisdomResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/benefits-of-wisdom/${benefitsWisdomResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/benefits-of-wisdom/s32001`])
  //       })
  // }

  // routeCircles(cont: any = 1) {
  //   var fiveCirclesResume
  //   localStorage.setItem("moduleId", JSON.stringify(33))
  //   this.service.clickModule(33, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       fiveCirclesResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("fiveCirclesResume", fiveCirclesResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/five-circles/${fiveCirclesResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/five-circles/s33001`])
  //       })


  // }

  // routeIdeas(cont: any = 1) {
  //   var keyIdeasResume
  //   localStorage.setItem("moduleId", JSON.stringify(34))
  //   this.service.clickModule(34, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       keyIdeasResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //   sessionStorage.setItem("keyIdeasResume", keyIdeasResume)
  //   localStorage.setItem("qrList", JSON.stringify(this.qrList))
  // },
  //   error => {
  //     console.log(error)
  //   },
  //   () => {
  //     if (cont == "1") {
  //       this.router.navigate([`/adults/key-ideas/${keyIdeasResume}`])
  //     }
  //     else
  //       this.router.navigate([`/adults/key-ideas/s34001`])
  /*if(!this.goToPage)
  {

    this.router.navigate([`/adults/key-ideas`])
  }
  else
    this.router.navigate([`/adults/key-ideas/s${keyIdeasResume}`])*/

  //       })

  // }

  // routeGuide(cont: any = 1) {
  //   var pgResume
  //   localStorage.setItem("moduleId", JSON.stringify(35))
  //   this.service.clickModule(35, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       pgResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //   sessionStorage.setItem("pgResume", pgResume)
  //   pgResume = "s" + res.lastVisitedScreen
  //   localStorage.setItem("qrList", JSON.stringify(this.qrList))
  // },
  //   error => {
  //     console.log(error)
  //   },
  //   () => {
  //     if (cont == "1") {
  //       this.router.navigate([`/adults/program-guide/${pgResume}`])
  //     }
  //     else
  //       this.router.navigate([`/adults/program-guide/s35001`])
  //   })
  // }
  // /introduction

  // nuture a quiet mind
  // routeNature(cont: any = 1) {
  //   var natureR
  //   localStorage.setItem("moduleId", JSON.stringify(28))
  //   this.service.clickModule(28, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       natureR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("natureR", natureR)

  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/nature/${natureR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/nature/s28001`])
  //       })
  // }

  // routeBreathing(cont: any = 1) {

  //   var breathingR

  //   localStorage.setItem("moduleId", JSON.stringify(29))
  //   this.service.clickModule(29, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       breathingR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //   sessionStorage.setItem("breathingR", breathingR)
  //   localStorage.setItem("qrList", JSON.stringify(this.qrList))
  // },
  //   error => {
  //     console.log(error)
  //   },
  //   () => {
  //     if (cont == "1") {
  //       this.router.navigate([`/adults/breathing/${breathingR}`])
  //     }
  //     else
  //       this.router.navigate([`/adults/breathing/s29000`])
  //   })
  // }

  // routeNoticingThoughts(cont: any = 1) {
  //   var ntR

  //   localStorage.setItem("moduleId", JSON.stringify(30))
  //   this.service.clickModule(30, this.userId)
  //     .subscribe(res => {
  //       this.qrList = res
  //       ntR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  //       sessionStorage.setItem("ntR", ntR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/noticing-thoughts/${ntR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/noticing-thoughts/s30001`])
  //       })
  // }

  // routeGuidedMeditation(cont: any = 1) {
  //   var gamR
  //   localStorage.setItem("moduleId", JSON.stringify(51))
  //   this.service.clickModule(51, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       gamR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("gamR", gamR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/guided-meditation/${gamR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/guided-meditation/s51000`])
  //       })
  // }

  // routeMeditation(cont: any = 1) {
  //   var meditationResume
  //   localStorage.setItem("moduleId", JSON.stringify(22))
  //   this.service.clickModule(22, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       meditationResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("meditationResume", meditationResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/meditation/${meditationResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/meditation/s22001`])
  //       })
  // }
  // /nuture a quiet mind

  // art of enquiry
  // routeBenefitsEnquiry(cont: any = 1) {
  //   var resumeBenefitsEnquiry
  //   localStorage.setItem("moduleId", JSON.stringify(26))
  //   this.service.clickModule(26, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       resumeBenefitsEnquiry = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  // sessionStorage.setItem("resumeBenefitsEnquiry", resumeBenefitsEnquiry)
  // this.mediaPercent = parseInt(res.MediaPercent)
  //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
  //       localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
  //       localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/benefits-of-enquiry/${resumeBenefitsEnquiry}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/benefits-of-enquiry/s26001`])
  //       })
  // }

  // routeHowToBegin(cont: any = 1) {
  //   var beginResume
  //   localStorage.setItem("moduleId", JSON.stringify(36))
  //   this.service.clickModule(36, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       beginResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("beginResume", beginResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/how-to-begin/${beginResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/how-to-begin/s36000`])
  //       })
  // }

  // routeThreeSteps(cont: any = 1) {
  //   var threeStepsResume
  //   localStorage.setItem("moduleId", JSON.stringify(37))
  //   this.service.clickModule(37, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       threeStepsResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("threeStepsResume", threeStepsResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/three-steps-enquiry/${threeStepsResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/three-steps-enquiry/s37000`])
  //       })
  // }

  // routeInsights(cont: any = 1) {
  //   var insightResume
  //   localStorage.setItem("moduleId", JSON.stringify(38))
  //   this.service.clickModule(38, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       insightResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("insightResume", insightResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/insight/${insightResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/insight/s38000`])
  //       })
  // }

  // routeAwareness(cont: any = 1) {
  //   var awarenessResume
  //   localStorage.setItem("moduleId", JSON.stringify(39))
  //   this.service.clickModule(39, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       awarenessResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("awarenessResume", awarenessResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/awareness/${awarenessResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/awareness/s39000`])
  //       })
  // }

  // routeNoJudgement(cont: any = 1) {
  //   var njResume
  //   localStorage.setItem("moduleId", JSON.stringify(40))
  //   this.service.clickModule(40, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       njResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("njResume", njResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/no-judgement/${njResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/no-judgement/s40000`])
  //       })
  // }

  // routeQuestionsAreKey(cont: any = 1) {
  //   var qakResume
  //   localStorage.setItem("moduleId", JSON.stringify(41))
  //   this.service.clickModule(41, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       qakResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("qakResume", qakResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/questions-are-key/${qakResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/questions-are-key/s41000`])
  //       })
  // }

  // routeLookWithoutLanguage(cont: any = 1) {
  //   var lwlResume
  //   localStorage.setItem("moduleId", JSON.stringify(42))
  //   this.service.clickModule(42, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       lwlResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("lwlResume", lwlResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/without-language/${lwlResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/without-language/s42000`])
  //       })
  // }

  // routeObstacles(cont: any = 1) {
  //   var obstaclesResume
  //   localStorage.setItem("moduleId", JSON.stringify(43))
  //   this.service.clickModule(43, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       obstaclesResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("obstaclesResume", obstaclesResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/obstacles-enquiry/${obstaclesResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/obstacles-enquiry/s43000`])
  //       })
  // }
  // /art of enquiry

  // how the mind works
  // routeConditioning(cont: any = 1) {
  //   var conditioningResume
  //   localStorage.setItem("moduleId", JSON.stringify(15))
  //   this.service.clickModule(15, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       conditioningResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("conditioningResume", conditioningResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/conditioning/${conditioningResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/conditioning/s232`])
  //       })
  // }

  // routeComparison(cont: any = 1) {
  //   var comparisonR
  //   localStorage.setItem("moduleId", JSON.stringify(7))
  //   this.service.clickModule(7, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       comparisonR = "s" + res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("comparisonR", comparisonR)
  //       this.mediaPercent = parseInt(res.MediaPercent)
  //       this.freeScreens = res.FreeScrs.map(a => a.ScrNo);
  //       localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
  //       localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/comparison/${comparisonR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/comparison/s0`])
  //       })
  // }

  // routeReactiveMind(cont: any = 1) {
  //   var rmR
  //   localStorage.setItem("moduleId", JSON.stringify(54))
  //   this.service.clickModule(54, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       rmR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("rmR", rmR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/reactive-mind/${rmR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/reactive-mind/s54001`])
  //       })
  // }

  // routeSelfImage(cont: any = 1) {
  //   var siR

  //   localStorage.setItem("moduleId", JSON.stringify(25))
  //   this.service.clickModule(25, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       siR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  // sessionStorage.setItem("siR", siR)
  // this.mediaPercent = parseInt(res.MediaPercent)
  //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
  //       localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
  //       localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/self-image/${siR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/self-image/s25001`])
  //       })
  // }

  // routeSelfInterest(cont: any = 1) {
  //   var sinR
  //   localStorage.setItem("moduleId", JSON.stringify(55))
  //   this.service.clickModule(55, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       sinR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("sinR", sinR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/self-interest/${sinR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/self-interest/s55001`])
  //       })
  // }

  // routeIdentity(cont: any = 1) {
  //   var identityResume
  //   localStorage.setItem("moduleId", JSON.stringify(21))
  //   this.service.clickModule(21, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       identityResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("identityResume", identityResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/identity/${identityResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/identity/s21001`])
  //       })
  // }

  // routeEmotionalNeeds(cont: any = 1) {
  //   var enR
  //   localStorage.setItem("moduleId", JSON.stringify(18))
  //   this.service.clickModule(18, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       enR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("enR", enR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/emotional-needs/${enR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/emotional-needs/s18001`])
  //       })
  // }

  // routeInnerBoredom(cont: any = 1) {
  //   var ibR
  //   localStorage.setItem("moduleId", JSON.stringify(56))
  //   this.service.clickModule(56, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       ibR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("ibR", ibR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/inner-boredom/${ibR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/inner-boredom/s56001`])
  //       })
  // }

  // routeNatureOfI(cont: any = 1) {
  //   var niR
  //   localStorage.setItem("moduleId", JSON.stringify(57))
  //   this.service.clickModule(57, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       niR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("niR", niR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/nature-of-i/${niR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/nature-of-i/s57001`])
  //       })
  // }

  // routeExternalApproval(cont: any = 1) {
  //   var externalapprovalR
  //   localStorage.setItem("moduleId", JSON.stringify(91))
  //   this.service.clickModule(91, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       externalapprovalR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("externalapprovalR", externalapprovalR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/external-approval/${externalapprovalR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/external-approval/s91001`])
  //       })
  // }
  // /how the mind works

  // understand emotions
  // routeFearAnxiety(cont: any = 1) {
  //   var fearResume
  //   localStorage.setItem("moduleId", JSON.stringify(19))
  //   this.service.clickModule(19, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       fearResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("fearResume", fearResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/fear-anxiety/${fearResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/fear-anxiety/s486`])
  //       })
  // }

  // routeDealingWithDepression(cont: any = 1) {
  //   var dealingwithdepressionResume
  //   localStorage.setItem("moduleId", JSON.stringify(92))
  //   this.service.clickModule(92, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       dealingwithdepressionResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("dealingwithdepressionResume", dealingwithdepressionResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/dealing-with-depression/${dealingwithdepressionResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/dealing-with-depression/s92001`])
  //       })
  // }

  // routePleasure(cont: any = 1) {
  //   var pleasureResume
  //   localStorage.setItem("moduleId", JSON.stringify(20))
  //   this.service.clickModule(20, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       pleasureResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  // sessionStorage.setItem("pleasureResume", pleasureResume)
  // this.mediaPercent = parseInt(res.MediaPercent)
  // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
  //       localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
  //       localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/pleasure/${pleasureResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/pleasure/s20001`])
  //       })

  // }

  // routeSorrowandLoss(cont: any = 1) {
  //   var sorrowandlossResume
  //   localStorage.setItem("moduleId", JSON.stringify(60))
  //   this.service.clickModule(60, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       sorrowandlossResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("sorrowandlossResume", sorrowandlossResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/sorrow/${sorrowandlossResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/sorrow/s60001`])

  //       })
  // }

  // routeLoneliness(cont: any = 1) {
  //   var lonelinessResume
  //   localStorage.setItem("moduleId", JSON.stringify(61))
  //   this.service.clickModule(61, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       lonelinessResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("lonelinessResume", lonelinessResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/loneliness/${lonelinessResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/loneliness/s61001`])
  //       })
  // }

  // routeAnger(cont: any = 1) {
  //   var angerResume
  //   localStorage.setItem("moduleId", JSON.stringify(14))
  //   this.service.clickModule(14, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       angerResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("angerResume", angerResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/anger/${angerResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/anger/s162p0`])
  //       })
  // }
  // /understand emotions

  // transform your life 1
  // routeStress(cont: any = 1) {
  //   var stressResume
  //   localStorage.setItem("moduleId", JSON.stringify(44))
  //   this.service.clickModule(44, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       stressResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //   sessionStorage.setItem("stressResume", stressResume)
  //   localStorage.setItem("qrList", JSON.stringify(this.qrList))
  // },
  //   error => {
  //     console.log(error)
  //   },
  //   () => {
  //     if (cont == "1") {
  //       this.router.navigate([`/adults/stress/${stressResume}`])
  //     }
  //     else
  //       this.router.navigate([`/adults/stress/s44001`])
  //this.router.navigate([`/adults/wisdom-exercise/s75001`])
  //       })
  // }




  // routeRelationships(cont: any = 1) {
  //   var relationshipResume
  //   localStorage.setItem("moduleId", JSON.stringify(47))
  //   this.service.clickModule(47, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       relationshipResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("relationshipResume", relationshipResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/relationships/${relationshipResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/relationships/s47000`])
  //       })
  // }

  // routeLove(cont: any = 1) {
  //   var loveResume
  //   localStorage.setItem("moduleId", JSON.stringify(62))
  //   this.service.clickModule(62, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       loveResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("loveResume", loveResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/love/${loveResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/love/s62001`])
  //       })
  // }

  // routeCriticism(cont: any = 1) {
  //   var criticismResume
  //   localStorage.setItem("moduleId", JSON.stringify(16))
  //   this.service.clickModule(16, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       criticismResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("criticismResume", criticismResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/criticism/${criticismResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/criticism/s324`])
  //       })
  // }

  // routeSelfEsteem(cont: any = 1) {
  //   var sR
  //   localStorage.setItem("moduleId", JSON.stringify(17))
  //   this.service.clickModule(17, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       sR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("sR", sR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/self-esteem/${sR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/self-esteem/s433`])
  //       })
  // }

  // routeLivingWithPeace(cont: any = 1) {
  //   var livingwithpeaceResume
  //   localStorage.setItem("moduleId", JSON.stringify(63))
  //   this.service.clickModule(63, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       livingwithpeaceResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("livingwithpeaceResume", livingwithpeaceResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/living-with-peace/${livingwithpeaceResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/living-with-peace/s63001`])
  //       })
  // }

  // routeDealingWithDeath(cont: any = 1) {
  //   var dealingwithdeathResume
  //   localStorage.setItem("moduleId", JSON.stringify(64))
  //   this.service.clickModule(64, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       dealingwithdeathResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("dealingwithdeathResume", dealingwithdeathResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/dealing-with-death/${dealingwithdeathResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/dealing-with-death/s64001`])

  //       })
  // }

  // routeBullying(cont: any = 1) {
  //   var bullyingResume
  //   localStorage.setItem("moduleId", JSON.stringify(76))
  //   this.service.clickModule(76, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       bullyingResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("bullyingResume", bullyingResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/bullying/${bullyingResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/bullying/s76001`])

  //       })
  // }

  // routeMakingBetterDecisions(cont: any = 1) {
  //   var making_better_decisionsResume
  //   localStorage.setItem("moduleId", JSON.stringify(77))
  //   this.service.clickModule(77, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       making_better_decisionsResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("making_better_decisionsResume", making_better_decisionsResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/making-better-decisions/${making_better_decisionsResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/making-better-decisions/s77001`])

  //       })
  // }

  // routeDiversityandInclusion(cont: any = 1) {
  //   var diversity_and_inclusionResume
  //   localStorage.setItem("moduleId", JSON.stringify(143))
  //   this.service.clickModule(143, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       diversity_and_inclusionResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("diversity_and_inclusionResume", diversity_and_inclusionResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/diversity-and-inclusion/${diversity_and_inclusionResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/diversity-and-inclusion/s143001`])

  //       })
  // }

  // /transform your life 1

  // transform your life 2
  // routeHappiness(cont: any = 1) {
  //   var hR
  //   localStorage.setItem("moduleId", JSON.stringify(23))
  //   this.service.clickModule(23, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // } else {
  //   hR = "s" + res.lastVisitedScreen
  //   this.goToPage = res.lastVisitedScreen
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("hR", hR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont === 1 && hR) {
  //           this.router.navigate([`/adults/happiness/${hR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/happiness/s23001`])
  //       })
  // }

  // routeCommunication(cont: any = 1) {
  //   var communicationR
  //   localStorage.setItem("moduleId", JSON.stringify(53))
  //   this.service.clickModule(53, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       communicationR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("communicationR", communicationR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/communication/${communicationR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/communication/s53001`])
  //       })
  // }

  // routeOpinionsAndBeliefs(cont: any = 1) {
  //   var opinionsandbeliefsResume
  //   localStorage.setItem("moduleId", JSON.stringify(49))
  //   this.service.clickModule(49, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       opinionsandbeliefsResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("opinionsandbeliefsResume", opinionsandbeliefsResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/opinions-beliefs/${opinionsandbeliefsResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/opinions-beliefs/s49001`])
  //       })
  // }

  // routeSuccessAndFailure(cont: any = 1) {
  //   var successandfailureResume
  //   localStorage.setItem("moduleId", JSON.stringify(48))
  //   this.service.clickModule(48, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       successandfailureResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("successandfailureResume", successandfailureResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/success-failure/${successandfailureResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/success-failure/s48001`])
  //       })
  // }

  // routeAddiction(cont: any = 1) {
  //   var addictionResume
  //   localStorage.setItem("moduleId", JSON.stringify(45))
  //   this.service.clickModule(45, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       addictionResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("addictionResume", addictionResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/habit-addiction/${addictionResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/habit-addiction/s45001`])
  //       })
  // }

  // routeFood(cont: any = 1) {
  //   var foodResume
  //   localStorage.setItem("moduleId", JSON.stringify(46))
  //   this.service.clickModule(46, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       foodResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("foodResume", foodResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/food-health/${foodResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/food-health/s46001`])
  //       })
  // }

  // routeMoney(cont: any = 1) {
  //   var moneyResume
  //   localStorage.setItem("moduleId", JSON.stringify(73))
  //   this.service.clickModule(73, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       moneyResume = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("moneyResume", moneyResume)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/money/${moneyResume}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/money/s73001`])
  //       })
  // }

  // routeWork(cont: any = 1) {
  //   var wR
  //   localStorage.setItem("moduleId", JSON.stringify(58))
  //   this.service.clickModule(58, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       wR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("wR", wR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/work/${wR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/work/s58001`])
  //       })
  // }

  // routeLeadership(cont: any = 1) {
  //   var lR
  //   localStorage.setItem("moduleId", JSON.stringify(59))
  //   this.service.clickModule(59, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       lR = "s" + res.lastVisitedScreen
  //       this.goToPage = res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("lR", lR)
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/leadership/${lR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/leadership/s59001`])
  //       })
  // }
  // /transform your life 2

  routeJournal() {
    this.router.navigate(['/adults/journal'])
  }

  goToYourWisdomScoreComponent() {
    this.logeventservice.logEvent('click_wisdom_score');
    this.router.navigate(['/adults/wisdom-survey'], { state: { 'isUseCloseButton': true } });
  }
  // onFocus() {
  //   this.getModuleList(true);
  //   if (this.searchinp == '') {
  //     this.searchResult = this.moduleList;
  //   } else {
  //     this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
  //   }
  // }

  // routehowcanwisdomhelp(cont: any = 1) {
  //   var hcwhR
  //   localStorage.setItem("moduleId", JSON.stringify(74))
  //   this.service.clickModule(74, this.userId)
  //     .subscribe(res => {
  //       localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
  //       this.qrList = res
  //       hcwhR = "s" + res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("hcwhR", hcwhR)
  //       this.mediaPercent = parseInt(res.MediaPercent)
  //       this.freeScreens = res.FreeScrs.map(a => a.ScrNo);
  //       localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
  //       localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //     },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         if (cont == "1") {
  //           this.router.navigate([`/adults/how-can-wisdom-help/${hcwhR}`])
  //         }
  //         else
  //           this.router.navigate([`/adults/how-can-wisdom-help/s74001`])
  //       })
  // }

  // getuserDetail() {
  //   let userId = JSON.parse(localStorage.getItem("userId"))
  //   if (userId != null) {
  //     this.services.getuser(userId).subscribe((res: any) => {
  //       localStorage.setItem("isPartner", res[0].IsPartner);
  //       localStorage.setItem('PartnerOption', res[0].PartnerOption);
  //       localStorage.setItem("SubscriberType", res[0].SubscriberType)
  //     });
  //   }
  // }

  /*  routewisdomexercise(cont: any = 1) {
     var weR = '75001'
     localStorage.setItem("moduleId", JSON.stringify(75))
     this.service.clickModule(75, this.userId)
       .subscribe(res => {

         this.qrList = res
         weR = "s" + res.lastVisitedScreen
         // continue where you left
         if (res.lastVisitedScreen === '') {
           localStorage.setItem("lastvisited", 'F')
         }
         else {
           localStorage.setItem("lastvisited", 'T')
         }
         // /continue where you left
         sessionStorage.setItem("weR", weR)
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
             this.router.navigate([`/adults/wisdom-exercise/${weR}`])
           }
           else
             this.router.navigate([`/adults/wisdom-exercise/s75001`])
         })
   }
  */

  wisdomexercise() {

    if (this.resumeLastvisited[0]['screenno'].length >= 1) {
      this.router.navigate(['adults/wisdom-exercise/s' + this.resumeLastvisited[0]['screenno'].substring(0, this.resumeLastvisited[0]['screenno'].length - 2)], {
        state: {
          day: 2,
        }
      });
    }
    else
      this.router.navigate([`/adults/wisdom-exercise/s75001`])



  }
  routeDailyCheckIn(){
    this.logeventservice.logEvent("Click_daily-checkin");

    this.router.navigate(['/adults/daily-checkin']);
  }

  // getinp(event) {
  //   let url = `/adults/site-search/${event}`
  //   this.router.navigate([url])
  // }

  // getAutoCompleteList(value) {
  //   if (this.moduleList.length > 0) {
  //     if (value == null || value == "") {
  //       this.searchResult = this.moduleList;
  //     } else {
  //       this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(value?.toLocaleLowerCase()));
  //     }
  //   }
  // }

  // onFocusOutEvent() {
  //   setTimeout(() => {
  //     this.searchResult = [];
  //   }, 500);
  // }
  // clearSearch() {
  //   this.searchinp = "";
  //   this.searchResult = [];
  // }

  // searchEvent(module) {
  //   this.searchinp = module;
  //   this.searchResult = [];
  //   this.getinp(module);
  // }


  GetWisdomScreens() {
    this.service.GetWisdomScreens().subscribe(res => {
      this.wisdomExerciseList = res;
      var allCompletedScreen: boolean = false;
      let data = this.wisdomExerciseList.filter(x => x.completed == '1');
      if (this.wisdomExerciseList.length == data.length) {
        allCompletedScreen = true;
      }
      console.log(data.length);
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
        this.day = !emptyList ? (parseInt(exercise.ScreenNo.substring(6, exercise.ScreenNo.length))).toString() : "0";
      } else {
        this.day = !emptyList ? (parseInt(exercise.ScreenNo.substring(6, exercise.ScreenNo.length)) + 1).toString() : "0";
      }
      var sessionNo = exercise.SessionNo.substring(0, exercise.SessionNo.length - 2) + this.exerciseNo;


      //Pushing final list for display
      for (let item of this.wisdomExerciseList.filter(x => x.SessionNo == sessionNo)) {
        let obj = {
          " SessionNo": item.SessionNo,
          "ScreenNo": item.ScreenNo,
          "completed": item.completed,
          "day": item.ScreenNo.substring(6, item.ScreenNo.length),
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


  DashboardLogevent(route, params, evtName) {
    this.logeventservice.logEvent(evtName);
    if (evtName === 'click_journal') {
      this.router.navigate(['/adults/journal'])

      //   let guest = localStorage.getItem('guest');
      //   if (this.isloggedIn && guest === 'F') {
      //     if (!this.Subscriber || this.Subscriber === '0') {
      //       this.router.navigate(['/onboarding/free-limit']);
      //     } else {
      //       this.router.navigate(['/adults/journal'])
      //     }
      //   } else {
      //     this.enablepopup.nativeElement.click();
      //   }
    } else if (params != '' && route != '') {
      this.router.navigate([route, params]);
    } else if (route != '') {
      this.router.navigate([route])
    }
  }

  SubscribeToPremium() {
    this.router.navigate(['/subscription/start-your-free-trial']);
  }

  routeToUrl(url){
    if(url.includes('isGuided')){
      SharedService.isFromAdults = true;
      this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
    }
    else if(url.includes('eid=')) {

      this.logeventservice.logEvent("click_upcoming_event");
     let eid = url.split('eid=')[1];
      this.router.navigate(['/adults/events/event'], { queryParams: { eid: `${eid}` } })


    }else{
      //window.location = url;
      this.router.navigate([`/${url}`])
    }
  }

  // RouteToWisdomExercise(exercise) {
  //   var weR = exercise?.ScreenNo;
  //   localStorage.setItem("moduleId", JSON.stringify(75))
  //   this.service.clickModule(75, this.userId)
  //     .subscribe(res => {
  //
  //       this.qrList = res
  //       weR = "s" + res.lastVisitedScreen
  // continue where you left
  // if (res.lastVisitedScreen === '') {
  //   localStorage.setItem("lastvisited", 'F')
  // }
  // else {
  //   localStorage.setItem("lastvisited", 'T')
  // }
  // /continue where you left
  //       sessionStorage.setItem("weR", weR)
  //       this.mediaPercent = parseInt(res.MediaPercent)
  //       this.freeScreens = res.FreeScrs.map(a => a.ScrNo);
  //       localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
  //       localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
  //       localStorage.setItem("qrList", JSON.stringify(this.qrList))
  //       if (exercise != null) {
  //         this.router.navigate(['adults/wisdom-exercise/s' + exercise.ScreenNo.substring(0, exercise.ScreenNo.length - 2)], {
  //           state: {
  //             day: exercise.day,
  //           }
  //         });
  //       } else {
  //         this.router.navigate(['adults/wisdom-exercise/']);
  //       }
  //     },
  //       error => {
  //         console.log(error)
  //       })
  // }



  RouteToWisdomExercise(exercise) {

    this.logeventservice.logEvent("click_Awareness_exercise");
    /*
     var weR = exercise?.ScreenNo;
     localStorage.setItem("moduleId", JSON.stringify(75))
     this.aservice.clickModule(75, this.userId)
       .subscribe(res => {

         this.qrList = res
         weR = "s" + res.lastVisitedScreen
         // continue where you left
         if (res.lastVisitedScreen === '') {
           localStorage.setItem("lastvisited", 'F')
         }
         else {
           localStorage.setItem("lastvisited", 'T')
         }
         // /continue where you left
         sessionStorage.setItem("weR", weR)
         this.mediaPercent = parseInt(res.MediaPercent)
         this.freeScreens = res.FreeScrs.map(a => a.ScrNo);
         localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
         localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
         localStorage.setItem("qrList", JSON.stringify(this.qrList))

       },
         error => {
           console.log(error)
         });  */

    if (exercise != null) {
      this.router.navigate(['adults/wisdom-exercise/s' + exercise.ScreenNo.substring(0, exercise.ScreenNo.length - 2)], {
        state: {
          day: exercise.day,
        }
      });
    } else {
      this.router.navigate(['adults/wisdom-exercise/']);
    }
  }

  routeForUser(res) {
    let sid = '';
    if (res['FeatureType'] === "BLOG") {
      this.logeventservice.logEvent("click_blog");
      sid = res['Url'].split('sId=')[1];
      this.router.navigate(['/adults/blog-article'], { queryParams: { sId: `${sid}` } })
    } else if (res['FeatureType'] === "LIFE STORY") {
      this.logeventservice.logEvent("click_life_stories");
      sid = res['Url'].split('sId=')[1];
      this.router.navigate(['/adults/wisdom-stories/view-stories'], { queryParams: { sId: `${sid}` } })
    }
    else if (res['FeatureType'] === "UPCOMING EVENT") {
      this.logeventservice.logEvent("click_upcoming_event");
      sid = res['Url'].split('eid=')[1];
      this.router.navigate(['/adults/events/event'], { queryParams: { eid: `${sid}` } })
    }
    else if (res['FeatureType'] === "PODCAST") {
      this.logeventservice.logEvent("click_podcasts");
      this.router.navigate([res['Url']]);
    }
    else {
      this.logeventservice.logEvent("click_" + res['FeatureType']);
      localStorage.setItem('wisdomvideotitle', res['Title']);
      this.router.navigate([res['Url']]);
    }
  }
  changeTopic() {
    localStorage.setItem('lastRoute', this.dasboardUrl);
    if (!this.isloggedIn) {
      this.logeventservice.logEvent("click_Select-a-topic-to-Explore");
      this.router.navigate(["/adults/select-a-topic-to-explore"], {
        state: {
          routedFromLogin: false,
        }
      });
    }
    else {
      this.logeventservice.logEvent("click_Change-your-Topic");
      this.router.navigate(["/adults/change-topic"], {
        state: {
          routedFromLogin: false,
        }
      });
    }
  }

    activeTopicRoute(name) {
    if (name === 'Manage your emotions') {
      this.logeventservice.logEvent('click_emotions');
      this.router.navigate(['/adults/curated/manage-your-emotions'])
    } else if (name === 'Manage your mental health') {
      this.logeventservice.logEvent('click_stress_anxiety');
      this.router.navigate(['/adults/curated/overcome-stress-anxiety'])
    } else if (name === 'Work and Leadership') {
      this.logeventservice.logEvent('click_workplace');
      this.router.navigate(['/adults/curated/wisdom-for-workplace'])
    } else if (name === 'Relationships') {
      this.logeventservice.logEvent('click_relationships');
      this.router.navigate(['/adults/curated/have-fulfilling-relationships'])
    } else if (name === 'Be happier') {
      this.logeventservice.logEvent('click_be_happier');
      this.router.navigate(['/adults/curated/be-happier'])
    } else if (name === 'Habits and Addiction') {
      this.logeventservice.logEvent('click_be_happier');
      this.router.navigate(['/adults/curated/change-unhelpful-habits'])
    } else if (name === 'Deal with loss') {
      this.logeventservice.logEvent('click_sorrow_loss');
      this.router.navigate(['/adults/curated/deal-with-sorrow-loss'])
    } else if (name === 'Meditation') {
      this.logeventservice.logEvent('click_calm_mind');
      this.router.navigate(['/adults/curated/have-calm-mind'])
    }
  }

  readMore(str) {
    this.logeventservice.logEvent('click_testimonial_' + str);
    SharedService.setDataInLocalStorage(Constant.TestimonialId, str);
    this.router.navigate(['/adults/testimonials']);
  }
  getEnableBanner() {
    return SharedService.enablebanner;
  }



  iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  clearSearch() {
    this.searchinp = "";
    this.searchResult = [];
  }

  getinp(event) {
    let url=""
    switch(event)
    {
      case "Events":{
          url = `/adults/events`
          break;
      }
      case "Blogs":{
        url = `/adults/blogs`
        break;
      }
      case "Life stories":
      case "Stories":{
        url = `/adults/wisdom-stories`
        break;
      }
      case "Podcast":{
        url = `/adults/podcast`
        break;
      }
      case "Audio meditations":{
        url = `/adults/audio-meditation`
        break;
      }
      case ("Short videos"):
      case ("Videos"):
        {
        url = `/adults/wisdom-shorts`
        break;
      }
      case "Exercises":
      case "Awareness Exercises":
        {
        url = `/adults/wisdom-exercise`
        break;
      }
      case "Journal":{
        url = `/adults/journal`
        break;
      }
      case "Forum":{
        url = `/adults/forum`
        break;
      }
      case "Develop a calm mind":{
        url = `/adults/pathway/develop-a-calm-mind`
        break;
      }
      case "Understand yourself":{
        url = `/adults/pathway/understand-yourself`
        break;
      }
      case "Understand how your mind works":{
        url = `/adults/pathway/understand-how-your-mind-works`
        break;
      }
      case "Manage your emotions":{
        url = `/adults/pathway/manage-your-emotions`
        break;
      }
      case "Succeed in life":{
        url = `/adults/pathway/live-your-best-life`
        break;
      }
      case "Mental Health":{
        url = `/adults/curated/overcome-stress-anxiety`
        break;
      }
     default: {
       url = `/adults/site-search/${this.searchinp}`
        break;
      }

    }


    this.router.navigate([url])
  }

  searchEvent(module) {
    this.logeventservice.logEvent("click_search");
    this.searchinp = module;
    this.searchResult = [];
    this.getinp(module);
  }

  getAutoCompleteList(value) {
    if (this.moduleList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.moduleList;
      } else {
        this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).startsWith(value?.toLocaleLowerCase()));
      }
    }
  }

  onFocus() {
    this.getModuleList(true);
    if (this.searchinp == '') {
      this.searchResult = this.moduleList;
    } else {
      this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).startsWith(this.searchinp?.toLocaleLowerCase()));
    }
  }

  onFocusOutEvent() {
    setTimeout(() => {
      this.searchResult = [];
    }, 400);
  }

  getModuleList(isLoad?) {
    this.service.getModuleList().subscribe(res => {
      this.moduleList = res;
      this.moduleList.push({"ModuleName":"Events"},{"ModuleName":"Blogs"},{"ModuleName":"Life stories"},{"ModuleName":"Stories"},{"ModuleName":"Podcast"}, {"ModuleName":"Short videos"}, {"ModuleName":"Videos"}, {"ModuleName":"Audio meditations"},{"ModuleName":"Journal"},{"ModuleName":"Forum"}, {"ModuleName":"Exercises"},{"ModuleName":"Awareness Exercises"},
                          {"ModuleName":"Develop a calm mind"},{"ModuleName":"Manage your emotions"},
                          {"ModuleName":"Understand yourself"},{"ModuleName":"Succeed in life"},
                          {"ModuleName":"Understand how your mind works"},{"ModuleName":"Mental Health"} )

      if (isLoad) {
        if (this.searchinp == '') {
          this.searchResult = this.moduleList;
        } else {
          this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
        }
      }
    })
  }


  logEvent(event, url) {
    this.logeventservice.logEvent(event);
    this.router.navigate([url]);
  }

  routeToFindAnswer(param) {
    localStorage.setItem('lastRoute', param);
    this.logeventservice.logEvent("click_find-answers-" + param);
    this.router.navigate(['/adults/find-answers/' + param]);
  }

}
