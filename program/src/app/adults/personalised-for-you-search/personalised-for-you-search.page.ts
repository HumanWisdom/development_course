import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'app-personalised-for-you-search',
  templateUrl: './personalised-for-you-search.page.html',
  styleUrls: ['./personalised-for-you-search.page.scss'],
})
export class PersonalisedForYouSearchPage implements OnInit {
  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('closepopup') closepopup: ElementRef;
  searchResult=[];
  personalisedforyou = []

  indList = []
  isloggedIn = false;
  searchinp = '';
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
  public mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public moduleList = [];
  constructor(private route: Router, private aservice: AdultsService, public authService: SocialAuthService, public service: OnboardingService) {
    this.getUserPreference();
    this.getModuleList();
  }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    }
  }
  getModuleList(){
    this.aservice.getModuleList().subscribe(res=>{
      this.moduleList=res;
    })
  }
  getAutoCompleteList(value){
    if(this.moduleList.length>0){
      if(value==null|| value==""){
        this.searchResult=[]
      }else{
        this.searchResult=this.moduleList.filter(x=>(x.ModuleName.toLocaleLowerCase()).includes(value?.toLocaleLowerCase()));
      }
    }
  }

  getUserPreference() {
    this.aservice.getUserpreference().subscribe((res) => {
      let perd = this.aservice.getperList();
      this.personalisedforyou = []
      this.indList = []
      if (res && res !== "") {
        let arr = res.split('').filter((d) => d !== ',');
        arr.forEach((d) => {
          perd.forEach((r) => {
            if (d === r['id']) {
              r['active'] = true;
              this.personalisedforyou.push(r);
            }
          })
        })
        perd.forEach((r) => {
          let find = this.personalisedforyou.some((d) => d['name'] === r['name']);
          if (!find) {
            r['active'] = false;
            this.personalisedforyou.push(r);
          }
        })
        this.personalisedforyou.forEach((d) => {
          if (d['active']) {
            this.indList.push(d['id'])
          }
        })
      } else {
        perd.forEach((r) => {
          r['active'] = false;
          this.personalisedforyou.push(r);
        })
      }
    })
  }

  getinp(event) {
    let url = `/adults/site-search/${this.searchinp}`
    this.route.navigate([url])
  }

  searchEvent(module){
    this.searchinp=module;
    this.searchResult=[];
    this.getinp(module);
  }

  clickbtn(name, val = '', event, ind, id) {
    if (val === '') {
      if (name === 'Manage your emotions') {
        this.route.navigate(['/adults/curated/manage-your-emotions'])
      } else if (name === 'Overcome stress and anxiety') {
        this.route.navigate(['/adults/curated/overcome-stress-anxiety'])
      } else if (name === 'Wisdom for the workplace') {
        this.route.navigate(['/adults/curated/wisdom-for-workplace'])
      } else if (name === 'Have fulfilling relationships') {
        this.route.navigate(['/adults/curated/have-fulfilling-relationships'])
      } else if (name === 'Be happier') {
        this.route.navigate(['/adults/curated/be-happier'])
      } else if (name === 'Change unhelpful habits') {
        this.route.navigate(['/adults/curated/change-unhelpful-habits'])
      } else if (name === 'Deal with sorrow and loss') {
        this.route.navigate(['/adults/curated/deal-with-sorrow-loss'])
      } else if (name === 'Mindfulness') {
        this.route.navigate(['/adults/curated/have-calm-mind'])
      }
    } else {
      if (this.isloggedIn) {
        let fill = this.personalisedforyou.filter((d) => d['name'] === name);
        const index = this.indList.indexOf(id);
        if (fill[0]['active']) {
          if (index > -1) {
            this.indList.splice(index, 1);
          }
        } else {
          this.indList.push(id)
        }
        let reqpay = this.indList.join();
        this.aservice.postUserpreference(reqpay).subscribe((res) => {
          if (res) {
            fill[0]['active'] = fill[0]['active'] ? false : true;
            this.personalisedforyou.splice(ind, 1)
            if (fill[0]['active']) {
              this.personalisedforyou.unshift(fill[0])
            } else {
              this.personalisedforyou.push(fill[0])
            }
            this.indList = []
            this.personalisedforyou.forEach((d) => {
              if (d['active']) {
                this.indList.push(d['id'])
              }
            })
            localStorage.setItem('perapidata', JSON.stringify(this.personalisedforyou));
          }
        })
      } else {
        this.enablepopup.nativeElement.click();
        // window.alert('Please Login to use  this feature.')
      }
    }
  }

  loginpage() {
    this.closepopup.nativeElement.click();
    this.route.navigate(['/onboarding/login'])
  }

  googleLogin() {
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
}
