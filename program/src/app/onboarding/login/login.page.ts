import { Component, OnInit, OnDestroy,HostListener, ViewChild, ElementRef } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import {OnboardingService} from '../onboarding.service'
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router,ActivatedRoute } from '@angular/router';
import {AdultsService} from '../../adults/adults.service'

import { NgxCaptureService } from 'ngx-capture';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit,OnDestroy {
  @ViewChild('enablemodal') enablemodal:ElementRef;
  @ViewChild('closemodal') closemodal:ElementRef;

  user:any
  userId:any
  idToken:any
  email:any
  password:any
  showAlert=false
  successPassword=JSON.parse(sessionStorage.getItem("successPassword"))
  codeVerified=JSON.parse(localStorage.getItem("codeVerified"))
  showSuccessPassword:any
 saveUsername=false
 urlEmail:any
 urlPassword:any
 urlKey:any
 loginResponse:any
 socialFirstName:any
 socialLastName:any
 socialEmail:any
 userName:any
 deferredPrompt: any;
 showButton = true;
 enableLogin = false;
  scrId:any
  x=[]

 
 

  @ViewChild('screen', { static: true }) screen: any;

  constructor(private authService: SocialAuthService,private router:Router,
    private service: OnboardingService,
    private activate:ActivatedRoute,
    private aservice:AdultsService,
    private captureService:NgxCaptureService
    ) { 
    this.activate.queryParams.subscribe(params => {
      this.urlEmail= params['email'];
      this.urlPassword=params['pwd'];
      let res = localStorage.getItem("isloggedin")
      if(res === 'T') {
        this.router.navigate(['/adults/adult-dashboard'])
      }else {
        this.enableLogin = true
      }
      this.urlKey=params['key']
      console.log(this.urlEmail,this.urlKey)
       // Print the parameter to the console. 
  });}

  ngOnInit() {
    
  /*  this.captureService.getImage(this.screen.nativeElement, true).toPromise().then(img=>{
      console.log(img);
      this.DataURIToBlob(img)
    })
*/
    


  
    
    console.log(this.urlKey)
    /*if(this.codeVerified==true)
    {
      this.email=JSON.parse(localStorage.getItem("email"))
      this.password=JSON.parse(localStorage.getItem("password"))

    }*/
    localStorage.setItem("saveUsername",JSON.stringify(this.saveUsername))
   
    console.log(this.successPassword)
    if(this.successPassword==1)
    {
      this.showSuccessPassword=true
      this.successPassword=0
      sessionStorage.setItem("successPassword",this.successPassword)
     // this.showSuccessPassword=false

     

    }
     
   
  }

  ngOnDestroy(){
    this.showSuccessPassword=false
    console.log(localStorage.getItem("saveUsername"))
  }
  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
        
    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)
      
        return new Blob([ia], { type: mimeString })
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

  emailLogin(){
    debugger;
    localStorage.removeItem("token")
    if(this.urlEmail)
          {
            this.service.verifyUser(this.urlEmail)
            .subscribe(res=>{
              
            })
          }
    this.service.emailLogin(this.email,this.password)
    .subscribe(
      res=>
      {//
        debugger;
        this.loginResponse=res
        this.userId=res.UserId
        console.log(this.loginResponse)
        localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("token",JSON.stringify(res.access_token))
        localStorage.setItem("Subscriber", res.Subscriber)
        localStorage.setItem("userId",JSON.stringify(this.userId))
        localStorage.setItem("email", this.email)
        localStorage.setItem("pswd", this.password)
        localStorage.setItem("name", res.Name)
        localStorage.setItem("first", 'T')
        if(res.UserId==0)
        {
          this.showAlert=true
          this.email=""
          this.password=""

        }
        else{
          this.showAlert=false
          this.userId=res.UserId
          this.userName=res.Name
          localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
          sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
          localStorage.setItem("userId",JSON.stringify(this.userId))
          localStorage.setItem("token",JSON.stringify(res.access_token))
          console.log(localStorage.getItem("token"),"this is local token")
          if(this.saveUsername==true)
          {
            localStorage.setItem("userId",JSON.stringify(this.userId))
            localStorage.setItem("userEmail",JSON.stringify(this.email))
            localStorage.setItem("userName",JSON.stringify(this.userName))

          }
            
          else
          {
            sessionStorage.setItem("userId",JSON.stringify(this.userId))
            sessionStorage.setItem("userEmail",JSON.stringify(this.email))
            sessionStorage.setItem("userName",JSON.stringify(this.userName))


          }


          if((this.loginResponse.Subscriber==0))
          {
            this.enablemodal.nativeElement.click();
          }else {
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
         
       
      },
      error=>{console.log(error)},
      ()=>{
        // this.freeScreens()
        // localStorage.setItem("userId",JSON.stringify(this.userId))
        // console.log("urlKey",this.urlKey)
        // if(this.showAlert==false)
        // {
        //   console.log("showAlert is false",this.loginResponse.Subscriber,"subscriber")
        //   if((this.loginResponse.Subscriber==0) && this.urlKey)
        //   {
        //     console.log("key and not subscriber")
        //     sessionStorage.setItem("urlKey",JSON.stringify(this.urlKey))
        //     this.router.navigate(['/onboarding/activationkey'])

        //   }
         
        //  else if((this.loginResponse.Subscriber==0) && !this.urlKey)
        //  {
          //  console.log("no key no subscriber")
          // window.location.href="https://humanwisdom.me/hwp/webpages/index.php"
        //    this.router.navigate(['/adults/adult-dashboard'])
        //   }
          
         
        //  else if(this.loginResponse.Subscriber==1)
        //  {
        //    console.log("subscriber")
        //    this.router.navigate(['/adults/adult-dashboard'])
        //  }
           

        // }
         
      }

      
    )
  }

  getfreeuser() {
    this.freescreens()
  } 

  getrenew() {
    this.closemodal.nativeElement.click()
    localStorage.setItem("isloggedin", 'T')
    this.router.navigate(['/onboarding/add-to-cart'])
  }

  rememberUsername(event){
    this.saveUsername=!this.saveUsername
    console.log(this.saveUsername)
    localStorage.setItem("saveUsername",JSON.stringify(this.saveUsername))
    if(event) {
      localStorage.setItem("remember", 'T')
    }else {
      localStorage.setItem("remember", 'F')
    }
    console.log( JSON.parse(localStorage.getItem("saveUsername")))
  }

  freescreens(){
    console.log("freeScreens")
    this.aservice.freeScreens().subscribe(res=>
      {
        
          let result = res.map(a => a.FreeScrs);
          let arr;
          result=result.forEach(element => {
          this.x.push(element.map(a=>a.ScrNo))
          arr = Array.prototype.concat.apply([], this.x);
          })
          this.closemodal.nativeElement.click()
          localStorage.setItem("freeScreens",JSON.stringify(arr))
          localStorage.setItem("isloggedin", 'T')
          this.router.navigate(['/adults/adult-dashboard'])
         console.log('homescreen')
        
        }
        
       
       
      )
  }

  
 
  

}
