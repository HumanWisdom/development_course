import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { LogEventService } from "../../../../../shared/services/log-event.service";
import { OnboardingService } from '../../../../../shared/services/onboarding.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  email: any
  password: any
  oldpassword: any
  confirmPassword: any
  successPassword = 0
  check: any
  urlEmail: any
  showWarning = false
  userId: any
  idToken: any
  showAlert = false
  socialFirstName: any
  socialLastName: any
  socialEmail: any
  urlKey: any
  user: any
  content = '';
  enableAlert = false;

  constructor(private router: Router,
    private service: OnboardingService,
    private authService: SocialAuthService,
    private activate: ActivatedRoute,
    public logeventservice: LogEventService
    ) {
    this.activate.queryParams.subscribe(params => {
      this.urlEmail = params['email'];
    });

  }

  ngOnInit() {
  }

  forgotPassword() {
    this.logeventservice.logEvent('click_submit_change_password');
    this.showWarning = false
    if (!this.password && !this.confirmPassword && !this.oldpassword) {
      this.content = 'Please enter all the password fields';
      this.enableAlert = true;
    } else if (this.password != this.confirmPassword || this.oldpassword != localStorage.getItem("pswd")) {
      if (this.oldpassword != localStorage.getItem("pswd")) {
        this.content = 'Old password you have entered is incorrect';
        this.enableAlert = true;
      } else {
        this.content = 'Confirm & New Password do not match';
        this.enableAlert = true;
      }
    } else {
      let userId = JSON.parse(localStorage.getItem("userId"))
      let email = localStorage.getItem("email")
      this.service.setPassword({
        "UserID": userId,
        "Pwd": this.password
      })
        .subscribe(
          resp => {
            console.log(resp)
            let roleid = JSON.parse(localStorage.getItem('RoleID'));
            let emailcode = localStorage.getItem("emailCode");
            if (resp.toLocaleLowerCase().match('your password has been reset.')) {
              localStorage.setItem('pswd', this.password)
              if (roleid === 8 && emailcode === 'T') {
                localStorage.setItem("emailCode", 'F');
                window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
              } else {
                this.successPassword = 1
                localStorage.setItem("emailCode", 'F');
                sessionStorage.setItem("successPassword", JSON.stringify(this.successPassword))
                this.router.navigate(["/onboarding/login"]);
              }
              this.content = 'Your password has been reset.';
              this.enableAlert = true;
            }


          })

    }


  }


  googleLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.idToken = user.idToken
      this.socialFirstName = user.firstName
      this.socialLastName = user.lastName
      this.socialEmail = user.email
      console.log(user)

      this.service.verifyGoogle(this.idToken)
        .subscribe(res => {

          if (res) {
            this.service.socialLearner({
              "FnName": this.socialFirstName,
              "LName": this.socialLastName,
              "Email": this.socialEmail
            })
              .subscribe(
                r => {

                  let loginResponse = r
                  console.log(loginResponse)
                  localStorage.setItem('guest', 'F');
                  localStorage.setItem("remember", 'T')
                  localStorage.setItem('socialLogin', 'T');
                  localStorage.setItem('btnclick', 'F')
                  localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                  sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                  localStorage.setItem("token", JSON.stringify(loginResponse.access_token))
                  localStorage.setItem("Subscriber", loginResponse.Subscriber)
                  localStorage.setItem("userId", JSON.stringify(this.userId))
                  localStorage.setItem("email", this.socialEmail)
                  localStorage.setItem("FnName", this.socialFirstName)
                  localStorage.setItem("RoleID", JSON.stringify(r.RoleID))
                  localStorage.setItem("LName", this.socialLastName)
                  localStorage.setItem("pswd", '')
                  localStorage.setItem("name", loginResponse.Name)
                  localStorage.setItem("first", 'T')
                  if (parseInt(loginResponse.UserId) == 0) {
                    this.showAlert = true
                    this.content = 'You have entered wrong credentials. Please try again.';
                    this.enableAlert = true;
                    this.email = ""
                    this.password = ""

                  }
                  else {
                    this.showAlert = false
                    let saveUsername = false
                    this.userId = loginResponse.UserId
                    let userName = loginResponse.Name
                    localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                    sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                    localStorage.setItem("userId", JSON.stringify(this.userId))
                    localStorage.setItem("token", JSON.stringify(loginResponse.access_token))
                    console.log(localStorage.getItem("token"), "this is local token")
                    if (saveUsername) {
                      localStorage.setItem("userId", JSON.stringify(this.userId))
                      localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                      localStorage.setItem("userName", JSON.stringify(userName))

                    }

                    else {
                      sessionStorage.setItem("userId", JSON.stringify(this.userId))
                      sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                      sessionStorage.setItem("userName", JSON.stringify(userName))


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
                      this.router.navigate(['/onboarding/add-to-cart'])
                    } else {
                      localStorage.setItem("isloggedin", 'T')
                      this.router.navigate(['/adults/adult-dashboard'])
                    }


                    /* if(this.urlEmail)
                      {
                        this.service.verifyUser(this.userId)
                        .subscribe(res=>{

                        })
                      }*/

                  }

                }
              )


          }
        })
    },
      error => console.log(error),
      () => {
        //this.router.navigate[('/onboarding/addcart')]
        // window.location.href="https://humanwisdom.me/hwp/webpages/index.php"
      });




  }

  fbLogin() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      console.log(user)
      this.user = user;
      this.idToken = user.authToken
      this.socialFirstName = user.firstName
      this.socialLastName = user.lastName
      this.socialEmail = user.email
      if (user.email !== undefined) {
        this.service.verifyFb(this.idToken)
          .subscribe(res => {

            if (res) {
              this.service.socialLearner({
                "FName": this.socialFirstName,
                "LName": this.socialLastName,
                "Email": this.socialEmail
              })
                .subscribe(
                  r => {
                    let loginResponse = r
                    console.log(loginResponse)
                    localStorage.setItem('socialLogin', 'T');
                    localStorage.setItem("remember", 'T')
                    localStorage.setItem('guest', 'F');
                    localStorage.setItem('btnclick', 'F')
                    localStorage.setItem("FnName", this.socialFirstName)
                    localStorage.setItem("LName", this.socialLastName)
                    localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                    sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                    localStorage.setItem("token", JSON.stringify(loginResponse.access_token))
                    localStorage.setItem("Subscriber", loginResponse.Subscriber)
                    localStorage.setItem("userId", JSON.stringify(this.userId))
                    localStorage.setItem("RoleID", JSON.stringify(r.RoleID))
                    localStorage.setItem("email", this.socialEmail)
                    localStorage.setItem("pswd", '')
                    localStorage.setItem("name", loginResponse.Name)
                    localStorage.setItem("first", 'T')
                    if (parseInt(loginResponse.UserId) == 0) {
                      this.showAlert = true
                      this.content = 'You have entered wrong credentials. Please try again.';
                      this.enableAlert = true;
                      this.email = ""
                      this.password = ""

                    }
                    else {
                      this.showAlert = false
                      let saveUsername = false
                      this.userId = loginResponse.UserId
                      let userName = loginResponse.Name
                      localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                      sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse))
                      localStorage.setItem("userId", JSON.stringify(this.userId))
                      localStorage.setItem("token", JSON.stringify(loginResponse.access_token))
                      console.log(localStorage.getItem("token"), "this is local token")
                      if (saveUsername) {
                        localStorage.setItem("userId", JSON.stringify(this.userId))
                        localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                        localStorage.setItem("userName", JSON.stringify(userName))

                      }

                      else {
                        sessionStorage.setItem("userId", JSON.stringify(this.userId))
                        sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                        sessionStorage.setItem("userName", JSON.stringify(userName))


                      }


                      let roleid = JSON.parse(localStorage.getItem('RoleID'));
                      let emailcode = localStorage.getItem("emailCode");

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
                        if (roleid === 8 && emailcode === 'T') {
                          localStorage.setItem("isloggedin", 'T')
                          this.router.navigate(['/onboarding/set-password'])
                        } else {
                          this.router.navigate(['/onboarding/add-to-cart'])
                        }
                      } else {
                        if (roleid === 8 && emailcode === 'T') {
                          localStorage.setItem("isloggedin", 'T')
                          this.router.navigate(['/onboarding/set-password'])
                        } else {
                          localStorage.setItem("isloggedin", 'T')
                          this.router.navigate(['/adults/adult-dashboard'])
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
                )


            }
          })
      } else {
        this.content = 'Please ensure that you use an email based authentication with your Auth provider or try another method';
        this.enableAlert = true;
      }
    });

  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

}

