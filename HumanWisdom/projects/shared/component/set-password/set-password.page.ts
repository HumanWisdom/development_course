import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from "../../services/shared.service";
import { ProgramType } from "../../models/program-model";

@Component({
  selector: 'app-common-set-password',
  templateUrl: './set-password.page.html',
  styleUrls: ['./set-password.page.scss'],
})
export class SetPasswordPage implements OnInit {
  email:any
  password:any
  confirmPassword:any
  successPassword=0
  check:any
  urlEmail:any
  showWarning=false
  userId:any
  idToken:any
  showAlert=false
  socialFirstName:any
  socialLastName:any
  socialEmail:any
  urlKey:any
  user:any
  enableAlert = false;
  content = '';
  passwordhide: boolean = true;
  confirmpasswordhide: boolean = true;
  isAdults = true;

  constructor(private router:Router,
    private service: OnboardingService,
    // private authService: SocialAuthService,
    private activate:ActivatedRoute) {
    this.activate.queryParams.subscribe(params => {
      this.urlEmail= params['email'];

      console.log("urlEmail",this.urlEmail)});

   }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }

  forgotPassword(){
    this.showWarning=false
    if(this.password!=this.confirmPassword)
      this.showWarning=true
    else{
      this.service.forgotPassword({
        "Email":this.urlEmail,
        "Pwd":this.password})
        .subscribe(
          resp=>
          {
            

            if(resp.toLocaleLowerCase().match('your password has been reset.'))
            {


               this.successPassword=1
               sessionStorage.setItem("successPassword",JSON.stringify(this.successPassword))
               this.router.navigate(["/"+ SharedService.getprogramName()+ "/onboarding/login"]);
               this.content = 'Password successfully Set';
              this.enableAlert = true;
              //  window.alert('Password successfully Set')

            }


          })

    }


  }


  // googleLogin(){
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.idToken=user.idToken
  //     this.socialFirstName=user.firstName
  //     this.socialLastName=user.lastName
  //     this.socialEmail=user.email
  //     console.log(user)

  //     this.service.verifyGoogle(this.idToken)
  //     .subscribe(res=>
  //       {

  //         if(res){
  //           this.service.socialLearner({"FnName":this.socialFirstName,
  //         "LName":this.socialLastName,
  //         "Email":this.socialEmail})
  //         .subscribe(
  //           r=>{
  //             console.log(r)
  //             var d=r.split(",")
  //             console.log(d)
  //             this.userId=d[0]
  //             localStorage.setItem("isloggedin", 'T')
  //             sessionStorage.setItem("userId",JSON.stringify(this.userId))
  //             if(this.urlKey && (d[1]==0))
  //             {
  //               console.log("key and no subscriber")
  //               sessionStorage.setItem("urlKey",JSON.stringify(this.urlKey))
  //               this.router.navigate(['/onboarding/activationkey'])


  //             }
  //             else if(!this.urlKey && (d[1]==0))
  //             {
  //               console.log("no key no subscriber")
  //               window.location.href="https://humanwisdom.me/hwp/webpages/index.php"

  //             }

  //             else if(d[1]==0)
  //             {
  //               this.router.navigate(['/adults/adult-dashboard'])

  //             }


  //           }
  //         )


  //         }
  //       })
  //   },
  //   error=>console.log(error),
  //   ()=>{
  //     //this.router.navigate[('/onboarding/addcart')]
  //    // window.location.href="https://humanwisdom.me/hwp/webpages/index.php"
  //   });




  // }

  // fbLogin(){
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //    // this.user = user;
  //     console.log(user)
  //     this.user = user;
  //     this.idToken=user.authToken
  //     this.socialFirstName=user.firstName
  //     this.socialLastName=user.lastName
  //     this.socialEmail=user.email
      

  //     this.service.verifyFb(this.idToken)
  //     .subscribe(res=>
  //       {

  //         if(res){
  //           this.service.socialLearner({"FnName":this.socialFirstName,
  //         "LName":this.socialLastName,
  //         "Email":this.socialEmail})
  //         .subscribe(
  //           r=>{
  //             console.log(r)
  //             var d=r.split(",")
  //             console.log(d)
  //             this.userId=d[0]
  //             localStorage.setItem("isloggedin", 'T')
  //             sessionStorage.setItem("userId",JSON.stringify(this.userId))
  //             if(this.urlKey && (d[1]==0))
  //             {
  //               console.log("key and no subscriber")
  //               sessionStorage.setItem("urlKey",JSON.stringify(this.urlKey))
  //               this.router.navigate(['/onboarding/activationkey'])


  //             }
  //             else if(!this.urlKey && (d[1]==0))
  //             {
  //               console.log("no key no subscriber")
  //               window.location.href="https://humanwisdom.me/hwp/webpages/index.php"

  //             }

  //             else if(d[1]==0)
  //             {
  //               this.router.navigate(['/adults/adult-dashboard'])

  //             }


  //           }
  //         )


  //         }
  //       })
  //   });

  // }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

  hideFunction(type) {
    if (type === 'password') {
      this.passwordhide = !this.passwordhide;
    } else {
      this.confirmpasswordhide = !this.confirmpasswordhide;
    }
  }

}
