import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AdultsService } from 'src/app/adults/adults.service';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

declare var $:any;
@Component({
  selector: 'app-personalised-for-you',
  templateUrl: './personalised-for-you.page.html',
  styleUrls: ['./personalised-for-you.page.scss'],
})
export class PersonalisedForYouPage implements OnInit {
 @ViewChild('enablepopup') enablepopup: ElementRef;

  //static progress mapping
  mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  mediaVideo="https://humanwisdoms3.s3.eu-west-2.amazonaws.com" 

  public selectList = [];
  public indList = [];
  user:any
  userId:any
  idToken:any
  email:any;
  urlEmail:any
  showAlert=false
  successPassword=JSON.parse(sessionStorage.getItem("successPassword"))
  showSuccessPassword:any
 urlPassword:any
 urlKey:any
 loginResponse:any
 socialFirstName:any
 socialLastName:any
 socialEmail:any
 userName:any
 value: number = 100;
  showWarning=false
  showMessage=false
  agree=false
  showVerify=false
  verificationCode:any
  codeVerified=false
  signUser:any
  video=3
  audio=4
  password:any
  saveUsername=false
  isloggedIn=false

  constructor(public router: Router, 
    private activate:ActivatedRoute,
    private authService: SocialAuthService,
    private aservice:AdultsService,
    private service:OnboardingService) { }

  ngOnInit() {
    localStorage.setItem('personalised', 'T');
    let userid = localStorage.getItem('isloggedin');
    if(userid === 'T') {
      this.isloggedIn = true
    }
  }

  loginpage() {
    $("#signuplogin").modal("hide");
    localStorage.setItem('introoption', 'T')
    this.router.navigate(['/onboarding/login'])
  }

  getselect(value, ind) {
    if(!this.isloggedIn && value !== 'prev') {
      this.enablepopup.nativeElement.click();
    }else {
      if(value !== 'next' && value !== 'prev') {
        if(!(this.selectList.includes(value))) {
          this.selectList.push(value);
          this.indList.push(ind)
          document.getElementById(value).style.background = '#FFFFFF';
          document.getElementById(value).style.color = '#000000';
        }else {
          document.getElementById(value).style.background = 'rgba(255, 255, 255, 0.1)';
          document.getElementById(value).style.color = '#FFFFFF';
          const index = this.selectList.indexOf(value);
          const inde = this.indList.indexOf(ind);
          this.selectList.splice(index, 1);
          this.indList.splice(inde, 1);
        }
        if(this.selectList.length !== 0) {
          document.getElementById('next').style.background = '#FFFFFF';
          document.getElementById('next').style.color = '#000000';
        }else {
          document.getElementById('next').style.background = 'rgba(255, 255, 255, 0.5)';
          document.getElementById('next').style.color = 'rgba(0, 0, 0, 0.5)';
        }
      }else if(value === 'next') {
        if(this.selectList.length !== 0) {
          let reqpay = this.indList.join();
          this.aservice.postUserpreference(reqpay).subscribe((res) => {
              if(res) {
                localStorage.setItem('personalisedlist', JSON.stringify(this.selectList));
                        this.router.navigate(['/intro/subscription-options'])
              }
          })
        }
      }else {
        localStorage.setItem('personalisedlist', JSON.stringify(this.selectList));
        this.router.navigate(['/intro/intro-carousel'])
      }
    }
  }


  googleLogin(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.idToken=user.idToken
      this.socialFirstName=user.firstName
      this.socialLastName=user.lastName
      this.socialEmail=user.email

      this.service.verifyGoogle({
        "TokenID": this.idToken,
        "FName":this.socialFirstName,
        "LName": this.socialLastName,
        "Email": this.socialEmail,
         "VCode": "",
         "Pwd": ""
      })
      .subscribe(res=>
        {
          
          if(res){
            
          
              this.loginResponse=res
              localStorage.setItem('guest', 'F');
              localStorage.setItem("remember", 'T')
              localStorage.setItem('socialLogin', 'T');
              localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
              localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
              localStorage.setItem("video",JSON.stringify(this.video))
              localStorage.setItem("audio",JSON.stringify(this.audio))
              localStorage.setItem('btnclick', 'F')
              localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
              sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
              localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
              localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
              localStorage.setItem("userId",JSON.stringify(this.userId))
              localStorage.setItem("email", this.socialEmail)
              localStorage.setItem("FnName", this.socialFirstName)
              localStorage.setItem("RoleID",JSON.stringify(res.RoleID))
              localStorage.setItem("LName", this.socialLastName)
              localStorage.setItem("pswd", '')
              localStorage.setItem("name", this.loginResponse.Name)
              localStorage.setItem("first", 'T')
              if(parseInt(this.loginResponse.UserId)==0)
              {
                this.showAlert=true
                window.alert('You have enetered wrong credentials. Please try again.')
                this.email=""
                this.password=""

              }
              else{
                this.showAlert=false
                this.userId=this.loginResponse.UserId
                this.userName=this.loginResponse.Name
                localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                localStorage.setItem("userId",JSON.stringify(this.userId))
                localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
                if(this.saveUsername==true)
                {
                  localStorage.setItem("userId",JSON.stringify(this.userId))
                  localStorage.setItem("userEmail",JSON.stringify(this.socialEmail))
                  localStorage.setItem("userName",JSON.stringify(this.userName))

                }
                  
                else
                {
                  sessionStorage.setItem("userId",JSON.stringify(this.userId))
                  sessionStorage.setItem("userEmail",JSON.stringify(this.socialEmail))
                  sessionStorage.setItem("userName",JSON.stringify(this.userName))


                }


                let pers = localStorage.getItem('personalised');
                let persub = localStorage.getItem('personalised subscription');
                  let acceptCookie = localStorage.getItem('activeCode');
                  let subscribePage = localStorage.getItem('subscribepage');
                  if(acceptCookie === 'T' || subscribePage === 'T'){
                    localStorage.setItem("isloggedin", 'T')
                    if(acceptCookie === 'T') {
                      localStorage.setItem("activeCode", 'F')
                    }
                    if(subscribePage === 'T') {
                      localStorage.setItem("subscribepage", 'F')
                    }
                  }else {
                    localStorage.setItem("isloggedin", 'T')
                  }
                
            
                /* if(this.urlEmail)
                  {
                    this.service.verifyUser(this.userId)
                    .subscribe(res=>{
                      
                    })
                  }*/

                }

            }
          
        })
    },
    error=>console.log(error),
    ()=>{
      //this.router.navigate[('/onboarding/addcart')]
     // window.location.href="https://humanwisdom.me/hwp/webpages/index.php"
    });

   


  }

  fbLogin(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
     // this.user = user;
      this.user = user;
      this.idToken=user.authToken
      this.socialFirstName=user.firstName
      this.socialLastName=user.lastName
      this.socialEmail=user.email
      if(user.email !== undefined) {
        this.service.verifyFb({
          "TokenID": this.idToken,
          "FName":this.socialFirstName,
          "LName": this.socialLastName,
          "Email": this.socialEmail,
           "VCode": "",
           "Pwd": ""
        })
        .subscribe(res=>
          {
            
            if(res){
             
                this.loginResponse=res
                localStorage.setItem('socialLogin', 'T');
                localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
                localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
                localStorage.setItem("video",JSON.stringify(this.video))
                localStorage.setItem("audio",JSON.stringify(this.audio))
                localStorage.setItem("remember", 'T')
                localStorage.setItem('guest', 'F');
                localStorage.setItem('btnclick', 'F')
                localStorage.setItem("FnName", this.socialFirstName)
                localStorage.setItem("LName", this.socialLastName)
                localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
                localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
                localStorage.setItem("userId",JSON.stringify(this.userId))
                localStorage.setItem("RoleID",JSON.stringify(res.RoleID))
                localStorage.setItem("email", this.socialEmail)
                localStorage.setItem("pswd", '')
                localStorage.setItem("name", this.loginResponse.Name)
                localStorage.setItem("first", 'T')
                if(parseInt(this.loginResponse.UserId)==0)
                {
                  this.showAlert=true
                  window.alert('You have enetered wrong credentials. Please try again.')
                  this.email=""
                  this.password=""
  
                }
                else{
                  this.showAlert=false
                  this.userId=this.loginResponse.UserId
                  this.userName=this.loginResponse.Name
                  localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                  sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                  localStorage.setItem("userId",JSON.stringify(this.userId))
                  localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
                  if(this.saveUsername==true)
                  {
                    localStorage.setItem("userId",JSON.stringify(this.userId))
                    localStorage.setItem("userEmail",JSON.stringify(this.socialEmail))
                    localStorage.setItem("userName",JSON.stringify(this.userName))
  
                  }
                    
                  else
                  {
                    sessionStorage.setItem("userId",JSON.stringify(this.userId))
                    sessionStorage.setItem("userEmail",JSON.stringify(this.socialEmail))
                    sessionStorage.setItem("userName",JSON.stringify(this.userName))
  
  
                  }
  
                  let pers = localStorage.getItem('personalised');
                   let persub = localStorage.getItem('personalised subscription');
                    let acceptCookie = localStorage.getItem('activeCode');
                    let subscribePage = localStorage.getItem('subscribepage');
                    if(acceptCookie === 'T' || subscribePage === 'T'){
                      localStorage.setItem("isloggedin", 'T')
                      if(acceptCookie === 'T') {
                        localStorage.setItem("activeCode", 'F')
                      }
                      if(subscribePage === 'T') {
                        localStorage.setItem("subscribepage", 'F')
                      }
                    }else {
                      localStorage.setItem("isloggedin", 'T')
                    }
                  
              
                  /* if(this.urlEmail)
                    {
                      this.service.verifyUser(this.userId)
                      .subscribe(res=>{
                        
                      })
                    }*/
  
                  }
              }
            
          })
      }else {
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
function viewchild(arg0: string) {
  throw new Error('Function not implemented.');
}

