import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'bcswipe';
import { AdultsService } from 'src/app/adults/adults.service';
import { LogEventService } from "../../../../../shared/services/log-event.service";
import { UntypedFormBuilder } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { SharedService } from '../../../../../shared/services/shared.service';

declare var $: any;
var carouselId: any = 1;
@Component({
  selector: 'app-intro-carousel',
  templateUrl: './intro-carousel.page.html',
  styleUrls: ['./intro-carousel.page.scss'],
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
  }

  ngAfterViewInit() {
    if(document.getElementById('inactivenext')){
      document.getElementById('inactivenext').style.display = 'none';
    }
    $('#ic_carousel').on('slid.bs.carousel',  (data) => {
      let arr = data['relatedTarget']['classList'];
      let istrue = false;
      carouselId = parseFloat(arr[1]) + 1;
      arr.forEach((d) => {
        if (d === '2') {
          this.nextBtnDis = true;
        }
      })
      arr.forEach((d, ind) => {
        if (d === '4') {
          istrue = true;
        }
      })
      if (istrue) {
        document.getElementById('activenext').style.display = 'none';
        document.getElementById('inactivenext').style.display = 'flex';
      } else {
        document.getElementById('activenext') ? document.getElementById('activenext').style.display = 'flex' : '';
        document.getElementById('inactivenext') ? document.getElementById('inactivenext').style.display = 'none' : '';
      }
    })

    $('.carousel').bcSwipe({ threshold: 50 });
  }

  skip() {
   window.location.href = environment.clientUrl+"/onboarding/login";;
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('fromlandingpage', 'F');
    this.logeventservice.logEvent('click_skip_onboarding' + ' ' + carouselId);
  }

  onLoad() {
    this.loading = true;
  }

  Logevent(route, params, evtName) {
    this.carouselId += 1;
    if(this.carouselId === 3) {
      this.nextBtnDis = true;
    }
    this.logeventservice.logEvent(evtName + ' ' + carouselId);
    if(params !='' && route !='') {
      this.router.navigate([route, params]);
    }else if(route !='') {
      this.router.navigate([route])
      }
    }

    login() {
     window.location.href = environment.clientUrl+"/onboarding/login";;
      localStorage.setItem('personalised', 'F');
      localStorage.setItem('fromlandingpage', 'F');
    }

    routedashboard() {
      this.logeventservice.logEvent('Guest_Login');
      this.router.navigate(['/adults/adult-dashboard'])
    }


    googleLogin(reqtype) {
      if(reqtype=="signup")
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
                          this.router.navigate(["/adults/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        } else {
                          this.router.navigate(["/adults/repeat-user"]);
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
      if(reqtype=="signup")
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
                          this.router.navigate(["/adults/change-topic"], {
                            state: {
                              routedFromLogin: true,
                            }
                          });
                        } else {
                          this.router.navigate(["/adults/repeat-user"]);
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
      if(reqtype=="signup")
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
