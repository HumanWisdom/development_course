import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AdultsService } from 'src/app/adults/adults.service';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import { LogEventService } from "src/app/log-event.service";

declare var $: any;
@Component({
  selector: 'app-personalised-for-you',
  templateUrl: './personalised-for-you.page.html',
  styleUrls: ['./personalised-for-you.page.scss'],
})
export class PersonalisedForYouPage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('closepopup') closepopup: ElementRef;

  //static progress mapping
  public mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"

  public selectList = [];
  public indList = [];
  public user: any
  public userId: any
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
  public isloggedIn = false

  constructor(public router: Router,
    public authService: SocialAuthService,
    public aservice: AdultsService,
    public service: OnboardingService,
    public logeventservice: LogEventService) {
    localStorage.setItem('personalised', 'T');
  }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    }
  }

  loginpage() {
    // $("#signuplogin").modal("hide");
    this.logeventservice.logEvent('click_unlock_signup');
    this.closepopup.nativeElement.click();
    localStorage.setItem('introoption', 'T')
    this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
  }

  getselect(value, ind) {
    if (!this.isloggedIn && value !== 'prev') {
      this.enablepopup.nativeElement.click();
    } else {
      if (value !== 'next' && value !== 'prev') {
        if (!(this.selectList.includes(value))) {
          this.selectList.push(value);
          this.indList.push(ind)
          document.getElementById(value).style.background = '#FFFFFF';
          document.getElementById(value).style.color = '#000000';
        } else {
          document.getElementById(value).style.background = 'rgba(255, 255, 255, 0.1)';
          document.getElementById(value).style.color = '#FFFFFF';
          const index = this.selectList.indexOf(value);
          const inde = this.indList.indexOf(ind);
          this.selectList.splice(index, 1);
          this.indList.splice(inde, 1);
        }
        if (this.selectList.length !== 0) {
          document.getElementById('next').style.background = '#FFFFFF';
          document.getElementById('next').style.color = '#000000';
        } else {
          document.getElementById('next').style.background = 'rgba(255, 255, 255, 0.5)';
          document.getElementById('next').style.color = 'rgba(0, 0, 0, 0.5)';
        }
      } else if (value === 'next') {
        if (this.selectList.length !== 0) {
          let reqpay = this.indList.join();
          this.aservice.postUserpreference(reqpay).subscribe((res) => {
            if (res) {
              localStorage.setItem('personalisedlist', JSON.stringify(this.selectList));
              let sub: any = localStorage.getItem('Subscriber');
              if (sub && sub === '0') {
                this.router.navigate(['/intro/subscription-options'])
              } else {
                this.router.navigate(['/adults/adult-dashboard'])
              }
            }
          })
        }
      } else {
        localStorage.setItem('personalisedlist', JSON.stringify(this.selectList));
        this.router.navigate(['/intro/intro-carousel'])
      }
    }
  }


  googleLogin() {
    this.logeventservice.logEvent('gmail_login');
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
              this.router.navigate(['/intro/personalised-for-you']);
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
    this.logeventservice.logEvent('facebook_login');
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
                this.router.navigate(['/intro/personalised-for-you']);
              }
              window.location.reload();
            }

          })
      } else {
        window.alert('Please ensure that you use an email based authentication with your Auth provider or try another method')
      }
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

  guest() {
    localStorage.setItem('remember', 'T');
    localStorage.setItem('guest', 'T');
    this.router.navigate(['/adults/adult-dashboard'])
  }

}

