import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output, Input, HostListener } from "@angular/core";
import { UntypedFormBuilder, Validators, AbstractControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { LogEventService } from "../../services/log-event.service";
import { Platform } from '@angular/cdk/platform';
import { Router } from "@angular/router";
import { OnboardingService } from "../../services/onboarding.service";
import { SharedService } from "../../services/shared.service";
import { Constant } from "../../services/constant";
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from "@abacritt/angularx-social-login";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared.module";

@Component({
  selector: 'Login-register-modal',
  templateUrl: './login-register-modal.component.html',
  styleUrls: ['./login-register-modal.component.scss'],
  standalone: true,
  imports: [SocialLoginModule, CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('907009432190-v7bpjvuurie68eakqf5neovb5oj3h0b0.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('238869214957032')
          }
        ]
      } as SocialAuthServiceConfig,
    },
  ]
})
export class LoginRegisterModalComponent implements OnInit, AfterViewInit {
  @ViewChild('actclosemodal') actclosemodal: ElementRef;
  @ViewChild('redeemsubscription') redeemsubscription: ElementRef;
  @ViewChild('activemodal') activemodal: ElementRef;

  @Output() closeModal = new EventEmitter<boolean>();
  @Input() isAdvertpage = false;

  login = 'Login';
  public isGuestuser = false
  public isFirsttime = false
  public isSubscriber = false
  public isLoggedIn = false
  public firstpage = true;
  public secondpage = false;
  public thirdpage = false;
  public fourthpage = false;
  public fifthpage = false;
  public sixthpage = false;
  public loginemail: any = '';
  public userId = 100
  public email: any = '';
  public verificationCode: any;
  public loginpassword: any = '';
  public user: any
  public idToken: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public yearormonth = ''
  public modaldata = {}
  public activationCode: any = ''
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  public video = 3
  public audio = 4
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public userName: any
  public showWarning = false
  enableAlert = false;
  content = '';
  enablecancel = false;
  public registrationForm: any;
  enabledModal = false;
  passwordhide: boolean = true;
  confirmpasswordhide: boolean = true;
  alertenabled: boolean = false;

  constructor(
    public platform: Platform,
    private router: Router,
    private services: OnboardingService,
    public fb: UntypedFormBuilder,
    public service: AdultsService,
    public logeventservice: LogEventService,
    public authService: SocialAuthService
  ) {
    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    }, { validator: this.PasswordValidator })
    localStorage.setItem('personalised', 'T');
    let guest = localStorage.getItem('guest');
    let firsttime = localStorage.getItem('first');
    if (firsttime === 'T' || !firsttime) {
      this.isFirsttime = true
    }
    if (guest === 'T') {
      this.isGuestuser = true
    }
    let sub: any = localStorage.getItem('Subscriber');
    let login: any = localStorage.getItem("isloggedin");
    if (sub && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
    if (login && login === 'T') {
      this.isLoggedIn = true;
      this.login = 'Logout';
    } else {
      this.isLoggedIn = false;
    }
    let namedata = localStorage.getItem('name')?.split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    if (namedata?.length > 0) {
      this.modaldata['firstname'] = namedata[0];
      this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.enableAlert && !this.alertenabled && !this.activemodal.nativeElement.contains(event.target)) {
      this.actclosemodal?.nativeElement?.click();
      this.closeModal.emit(false);
    }
  }

  googleLogin(d = '') {

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
    // this.renderGoogle = true;
  }


  private onSuccess(googleUser: any): void {
    console.log('Logged in as: ' + googleUser);
    this.idToken = googleUser.getAuthResponse().id_token;
    this.socialFirstName = googleUser.getBasicProfile().getGivenName();
    this.socialLastName = googleUser.getBasicProfile().getFamilyName()
    this.socialEmail = googleUser.getBasicProfile().getEmail()
    // this.VerifyGoogle();
    this.services
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
          this.firstpage = false
          this.fifthpage = false
          this.thirdpage = true
          this.enabledModal = false
          this.loginResponse = res;
          this.actclosemodal.nativeElement.click();
          this.services.getuser(res.UserId).subscribe(userInfo => {
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
            this.content = "You have entered wrong credentials. Please try again.";
            this.enableAlert = true;
            this.email = "";
          }
          else {
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
            this.services.getuser(res.UserId).subscribe(userInfo => {
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

  // closeFn(event) {
  //   if (this.enabledModal && this.activemodal.nativeElement.contains(event.target)) {
  //     setTimeout(() => {
  //       this.closeModal.emit(false);
  //     })
  //   }
  // }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("userId"))
  }

  ngAfterViewInit(): void {

    this.already(this.isLoggedIn ? 'login' : 'register');
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

  already(value) {
    if (!this.enabledModal) {
      this.redeemsubscription.nativeElement.click();
      setTimeout(() => {
        this.enabledModal = true;
      }, 1000)
    }
    if (value === 'login') {
      setTimeout(() => {
        this.loadGoogleScript();
      }, 1000);
      this.firstpage = false;
      this.fourthpage = false;
      this.thirdpage = false;
      this.passwordhide = true;
      this.confirmpasswordhide = true;
      this.fifthpage = true;
    } else if (value === 'register') {
      setTimeout(() => {
        this.loadGoogleScript();
      }, 1000);
      this.firstpage = true;
      this.passwordhide = true;
      this.confirmpasswordhide = true;
      this.secondpage = false;
      this.fifthpage = false
    }
  }

  PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')
    if (password.pristine || confirmPassword.pristine)
      return null
    return password && confirmPassword && password.value != confirmPassword.value ?
      { 'misMatch': true } : null

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
          if (this.router.url.includes('/redeem-subscription') || this.router.url.includes('/redeem-gift-card')) {
            localStorage.setItem("email", this.registrationForm.get('email').value)
            localStorage.setItem("pswd", this.registrationForm.get('password').value)
            this.emaillogin('second')
          } else {
            this.firstpage = false;
            this.secondpage = true;
          }
        }
      },
        error => {
          this.content = error.error['Message'];
          this.enableAlert = true;
          this.alertenabled = true;
          // window.alert(error.error.Message)
        },
        () => {
        }
      )
  }

  resendotp() {
    this.service.resendotp(this.userId)
      .subscribe(() => {
      }, (err) => {
        console.log(err);
      })
    this.firstpage = false;
    this.secondpage = true;
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
        this.content = err.error['Message'];
        this.enableAlert = true;
        this.alertenabled = true;
        // window.alert(err.error['Message'])
      })
  }

  emaillogin(val = '') {
    let email = val === '' || val === 'second' ? localStorage.getItem("email") : this.loginemail;
    let password = val === '' || val === 'second' ? localStorage.getItem("pswd") : this.loginpassword;
    this.services.emailLogin(email, password)
      .subscribe(
        res => {
          if (res?.Errors) {
            this.content = res?.Errors;
            this.enableAlert = true;
            this.alertenabled = true;
          } else {
            if (val === 'act') {
              localStorage.setItem("isloggedin", 'T')
              localStorage.setItem("remember", 'T')
              this.fifthpage = false;
            } else if (val === 'second') {
              localStorage.setItem("isloggedin", 'T')
              localStorage.setItem("remember", 'T')
              this.secondpage = false;
            }
            // this.firstpage = false
            // this.fifthpage = false
            // this.thirdpage = true
            this.enabledModal = false
            localStorage.setItem("isloggedin", 'T')
            this.isLoggedIn = true
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
            localStorage.setItem("email", email)
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

            }
            else {
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
            this.actclosemodal?.nativeElement?.click();
            this.closeModal.emit(false);
            if (this.isAdvertpage) {
              if (SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.AnnualPlan ||
                SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.MonthlyPlan
              ) {
                this.router.navigateByUrl('/adults/subscription/proceed-to-payment');;
              } else {
                this.router.navigate(['/adults/redeem-subscription']);
              }
            }
          }
        },
        error => { console.log(error) },
        () => {
        }
      )
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
  //           this.enabledModal = false
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

  //           }
  //           else {
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
  //             } else {
  //               localStorage.setItem("isloggedin", 'T')
  //             }
  //           }
  //           this.actclosemodal.nativeElement.click();
  //           this.closeModal.emit(false);
  //           if (this.isAdvertpage) {
  //             if (SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.AnnualPlan ||
  //               SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.MonthlyPlan
  //             ) {
  //               this.router.navigateByUrl('/adults/subscription/proceed-to-payment');;
  //             } else {
  //               this.router.navigate(['/adults/redeem-subscription']);
  //             }
  //           }
  //         }
  //       })
  //   },
  //     error => console.log(error),
  //     () => {

  //     });
  // }

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
              this.enabledModal = false
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

              }
              else {
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
              this.actclosemodal.nativeElement.click();
              this.closeModal.emit(false);
              if (this.isAdvertpage) {
                if (SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.AnnualPlan ||
                  SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.MonthlyPlan
                ) {
                  this.router.navigateByUrl('/adults/subscription/proceed-to-payment');;
                } else {
                  this.router.navigate(['/adults/redeem-subscription']);
                }
              }
            }
          })
      } else {
        this.content = 'Please ensure that you use an email based authentication with your Auth provider or try another method';
        this.enableAlert = true;
        this.alertenabled = true;
        // window.alert('Please ensure that you use an email based authentication with your Auth provider or try another method')
      }
    });

  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enablecancel = false;
    this.enableAlert = false;
    setTimeout(() => {
      this.alertenabled = false;
    }, 200)
    // if (event === 'ok') {
    //   this.logeventservice.logEvent('click_logout_Hamburger')
    //   if (this.platform.isBrowser) {
    //     localStorage.setItem("isloggedin", "F");
    //     localStorage.setItem("guest", "T");
    //     localStorage.setItem("navigateToUpgradeToPremium", "false");
    //     localStorage.setItem("btnClickBecomePartner", "false");
    //     this.router.navigate(["/onboarding/login"]);
    //   }
    // }
  }

  closeModalevent() {
    this.enabledModal = false;
    this.closeModal.emit(false)
  }


  hideFunction(type) {
    if (type === 'password') {
      this.passwordhide = !this.passwordhide;
    } else {
      this.confirmpasswordhide = !this.confirmpasswordhide;
    }
  }
}
