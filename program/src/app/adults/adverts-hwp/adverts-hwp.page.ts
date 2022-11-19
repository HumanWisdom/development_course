import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'HumanWisdom-adverts-hwp',
  templateUrl: './adverts-hwp.page.html',
  styleUrls: ['./adverts-hwp.page.scss'],
})
export class AdvertsHwpPage implements OnInit {
  @ViewChild('actclosemodal') actclosemodal: ElementRef;

  public isGuestuser = false
  public isFirsttime = false
  public isSubscriber = false
  public isLoggedIn = false
  public countryCode: any = '';
  public cardlist = []
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
  public subthirdpage = false;
  public subfirstpage = true;
  public subsecondpage = false;
  public user: any
  public idToken: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public yearormonth = ''
  public modaldata = {}
  public activationCode: any = ''

  public registrationForm = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(3)]],
    lname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
  }, { validator: this.PasswordValidator })

  constructor(
    public platform: Platform,
    private router: Router,
    private services: OnboardingService,
    public fb: UntypedFormBuilder,
    public service: AdultsService,
    public authService: SocialAuthService
  ) {
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
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.getCountry()
  }

  getCountry() {
    this.services.getCountry().subscribe((res: any) => {
      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
    }, error => {
      console.log(error)
    });
  }

  getPricing() {
    this.services.getPricing(this.countryCode).subscribe(res => {
      this.cardlist = res[0];
    }, (err) => {
      window.alert(err.error['Message'])
    }
    )
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



  clickbanner(url = '') {
    if (url === '') {
      if (this.platform.IOS || this.platform.SAFARI) {
        window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
      } else if (this.platform.ANDROID) {
        window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      }
    } else {
      window.open(url)
    }
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

  routedashboard(val = '') {
    if (val === 'free') {
      if (!this.isLoggedIn) {
        this.router.navigate(['/onboarding/login'])
      } else {
        this.router.navigate(['/adults/adult-dashboard'])
      }
    } else if (!this.isLoggedIn) {
      localStorage.setItem("subscribepage", 'T')
      this.router.navigate(['/onboarding/login'])
    } else if (this.isLoggedIn && !this.isSubscriber) {
      localStorage.setItem('cartlist', JSON.stringify(this.cardlist));
      localStorage.setItem('personalised subscription', val);
      this.router.navigate(['/onboarding/viewcart'], { state: { quan: '1', plan: val } })
    } else if (this.isGuestuser) {
      this.router.navigate(['/onboarding/login'])
    }
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

  resendotp() {
    this.service.resendotp(this.userId)
      .subscribe(() => {
      }, (err) => {
        console.log(err);
      })

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
        },
        error => { console.log(error) },
        () => {
        }
      )
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
            }
          })
      } else {
        window.alert('Please ensure that you use an email based authentication with your Auth provider or try another method')
      }
    });

  }
}
