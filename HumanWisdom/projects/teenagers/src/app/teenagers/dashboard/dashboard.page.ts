import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../../../shared/services/shared.service';
import { TeenagersService } from '../teenagers.service';
import { UntypedFormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Constant } from '../../../../../shared/services/constant';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
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
  //static progress mapping
  // public angerP: any
  // public comparisonP: any
  // public awarenessP: any
  // public obstaclesP: any
  // public meditationP: any
  // public benefitsWisdomP: any
  public guideP = '50';
  // public fearP: any
  // public benefitsEnquiryP: any
  // public questionsP: any
  // public identityP: any
  // public keyP: any
  // public selfEsteemP: any
  // public conditioningP: any
  // public fiveCirclesP: any
  // public happinessP: any
  // public threeStepsP: any
  // public noJudgementP: any
  // public discoveringP: any
  // public beginP: any
  // public insightP: any
  // public pleasureP: any
  // public withoutLanguageP: any
  // public criticismP: any
  // public stressP: any
  // public relationshipsP: any
  // public natureP: any
  // public breathingP: any
  // public ntP: any
  // public gamP: any
  searchResult = [];
  // public communicationP: any
  // public rmP: any
  // public siP: any
  // public sinP: any
  // public enP: any
  // public ibP: any
  // public wP: any
  // public lP: any
  // public seP: any
  // public niP: any
  // public lonelinessP: any
  // public livingwithpeaceP: any
  // public loveP: any
  // public dealingwithdeathP: any
  // public opinionsandbeliefsP: any
  // public successandfailureP: any
  // public addictionP: any
  // public foodP: any
  // public moneyP: any
  isEnableHam = true;
  public Subscriber: any
  public alertMsg: any
  public friendemail = ''
  public friendname = ''
  public name = ''
  public streak = ''
  // public sorrowandlossP
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
  public tourTotalIndex = 9;
  public tourIndex = 1;
  constructor(
    public router: Router, public service: TeenagersService, public services: OnboardingService,
    public cd: ChangeDetectorRef, public fb: UntypedFormBuilder, public authService: SocialAuthService,
    public platform: Platform,
    public logeventservice: LogEventService, private meta: Meta, private title: Title
  ) {
    // let remem = localStorage.getItem("remember")
    // if (remem === null || remem === 'F') {
    //   localStorage.setItem('isloggedin', 'F')
    //   localStorage.setItem('guest', 'T')
    //   this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
    // }
    localStorage.setItem("fromlandingpage", 'F')
    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    }, { validator: this.PasswordValidator })

    this.getUserPreference();
    this.logeventservice.logEvent('view_adult-dashboard');
    localStorage.setItem('feelbetternow', 'F')
    setTimeout(() => {
      // this.getModuleList();
      // this.GetWisdomScreens();
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
          // this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
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
          this.emaillogin()
        };
      } else if (app && app === 'T') {
        let authtoken = JSON.parse(localStorage.getItem("token"))
        this.fromapplogin(authtoken);
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
    this.router.navigate(["/onboarding/user-profile"]);
  }

  loginpage() {
    // $("#signuplogin").modal("hide");
    this.closepopup.nativeElement.click();
    localStorage.setItem('introoption', 'T')
    this.router.navigate(['/onboarding/login'])
  }

  getLastvisitedScr() {
    this.userId = SharedService.getUserId();
    this.service.GetLastVisitedScreen(this.userId)
      .subscribe(res => {
        console.log(res)
        if (res[0]['ModuleId'] == 75) {
          res[0]['screenno'] = res[0]['screenno'].substring(0, res[0]['screenno'].length - 2)
        }
        this.resumeLastvisited = res;
      });
  }

  GetDashboardFeatures() {
    let id = localStorage.getItem('userPreference') ? localStorage.getItem('userPreference') : '1';
    this.service.GetDashboardFeature(id)
      .subscribe(res => {
        console.log(res);
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

    if (this.platform.IOS || this.platform.SAFARI || this.iOS()) {
      this.isIos = true;
    }


    this.title.setTitle('Human Wisdom App: Personal Growth & Self-Help')
    this.meta.updateTag({ property: 'title', content: 'Human Wisdom App: Personal Growth & Self-Help' })
    this.meta.updateTag({ property: 'description', content: 'Discover the ultimate tool for personal growth and self-help with the Human Wisdom app. Get daily inspiration, mindfulness practices, and effective techniques for managing anger and stress, building better relationships, improving self-esteem, overcoming addiction, thriving at work and in leadership, managing money and love, living with peace, dealing with death, handling criticism, navigating success and failure, making better decisions, and shaping opinions and beliefs.' })
    this.meta.updateTag({ property: 'keywords', content: 'human wisdom, app, personal growth, self-help, daily inspiration, mindfulness practices, anger management, stress management, relationships, self-esteem, addiction, work, workplace, leadership, money, love, food and health, living with peace, dealing with death, criticism, success and failure, decision making, opinions and beliefs' })


    this.dash = this.router.url.includes('adult-dashboard');
    // this.getuserDetail();
    setTimeout(() => {
      // this.getUsershorts()
      // this.getUserstories()
      this.GetDashboardFeatures();
      this.isSubscriber = SharedService.isSubscriber();
    }, 1000)

    if (localStorage.getItem('acceptcookie') === null) {
      setTimeout(() => {
        this.enablecookiemodal.nativeElement.click();
      }, 1000)
    } else {
      if (!localStorage.getItem('firstTimeTour')) {
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

  }

  getplaystore(event) {
    SharedService.enablebanner = false
  }


  closeTour() {
    localStorage.setItem('firstTimeTour', 'T');
  }

  continueTour() {
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
      {
        element: ".tour_intro",
        popover: {
          title: 'Introduction',
          description: 'Learn how to make the most of the app and explore the key ideas',
          side: "bottom"
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
      }
    ];



    if (!this.isloggedIn) {
      this.tourTotalIndex = 8;
      stepList.splice(1, 1);
    }

    const driverObj = driver({
      onNextClick: () => {
        localStorage.setItem('firstTimeTour', 'T');
        this.tourIndex++;
        if (this.tourIndex > this.tourTotalIndex) {
          document.body.classList.remove('overflow_hidden');
          document.body.classList.add('overflow_auto');
          this.services.setEnableTour(false);
        }
        driverObj.moveNext();
      },
      onPrevClick: () => {
        this.tourIndex--;
        driverObj.movePrevious();
        document.body.classList.remove('overflow_auto');
        document.body.classList.add('overflow_hidden');
        this.services.setEnableTour(true);
      },
      onCloseClick: () => {
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
        let arr = res.split('').filter((d) => d !== ',');
        arr.forEach((d) => {
          perd.forEach((r) => {
            if (d === r['id']) {
              r['active'] = true;
              this.personalisedList.push(r);
            }
          })
        })
        perd.forEach((r) => {
          let find = this.personalisedList.some((d) => d['name'] === r['name']);
          if (!find) {
            r['active'] = false;
            this.personalisedList.push(r);
          }
        })
        this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
      }
    })
  }

  wisdomshortsclick(url) {
    this.router.navigate([url])
  }


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
    setTimeout(() => {
      this.enabletourmodal.nativeElement.click();
    }, 100);
    // this.enableDailypopup();
  }



  subscribenow() {

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

  googleLogin(d = '') {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.idToken = user.idToken
      this.socialFirstName = user.firstName
      this.socialLastName = user.lastName
      this.socialEmail = user.email

      this.services.verifyGoogle({
        "TokenID": this.idToken,
        "FName": this.socialFirstName,
        "LName": this.socialLastName,
        "Email": this.socialEmail,
        "VCode": "",
        "Pwd": ""
      })
        .subscribe(res => {

          if (res) {

            this.firstpage = false
            this.fifthpage = false
            this.thirdpage = true
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
            let namedata = localStorage.getItem('name').split(' ')
            this.modaldata['email'] = localStorage.getItem('email');
            this.modaldata['firstname'] = namedata[0];
            this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
            if (parseInt(this.loginResponse.UserId) == 0) {
              // this.showAlert=true
              // window.alert('You have enetered wrong credentials. Please try again.')
              // this.email=""
              // this.password=""
            }
            else {
              // this.showAlert=false
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
            if (d === 'journal') {
              window.location.reload();
            }
          }

        })
    },
      error => console.log(error),
      () => {

      });
  }

  fbLogin(d = '') {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      this.user = user;
      this.idToken = user.authToken
      this.socialFirstName = user.firstName
      this.socialLastName = user.lastName
      this.socialEmail = user.email
      if (user.email !== undefined) {
        this.services.verifyFb({
          "TokenID": this.idToken,
          "FName": this.socialFirstName,
          "LName": this.socialLastName,
          "Email": this.socialEmail,
          "VCode": "",
          "Pwd": ""
        })
          .subscribe(res => {

            if (res) {
              this.firstpage = false
              this.fifthpage = false
              this.thirdpage = true
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
              let namedata = localStorage.getItem('name').split(' ')
              this.modaldata['email'] = localStorage.getItem('email');
              this.modaldata['firstname'] = namedata[0];
              this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
              if (parseInt(this.loginResponse.UserId) == 0) {
                // this.showAlert=true
                // window.alert('You have enetered wrong credentials. Please try again.')
                // this.email=""
                // this.password=""

              }
              else {
                // this.showAlert=false
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
                  if (d === 'journal') {
                    window.location.reload();
                  } else {
                    this.router.navigate(['/onboarding/add-to-cart'])
                  }
                } else {
                  localStorage.setItem("isloggedin", 'T')
                  if (d === 'journal') {
                    window.location.reload();
                  } else {
                    this.router.navigate(['/adults/adult-dashboard'])
                  }
                }

              }
              if (d === 'journal') {
                window.location.reload();
              }
            }

          })
      } else {
        window.alert('Please ensure that you use an email based authentication with your Auth provider or try another method')
      }
    });

  }

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
          window.alert(error.error.Message)
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
          console.log(this.streak)
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
    console.log(this.streak)
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
          console.log(this.streak)
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
          //this.getBookmarks()
          setTimeout(() => {
            // this.getProgress()
            // this.freescreens();
            // this.getBookmarks()
          }, 1000);

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
          console.log(this.streak)
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
    this.router.navigate(['/onboarding/login'])
  }

  friendName(value) {
    this.friendname = value;
  }

  closerefer() {
    this.closerefermodal.nativeElement.click()
  }

  getLogin() {
    localStorage.setItem('btnclick', 'T')
    this.router.navigate(['/onboarding/login', { queryParams: { email: '' } }])
  }

  friendEmail(value) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(regexEmail)) {
      this.friendemail = value;
    } else {
      this.friendemail = '';
    }
  }


  routeResume(r, enableLastVisited = false) {
    let id = '';
    if (enableLastVisited) {
      id = this.resumeLastvisited.length !== 0 ? this.resumeLastvisited[0]['ModuleId'].toString() : '23';
    }

    localStorage.setItem("pageaction", 'next');
    switch (id) {
      case "07": {
        this.service.setmoduleID(id, '/adults/comparison', '/adults/comparison/s0');
        break
      }
      case "14": {
        this.service.setmoduleID(id, '/adults/anger', '/adults/anger/s162p0');
        break
      }
      case "15": {
        this.service.setmoduleID(id, '/adults/conditioning', '/adults/conditioning/s232');
        break
      }
      case "16": {
        this.service.setmoduleID(id, '/adults/criticism', '/adults/criticism/s324');
        break
      }
      case "17": {
        this.service.setmoduleID(id, '/adults/self-esteem', '/adults/self-esteem/s433');
        break
      }
      case "18": {
        this.service.setmoduleID(id, '/adults/emotional-needs', '/adults/emotional-needs/s18001');
        break
      }
      case "19": {
        this.service.setmoduleID(id, '/adults/fear-anxiety', '/adults/fear-anxiety/s486');
        break
      }
      case "20": {
        this.service.setmoduleID(id, '/adults/pleasure', '/adults/pleasure/s20001');
        break
      }
      case "21": {
        this.service.setmoduleID(id, '/adults/identity', '/adults/identity/s21001');
        break
      }
      case "22": {
        this.service.setmoduleID(id, '/adults/meditation', '/adults/meditation/s22001');
        break
      }
      case "23": {
        this.service.setmoduleID(id, '/adults/happiness', '/adults/happiness/s23001');
        break
      }
      case "25": {
        this.service.setmoduleID(id, '/adults/self-image', '/adults/self-image/s25001');
        break
      }
      case "26": {
        this.service.setmoduleID(id, '/adults/benefits-of-enquiry', '/adults/benefits-of-enquiry/s26001');
        break
      }
      case "27": {
        this.service.setmoduleID(id, '/adults/discovering-wisdom', '/adults/discovering-wisdom/s27001');
        break
      }
      case "28": {
        this.service.setmoduleID(id, '/adults/nature', '/adults/nature/s28001');
        break
      }
      case "29": {
        this.service.setmoduleID(id, '/adults/breathing', '/adults/breathing/s29000');
        break
      }
      case "30": {
        this.service.setmoduleID(id, '/adults/noticing-thoughts', '/adults/noticing-thoughts/s30001');
        break
      }
      case "32": {
        this.service.setmoduleID(id, '/adults/benefits-of-wisdom', '/adults/benefits-of-wisdom/s32001');
        break
      }
      case "33": {
        this.service.setmoduleID(id, '/adults/five-circles', '/adults/five-circles/s33001');
        break
      }
      case "34": {
        this.service.setmoduleID(id, '/adults/key-ideas', '/adults/key-ideas/s34001');
        break
      }
      case "35": {
        this.service.setmoduleID(id, '/adults/program-guide', '/adults/program-guide/s35001');
        break
      }
      case "36": {
        this.service.setmoduleID(id, '/adults/how-to-begin', '/adults/how-to-begin/s36000');
        break
      }
      case "37": {
        this.service.setmoduleID(id, '/adults/three-steps-enquiry', '/adults/three-steps-enquiry/s37000');
        break
      }
      case "38": {
        this.service.setmoduleID(id, '/adults/insight', '/adults/insight/s38000');
        break
      }
      case "39": {
        this.service.setmoduleID(id, '/adults/awareness', '/adults/awareness/s39000');
        break
      }
      case "40": {
        this.service.setmoduleID(id, '/adults/no-judgement', '/adults/no-judgement/s40000');
        break
      }
      case "41": {
        this.service.setmoduleID(id, '/adults/questions-are-key', '/adults/questions-are-key/s41000');
        break
      }
      case "42": {
        this.service.setmoduleID(id, '/adults/without-language', '/adults/without-language/s42000');
        break
      }
      case "43": {
        this.service.setmoduleID(id, '/adults/obstacles-enquiry', '/adults/obstacles-enquiry/s43000');
        break
      }
      case "44": {
        this.service.setmoduleID(id, '/adults/stress', '/adults/stress/s44001');
        break
      }
      case "45": {
        this.service.setmoduleID(id, '/adults/habit-addiction', '/adults/habit-addiction/s45001');
        break
      }
      case "46": {
        this.service.setmoduleID(id, '/adults/food-health', '/adults/food-health/s46001');
        break
      }
      case "47": {
        this.service.setmoduleID(id, '/adults/relationships', '/adults/relationships/s47000');
        break
      }
      case "48": {
        this.service.setmoduleID(id, '/adults/success-failure', '/adults/success-failure/s48001');
        break
      }
      case "49": {
        this.service.setmoduleID(id, '/adults/opinions-beliefs', '/adults/opinions-beliefs/s49001');
        break
      }
      case "50": {
        this.goToYourWisdomScoreComponent();
        break
      }
      case "51": {
        this.service.setmoduleID(id, '/adults/guided-meditation', '/adults/guided-meditation/s51000');
        break
      }
      case "53": {
        this.service.setmoduleID(id, '/adults/communication', '/adults/communication/s53001');
        break
      }
      case "54": {
        this.service.setmoduleID(id, '/adults/reactive-mind', '/adults/reactive-mind/s54001');
        break
      }
      case "55": {
        this.service.setmoduleID(id, '/adults/self-interest', '/adults/self-interest/s55001');
        break
      }
      case "56": {
        this.service.setmoduleID(id, '/adults/inner-boredom', '/adults/inner-boredom/s56001');
        break
      }
      case "57": {
        this.service.setmoduleID(id, '/adults/nature-of-i', '/adults/nature-of-i/s57001');
        break
      }
      case "58": {
        this.service.setmoduleID(id, '/adults/work', '/adults/work/s58001');
        break
      }
      case "59": {
        this.service.setmoduleID(id, '/adults/leadership', '/adults/leadership/s59001');
        break
      }
      case "60": {
        this.service.setmoduleID(id, '/adults/sorrow', '/adults/sorrow/s60001');
        break
      }
      case "61": {
        this.service.setmoduleID(id, '/adults/loneliness', '/adults/loneliness/s61001');
        break
      }
      case "62": {
        this.service.setmoduleID(id, '/adults/love', '/adults/love/s62001');
        break
      }
      case "63": {
        this.service.setmoduleID(id, '/adults/living-with-peace', '/adults/living-with-peace/s63001');
        break
      }
      case "64": {
        this.service.setmoduleID(id, '/adults/dealing-with-death', '/adults/dealing-with-death/s64001');
        break
      }
      case "73": {
        this.service.setmoduleID(id, '/adults/money', '/adults/money/s73001');
        break
      }
      case "74": {
        this.service.setmoduleID(id, '/adults/how-can-wisdom-help', '/adults/how-can-wisdom-help/s74001');
        break
      }
      case "75": {
        this.wisdomexercise();
        break
      }

      case "76": {
        this.service.setmoduleID(id, '/adults/bullying', '/adults/bullying/s76001');
        break
      }
      case "77": {
        this.service.setmoduleID(id, '/adults/making-better-decisions', '/adults/making-better-decisions/s77001');
        break
      }
      case "92": {
        this.service.setmoduleID(id, '/adults/dealing-with-depression', '/adults/dealing-with-depression/s92001');
        break
      }
      case "91": {
        this.service.setmoduleID(id, '/adults/external-approval', '/adults/external-approval/s91001');
        break
      }
      case "143": {
        this.service.setmoduleID(id, '/adults/diversity-and-inclusion', '/adults/diversity-and-inclusion/s143001');
        break
      }

    }
  }

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


  routeJournal() {
    this.router.navigate(['/adults/journal'])
  }

  goToYourWisdomScoreComponent() {
    this.logeventservice.logEvent('click_wisdom_score');
    this.router.navigate(['/adults/wisdom-survey'], { state: { 'isUseCloseButton': true } });
  }


  DashboardLogevent(route, params, evtName) {
    this.logeventservice.logEvent(evtName);
    if (evtName === 'click_journal') {
      this.router.navigate(['/adults/journal'])
    } else if (params != '' && route != '') {
      this.router.navigate([route, params]);
    } else if (route != '') {
      this.router.navigate([route])
    }
  }

  SubscribeToPremium() {
    this.router.navigate(['/subscription/start-your-free-trial']);
  }

  routeForUser(res) {
    let sid = '';
    if (res['FeatureType'] === "BLOG") {
      this.logeventservice.logEvent("click_blog");
      sid = res['Url'].split('sId=')[1];
      this.router.navigate(['/blog-article'], { queryParams: { sId: `${sid}` } })
    } else if (res['FeatureType'] === "LIFE STORY") {
      this.logeventservice.logEvent("click_life_stories");
      sid = res['Url'].split('sId=')[1];
      this.router.navigate(['/wisdom-stories/view-stories'], { queryParams: { sId: `${sid}` } })
    }
    else if (res['FeatureType'] === "UPCOMING EVENT") {
      this.logeventservice.logEvent("click_upcoming_event");
      sid = res['Url'].split('eid=')[1];
      this.router.navigate(['/events/event'], { queryParams: { eid: `${sid}` } })
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

  routeToFindAnswer(param) {
    localStorage.setItem('lastRoute', param);
    this.logeventservice.logEvent("click_find-answers-" + param);
    this.router.navigate(['/adults/find-answers/' + param]);
  }

  activeTopicRoute(name) {
    if (name === 'Manage your emotions') {
      this.logeventservice.logEvent('click_emotions');
      this.router.navigate(['/adults/curated/manage-your-emotions'])
    } else if (name === 'Mental Health') {
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
    } else if (name === 'Deal with  loss') {
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
    let url = `/adults/site-search/${this.searchinp}`
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
        this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(value?.toLocaleLowerCase()));
      }
    }
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

  getModuleList(isLoad?) {
    this.service.getModuleList().subscribe(res => {
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
}

