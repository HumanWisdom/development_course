import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AdultsService } from 'src/app/adults/adults.service';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  email;
  user:any
  userId:any
  idToken:any
  password:any
  showAlert=false
  socialFirstName:any
  socialLastName:any
  socialEmail:any
  urlKey:any
  showMessage=false

  constructor(private fb: UntypedFormBuilder,
    private router: Router,
    private activate:ActivatedRoute,
    private authService: SocialAuthService,
    private aservice:AdultsService,
    private service:OnboardingService) {
      this.activate.queryParams.subscribe(params => {
        this.urlKey=params['key']
    });
     }

  ngOnInit() {
  }

  recoverPassword(){
    this.service.sendPasswordLink(this.email)
    .subscribe(
      res=>{
        
      },
      error=>{
        console.log(error)
      },
      ()=>{
        window.alert('A recovery link has been sent to you')
      }

    )
  }

  emailKeyup(value) {
    this.email = value;
  }


  googleLogin(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.idToken=user.idToken
      this.socialFirstName=user.firstName
      this.socialLastName=user.lastName
      this.socialEmail=user.email
      console.log(user)

      this.service.verifyGoogle(this.idToken)
      .subscribe(res=>
        {
          
          if(res){
            this.service.socialLearner({"FnName":this.socialFirstName,
          "LName":this.socialLastName,
          "Email":this.socialEmail})
          .subscribe(
            r=>{
              console.log(r)
              var d=r.split(",")
              console.log(d)
              this.userId=d[0]
              localStorage.setItem("isloggedin", 'T')
              sessionStorage.setItem("userId",JSON.stringify(this.userId))
              if(this.urlKey && (d[1]==0))
              {
                console.log("key and no subscriber")
                sessionStorage.setItem("urlKey",JSON.stringify(this.urlKey))
                this.router.navigate(['/onboarding/activationkey'])


              }
              else if(!this.urlKey && (d[1]==0))
              {
                console.log("no key no subscriber")
                window.location.href="https://humanwisdom.me/hwp/webpages/index.php"

              }
                
              else if(d[1]==0)
              {
                this.router.navigate(['/adults/adult-dashboard'])

              }
               

            }
          )
          
            
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
      console.log(user)
      this.user = user;
      this.idToken=user.authToken
      this.socialFirstName=user.firstName
      this.socialLastName=user.lastName
      this.socialEmail=user.email


      this.service.verifyFb(this.idToken)
      .subscribe(res=>
        {
          
          if(res){
            this.service.socialLearner({"FnName":this.socialFirstName,
          "LName":this.socialLastName,
          "Email":this.socialEmail})
          .subscribe(
            r=>{
              console.log(r)
              var d=r.split(",")
              console.log(d)
              this.userId=d[0]
              localStorage.setItem("isloggedin", 'T')
              sessionStorage.setItem("userId",JSON.stringify(this.userId))
              if(this.urlKey && (d[1]==0))
              {
                console.log("key and no subscriber")
                sessionStorage.setItem("urlKey",JSON.stringify(this.urlKey))
                this.router.navigate(['/onboarding/activationkey'])


              }
              else if(!this.urlKey && (d[1]==0))
              {
                console.log("no key no subscriber")
                window.location.href="https://humanwisdom.me/hwp/webpages/index.php"

              }
                
              else if(d[1]==0)
              {
                this.router.navigate(['/adults/adult-dashboard'])

              }
               

            }
          )
          
            
          }
        })
    });

  }

  loginpage() {
    this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
  }

}
