import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { AbstractControl, NgForm, UntypedFormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";
import { PlatformModule } from '@angular/cdk/platform';
import { LogEventService } from "../../services/log-event.service";
import { OnboardingService } from "../..//services/onboarding.service";
import { SharedService } from "../../services/shared.service";
import { environment } from "../../../environments/environment";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared.module";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha";

import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Constant } from "../../services/constant";
declare var $: any;
@Component({
  selector: "app-common-login",
  imports: [SocialLoginModule, CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PlatformModule,
    RecaptchaModule,
    GoogleSigninButtonModule,

    RecaptchaFormsModule,
    SharedModule],
  standalone: true,
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
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LelvDIqAAAAAG6RPFwaKk7XgnhYruDwK-FzXjwd',
      } as RecaptchaSettings,
    },
  ],
  templateUrl: "./login-signup.page.html",
  styleUrls: ["./login-signup.page.scss"],
})
export class LoginSignupPage implements OnInit {
  //static progress mapping
  mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";
  mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";

  @ViewChild("enablemodal") enablemodal: ElementRef;
  @ViewChild("closemodal") closemodal: ElementRef;
  @ViewChild("enabletab") enabletab: ElementRef;
  @ViewChild("enableotpmodal") enableotpmodal: ElementRef;
  @ViewChild("closeotpmodal") closeotpmodal: ElementRef;
  isAdults: boolean = true;
  user: any;
  userId: any;
  idToken: any;
  email: any;
  password: any;
  showAlert = false;
  renderGoogle = false;
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
  isSignUp = true;
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
  token: string | undefined;
  t = new Date();
  private clientId = '1840609876679041'; // Replace with your Instagram App Client ID
  private redirectUri = environment.clientUrl + "/adults/adult-dashboard";
  private authUrl = `https://api.instagram.com/oauth/authorize`;
  private accessToken: string | null = null;
  minDate =
    this.t.getFullYear() +
    "-" +
    this.addZero(this.t.getMonth() + 1) +
    "-" +
    this.addZero(this.t.getDate());
  message: any;
  isValidCaptach: boolean = false;
  get fullname() {
    return this.registrationForm?.get("fullname");
  }
  get emailvalid() {
    return this.registrationForm?.get("email");
  }
  get passwordvalid() {
    return this.registrationForm?.get("ogpassword");
  }
  get confirmpasswordvalid() {
    return this.registrationForm?.get("confirmPassword");
  }
  get passwordvalidation() {
    return this.registrationForm?.get("confirmPassword").value !== this.registrationForm.get("ogpassword").value;
  }
  // registrationForm=new FormGroup({
  //   firstName:new FormControl(''),
  //   lastName:new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // })
  registrationForm: any;

  content = '';
  enableAlert = false;
  passwordhide: boolean = true;
  confirmpasswordhide: boolean = true;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    public logeventservice: LogEventService,
    private activate: ActivatedRoute,
    private authService: SocialAuthService,
    private service: OnboardingService,
    private navigtionService: NavigationService,
    private renderer: Renderer2, private el: ElementRef
  ) {
    this.initializeRegistrationForm();
    this.VerifyGoogle();
    // let acceptCookie = localStorage.getItem('acceptcookie');
    // if(acceptCookie === null)
    //   this.router.navigate(['/adults/help-support/cookie-policy'])
    this.activate.queryParams.subscribe((params) => {
      this.urlEmail = params["email"];
      this.urlPassword = params["pwd"];
      let res = localStorage.getItem("isloggedin");
      if (res === "T") {
        this.router.navigate(['/adults/adult-dashboard'])
      } else {
        this.enableLogin = true;
      }
      this.urlKey = params["key"];
      // Print the parameter to the console.
    });
    localStorage.setItem("remember", "T");
    localStorage.setItem("firsttime", "T");
  }

  ngOnInit() {
    if (document.getElementById('password-reveal')) {
      document.getElementById('password-reveal').style.display = 'none';
    }

    setTimeout(() => {
      if (localStorage.getItem("emailCode") === "T") {
        let userid = localStorage.getItem("userIdCode");
        //   this.service.verifyUser(userid).subscribe((res) => { });
      }
    }, 4000);
    // if (!this.router.url.includes('/log-in')) {
    //   window.history.pushState('', '', '/log-in');
    // }
    this.isAdults = SharedService.ProgramId === 9;
    const lastUrl = this.navigtionService.getLastUrlVisited()
    if (lastUrl != null && lastUrl.includes('forgotpassword')) {
      this.isSignUp = false;
    }
  }

  forbiddenNameValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const forbidden = /admin/.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  }

  PasswordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get("ogpassword");
    const confirmPassword = control.get("confirmPassword");
    if (password.pristine || confirmPassword.pristine) return null;
    return password &&
      confirmPassword &&
      password.value != confirmPassword.value
      ? { misMatch: true }
      : null;
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  signup() {
    this.service
      .addUser({
        FName: this.registrationForm.get("fullname").value.split(" ")[0],
        Lname:
          this.registrationForm.get("fullname").value.split(" ")[1] ===
            undefined
            ? ""
            : this.registrationForm.get("fullname").value.split(" ")[1],
        Email: this.registrationForm.get("email").value,
        Pwd: this.registrationForm.get("ogpassword").value,
      })
      .subscribe(
        (res) => {
          if (res > 0) {
            this.signUser = res;
            this.email = this.registrationForm.get("email").value;
            this.password = this.registrationForm.get("ogpassword").value;
            localStorage.setItem("signUser", JSON.stringify(this.signUser));
            this.initializeRegistrationForm();
            this.content = Constant.AccountCreated;
            this.enableAlert = true;
            localStorage.setItem(
              "signupfirst",
              'T'
            );
          }
        },
        (error) => {
          console.log(error.error.Message);
          this.message = error.error.Message;
          this.content = this.message;
          this.enableAlert = true;
          this.showWarning = true;
        },
        () => {
          /*if(this.showWarning=false)
          {
            this.showMessage=true
          }*/
        }
      );
  }

  verifyCode() {
    this.service
      .verifyCode({
        Email: this.registrationForm.get("email").value,
        VCode: this.verificationCode,
      })
      .subscribe(
        (res) => {
          if (res) {
            this.codeVerified = true;
            this.initializeRegistrationForm();
            this.closeotpmodal.nativeElement.click();
            this.closemodal.nativeElement.click();
            this.isSignUp = false;
            localStorage.setItem(
              "codeVerified",
              JSON.stringify(this.codeVerified)
            );
            localStorage.setItem(
              "email",
              JSON.stringify(this.registrationForm.get("email").value)
            );
            localStorage.setItem(
              "password",
              JSON.stringify(this.registrationForm.get("ogpassword").value)
            );
            setTimeout(() => {
              this.content = "Code has been verified , Login with Your Credentials";
              this.enableAlert = true;
            }, 1000)
            localStorage.setItem(
              "signupfirst",
              'T'
            );
          }
        },
        (err) => {
          this.content = err.error["Message"];
          this.enableAlert = true;
        }
      );
  }

  sharedForum(value) {
    this.agree = value;
  }

  googleLogin(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('google_signup');
    else
      this.logeventservice.logEvent('google_login');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadGoogleScript();
    }, 1000);
  }

  getDisplay() {
    if (!this.renderGoogle) {
      return 'display:none;'
    }
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
    this.renderGoogle = true;
  }

  private onSuccess(googleUser: any): void {
    console.log('Logged in as: ' + googleUser);
    this.idToken = googleUser.getAuthResponse().id_token;
    this.socialFirstName = googleUser.getBasicProfile().getGivenName();
    this.socialLastName = googleUser.getBasicProfile().getFamilyName()
    this.socialEmail = googleUser.getBasicProfile().getEmail()
    this.service
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
          this.setUpLoginConfiguration(res);
        }
      })
  }

  signInWithGoogle() {
    var element = document.getElementById('googleLoginbtn');
    element.click();
  }

  private onFailure(error: any): void {
    console.log(error);
  }

  private VerifyGoogle() {
    this.authService.authState.subscribe(
      (user) => {
        if (user.provider?.toLowerCase() == 'google') {
          this.user = user;
          this.idToken = user.idToken;
          this.socialFirstName = user.firstName;
          this.socialLastName = user.lastName;
          this.socialEmail = user.email;

          this.service
            .verifyGoogle({
              TokenID: this.idToken,
              FName: this.socialFirstName,
              LName: this.socialLastName,
              Email: this.socialEmail,
              VCode: "",
              Pwd: "",
            })
            .subscribe((res) => {
              if(res){
                this.setUpLoginConfiguration(res);
              }
            });
        }
      },
      (error) => console.log(error),
      () => {
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
        this.service
          .verifyFb({
            TokenID: this.idToken,
            FName: this.socialFirstName,
            LName: this.socialLastName,
            Email: this.socialEmail,
            VCode: "",
            Pwd: "",
          })
          .subscribe((res) => {
               if(res){
                this.setUpLoginConfiguration(res);
               }
          });
      } else {
        this.content = "Please ensure that you use an email based authentication with your Auth provider or try another method";
        this.enableAlert = true;
      }
    });
  }

  emailLogin() {
    localStorage.removeItem("token");
    if (this.urlEmail) {
      this.service.verifyUser(this.urlEmail).subscribe((res) => { });
    }
    this.service.emailLogin(this.email, this.password).subscribe(
      (res) => {
        this.setUpLoginConfiguration(res);
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    );
  }

  public setUpLoginConfiguration(res: any) {
    if (res.UserId === 0) {
      this.showAlert = true;
      this.content = "You have entered wrong credentials. Please try again.";
      this.enableAlert = true;
      this.email = "";
      this.password = "";
    } else if (res.UserId === -1) {
      this.showAlert = true;
      this.content = "Email was Not Verified. Please signup again with the same Email ID to verify it.";
      this.enableAlert = true;
      this.email = "";
      this.password = "";
    } else {
      const accessObj: any = window;
      (accessObj)?.Moengage.add_unique_user_id(res.UserId.toString()).then(() => {
        (accessObj)?.Moengage.add_email(this.email);
        (accessObj)?.Moengage.add_first_name(res.Name);
      })
      debugger;
      this.loginResponse = res;
      if(this.loginResponse.LastVisit &&  new Date(this.loginResponse.LastVisit).getDate()){
        if(new Date().getDate() > new Date(this.loginResponse.LastVisit).getDate()){
          SharedService.FirstLoginOfTheDay =true;
        }
      }
      localStorage.setItem("socialLogin", "F");
      localStorage.setItem("isloggedin", "T");
      localStorage.setItem("guest", "F");
      localStorage.setItem("btnclick", "F");
      localStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      localStorage.setItem("IsPartner", this.loginResponse.IsPartner);
      localStorage.setItem("PartnerOption", this.loginResponse.PartnerOption);
      sessionStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      localStorage.setItem("token", JSON.stringify(res.access_token));
      localStorage.setItem("Subscriber", res.Subscriber);
      localStorage.setItem("SubscriberType", res.SubscriberType);
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
      localStorage.setItem("email", this.email);
      localStorage.setItem("pswd", this.password);
      localStorage.setItem("name", res.Name);
      localStorage.setItem("first", "T");
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
      localStorage.setItem("video", JSON.stringify(this.video));
      localStorage.setItem("audio", JSON.stringify(this.audio));
      localStorage.setItem("isPartner", res.IsPartner);
      this.showAlert = false;
      this.userId = res.UserId;
      this.userName = res.Name;
      localStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      sessionStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("token", JSON.stringify(res.access_token));
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId));
        localStorage.setItem("userEmail", JSON.stringify(this.email));
        localStorage.setItem("userName", JSON.stringify(this.userName));
      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId));
        sessionStorage.setItem("userEmail", JSON.stringify(this.email));
        sessionStorage.setItem("userName", JSON.stringify(this.userName));
      }
      this.service.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
        }
      })
      this.freescreens();
      let roleid = JSON.parse(localStorage.getItem("RoleID"));
      let emailcode = localStorage.getItem("emailCode");
      if (localStorage.getItem("btnClickBecomePartner") == "T") {
        if (
          localStorage.getItem("SubscriberType") == "Monthly" ||
          localStorage.getItem("SubscriberType") == "Free" ||
          localStorage.getItem("SubscriberType") == "Annual"
        ) {
          localStorage.setItem("btnClickBecomePartner", "false");
          this.router.navigate(['adults/partnership-app']);
        }
      }
      let acceptCookie = localStorage.getItem("activeCode");
      let subscribePage = localStorage.getItem("subscribepage");
      let pers = localStorage.getItem("personalised");
      let persub = localStorage.getItem("personalised subscription");
      let option = localStorage.getItem("introoption");
      let giftwisdom = localStorage.getItem("giftwisdom");
      const url = SharedService.UrlToRedirect;
      if (url == '/adults/subscription/try-free-and-subscribe' && SharedService.isSubscriber()) {
        this.router.navigate(['adults/adult-dashboard']);
        return;
      }
      else if (url == '/teenagers/subscription/try-free-and-subscribe' && SharedService.isSubscriber()) {
        this.router.navigate(['/teenagers/teenager-dashboard']);
        return;
      }
      else if (url != null) {
        SharedService.UrlToRedirect = null;
        this.router.navigate([url]);
      }
      else if (option === "T") {
        localStorage.setItem("introoption", "F");
        localStorage.setItem("isloggedin", "T");
        this.router.navigate(["/intro/personalised-for-you"]);
      } else {
        if (pers && persub && pers === "T") {
          localStorage.setItem("isloggedin", "T");
          this.router.navigate(["/onboarding/payment"], {
            state: { quan: "1", plan: persub },
          });
        }

        if (acceptCookie === "T" || subscribePage === "T") {
          localStorage.setItem("isloggedin", "T");
          if (acceptCookie === "T") {
            localStorage.setItem("activeCode", "F");
          }
          if (subscribePage === "T") {
            localStorage.setItem("subscribepage", "F");
          }
          if (roleid === 8 && emailcode === "T") {
            localStorage.setItem("isloggedin", "T");
            this.router.navigate(["/onboarding/change-password"]);
          } else {
            if (localStorage.getItem("emailCode") === "T") {
              localStorage.setItem("emailCode", "F");
            }
            if (giftwisdom === 'T') {
              this.router.navigate(["/onboarding/add-to-cart"]);
            } else if (this.loginResponse.Subscriber === 0) {
              this.router.navigate(["/onboarding/add-to-cart"]);
            } else {
              this.router.navigate(["/onboarding/viewcart"])
            }
          }
        } else {
          if (roleid === 8 && emailcode === "T") {
            localStorage.setItem("isloggedin", "T");
            this.router.navigate(["/onboarding/change-password"]);
          } else {
            if (localStorage.getItem("emailCode") === "T") {
              localStorage.setItem("emailCode", "F");
            }
            localStorage.setItem("isloggedin", "T");
            if (localStorage.getItem("btnClickBecomePartner") == "T") {
              if (
                localStorage.getItem("SubscriberType") == "Monthly" ||
                localStorage.getItem("SubscriberType") == "Free" ||
                localStorage.getItem("SubscriberType") == "Annual"
              ) {
                localStorage.setItem("btnClickBecomePartner", "F");
                this.router.navigate(['adults/partnership-app']);
              }
            } else {
              if (pers && persub && pers === "T") {
                localStorage.setItem("isloggedin", "T");
                this.router.navigate(["/onboarding/viewcart"], {
                  state: { quan: "1", plan: persub },
                });
              } else {
                if (this.service.navigateToUpgradeToPremium
                ) {
                  if (localStorage.getItem("IsPartner") == "1") {
                    if (
                      localStorage.getItem("PartnerOption") ==
                      "ReceiveIncome"
                    ) {
                      this.service.navigateToUpgradeToPremium = false;
                      this.router.navigate([
                        "/adults/partnership-report/income-activity"]);
                    } else {
                      this.service.navigateToUpgradeToPremium = false;
                      this.router.navigate([
                        "/adults/partnership-report/tree-plantation-report"]);
                    }
                  } else {
                    this.service.navigateToUpgradeToPremium = false;
                    this.router.navigate(['adults/partnership-app']);
                  }
                } else {
                  localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
                  if (this.loginResponse?.NoOfVisits === 1) {
                    localStorage.setItem(
                      "signupfirst", 'F'
                    );
                    if (SharedService.ProgramId === 9) {
                      this.router.navigate(["/adults/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });
                    } else if (SharedService.ProgramId === 11) {
                      this.router.navigate(["/teenagers/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });
                    }

                  } else {
                      this.router.navigate([`${SharedService.getprogramName()}/repeat-user`]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  getfreeuser() {
    this.freescreens();
  }

  handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  getrenew() {
    this.closemodal.nativeElement.click();
    localStorage.setItem("isloggedin", "T");
    this.router.navigate(["/onboarding/add-to-cart"]);
  }

  getsignuptab() {
    this.isSignUp = true;
    this.showAlert = false;
    this.passwordhide = true;
    this.confirmpasswordhide = true;
    this.renderGoogle = false;
    setTimeout(() => {
      this.loadGoogleScript();
      this.renderGoogle = true;
    }, 200);
  }

  freescreens() {
    this.service.freeScreens().subscribe((res) => {
      this.x = [];
      let result = res.map((a) => a.FreeScrs);
      let arr;
      result = result.forEach((element) => {
        if (element && element.length !== 0) {
          this.x.push(element.map((a) => parseInt(a.ScrNo)));
          arr = Array.prototype.concat.apply([], this.x);
        }
      });
      // this.closemodal.nativeElement.click()
      localStorage.setItem("freeScreens", JSON.stringify(arr));
      // localStorage.setItem("isloggedin", 'T')
      // this.router.navigate(['/adults/adult-dashboard'])
    });
  }

 
  signInWithApple(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('apple_signup');
    else
      this.logeventservice.logEvent('apple_login');
    const CLIENT_ID = "humanwisdom.web.service";
    const REDIRECT_API_URL = environment.production ?"https://www.humanwisdom.info/api/verifyAppleToken_html": "https://staging.humanwisdom.info/api/verifyAppleToken_html";
    var popup = window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
        REDIRECT_API_URL
      )}&response_type=code id_token&scope=name email&response_mode=form_post`,
    '_blank',
    'width=500,height=600'
    );
    this.pollPopup(popup);
  }
  private pollPopup(popup): void {
    const intervalId = setInterval(() => {
      if (popup && !popup.closed) {
        try {
         if(localStorage.getItem('isloggedin')=='T'){
           setTimeout(() => {
             this.handleAppleLoginResponse();
           },200);
         }
        } catch (e) {
          clearInterval(intervalId);
          console.error('Unable to access popup location:', e);
        }
      } else {
        clearInterval(intervalId);
        const token = localStorage.getItem('token');
        if(token!=null || token!=''){
          popup.close();
        }
        console.log('Popup was closed');
      
      }
    }, 1000); // Poll every 500 milliseconds
  }

  handleAppleLoginResponse() {
    const token = localStorage.getItem('token');
     if (token) {
        this.router.navigate([SharedService.getDashboardUrls()]);
      }
    } 
  

  routedashboard() {
    this.logeventservice.logEvent('Guest_Login');
    localStorage.setItem('btnclick', 'F')
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }

  navigate(url) {
    this.router.navigate([url]);
  }

  getAlertcloseEvent(event) {
    if (this.content == Constant.AccountCreated) {
      this.emailLogin();
    }
    this.content = '';
    this.enableAlert = false;
  }

  routeForgotPassword() {
    if (this.isAdults) {
      this.router.navigate(['/adults/onboarding/forgotpassword'])
    } else {
      this.router.navigate(['/teenagers/onboarding/forgotpassword'])
    }
  }

  getLoginTab() {
    this.isSignUp = false;
    this.passwordhide = true;
    this.confirmpasswordhide = true;
    this.renderGoogle = false;
    setTimeout(() => {
      this.loadGoogleScript();
      this.renderGoogle = true;
    }, 200);
  }

  initializeRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        fullname: ["", [Validators.required, Validators.minLength(6)]],
        email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        ogpassword: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(6)]],
      }
      ,
      { validator: this.PasswordValidator }
    );
    this.token = undefined;
  }

  hideFunction(type) {
    if (type === 'password') {
      this.passwordhide = !this.passwordhide;
    } else {
      this.confirmpasswordhide = !this.confirmpasswordhide;
    }
  }

  onKeyPress($event) {
    const revealDiv = this.el.nativeElement.querySelector('#password-reveal');
    if (revealDiv) {
      this.renderer.setStyle(revealDiv, 'display', 'none');
    }

  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }

  loginWithInstagram() {
    const url = `${this.authUrl}?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=user_profile,user_media&response_type=code`;
    const popup = window.open(
      url,
      'instagram-login-popup',
      'width=500,height=600',
    );
    setTimeout(() => {
      this.pollPopup(popup)
    }, 1000);
  }

  // private pollPopup(popup) {
  //   const intervalId = setInterval(() => {
  //     if (popup && !popup.closed) {
  //       try {

  //       } catch (e) {
  //         clearInterval(intervalId);
  //         // Handle cross-origin access errors
  //         console.error('Unable to access popup location:', e);
  //       }
  //     } else {
  //       clearInterval(intervalId);
  //       console.log('Popup was closed');
  //       this.service.verifyInstagramLogin(localStorage.getItem('instaToken')).subscribe((res) => {
  //         if (res) {
  //           this.loginResponse = res;
  //           this.service.getuser(res.UserId).subscribe(userInfo => {
  //             if (userInfo) {
  //               localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
  //             }
  //           })
  //           localStorage.setItem("guest", "F");
  //           localStorage.setItem("remember", "T");
  //           localStorage.setItem("socialLogin", "T");
  //           localStorage.setItem(
  //             "mediaAudio",
  //             JSON.stringify(this.mediaAudio)
  //           );
  //           localStorage.setItem(
  //             "mediaVideo",
  //             JSON.stringify(this.mediaVideo)
  //           );
  //           localStorage.setItem("video", JSON.stringify(this.video));
  //           localStorage.setItem("audio", JSON.stringify(this.audio));
  //           localStorage.setItem("btnclick", "F");
  //           localStorage.setItem(
  //             "loginResponse",
  //             JSON.stringify(this.loginResponse)
  //           );
  //           sessionStorage.setItem(
  //             "loginResponse",
  //             JSON.stringify(this.loginResponse)
  //           );
  //           localStorage.setItem(
  //             "token",
  //             JSON.stringify(this.loginResponse.access_token)
  //           );
  //           localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
  //           localStorage.setItem("userId", JSON.stringify(this.userId));
  //           localStorage.setItem("email", this.socialEmail);
  //           localStorage.setItem("FnName", this.socialFirstName);
  //           localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
  //           localStorage.setItem("LName", this.socialLastName);
  //           localStorage.setItem("pswd", "");
  //           localStorage.setItem("name", this.loginResponse.Name);
  //           localStorage.setItem("first", "T");
  //           if (parseInt(this.loginResponse.UserId) == 0) {
  //             this.showAlert = true;
  //             this.content = "You have entered wrong credentials. Please try again.";
  //             this.enableAlert = true;
  //             this.email = "";
  //             this.password = "";
  //           }
  //           else {
  //             this.showAlert = false;
  //             this.userId = this.loginResponse.UserId;
  //             this.userName = this.loginResponse.Name;
  //             localStorage.setItem(
  //               "loginResponse",
  //               JSON.stringify(this.loginResponse)
  //             );
  //             sessionStorage.setItem(
  //               "loginResponse",
  //               JSON.stringify(this.loginResponse)
  //             );
  //             localStorage.setItem("userId", JSON.stringify(this.userId));
  //             localStorage.setItem(
  //               "token",
  //               JSON.stringify(this.loginResponse.access_token)
  //             );
  //             if (this.saveUsername == true) {
  //               localStorage.setItem("userId", JSON.stringify(this.userId));
  //               localStorage.setItem(
  //                 "userEmail",
  //                 JSON.stringify(this.socialEmail)
  //               );
  //               localStorage.setItem(
  //                 "userName",
  //                 JSON.stringify(this.userName)
  //               );
  //             } else {
  //               sessionStorage.setItem("userId", JSON.stringify(this.userId));
  //               sessionStorage.setItem(
  //                 "userEmail",
  //                 JSON.stringify(this.socialEmail)
  //               );
  //               sessionStorage.setItem(
  //                 "userName",
  //                 JSON.stringify(this.userName)
  //               );
  //             }
  //             this.service.getuser(res.UserId).subscribe(userInfo => {
  //               if (userInfo) {
  //                 localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
  //               }
  //             })
  //             let pers = localStorage.getItem("personalised");
  //             let persub = localStorage.getItem("personalised subscription");
  //             let acceptCookie = localStorage.getItem("activeCode");
  //             let subscribePage = localStorage.getItem("subscribepage");
  //             let option = localStorage.getItem("introoption");
  //             let giftwisdom = localStorage.getItem("giftwisdom");
  //             const url = SharedService.UrlToRedirect;
  //             if (url != null) {
  //               SharedService.UrlToRedirect = null;
  //               this.router.navigate([url]);
  //             }
  //             else if (option === "T") {
  //               localStorage.setItem("introoption", "F");
  //               localStorage.setItem("isloggedin", "T");
  //               this.router.navigate(["/intro/personalised-for-you"]);
  //             }
  //             else {
  //               if (acceptCookie === "T" || subscribePage === "T") {
  //                 localStorage.setItem("isloggedin", "T");
  //                 if (acceptCookie === "T") {
  //                   localStorage.setItem("activeCode", "F");
  //                 }
  //                 if (subscribePage === "T") {
  //                   localStorage.setItem("subscribepage", "F");
  //                 }
  //                 if (giftwisdom === 'T') {
  //                   this.router.navigate(["/onboarding/add-to-cart"]);
  //                 } else if (this.loginResponse.Subscriber === 0) {
  //                   this.router.navigate(["/onboarding/add-to-cart"]);
  //                 } else {
  //                   this.router.navigate(["/onboarding/viewcart"])
  //                 }
  //               }
  //               else {
  //                 localStorage.setItem("isloggedin", "T");
  //                 if (pers && persub && pers === "T") {
  //                   this.router.navigate(["/onboarding/viewcart"], {
  //                     state: { quan: "1", plan: persub },
  //                   });
  //                 }
  //                 else {
  //                   localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
  //                   if (this.loginResponse?.NoOfVisits === 1) {
  //                     localStorage.setItem(
  //                       "signupfirst", 'F'
  //                     );
  //                     /* if(SharedService.ProgramId === 9) {
  //                       this.router.navigate(["/adults/change-topic"], {
  //                         state: {
  //                           routedFromLogin: true,
  //                         }
  //                       });
  //                     }else if(SharedService.ProgramId === 11) {
  //                       // window.location.href = environment.clientUrl+"/teenagers/change-topic";
  //                       this.router.navigate(["/teenagers/change-topic"], {
  //                         state: {
  //                           routedFromLogin: true,
  //                         }
  //                       });
  //                     } */
  //                     this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
  //                       state: {
  //                         routedFromLogin: true,
  //                       }
  //                     });

  //                   }
  //                   else {
  //                     /* if(SharedService.ProgramId === 9) {
  //                       this.router.navigate(["/adults/repeat-user"]);
  //                     }else if(SharedService.ProgramId === 11) {
  //                    //   window.location.href = environment.clientUrl+"/teenagers/change-topic";
  //                       this.router.navigate(["/teenagers/change-topic"], {
  //                         state: {
  //                           routedFromLogin: true,
  //                         }
  //                       });
  //                     }
  //                     } */

  //                     this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
  //                   }
  //                 }
  //               }

  //               /* if(this.urlEmail)
  //               {
  //                 this.service.verifyUser(this.userId)
  //                 .subscribe(res=>{
    
  //                 })
  //               }*/
  //             }
  //           }
  //         }
  //       });

  //     }
  //   }, 1000); // Poll every 500 milliseconds
  // }

  resolved(captchaResponse: string) {
    this.service.verifyCaptcha(captchaResponse).subscribe(res => {
      if (res) {
        this.isValidCaptach = res.valid;
      }
    })
  }

}
