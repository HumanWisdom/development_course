import { AfterViewInit, Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import 'bcswipe';
import { UntypedFormBuilder } from '@angular/forms';
import { LogEventService } from '../../services/log-event.service';
import { OnboardingService } from '../../services/onboarding.service';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from "../../../environments/environment";

declare var $: any;
declare var google: any;
declare var FB: any;
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
    ]),
    trigger('slideAnimationSafari', [
      // Wildcard transition for swipe left (next)
      transition('* => left', [
        style({ transform: 'translate3d(100%, 0, 0)' }), // start from right
        animate('0.7s ease-in-out', style({ transform: 'translate3d(0, 0, 0)' }))
      ]),
      // Wildcard transition for swipe right (previous)
      transition('* => right', [
        style({ transform: 'translate3d(-100%, 0, 0)' }), // start from left
        animate('0.7s ease-in-out', style({ transform: 'translate3d(0, 0, 0)' }))
      ])
    ])
  ]
})
export class IntroCarouselPage implements OnInit, AfterViewInit, OnDestroy {
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
  methodSTartTime: any;
  methodEndTime: any;
  delay = 20;
  lastClick = 0;
  isIos = false;
  isOnboardingCompleted = false;

  constructor(private router: Router,
    private service: AdultsService,
    public logeventservice: LogEventService,
    private fb: UntypedFormBuilder,
    private activate: ActivatedRoute,
    private aservice: AdultsService,
    private onservice: OnboardingService,
    private zone: NgZone
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

    this.isAdults = SharedService.ProgramId === 9;
    this.isIos = SharedService.isIos;
    this.logeventservice.logEvent('view_onboarding_screen');
    this.loadFacebookSDK();
  }

  ngOnDestroy() {
    if (!this.isOnboardingCompleted) {
      this.logeventservice.logEvent('onboarding_dropped');
    }
  }

  ngAfterViewInit() {
    if (document.getElementById('inactivenext')) {
      document.getElementById('inactivenext').style.display = 'none';
    }

    $('.carousel').bcSwipe({ threshold: 50 });

    // Initialize Google Sign-In callback
    this.loadGoogleSignInScript().then(() => {
      if (typeof google !== 'undefined' && google.accounts) {
        // Initialize Google Identity Services
        google.accounts.id.initialize({
          client_id: environment.googleClientId,
          callback: (response: any) => this.handleCredentialResponse(response),
        });
      }
    }).catch((error) => {
      console.error('Failed to load Google Sign-In:', error);
    });
  }

  skip() {
    if (this.isAdults) {
      this.router.navigate(['/adults/onboarding/login']);
    } else {
      this.router.navigate(['/teenagers/onboarding/login']);
    }
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('fromlandingpage', 'F');
    this.logeventservice.logEvent('onboarding_skip');
  }

  onLoad() {
    this.loading = true;
  }


  private loadGoogleSignInScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (typeof google !== 'undefined' && google.accounts) {
        resolve();
        return;
      }

      // Check if script already exists
      const existingScript = document.getElementById('google-signin-script') ||
        document.querySelector('script[src*="accounts.google.com/gsi/client"]');

      if (existingScript) {
        // Wait for script to load - but don't fail if it takes time
        let attempts = 0;
        const maxAttempts = 100; // Increased timeout
        const checkInterval = setInterval(() => {
          attempts++;
          if (typeof google !== 'undefined' && google.accounts) {
            clearInterval(checkInterval);
            resolve();
          } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            // If script exists but google object not ready, resolve anyway
            // The object might become available later when user clicks
            console.warn('Google Sign-In script exists but object not ready yet');
            resolve(); // Resolve instead of reject - script is loaded, object will be available
          }
        }, 100);
        return;
      }

      // Load script dynamically
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.id = 'google-signin-script';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        // Wait for google object
        setTimeout(() => {
          if (typeof google !== 'undefined' && google.accounts) {
            resolve();
          } else {
            let attempts = 0;
            const maxAttempts = 50; // Increased from 20
            const checkInterval = setInterval(() => {
              attempts++;
              if (typeof google !== 'undefined' && google.accounts) {
                clearInterval(checkInterval);
                resolve();
              } else if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                // Resolve anyway - script is loaded, object might be available later
                console.warn('Google object not immediately available after script load');
                resolve();
              }
            }, 100);
          }
        }, 500); // Increased initial delay
      };

      script.onerror = () => {
        reject(new Error('Failed to load Google Sign-In script'));
      };

      document.head.appendChild(script);
    });
  }

  handleCredentialResponse(response: any) {
    console.log('=== handleCredentialResponse CALLBACK TRIGGERED ===');
    console.log('Response received:', response);

    // Close the overlay immediately when credential is received
    this.closeGoogleSignInOverlay();

    // JWT token from Google
    const idToken = response.credential;
    console.log('Google ID Token:', idToken ? 'Token present (' + idToken.substring(0, 20) + '...)' : 'No token');

    // IMPORTANT: run inside Angular zone
    this.zone.run(() => {
      // Process the credential
      console.log('Processing Google credential in Angular zone');
      this.processGoogleCredential(idToken);
    });
  }

  private processGoogleCredential(idToken: string): void {
    try {
      this.logeventservice.logEvent('google_signup_complete');
      this.logeventservice.logEvent('onboarding_complete');
      this.isOnboardingCompleted = true;
      // Decode JWT to get user information
      const payload = this.decodeJwt(idToken);
      this.idToken = idToken;
      this.socialFirstName = payload.given_name || '';
      this.socialLastName = payload.family_name || '';
      this.socialEmail = payload.email || '';

      if (!this.socialEmail) {
        this.closeGoogleSignInOverlay();
        this.content = "Unable to retrieve email from Google account. Please try again.";
        this.enableAlert = true;
        return;
      }

      // Verify with backend (same logic as before)
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
                // Trigger update to refresh hamburger menu and other components
                //    this.onservice.updateUserDetails.next(true);
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
    } catch (error) {
      console.error('Error processing Google credential:', error);
      this.closeGoogleSignInOverlay();
      this.content = "Google login failed. Please try again.";
      this.enableAlert = true;
    }
  }

  private decodeJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      throw error;
    }
  }

  onSwipe($event) {
    if (this.lastClick >= (Date.now() - this.delay)) {
      return;
    }
    this.lastClick = Date.now();
    $event.srcEvent.stopPropagation()
    $event.srcEvent.cancelBubble = true;
    this.methodSTartTime = Date.now();
    let eventText = "";
    const x = Math.abs($event.deltaX) > 40 ? ($event.deltaX > 0 ? 'right' : 'left') : '';
    const y = Math.abs($event.deltaY) > 40 ? ($event.deltaY > 0 ? 'down' : 'up') : '';

    eventText += `${x} ${y}<br/>`;
    if (eventText.includes("right")) {
      if (this.isIos) {
        $('#ic_carousel').carousel('prev');
      } else {
        $('#mdp_carousel').carousel('prev');
      }
      this.back();
    } else if (eventText.includes("left")) {
      if (this.isIos) {
        $('#ic_carousel').carousel('next');
      } else {
        $('#mdp_carousel').carousel('next');
      }
      this.next();
    }
    else if (eventText.includes('down')) {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      });
      return;
    }
    else if (eventText.includes('up')) {
      window.scrollTo({
        behavior: 'smooth',
        top: 800
      });
    }
    else {
      this.next();
      if (this.isIos) {
        $('#ic_carousel').carousel('next');
      } else {
        $('#mdp_carousel').carousel('next');
      }
    }
  }

  LogEvent(event) {
    this.logeventservice.logEvent(event);
  }

  next() {
    this.currentSection++;
    if (this.currentSection >= 2) {
      this.currentSection = 0;
    }
    this.direction = 'left';
    this.logeventservice.logEvent('onboarding_next');
  }


  back() {
    this.direction = 'right';
    if (this.currentSection == 0) {
      this.currentSection = 1;
    } else {
      this.currentSection--;
    }
    this.logeventservice.logEvent('onboarding_previous');
  }

  //private VerifyGoogle() {
  // Method removed - no longer using angularx-social-login
  // All code below commented out as it depends on angularx-social-login
  /*
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
                      // if(SharedService.ProgramId === 9) {
                      //   this.router.navigate(["/adults/change-topic"], {
                      //     state: {
                      //       routedFromLogin: true,
                      //     }
                      //   });
                      // }else if(SharedService.ProgramId === 11) {
                      //   // window.location.href = environment.clientUrl+"/teenagers/change-topic";
                      //   this.router.navigate(["/teenagers/change-topic"], {
                      //     state: {
                      //       routedFromLogin: true,
                      //     }
                      //   });
                      // }
                      this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });

                    }
                    else {
                      // if(SharedService.ProgramId === 9) {
                      //   this.router.navigate(["/adults/repeat-user"]);
                      // }else if(SharedService.ProgramId === 11) {
                      //   //   window.location.href = environment.clientUrl+"/teenagers/change-topic";
                      //   this.router.navigate(["/teenagers/change-topic"], {
                      //     state: {
                      //       routedFromLogin: true,
                      //     }
                      //   });
                      // }
                      // }

                      this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
                    }
                  }
                }

                // if(this.urlEmail)
                // {
                //   this.service.verifyUser(this.userId)
                //   .subscribe(res=>{
                //
                //   })
                // }
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
  */
  //}

  Logevent(route, params, evtName) {
    if (evtName === 'click_next_onboarding') {
      this.currentSection++;
      if (this.currentSection >= 2) {
        this.currentSection = 0;
      }
      this.direction = 'left';
      this.logeventservice.logEvent('onboarding_next');
    } else if (evtName === 'click_prev_onboarding') {
      this.direction = 'right';
      if (this.currentSection == 0) {
        this.currentSection = 1;
      } else {
        this.currentSection--;
      }
      this.logeventservice.logEvent('onboarding_previous');
    }

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
    this.logeventservice.logEvent('click_login');
    this.logeventservice.logEvent('onboarding_complete');
    this.isOnboardingCompleted = true;
  }

  signup_email() {
    if (this.isAdults) {
      this.router.navigate(['/adults/onboarding/login']);
    } else {
      this.router.navigate(['/teenagers/onboarding/login']);
    }
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('fromlandingpage', 'F');
    this.logeventservice.logEvent('click_signup_email');
    this.logeventservice.logEvent('onboarding_complete');
    this.isOnboardingCompleted = true;
  }

  routedashboard() {
    this.logeventservice.logEvent('continue_guest');
    this.logeventservice.logEvent('onboarding_complete');
    this.isOnboardingCompleted = true;
    if (this.isAdults) {
      this.router.navigate(['/adults/adult-dashboard'])
    } else {
      this.router.navigate(['/teenagers/teenager-dashboard'])
    }
  }

  pauseVideo() {
    this.logeventservice.logEvent('pause_intro_video');
  }

  videoEnded() {
    this.logeventservice.logEvent('complete_intro_video');
  }


  googleLogin(reqtype) {
    console.log('=== googleLogin called ===', reqtype);
    if (reqtype == "signup")
      this.logeventservice.logEvent('click_signup_google');
    else
      this.logeventservice.logEvent('google_login');

    this.handleGoogleSignIn();
  }

  private handleGoogleSignIn(): void {
    console.log('=== handleGoogleSignIn called ===');
    // Ensure Google script is loaded
    if (typeof google === 'undefined' || !google.accounts) {
      console.log('Google not available, loading script...');
      this.loadGoogleSignInScript()
        .then(() => {
          console.log('Google script loaded, initializing...');
          setTimeout(() => {
            this.initializeGoogleSignIn();
          }, 300);
        })
        .catch((error) => {
          console.error('Failed to load Google Sign-In:', error);
          // Still try to show button - script might be loading
          setTimeout(() => {
            if (typeof google !== 'undefined' && google.accounts) {
              this.initializeGoogleSignIn();
            } else {
              this.content = "Google Sign-In is not available. Please refresh the page.";
              this.enableAlert = true;
            }
          }, 1000);
        });
    } else {
      console.log('Google already available, initializing...');
      this.initializeGoogleSignIn();
    }
  }

  private initializeGoogleSignIn(): void {
    console.log('=== initializeGoogleSignIn called ===');
    if (typeof google === 'undefined' || !google.accounts) {
      console.error('Google still not available after load attempt');
      this.content = "Google Sign-In is not available. Please refresh the page.";
      this.enableAlert = true;
      return;
    }

    try {
      // Initialize Google Identity Services
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response: any) => this.handleCredentialResponse(response),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      console.log('Google Identity Services initialized');

      // Always show button overlay - don't rely on prompt
      // The prompt is unreliable and may not show, so we'll show the button directly
      this.showGoogleSignInButton();

      // Optionally try prompt as well (but button is already shown)
      try {
        google.accounts.id.prompt((notification: any) => {
          console.log('Google prompt notification:', notification);
          // Button is already shown, so we don't need to do anything here
        });
      } catch (promptError) {
        console.log('Prompt not available (this is OK):', promptError);
        // Button is already shown, so this is fine
      }
    } catch (error) {
      console.error('Error initializing Google Sign-In:', error);
      this.showGoogleSignInButton();
    }
  }

  /**
   * Close the Google sign-in overlay if it exists
   */
  private closeGoogleSignInOverlay(): void {
    try {
      const overlay = document.getElementById('google-signin-overlay');
      if (overlay) {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        } else if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        console.log('Google sign-in overlay closed');
      }
    } catch (error) {
      console.warn('Error closing Google sign-in overlay:', error);
      // Try alternative method
      const overlays = document.querySelectorAll('#google-signin-overlay');
      overlays.forEach((el) => {
        try {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        } catch (e) {
          console.warn('Error removing overlay element:', e);
        }
      });
    }
  }

  private showGoogleSignInButton(): void {
    console.log('=== showGoogleSignInButton called ===');

    // Remove existing overlay if any
    this.closeGoogleSignInOverlay();

    if (typeof google === 'undefined' || !google.accounts) {
      console.error('Google not available when trying to show button');
      this.content = "Google Sign-In is not available. Please refresh the page.";
      this.enableAlert = true;
      return;
    }

    // Create overlay for button
    const overlay = document.createElement('div');
    overlay.id = 'google-signin-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const container = document.createElement('div');
    container.id = 'google-signin-container';
    container.style.cssText = `
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      min-width: 300px;
      text-align: center;
      position: relative;
    `;

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 28px;
      cursor: pointer;
      color: #666;
      line-height: 1;
      padding: 0;
      width: 30px;
      height: 30px;
    `;
    closeBtn.onclick = () => {
      this.closeGoogleSignInOverlay();
    };
    container.appendChild(closeBtn);

    overlay.appendChild(container);
    document.body.appendChild(overlay);
    console.log('Overlay created and added to DOM');

    // Close on outside click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.closeGoogleSignInOverlay();
      }
    });

    // Render Google button
    setTimeout(() => {
      try {
        console.log('Attempting to render Google button...');
        google.accounts.id.renderButton(container, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          width: '250'
        });
        console.log('Google button rendered successfully');
      } catch (error) {
        console.error('Error rendering Google button:', error);
        this.closeGoogleSignInOverlay();
        this.content = "Google Sign-In failed to initialize. Please refresh the page.";
        this.enableAlert = true;
      }
    }, 200);
  }

  fbLogin(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('click_signup_facebook');
    else
      this.logeventservice.logEvent('facebook_login');

    this.handleFacebookLogin();
  }

  private handleFacebookLogin(): void {
    if (typeof FB === 'undefined') {
      console.error('Facebook SDK not loaded');
      this.content = "Facebook login is not available. Please refresh the page.";
      this.enableAlert = true;
      return;
    }

    FB.login((response: any) => {
      if (response.authResponse) {
        // User logged in successfully
        const accessToken = response.authResponse.accessToken;
        const userId = response.authResponse.userID;

        // Get user info
        FB.api('/me', { fields: 'id,name,email,first_name,last_name' }, (userInfo: any) => {
          if (userInfo && !userInfo.error) {
            this.idToken = accessToken;
            this.socialFirstName = userInfo.first_name || '';
            this.socialLastName = userInfo.last_name || '';
            this.socialEmail = userInfo.email || '';

            if (!this.socialEmail) {
              this.content = "Please ensure that you use an email based authentication with your Facebook account or try another method";
              this.enableAlert = true;
              return;
            }

            // IMPORTANT: run inside Angular zone
            this.zone.run(() => {
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
                    this.setUpLoginConfiguration(res, 'facebook');
                  } else {
                    this.content = "Facebook login verification failed. Please try again.";
                    this.enableAlert = true;
                  }
                }, (error) => {
                  console.error('Facebook verification error:', error);
                  this.content = error.error?.Message || "Facebook login failed. Please try again.";
                  this.enableAlert = true;
                });
            });
          } else {
            console.error('Error fetching Facebook user info:', userInfo.error);
            this.content = "Failed to fetch Facebook user information. Please try again.";
            this.enableAlert = true;
          }
        });
      } else {
        // User cancelled login or did not fully authorize
        if (response.status !== 'unknown') {
          this.content = "Facebook login was cancelled. Please try again.";
          this.enableAlert = true;
        }
      }
    }, { scope: 'email,public_profile' });
  }

  private loadFacebookSDK(): void {
    if (document.getElementById('facebook-jssdk')) {
      return; // Script already loaded
    }

    // Initialize Facebook SDK
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: environment.facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Load Facebook SDK script
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  private setUpLoginConfiguration(res: any, social = ''): void {
    if (social === 'facebook') {
      this.logeventservice.logEvent('facebook_signup_complete');
      this.logeventservice.logEvent('onboarding_complete');
      this.isOnboardingCompleted = true;
    }
    if (social === 'google') {
      this.logeventservice.logEvent('google_signup_complete');
      this.logeventservice.logEvent('onboarding_complete');
      this.isOnboardingCompleted = true;
    }
    if (social === 'apple') {
      this.logeventservice.logEvent('apple_signup_complete');
      this.logeventservice.logEvent('onboarding_complete');
      this.isOnboardingCompleted = true;
    }
    if (res.UserId === 0) {
      this.showAlert = true;
      this.content = "You have entered wrong credentials. Please try again.";
      this.enableAlert = true;
      this.email = "";
      this.password = "";
    } else {
      this.loginResponse = res;
      this.onservice.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
        }
      });

      localStorage.setItem("guest", "F");
      localStorage.setItem("remember", "T");
      localStorage.setItem("socialLogin", "T");
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
      localStorage.setItem("video", JSON.stringify(this.video));
      localStorage.setItem("audio", JSON.stringify(this.audio));
      localStorage.setItem("btnclick", "F");
      localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token));
      localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("email", this.socialEmail);
      localStorage.setItem("FnName", this.socialFirstName);
      localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
      localStorage.setItem("LName", this.socialLastName);
      localStorage.setItem("pswd", "");
      localStorage.setItem("name", this.loginResponse.Name);
      localStorage.setItem("first", "T");

      this.showAlert = false;
      this.userId = this.loginResponse.UserId;
      this.userName = this.loginResponse.Name;
      localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token));

      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId));
        localStorage.setItem("userEmail", JSON.stringify(this.socialEmail));
        localStorage.setItem("userName", JSON.stringify(this.userName));
      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId));
        sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail));
        sessionStorage.setItem("userName", JSON.stringify(this.userName));
      }

      this.onservice.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
        }
      });

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
      } else if (option === "T") {
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
            this.router.navigate(["/onboarding/viewcart"]);
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
              localStorage.setItem("signupfirst", 'F');
              this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
                state: {
                  routedFromLogin: true,
                }
              });
            } else {
              this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
            }
          }
        }
      }
    }
  }

  routetoUrl(url) {

    // this.router.navigate(["/" + SharedService.getprogramName() + url]);
    window.open("/" + SharedService.getprogramName() + url, "_blank");
  }

  signInWithApple(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('click_signup_apple');
    else
      this.logeventservice.logEvent('apple_login');
    const CLIENT_ID = "humanwisdom.web.service";
    localStorage.setItem('appleLogin', 'T');
    let REDIRECT_API_URL = environment.appleSignInAPIAdults;
    if (!SharedService.isAdultProgram()) {
      REDIRECT_API_URL = environment.appleSignInAPITeenagers;
    }
    window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
        REDIRECT_API_URL
      )}&response_type=code id_token&scope=name email&response_mode=form_post`, "_self"
    );
    // this.pollPopup(popup);
  }

}

