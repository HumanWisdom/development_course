import { AfterViewInit, Component, OnInit } from '@angular/core';
import 'bcswipe';
import { UntypedFormBuilder } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, } from '@abacritt/angularx-social-login';
import { LogEventService } from '../../services/log-event.service';
import { OnboardingService } from '../../services/onboarding.service';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

declare var $: any;
// var carouselId: any = 1;
@Component({
  selector: 'app-intro-carousel',
  templateUrl: './intro-carousel.page.html',
  styleUrls: ['./intro-carousel.page.scss'],
  animations: [
    trigger('slideAnimation', [
      // Wildcard transition for swipe left (next)
      transition('* => left', [
        style({ transform: 'translateX(100%)' }), // start from right
        animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      // Wildcard transition for swipe right (previous)
      transition('* => right', [
        style({ transform: 'translateX(-100%)' }), // start from left
        animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class IntroCarouselPage implements OnInit, AfterViewInit {
  public loading = false;
  nextBtnDis = false;
  //static progress mapping
  mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";
  mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";
  content = '';
  enableAlert = false;
  user: any;
  userId: any;
  idToken: any;
  email: any;
  password: any;
  showAlert = false;
  successPassword = JSON.parse(sessionStorage.getItem("successPassword"));
  showSuccessPassword: any;
  saveUsername = false;
  urlEmail: any;
  urlPassword: any;
  urlKey: any;
  loginResponse: any;
  socialFirstName: any;
  socialLastName: any;
  socialEmail: any;
  userName: any;
  deferredPrompt: any;
  showButton = true;
  enableLogin = false;
  scrId: any;
  x = [];
  isSignUp = false;
  value: number = 100;
  showWarning = false;
  showMessage = false;
  agree = false;
  showVerify = false;
  verificationCode: any;
  codeVerified = false;
  signUser: any;
  video = 3;
  audio = 4;
  carouselId = 1;
  isAdults: boolean = true;
  direction = '';
  currentSection = 0;

  constructor(private router: Router,
    private service: AdultsService,
    public logeventservice: LogEventService,
    private fb: UntypedFormBuilder,
    private activate: ActivatedRoute,
    private authService: SocialAuthService,
    private aservice: AdultsService,
    private onservice: OnboardingService
  ) { }

  ngOnInit() {
    let authtoken = JSON.parse(localStorage.getItem("token"))
    if (authtoken) {
      localStorage.setItem('socialLogin', 'T');
      this.service.verifytoken(authtoken).subscribe((res) => {

        if (res) {
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          let namedata = localStorage.getItem('name').split(' ')
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')
        }
      })
    }

    $('.carousel').bcSwipe({ threshold: 50 });

    $('#ic_carousel').on('slid.bs.carousel', (data) => {
      // let arr = data['relatedTarget']['classList'];
      // let istrue = false;
      // carouselId = parseFloat(arr[1]) + 1;
      // console.log(carouselId);
      // console.log(arr)
      // arr.forEach((d) => {
      //   if (d === '1') {
      //     this.nextBtnDis = true;
      //   }else if(d === '0') {
      //     this.nextBtnDis = false;
      //   }
      // })
      // arr.forEach((d, ind) => {
      //   if (d === '2') {
      //     istrue = true;
      //   }
      // })
      // if (istrue) {
      //   document.getElementById('activenext').style.display = 'none';
      //   document.getElementById('inactivenext').style.display = 'flex';
      // } else {
      //   document.getElementById('activenext') ? document.getElementById('activenext').style.display = 'flex' : '';
      //   document.getElementById('inactivenext') ? document.getElementById('inactivenext').style.display = 'none' : '';
      // }
    })

    this.isAdults = SharedService.ProgramId === 9;
  }

  ngAfterViewInit() {
    if (document.getElementById('inactivenext')) {
      document.getElementById('inactivenext').style.display = 'none';
    }


    $('.carousel').bcSwipe({ threshold: 50 });
    this.loadGoogleScript();
  }

  skip() {
    if (this.isAdults) {
      this.router.navigate(['/adults/onboarding/login']);
    } else {
      this.router.navigate(['/teenagers/onboarding/login']);
    }
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('fromlandingpage', 'F');
    this.logeventservice.logEvent('click_skip_onboarding' + ' ' + this.carouselId);
  }

  onLoad() {
    this.loading = true;
  }


  private loadGoogleScript(): void {
    this.renderButton();
  }

  private renderButton(): void {
    const gapi = (window as any).gapi;
    if (gapi) {
      gapi.signin2.render('my-signin2', {
        scope: 'profile email',
        width: 38,
        height: 38,
        longtitle: false,
        theme: 'dark',
        onsuccess: this.onSuccess.bind(this),
        onfailure: this.onFailure.bind(this)
      });
    }
  }
  private onSuccess(googleUser: any): void {
    console.log('Logged in as: ' + googleUser);
    this.idToken = googleUser.getAuthResponse().id_token;
    this.socialFirstName = googleUser.getBasicProfile().getGivenName();
    this.socialLastName = googleUser.getBasicProfile().getFamilyName()
    this.socialEmail = googleUser.getBasicProfile().getEmail()
    // this.VerifyGoogle();
    this.onservice
      .verifyGoogle({
        TokenID: this.idToken,
        FName: this.socialFirstName,
        LName: this.socialLastName,
        Email: this.socialEmail,
        VCode: "",
        Pwd: "",
      })
      .subscribe((res) => {
        if (res) {
          this.loginResponse = res;
          this.onservice.getuser(res.UserId).subscribe(userInfo => {
            if (userInfo) {
              localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
            }
          })
          localStorage.setItem("guest", "F");
          localStorage.setItem("remember", "T");
          localStorage.setItem("socialLogin", "T");
          localStorage.setItem(
            "mediaAudio",
            JSON.stringify(this.mediaAudio)
          );
          localStorage.setItem(
            "mediaVideo",
            JSON.stringify(this.mediaVideo)
          );
          localStorage.setItem("video", JSON.stringify(this.video));
          localStorage.setItem("audio", JSON.stringify(this.audio));
          localStorage.setItem("btnclick", "F");
          localStorage.setItem(
            "loginResponse",
            JSON.stringify(this.loginResponse)
          );
          sessionStorage.setItem(
            "loginResponse",
            JSON.stringify(this.loginResponse)
          );
          localStorage.setItem(
            "token",
            JSON.stringify(this.loginResponse.access_token)
          );
          localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
          localStorage.setItem("userId", JSON.stringify(this.userId));
          localStorage.setItem("email", this.socialEmail);
          localStorage.setItem("FnName", this.socialFirstName);
          localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
          localStorage.setItem("LName", this.socialLastName);
          localStorage.setItem("pswd", "");
          localStorage.setItem("name", this.loginResponse.Name);
          localStorage.setItem("first", "T");
          if (parseInt(this.loginResponse.UserId) == 0) {
            this.showAlert = true;
            this.content = "You have entered wrong credentials. Please try again.";
            this.enableAlert = true;
            this.email = "";
            this.password = "";
          }
          else {
            this.showAlert = false;
            this.userId = this.loginResponse.UserId;
            this.userName = this.loginResponse.Name;
            localStorage.setItem(
              "loginResponse",
              JSON.stringify(this.loginResponse)
            );
            sessionStorage.setItem(
              "loginResponse",
              JSON.stringify(this.loginResponse)
            );
            localStorage.setItem("userId", JSON.stringify(this.userId));
            localStorage.setItem(
              "token",
              JSON.stringify(this.loginResponse.access_token)
            );
            if (this.saveUsername == true) {
              localStorage.setItem("userId", JSON.stringify(this.userId));
              localStorage.setItem(
                "userEmail",
                JSON.stringify(this.socialEmail)
              );
              localStorage.setItem(
                "userName",
                JSON.stringify(this.userName)
              );
            } else {
              sessionStorage.setItem("userId", JSON.stringify(this.userId));
              sessionStorage.setItem(
                "userEmail",
                JSON.stringify(this.socialEmail)
              );
              sessionStorage.setItem(
                "userName",
                JSON.stringify(this.userName)
              );
            }
            this.onservice.getuser(res.UserId).subscribe(userInfo => {
              if (userInfo) {
                localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
              }
            })
            let pers = localStorage.getItem("personalised");
            let persub = localStorage.getItem("personalised subscription");
            let acceptCookie = localStorage.getItem("activeCode");
            let subscribePage = localStorage.getItem("subscribepage");
            let option = localStorage.getItem("introoption");
            let giftwisdom = localStorage.getItem("giftwisdom");
            const url = SharedService.UrlToRedirect;
            if (url != null) {
              SharedService.UrlToRedirect = null;
              this.router.navigate([url]);
            }
            else if (option === "T") {
              localStorage.setItem("introoption", "F");
              localStorage.setItem("isloggedin", "T");
              this.router.navigate(["/intro/personalised-for-you"]);
            }
            else {
              if (acceptCookie === "T" || subscribePage === "T") {
                localStorage.setItem("isloggedin", "T");
                if (acceptCookie === "T") {
                  localStorage.setItem("activeCode", "F");
                }
                if (subscribePage === "T") {
                  localStorage.setItem("subscribepage", "F");
                }
                if (giftwisdom === 'T') {
                  this.router.navigate(["/onboarding/add-to-cart"]);
                } else if (this.loginResponse.Subscriber === 0) {
                  this.router.navigate(["/onboarding/add-to-cart"]);
                } else {
                  this.router.navigate(["/onboarding/viewcart"])
                }
              }
              else {
                localStorage.setItem("isloggedin", "T");
                if (pers && persub && pers === "T") {
                  this.router.navigate(["/onboarding/viewcart"], {
                    state: { quan: "1", plan: persub },
                  });
                }
                else {
                  localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
                  if (this.loginResponse?.NoOfVisits === 1) {
                    localStorage.setItem(
                      "signupfirst", 'F'
                    );
                    /* if(SharedService.ProgramId === 9) {
                      this.router.navigate(["/adults/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });
                    }else if(SharedService.ProgramId === 11) {
                      // window.location.href = environment.clientUrl+"/teenagers/change-topic";
                      this.router.navigate(["/teenagers/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });
                    } */
                    this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
                      state: {
                        routedFromLogin: true,
                      }
                    });

                  }
                  else {
                    /* if(SharedService.ProgramId === 9) {
                      this.router.navigate(["/adults/repeat-user"]);
                    }else if(SharedService.ProgramId === 11) {
                   //   window.location.href = environment.clientUrl+"/teenagers/change-topic";
                      this.router.navigate(["/teenagers/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });
                    }
                    } */

                    this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
                  }
                }
              }

              /* if(this.urlEmail)
              {
                this.service.verifyUser(this.userId)
                .subscribe(res=>{

                })
              }*/
            }
          }
        }
      });

  }

  private onFailure(error: any): void {
    console.log(error);
  }

  LogEvent(event) {
    this.logeventservice.logEvent(event);
  }

  private VerifyGoogle() {
    this.authService.authState.subscribe(
      (user) => {
        this.user = user;
        this.idToken = user.idToken;
        this.socialFirstName = user.firstName;
        this.socialLastName = user.lastName;
        this.socialEmail = user.email;

        this.onservice
          .verifyGoogle({
            TokenID: this.idToken,
            FName: this.socialFirstName,
            LName: this.socialLastName,
            Email: this.socialEmail,
            VCode: "",
            Pwd: "",
          })
          .subscribe((res) => {
            if (res) {
              this.loginResponse = res;
              this.onservice.getuser(res.UserId).subscribe(userInfo => {
                if (userInfo) {
                  localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
                }
              })
              localStorage.setItem("guest", "F");
              localStorage.setItem("remember", "T");
              localStorage.setItem("socialLogin", "T");
              localStorage.setItem(
                "mediaAudio",
                JSON.stringify(this.mediaAudio)
              );
              localStorage.setItem(
                "mediaVideo",
                JSON.stringify(this.mediaVideo)
              );
              localStorage.setItem("video", JSON.stringify(this.video));
              localStorage.setItem("audio", JSON.stringify(this.audio));
              localStorage.setItem("btnclick", "F");
              localStorage.setItem(
                "loginResponse",
                JSON.stringify(this.loginResponse)
              );
              sessionStorage.setItem(
                "loginResponse",
                JSON.stringify(this.loginResponse)
              );
              localStorage.setItem(
                "token",
                JSON.stringify(this.loginResponse.access_token)
              );
              localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
              localStorage.setItem("userId", JSON.stringify(this.userId));
              localStorage.setItem("email", this.socialEmail);
              localStorage.setItem("FnName", this.socialFirstName);
              localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
              localStorage.setItem("LName", this.socialLastName);
              localStorage.setItem("pswd", "");
              localStorage.setItem("name", this.loginResponse.Name);
              localStorage.setItem("first", "T");
              if (parseInt(this.loginResponse.UserId) == 0) {
                this.showAlert = true;
                this.content = "You have entered wrong credentials. Please try again.";
                this.enableAlert = true;
                this.email = "";
                this.password = "";
              }
              else {
                this.showAlert = false;
                this.userId = this.loginResponse.UserId;
                this.userName = this.loginResponse.Name;
                localStorage.setItem(
                  "loginResponse",
                  JSON.stringify(this.loginResponse)
                );
                sessionStorage.setItem(
                  "loginResponse",
                  JSON.stringify(this.loginResponse)
                );
                localStorage.setItem("userId", JSON.stringify(this.userId));
                localStorage.setItem(
                  "token",
                  JSON.stringify(this.loginResponse.access_token)
                );
                if (this.saveUsername == true) {
                  localStorage.setItem("userId", JSON.stringify(this.userId));
                  localStorage.setItem(
                    "userEmail",
                    JSON.stringify(this.socialEmail)
                  );
                  localStorage.setItem(
                    "userName",
                    JSON.stringify(this.userName)
                  );
                } else {
                  sessionStorage.setItem("userId", JSON.stringify(this.userId));
                  sessionStorage.setItem(
                    "userEmail",
                    JSON.stringify(this.socialEmail)
                  );
                  sessionStorage.setItem(
                    "userName",
                    JSON.stringify(this.userName)
                  );
                }
                this.onservice.getuser(res.UserId).subscribe(userInfo => {
                  if (userInfo) {
                    localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
                  }
                })
                let pers = localStorage.getItem("personalised");
                let persub = localStorage.getItem("personalised subscription");
                let acceptCookie = localStorage.getItem("activeCode");
                let subscribePage = localStorage.getItem("subscribepage");
                let option = localStorage.getItem("introoption");
                let giftwisdom = localStorage.getItem("giftwisdom");
                const url = SharedService.UrlToRedirect;
                if (url != null) {
                  SharedService.UrlToRedirect = null;
                  this.router.navigate([url]);
                }
                else if (option === "T") {
                  localStorage.setItem("introoption", "F");
                  localStorage.setItem("isloggedin", "T");
                  this.router.navigate(["/intro/personalised-for-you"]);
                }
                else {
                  if (acceptCookie === "T" || subscribePage === "T") {
                    localStorage.setItem("isloggedin", "T");
                    if (acceptCookie === "T") {
                      localStorage.setItem("activeCode", "F");
                    }
                    if (subscribePage === "T") {
                      localStorage.setItem("subscribepage", "F");
                    }
                    if (giftwisdom === 'T') {
                      this.router.navigate(["/onboarding/add-to-cart"]);
                    } else if (this.loginResponse.Subscriber === 0) {
                      this.router.navigate(["/onboarding/add-to-cart"]);
                    } else {
                      this.router.navigate(["/onboarding/viewcart"])
                    }
                  }
                  else {
                    localStorage.setItem("isloggedin", "T");
                    if (pers && persub && pers === "T") {
                      this.router.navigate(["/onboarding/viewcart"], {
                        state: { quan: "1", plan: persub },
                      });
                    }
                    else {
                      localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
                      if (this.loginResponse?.NoOfVisits === 1) {
                        localStorage.setItem(
                          "signupfirst", 'F'
                        );
                        /* if(SharedService.ProgramId === 9) {
                          this.router.navigate(["/adults/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        }else if(SharedService.ProgramId === 11) {
                          // window.location.href = environment.clientUrl+"/teenagers/change-topic";
                          this.router.navigate(["/teenagers/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        } */
                        this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
                          state: {
                            routedFromLogin: true,
                          }
                        });

                      }
                      else {
                        /* if(SharedService.ProgramId === 9) {
                          this.router.navigate(["/adults/repeat-user"]);
                        }else if(SharedService.ProgramId === 11) {
                       //   window.location.href = environment.clientUrl+"/teenagers/change-topic";
                          this.router.navigate(["/teenagers/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        }
                        } */

                        this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
                      }
                    }
                  }

                  /* if(this.urlEmail)
                  {
                    this.service.verifyUser(this.userId)
                    .subscribe(res=>{

                    })
                  }*/
                }
              }
            }
          });
      },
      (error) => console.log(error),
      () => {
        //this.router.navigate[('/onboarding/addcart')]
        // window.location.href="https://humanwisdom.me/hwp/webpages/index.php"
      }
    );
  }

  Logevent(route, params, evtName) {
    if (evtName === 'click_next_onboarding') {
      this.currentSection++;
      if (this.currentSection >= 2) {
        this.currentSection = 0;
      }
      this.direction = 'left';
    } else {
      this.direction = 'right';
      if (this.currentSection == 0) {
        this.currentSection = 1;
      } else {
        this.currentSection--;
      }
    }

    this.logeventservice.logEvent(evtName + ' ' + this.currentSection);
    if (params != '' && route != '') {
      this.router.navigate([route, params]);
    } else if (route != '') {
      this.router.navigate([route])
    }
  }

  login() {
    if (this.isAdults) {
      this.router.navigate(['/adults/onboarding/login']);
    } else {
      this.router.navigate(['/teenagers/onboarding/login']);
    }
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('fromlandingpage', 'F');
  }

  routedashboard() {
    this.logeventservice.logEvent('Guest_Login');
    if (this.isAdults) {
      this.router.navigate(['/adults/adult-dashboard'])
    } else {
      this.router.navigate(['/teenagers/teenager-dashboard'])
    }
  }


  googleLogin(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('facebook_signup');
    else
      this.logeventservice.logEvent('facebook_login');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe(
      (user) => {
        this.user = user;
        this.idToken = user.idToken;
        this.socialFirstName = user.firstName;
        this.socialLastName = user.lastName;
        this.socialEmail = user.email;

        this.onservice
          .verifyGoogle({
            TokenID: this.idToken,
            FName: this.socialFirstName,
            LName: this.socialLastName,
            Email: this.socialEmail,
            VCode: "",
            Pwd: "",
          })
          .subscribe((res) => {
            if (res) {
              this.loginResponse = res;
              localStorage.setItem("guest", "F");
              localStorage.setItem("remember", "T");
              localStorage.setItem("socialLogin", "T");
              localStorage.setItem(
                "mediaAudio",
                JSON.stringify(this.mediaAudio)
              );
              localStorage.setItem(
                "mediaVideo",
                JSON.stringify(this.mediaVideo)
              );
              localStorage.setItem("video", JSON.stringify(this.video));
              localStorage.setItem("audio", JSON.stringify(this.audio));
              localStorage.setItem("btnclick", "F");
              localStorage.setItem(
                "loginResponse",
                JSON.stringify(this.loginResponse)
              );
              sessionStorage.setItem(
                "loginResponse",
                JSON.stringify(this.loginResponse)
              );
              localStorage.setItem(
                "token",
                JSON.stringify(this.loginResponse.access_token)
              );
              localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
              localStorage.setItem("userId", JSON.stringify(this.userId));
              localStorage.setItem("email", this.socialEmail);
              localStorage.setItem("FnName", this.socialFirstName);
              localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
              localStorage.setItem("LName", this.socialLastName);
              localStorage.setItem("pswd", "");
              localStorage.setItem("name", this.loginResponse.Name);
              localStorage.setItem("first", "T");
              if (parseInt(this.loginResponse.UserId) == 0) {
                this.showAlert = true;
                this.content = "You have entered wrong credentials. Please try again.";
                this.enableAlert = true;
                this.email = "";
                this.password = "";
              } else {
                this.showAlert = false;
                this.userId = this.loginResponse.UserId;
                this.userName = this.loginResponse.Name;
                localStorage.setItem(
                  "loginResponse",
                  JSON.stringify(this.loginResponse)
                );
                sessionStorage.setItem(
                  "loginResponse",
                  JSON.stringify(this.loginResponse)
                );
                localStorage.setItem("userId", JSON.stringify(this.userId));
                localStorage.setItem(
                  "token",
                  JSON.stringify(this.loginResponse.access_token)
                );
                if (this.saveUsername == true) {
                  localStorage.setItem("userId", JSON.stringify(this.userId));
                  localStorage.setItem(
                    "userEmail",
                    JSON.stringify(this.socialEmail)
                  );
                  localStorage.setItem(
                    "userName",
                    JSON.stringify(this.userName)
                  );
                } else {
                  sessionStorage.setItem("userId", JSON.stringify(this.userId));
                  sessionStorage.setItem(
                    "userEmail",
                    JSON.stringify(this.socialEmail)
                  );
                  sessionStorage.setItem(
                    "userName",
                    JSON.stringify(this.userName)
                  );
                }

                let pers = localStorage.getItem("personalised");
                let persub = localStorage.getItem("personalised subscription");
                let acceptCookie = localStorage.getItem("activeCode");
                let subscribePage = localStorage.getItem("subscribepage");
                let option = localStorage.getItem("introoption");
                let giftwisdom = localStorage.getItem("giftwisdom");
                const url = SharedService.UrlToRedirect;
                if (url != null) {
                  SharedService.UrlToRedirect = null;
                  this.router.navigate([url]);
                }
                else if (option === "T") {
                  localStorage.setItem("introoption", "F");
                  localStorage.setItem("isloggedin", "T");
                  this.router.navigate(["/intro/personalised-for-you"]);
                } else {
                  if (acceptCookie === "T" || subscribePage === "T") {
                    localStorage.setItem("isloggedin", "T");
                    if (acceptCookie === "T") {
                      localStorage.setItem("activeCode", "F");
                    }
                    if (subscribePage === "T") {
                      localStorage.setItem("subscribepage", "F");
                    }
                    if (giftwisdom === 'T') {
                      this.router.navigate(["/onboarding/add-to-cart"]);
                    } else if (this.loginResponse.Subscriber === 0) {
                      this.router.navigate(["/onboarding/add-to-cart"]);
                    } else {
                      this.router.navigate(["/onboarding/viewcart"])
                    }
                  } else {
                    localStorage.setItem("isloggedin", "T");
                    if (pers && persub && pers === "T") {
                      this.router.navigate(["/onboarding/viewcart"], {
                        state: { quan: "1", plan: persub },
                      });
                    } else {
                      localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
                      if (this.loginResponse?.NoOfVisits === 1) {
                        localStorage.setItem(
                          "signupfirst", 'F'
                        );
                        if (this.isAdults) {
                          this.router.navigate(["/adults/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        } else {
                          this.router.navigate(["/teenagers/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        }

                      } else {
                        if (this.isAdults) {
                          this.router.navigate(["/adults/repeat-user"]);

                        } else {
                          this.router.navigate(["/teenagers/repeat-user"]);

                        }

                      }
                    }
                  }
                }

                /* if(this.urlEmail)
                {
                  this.service.verifyUser(this.userId)
                  .subscribe(res=>{

                  })
                }*/
              }
            }
          });
      },
      (error) => console.log(error),
      () => {
        //this.router.navigate[('/onboarding/addcart')]
        // window.location.href="https://humanwisdom.me/hwp/webpages/index.php"
      }
    );
  }

  fbLogin(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('facebook_signup');
    else
      this.logeventservice.logEvent('facebook_login');

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      this.user = user;
      this.idToken = user.authToken;
      this.socialFirstName = user.firstName;
      this.socialLastName = user.lastName;
      this.socialEmail = user.email;
      if (user.email !== undefined) {
        this.onservice
          .verifyFb({
            TokenID: this.idToken,
            FName: this.socialFirstName,
            LName: this.socialLastName,
            Email: this.socialEmail,
            VCode: "",
            Pwd: "",
          })
          .subscribe((res) => {
            if (res) {


              this.loginResponse = res;
              localStorage.setItem("socialLogin", "T");
              localStorage.setItem(
                "mediaAudio",
                JSON.stringify(this.mediaAudio)
              );
              localStorage.setItem(
                "mediaVideo",
                JSON.stringify(this.mediaVideo)
              );
              localStorage.setItem("video", JSON.stringify(this.video));
              localStorage.setItem("audio", JSON.stringify(this.audio));
              localStorage.setItem("remember", "T");
              localStorage.setItem("guest", "F");
              localStorage.setItem("btnclick", "F");
              localStorage.setItem("FnName", this.socialFirstName);
              localStorage.setItem("LName", this.socialLastName);
              localStorage.setItem(
                "loginResponse",
                JSON.stringify(this.loginResponse)
              );
              sessionStorage.setItem(
                "loginResponse",
                JSON.stringify(this.loginResponse)
              );
              localStorage.setItem(
                "token",
                JSON.stringify(this.loginResponse.access_token)
              );
              localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
              localStorage.setItem("userId", JSON.stringify(this.userId));
              localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
              localStorage.setItem("email", this.socialEmail);
              localStorage.setItem("pswd", "");
              localStorage.setItem("name", this.loginResponse.Name);
              localStorage.setItem("first", "T");
              if (parseInt(this.loginResponse.UserId) == 0) {
                this.showAlert = true;
                this.content = "You have entered wrong credentials. Please try again.";
                this.enableAlert = true;
                this.email = "";
                this.password = "";
              } else {
                this.showAlert = false;
                this.userId = this.loginResponse.UserId;
                this.userName = this.loginResponse.Name;
                localStorage.setItem(
                  "loginResponse",
                  JSON.stringify(this.loginResponse)
                );
                sessionStorage.setItem(
                  "loginResponse",
                  JSON.stringify(this.loginResponse)
                );
                localStorage.setItem("userId", JSON.stringify(this.userId));
                localStorage.setItem(
                  "token",
                  JSON.stringify(this.loginResponse.access_token)
                );
                if (this.saveUsername == true) {
                  localStorage.setItem("userId", JSON.stringify(this.userId));
                  localStorage.setItem(
                    "userEmail",
                    JSON.stringify(this.socialEmail)
                  );
                  localStorage.setItem(
                    "userName",
                    JSON.stringify(this.userName)
                  );
                } else {
                  sessionStorage.setItem("userId", JSON.stringify(this.userId));
                  sessionStorage.setItem(
                    "userEmail",
                    JSON.stringify(this.socialEmail)
                  );
                  sessionStorage.setItem(
                    "userName",
                    JSON.stringify(this.userName)
                  );
                }

                let pers = localStorage.getItem("personalised");
                let persub = localStorage.getItem("personalised subscription");
                let acceptCookie = localStorage.getItem("activeCode");
                let subscribePage = localStorage.getItem("subscribepage");
                let option = localStorage.getItem("introoption");
                let giftwisdom = localStorage.getItem("giftwisdom");
                const url = SharedService.UrlToRedirect;
                if (url != null) {
                  SharedService.UrlToRedirect = null;
                  this.router.navigate([url]);
                }
                else if (option === "T") {
                  localStorage.setItem("introoption", "F");
                  localStorage.setItem("isloggedin", "T");
                  this.router.navigate(["/intro/personalised-for-you"]);
                } else {
                  if (acceptCookie === "T" || subscribePage === "T") {
                    localStorage.setItem("isloggedin", "T");
                    if (acceptCookie === "T") {
                      localStorage.setItem("activeCode", "F");
                    }
                    if (subscribePage === "T") {
                      localStorage.setItem("subscribepage", "F");
                    }
                    if (giftwisdom === 'T') {
                      this.router.navigate(["/onboarding/add-to-cart"]);
                    } else if (this.loginResponse.Subscriber === 0) {
                      this.router.navigate(["/onboarding/add-to-cart"]);
                    } else {
                      this.router.navigate(["/onboarding/viewcart"])
                    }
                  } else {
                    localStorage.setItem("isloggedin", "T");
                    if (pers && persub && pers === "T") {
                      this.router.navigate(["/onboarding/viewcart"], {
                        state: { quan: "1", plan: persub },
                      });
                    } else {
                      localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
                      if (this.loginResponse?.NoOfVisits === 1) {
                        localStorage.setItem(
                          "signupfirst", 'F'
                        );
                        if (this.isAdults) {
                          this.router.navigate(["/adults/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        } else {
                          this.router.navigate(["/teenagers/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });

                        }

                      } else {
                        if (this.isAdults) {
                          this.router.navigate(["/adults/repeat-user"]);

                        } else {
                          this.router.navigate(["/teenagers/repeat-user"]);

                        }
                      }
                    }
                  }
                }

                /* if(this.urlEmail)
                  {
                    this.service.verifyUser(this.userId)
                    .subscribe(res=>{

                    })
                  }*/
              }
            }
          });
      } else {
        this.content = "Please ensure that you use an email based authentication with your Auth provider or try another method";
        this.enableAlert = true;
      }
    });
  }

  signInWithApple(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('facebook_signup');
    else
      this.logeventservice.logEvent('facebook_login');
    const CLIENT_ID = "humanwisdom.web.service";
    const REDIRECT_API_URL =
      "https://www.humanwisdom.info/api/verifyAppleToken_html";

    window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
        REDIRECT_API_URL
      )}&response_type=code id_token&scope=name email&response_mode=form_post`,
      "_self"
    );
  }

}
