import { ChangeDetectorRef, Component, ElementRef, NgModuleRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../adults.service';
import { ResumePage } from '../framework-v1/resume/resume.page';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import * as $ from 'jquery';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-adult-dashboard',
  templateUrl: './adult-dashboard.page.html',
  styleUrls: ['./adult-dashboard.page.scss'],
})
export class AdultDashboardPage implements OnInit {
  @ViewChild('enablemodal') enablemodal:ElementRef;
  @ViewChild('closemodal') closemodal:ElementRef;
  @ViewChild('closerefermodal') closerefermodal:ElementRef;
  @ViewChild('enablecookiemodal') enablecookiemodal:ElementRef;
  @ViewChild('closecookiemodal') closecookiemodal:ElementRef;
  @ViewChild('actclosemodal') actclosemodal:ElementRef;

  /*
  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#ch_bg").addClass("active");
        } else {            
           $("#ch_bg").removeClass("active");
        }
    });
  });
  */
  
  //get global settings here
  text=2
  video=3
  audio=4
  question=6
  reflection=5
  feedbackSurvey=7
  programId:any
  sectionId:any
  moduleId=7
  userId=100
  userName:any
  qrList:any
  goToPage:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  points:any
  daysVisited:any
  timeSpent:any
  percentage:any
  bookmarks=[]
  resume=[]
  bookmarkLength:any

 //static progress mapping
 angerP:any
 comparisonP:any
 awarenessP:any
 obstaclesP:any
 meditationP:any
 benefitsWisdomP:any
 guideP:any
 fearP:any
 benefitsEnquiryP:any
 questionsP:any
 identityP:any
 keyP:any
 selfEsteemP:any
 conditioningP:any
 fiveCirclesP:any
 happinessP:any
 threeStepsP:any
 noJudgementP:any
 discoveringP:any
 beginP:any
 insightP:any
 pleasureP:any
 withoutLanguageP:any
 criticismP:any
 stressP:any
 relationshipsP:any
 natureP:any
 breathingP:any
 ntP:any
 gamP:any
 communicationP:any
 rmP:any
 siP:any
 sinP:any
 enP:any
 ibP:any
 wP:any
 lP:any
 seP:any
 niP:any
 lonelinessP:any
 livingwithpeaceP:any
 loveP:any
 dealingwithdeathP:any
 opinionsandbeliefsP:any
 successandfailureP:any
 addictionP:any
 foodP:any
 moneyP:any
 Subscriber:any
 alertMsg:any
 friendemail = ''
 friendname = ''
 name = ''
 sorrowandlossP
 isloggedIn=false
 x=[]
 isSubscribe = false
 enablebanner = true;
 modaldata = {}
 firstpage = true;
 secondpage = false;
 thirdpage = false;
 fourthpage = false;
 fifthpage = false;
 sixthpage = false;
 activationCode:any = ''
 countryCode: any = '';
 email: any = '';
 verificationCode: any;
 loginpassword: any = '';
 loginemail: any = '';
 subthirdpage = false;
 subfirstpage = true;
 subsecondpage = false;
 user:any
idToken:any
socialFirstName:any
 socialLastName:any
 socialEmail:any
 yearormonth = ''

 //static progress mapping
  mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  mediaVideo="https://humanwisdoms3.s3.eu-west-2.amazonaws.com"  
  mediaPercent:any
  freeScreens=[]

  registrationForm=this.fb.group({
    fname:['',[Validators.required,Validators.minLength(3)]],
    lname:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(3)]],
    confirmPassword:['', [Validators.required, Validators.minLength(3)]],
  },{validator: this.PasswordValidator})

  constructor(
    private router: Router, private location:Location,private service: AdultsService,private services: OnboardingService, private cd: ChangeDetectorRef, private fb: FormBuilder,private authService: SocialAuthService,
     ) {
      if(localStorage.getItem("Affreftoken") !== null && localStorage.getItem('AffReferralCode') === null) {
        let token = localStorage.getItem("Affreftoken");
        this.service.decrypt(token).subscribe((res: any) => {
          if(res) {
            localStorage.setItem("AffReferralCode", res)
          }
        })
      }
      let authtoken=JSON.parse(localStorage.getItem("token"))
      let app= localStorage.getItem("fromapp")
      if(authtoken && app && app !== 'F') {
        this.service.verifytoken(authtoken).subscribe((res) => {
          console.log(res)
          if(res) {
          }else {
           this.router.navigate(['/onboarding/login'])
          }
       })
      }

      this.services.getCountry().subscribe((res:any)=>{  
        console.log(res)
        if(res['in_eu']) {
          this.countryCode = 'EUR'
        }else {
          this.countryCode = res['country_code_iso3']
        }
      },
  
        error=>{
          console.log(error)
        },
        ()=>{
        }); 
      
      }

  ngOnInit() {
    localStorage.setItem('cicd', 'T')
    if(localStorage.getItem('enablebanner') === 'F') this.enablebanner = false
    let userid = localStorage.getItem('isloggedin');
    let rem = localStorage.getItem('remember');
    let guest = localStorage.getItem('guest');
    this.name = localStorage.getItem('name');
    localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
    localStorage.setItem("first", 'F')
    localStorage.setItem("emailCode", 'F')
    localStorage.setItem('giftwisdom', 'F')
    if(userid === 'T') {
      this.isloggedIn = true
    }
    if(rem === 'T' ||  guest === 'T') {
      if(guest === 'T') {
        localStorage.setItem("email", 'guest@humanwisdom.me');
        localStorage.setItem("pswd", '12345');
      }
      let app= localStorage.getItem("fromapp")
      if(!app || app === 'F') {
        if(localStorage.getItem('socialLogin') === 'T') return 0;
        else this.emaillogin()
      }else {
        let authtoken=JSON.parse(localStorage.getItem("token"))
        this.fromapplogin(authtoken);
      }
      
    }
    setTimeout(() => {
      if(localStorage.getItem('acceptcookie') === null)
        this.enablecookiemodal.nativeElement.click();
    }, 3000)
    
  }

  getsupport(url, id) {
    this.service.clickModule(id,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem('activemoduleid', id);
        this.router.navigate([url])
        localStorage.setItem("supportwisdomstories", JSON.stringify(res['scenarios']))
    },
    error=>{
      console.log(error)
    },
    ()=>{

    })
  }

  // solving global problems
  solving_global_problems(url, id) {
    this.service.clickModule(id,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem('activemoduleid', id);
        this.router.navigate([url])
        localStorage.setItem("supportwisdomstories", JSON.stringify(res['scenarios']))
    },
    error=>{
      console.log(error)
    },
    ()=>{

    })
  }
  // /solving global problems

  carouselclick() {
    let videoPlayer: HTMLVideoElement = <HTMLVideoElement> document.getElementById('humanwisdomvideo')
    videoPlayer.pause()
  }

  acceptCookies() {
    localStorage.setItem('acceptcookie', 'T');
    this.closecookiemodal.nativeElement.click();
    this.enableDailypopup();
  }

  freescreens(){
    console.log("freeScreens")
    this.service.freeScreens().subscribe(res=>
      {
          this.x = []
          let result = res.map(a => a.FreeScrs);
          let arr;
          result=result.forEach(element => {
            if(element && element.length !== 0) { 
              this.x.push(element.map(a=>a.ScrNo))
              arr = Array.prototype.concat.apply([], this.x);
            }
          })
          localStorage.setItem("freeScreens",JSON.stringify(arr))
        }
        
       
       
      )
  }


  subscribenow(){
    // if(localStorage.getItem("email") === 'guest@humanwisdom.me'){
    //   localStorage.setItem("subscribepage", 'T')
    //   this.router.navigate(['/onboarding/login'])
    // } else {
    //   this.router.navigate(['/onboarding/add-to-cart'])
    // }
  }

  get fname(){
    return this.registrationForm.get('fname')
  }
  get lname(){
    return this.registrationForm.get('lname')
  }
  get emailvalid(){
    return this.registrationForm.get('email')
  }
  get passwordvalid(){
    return this.registrationForm.get('password')
  }
  get confirmpasswordvalid(){
    return this.registrationForm.get('confirmPassword')
  }

  PasswordValidator(control: AbstractControl):{[key: string]:boolean} | null
   {
     const password= control.get('password')
     const confirmPassword=control.get('confirmPassword')
     if(password.pristine || confirmPassword.pristine)
      return null
     return password && confirmPassword && password.value != confirmPassword.value ?
     {'misMatch': true}:null

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

      this.services.verifyGoogle({
        "TokenID": this.idToken,
        "FName":this.socialFirstName,
        "LName": this.socialLastName,
        "Email": this.socialEmail,
         "VCode": "",
         "Pwd": ""
      })
      .subscribe(res=>
        {
          console.log(res)
          if(res){
            
            this.firstpage = false
            this.fifthpage = false
            this.thirdpage = true
              this.loginResponse=res
              console.log(this.loginResponse)
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
              let namedata = localStorage.getItem('name').split(' ')
              this.modaldata['email'] = localStorage.getItem('email');
              this.modaldata['firstname'] = namedata[0];
              this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
              if(parseInt(this.loginResponse.UserId)==0)
              {
                // this.showAlert=true
                // window.alert('You have enetered wrong credentials. Please try again.')
                // this.email=""
                // this.password=""

              }
              else{
                // this.showAlert=false
                this.userId=this.loginResponse.UserId
                this.userName=this.loginResponse.Name
                localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                localStorage.setItem("userId",JSON.stringify(this.userId))
                localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
                console.log(localStorage.getItem("token"),"this is local token")
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
                    // this.router.navigate(['/onboarding/add-to-cart'])
                  }else {
                    localStorage.setItem("isloggedin", 'T')
                    // this.router.navigate(['/adults/adult-dashboard'])
                  }
                
            
                /* if(this.urlEmail)
                  {
                    this.service.verifyUser(this.userId)
                    .subscribe(res=>{
                      console.log(res)
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
      console.log(user)
      this.user = user;
      this.idToken=user.authToken
      this.socialFirstName=user.firstName
      this.socialLastName=user.lastName
      this.socialEmail=user.email
      if(user.email !== undefined) {
        this.services.verifyFb({
          "TokenID": this.idToken,
          "FName":this.socialFirstName,
          "LName": this.socialLastName,
          "Email": this.socialEmail,
           "VCode": "",
           "Pwd": ""
        })
        .subscribe(res=>
          {
            console.log(res)
            if(res){
                this.firstpage = false
                this.fifthpage = false
                this.thirdpage = true
                this.loginResponse=res
                console.log(this.loginResponse)
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
                let namedata = localStorage.getItem('name').split(' ')
                this.modaldata['email'] = localStorage.getItem('email');
                this.modaldata['firstname'] = namedata[0];
                this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
                if(parseInt(this.loginResponse.UserId)==0)
                {
                  // this.showAlert=true
                  // window.alert('You have enetered wrong credentials. Please try again.')
                  // this.email=""
                  // this.password=""
  
                }
                else{
                  // this.showAlert=false
                  this.userId=this.loginResponse.UserId
                  this.userName=this.loginResponse.Name
                  localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                  sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
                  localStorage.setItem("userId",JSON.stringify(this.userId))
                  localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
                  console.log(localStorage.getItem("token"),"this is local token")
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
                      this.router.navigate(['/onboarding/add-to-cart'])
                    }else {
                      localStorage.setItem("isloggedin", 'T')
                      this.router.navigate(['/adults/adult-dashboard'])
                    }
                  
              
                  /* if(this.urlEmail)
                    {
                      this.service.verifyUser(this.userId)
                      .subscribe(res=>{
                        console.log(res)
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

  signup(){
    this.services.addUser({ 
    "FName":this.registrationForm.get('fname').value,
    "Lname":this.registrationForm.get('lname').value,
    "Email":this.registrationForm.get('email').value,
    "Pwd":this.registrationForm.get('password').value,
    })
    .subscribe(res=>
      {
      console.log(res)
      if(res>0){
        this.userId = res
        this.email = this.registrationForm.get('email').value
      this.firstpage = false;
       this.secondpage = true;

      }
       

      },
      error=>{
        window.alert(error.error.Message)
       

     },
     ()=>{
       /*if(this.showWarning=false)
       {
         this.showMessage=true
       }*/
        
      
     
      }
    )
   

 }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  getcode(value) {
    this.activationCode = value;
  }

  verifyactkey() {
    this.service.verifyactkey(this.activationCode)
    .subscribe(
      res=>
      {console.log(res)
        if(res) {
         this.yearormonth = res
        this.subthirdpage = false
        this.subfirstpage = false
        this.subsecondpage = true;
        }else {
          this.subsecondpage = false;
          this.subthirdpage = true
        }
        // this.enableActivate = true;
        // this.closemodal.nativeElement.click()
        
        // this.router.navigate(['/adults/adult-dashboard'])
      },
      error=>{
        this.subsecondpage = false;
          this.subthirdpage = true
        // window.alert(error.error['Message'])
      },
     
      ()=>{
        
  
      }
    )
  }

  submitcode(){
    this.services.verifyActivationKey(this.activationCode,this.userId, this.countryCode)
    .subscribe(
      res=>
      {console.log(res)
        if(res) {
          let code: any = 1
        localStorage.setItem('Subscriber', code)
        this.subthirdpage = false;
        this.subsecondpage = false;
        this.thirdpage = false;
        this.subfirstpage = true;
        this.sixthpage = true;
        }else {
        }
        // this.enableActivate = true;
        // this.closemodal.nativeElement.click()
        
        // this.router.navigate(['/adults/adult-dashboard'])
      },
      error=>{
        // window.alert(error.error['Message'])
      },
     
      ()=>{
        
  
      }
    )
  
  }
  

  already(value) {
    if(value === 'home') {
      this.actclosemodal.nativeElement.click()
      let userid = localStorage.getItem('isloggedin');
      if(userid === 'T') {
        window.location.reload();
      }
    }else if(value === 'login') {
      this.firstpage = false;
      this.fourthpage = false;
      this.thirdpage = false;
      this.fifthpage = true;
    }else if(value === 'register') {
      this.firstpage = true;
      this.secondpage = false;
      this.fifthpage = false
    }
  }

  verifyCode(){
    this.services.verifyCode({"Email":this.registrationForm.get('email').value,
                              "VCode":this.verificationCode})
    .subscribe(res=>{
      console.log(res)
      if(res>0)
      {
        localStorage.setItem("email", this.registrationForm.get('email').value)
        localStorage.setItem("pswd", this.registrationForm.get('password').value)
        this.emaillogin('second')
      }
      
    }, (err) => {
      window.alert(err.error['Message'])
    })

  }

  resendotp() {
    this.service.resendotp(this.userId)
      .subscribe(res=>{
      console.log(res)
      if(res)
      {
      
      }

      }, (err) => {
      })

  }


  opennewTab() {
    this.router.navigate([]).then(result => {  window.open('https://humanwisdom.me/course/#/adults/cookie-policy', '_blank'); });
  }

  socialLogin() {
    let socialFirstName = localStorage.getItem("FnName");
    let socialLastName = localStorage.getItem("LName");
    let socialEmail = localStorage.getItem("email");
    this.services.socialLearner({"FnName":socialFirstName,
    "LName": socialLastName,
    "Email": socialEmail})
    .subscribe(
      res=>{
    
        this.loginResponse=res
        this.userId = res.UserId
        console.log(this.loginResponse)
        this.isSubscribe = res.Subscriber === 0 ? true : false;
        let guest = localStorage.getItem('guest');
        if(guest === 'T') localStorage.setItem('guest', 'F')
        sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("token",JSON.stringify(res.access_token))
        localStorage.setItem("Subscriber", res.Subscriber)
        localStorage.setItem("userId",JSON.stringify(this.userId))
        localStorage.setItem("email", socialEmail)
        localStorage.setItem("pswd", '')
        localStorage.setItem("name", res.Name)
        this.name = res.Name
        this.getProgress()
        this.freescreens();
        localStorage.setItem("text",JSON.stringify(this.text))
        localStorage.setItem("video",JSON.stringify(this.video))
        localStorage.setItem("audio",JSON.stringify(this.audio))
        localStorage.setItem("moduleId",JSON.stringify(this.moduleId))
        localStorage.setItem("question",JSON.stringify(this.question))
        localStorage.setItem("reflection",JSON.stringify(this.reflection))
        localStorage.setItem("feedbackSurvey",JSON.stringify(this.feedbackSurvey))
        this.userId=JSON.parse(localStorage.getItem("userId"))
        if(localStorage.getItem('acceptcookie') === 'T') this.enableDailypopup();
        this.Subscriber = localStorage.getItem('Subscriber')
    this.cd.detectChanges();
    localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
    if(localStorage.getItem("token")&&(this.saveUsername==true))
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
      this.userName=JSON.parse(localStorage.getItem("userName"))
    }
    else
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
      this.userName=JSON.parse(sessionStorage.getItem("userName"))

    }
    console.log(this.userId,"userId")
    this.getBookmarks()
        if(res.UserId==0)
        {

        }
        else{
          this.userId=res.UserId
          this.userName=res.Name
          sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
          localStorage.setItem("userId",JSON.stringify(this.userId))
          localStorage.setItem("token",JSON.stringify(res.access_token))
          console.log(localStorage.getItem("token"),"this is local token")
          if(this.saveUsername==true)
          {
            localStorage.setItem("userId",JSON.stringify(this.userId))
            localStorage.setItem("userEmail",JSON.stringify(socialEmail))
            localStorage.setItem("userName",JSON.stringify(this.userName))

          }
            
          else
          {
            sessionStorage.setItem("userId",JSON.stringify(this.userId))
            sessionStorage.setItem("userEmail",JSON.stringify(socialEmail))
            sessionStorage.setItem("userName",JSON.stringify(this.userName))


          }
        }
         
       
      },
      error=>{console.log(error)},
      ()=>{
      }
    )
  }


  emaillogin(val=''){
    let email = val === '' || val === 'second' ? localStorage.getItem("email") : this.loginemail;
    let password = val === '' || val === 'second' ? localStorage.getItem("pswd") : this.loginpassword;
    this.services.emailLogin(email, password)
    .subscribe(
      res=>
      {//console.log(res)
        if(val === 'act') {
          localStorage.setItem("isloggedin", 'T')
          localStorage.setItem("remember", 'T')
          this.fifthpage = false;
          this.thirdpage = true;
        }else if(val === 'second') {
          localStorage.setItem("isloggedin", 'T')
          localStorage.setItem("remember", 'T')
          this.secondpage = false;
          this.thirdpage = true;
        }
        this.loginResponse=res
        this.userId = res.UserId
        console.log(this.loginResponse)
        this.isSubscribe = res.Subscriber === 0 ? true : false;
        let guest = localStorage.getItem('guest');
        if(guest === 'T') localStorage.setItem('guest', 'F')
        sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("token",JSON.stringify(res.access_token))
        localStorage.setItem("Subscriber", res.Subscriber)
        localStorage.setItem("userId",JSON.stringify(this.userId))
        localStorage.setItem("email", email)
        localStorage.setItem("pswd", password)
        localStorage.setItem("name", res.Name)
        this.name = res.Name
        let namedata = localStorage.getItem('name').split(' ')
        this.modaldata['email'] = localStorage.getItem('email');
        this.modaldata['firstname'] = namedata[0];
        this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
        this.getProgress()
        this.freescreens();
        localStorage.setItem("text",JSON.stringify(this.text))
        localStorage.setItem("video",JSON.stringify(this.video))
        localStorage.setItem("audio",JSON.stringify(this.audio))
        localStorage.setItem("moduleId",JSON.stringify(this.moduleId))
        localStorage.setItem("question",JSON.stringify(this.question))
        localStorage.setItem("reflection",JSON.stringify(this.reflection))
        localStorage.setItem("feedbackSurvey",JSON.stringify(this.feedbackSurvey))
        this.userId=JSON.parse(localStorage.getItem("userId"))
        if(localStorage.getItem('acceptcookie') === 'T') this.enableDailypopup();
        this.Subscriber = localStorage.getItem('Subscriber')
    this.cd.detectChanges();
    localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
    if(localStorage.getItem("token")&&(this.saveUsername==true))
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
      this.userName=JSON.parse(localStorage.getItem("userName"))
    }
    else
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
      this.userName=JSON.parse(sessionStorage.getItem("userName"))

    }
    console.log(this.userId,"userId")
    this.getBookmarks()
        if(res.UserId==0)
        {

        }
        else{
          this.userId=res.UserId
          this.userName=res.Name
          sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
          localStorage.setItem("userId",JSON.stringify(this.userId))
          localStorage.setItem("token",JSON.stringify(res.access_token))
          console.log(localStorage.getItem("token"),"this is local token")
          if(this.saveUsername==true)
          {
            localStorage.setItem("userId",JSON.stringify(this.userId))
            localStorage.setItem("userEmail",JSON.stringify(email))
            localStorage.setItem("userName",JSON.stringify(this.userName))

          }
            
          else
          {
            sessionStorage.setItem("userId",JSON.stringify(this.userId))
            sessionStorage.setItem("userEmail",JSON.stringify(email))
            sessionStorage.setItem("userName",JSON.stringify(this.userName))


          }
        }
         
       
      },
      error=>{console.log(error)},
      ()=>{
      }

      
    )
  }


  fromapplogin(token){
    this.service.verifytoken(token)
    .subscribe(
      res=>
      {//console.log(res)
        this.loginResponse=res
        this.userId = this.loginResponse.UserId
        console.log(this.loginResponse)
        this.isSubscribe = this.loginResponse.Subscriber === 0 ? true : false;
        let guest = localStorage.getItem('guest');
        if(guest === 'T') localStorage.setItem('guest', 'F')
        sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
        localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
        localStorage.setItem("userId",JSON.stringify(this.userId))
        localStorage.setItem("name", this.loginResponse.Name)
        this.name = this.loginResponse.Name
        this.getProgress()
        this.freescreens();
        localStorage.setItem("text",JSON.stringify(this.text))
        localStorage.setItem("video",JSON.stringify(this.video))
        localStorage.setItem("audio",JSON.stringify(this.audio))
        localStorage.setItem("moduleId",JSON.stringify(this.moduleId))
        localStorage.setItem("question",JSON.stringify(this.question))
        localStorage.setItem("reflection",JSON.stringify(this.reflection))
        localStorage.setItem("feedbackSurvey",JSON.stringify(this.feedbackSurvey))
        this.userId=JSON.parse(localStorage.getItem("userId"))
        if(localStorage.getItem('acceptcookie') === 'T') this.enableDailypopup();
        this.Subscriber = localStorage.getItem('Subscriber')
    this.cd.detectChanges();
    localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
    if(localStorage.getItem("token")&&(this.saveUsername==true))
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
      this.userName=JSON.parse(localStorage.getItem("userName"))
    }
    else
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
      this.userName=JSON.parse(sessionStorage.getItem("userName"))

    }
    console.log(this.userId,"userId")
    this.getBookmarks()
        if(this.loginResponse.UserId==0)
        {

        }
        else{
          this.userId=this.loginResponse.UserId
          this.userName=this.loginResponse.Name
          sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
          localStorage.setItem("userId",JSON.stringify(this.userId))
          localStorage.setItem("token",JSON.stringify(this.loginResponse.access_token))
          console.log(localStorage.getItem("token"),"this is local token")
          if(this.saveUsername==true)
          {
            localStorage.setItem("userId",JSON.stringify(this.userId))
            localStorage.setItem("userName",JSON.stringify(this.userName))

          }
            
          else
          {
            sessionStorage.setItem("userId",JSON.stringify(this.userId))
            sessionStorage.setItem("userName",JSON.stringify(this.userName))


          }
        }
         
       
      },
      error=>{console.log(error)},
      ()=>{
      }

      
    )
  }

  enableDailypopup() {
    this.service.adminPopup().subscribe((res) => {
      console.log(res)
      this.alertMsg = res;
      let date = localStorage.getItem("getalertdate")
      let expire = false;
      if(date !== null) {
        let x = new Date(localStorage.getItem("getalertdate"))
        let y = new Date();
        if(x.getDate() < y.getDate()) {
          expire = false;
        }else {
          expire = true;
        }
      }
      if(date === null || !expire) {
        localStorage.setItem("getalertdate", new Date().toDateString())
        this.enablemodal.nativeElement.click();
      }
    },error=>{
      if(error.error['Message'] === 'Not generated') {
        this.alertMsg = '';
      }
      console.log(error)
    },)
  }

  getrenew() {
    this.closemodal.nativeElement.click()
  }

  closeplaystore() {
    this.enablebanner = false;
  }
  
  submitrefer() {
    let data = {
      "UserId": this.userId,
      "FriendName": this.friendname,
      "FriendEmail": this.friendemail,
      "ConvertedDate": '',
    }
    this.service.referfrd(data).subscribe((res) => {
     console.log(res)
     this.closerefermodal.nativeElement.click()
    })
  }

  logout() {
    // localStorage.clear();
    localStorage.setItem('isloggedin', 'F')
    localStorage.setItem('guest', 'T')
    this.router.navigate(['/onboarding/login'])
  }

  friendName(value) {
    this.friendname = value;
  }

  closerefer() {
    this.closerefermodal.nativeElement.click()
  }

  getLogin() {
    localStorage.setItem('btnclick', 'T')
    this.router.navigate(['/onboarding/login', { queryParams: { email: '' }}])
  }

  friendEmail(value) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (value.match(regexEmail)) {
    this.friendemail = value;
  } else {
    this.friendemail = '';
  }
  }

  getProgress(){
    this.service.getPoints(this.userId)
    .subscribe(res=>{
      console.log(res)
      this.points=parseInt(res.PointsScored)
      this.goToPage=res.LastScrNo
      this.daysVisited=res.noOfDaysVisited
      this.timeSpent=res.noOfDaysVisited
      this.percentage=parseInt(res.overallPercentage)
      localStorage.setItem("overallPercentage",this.percentage)

      //resume section
      res.ModUserScrPc.filter(x=>{
        if(parseFloat(x.Percentage)<100){
          if(x.ModuleId<10)
          {
            x.ModuleId="0"+x.ModuleId
            
          }

          x.imgPath=`https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/${x.ModuleId}.png`
          this.resume.push(x)
          this.resume.sort((val1, val2)=> {return <any>new Date(val2.LastUpdatedOn) - <any>new Date(val1.LastUpdatedOn)})

        }
      })
      console.log("resume section",this.resume)
    
     //static progress
     this.angerP=res.ModUserScrPc.find(e=>e.Module=="Anger").Percentage
     this.comparisonP=res.ModUserScrPc.find(e=>e.Module=="Comparison").Percentage
     this.awarenessP=res.ModUserScrPc.find(e=>e.Module=="Awareness").Percentage
     this.obstaclesP=res.ModUserScrPc.find(e=>e.Module=="Obstacles to Enquiry").Percentage
     this.meditationP=res.ModUserScrPc.find(e=>e.Module=="Meditation").Percentage
     this.benefitsWisdomP=res.ModUserScrPc.find(e=>e.Module=="Benefits of Wisdom").Percentage
     this.guideP=res.ModUserScrPc.find(e=>e.Module=="Program Guide").Percentage
     this.fearP=res.ModUserScrPc.find(e=>e.Module=="Fear & Anxiety").Percentage
     this.benefitsEnquiryP=res.ModUserScrPc.find(e=>e.Module=="Benefits of Enquiry").Percentage
     this.questionsP=res.ModUserScrPc.find(e=>e.Module=="Questions are Key").Percentage
     this.identityP=res.ModUserScrPc.find(e=>e.Module=="Identity").Percentage
     this.keyP=res.ModUserScrPc.find(e=>e.Module=="Key Ideas").Percentage
     this.selfEsteemP=res.ModUserScrPc.find(e=>e.Module=="Self Esteem").Percentage
     this.conditioningP=res.ModUserScrPc.find(e=>e.Module=="Conditioning").Percentage
     this.fiveCirclesP=res.ModUserScrPc.find(e=>e.Module=="5 Circles of Wisdom").Percentage
     this.happinessP=res.ModUserScrPc.find(e=>e.Module=="Happiness").Percentage
     this.threeStepsP=res.ModUserScrPc.find(e=>e.Module=="Three Steps to Enquiry").Percentage
     this.noJudgementP=res.ModUserScrPc.find(e=>e.Module=="No Judgement").Percentage
     this.discoveringP=res.ModUserScrPc.find(e=>e.Module=="Discovering Wisdom").Percentage
     this.beginP=res.ModUserScrPc.find(e=>e.Module=="How to Begin?").Percentage
     this.insightP=res.ModUserScrPc.find(e=>e.Module=="Insight").Percentage
     this.pleasureP=res.ModUserScrPc.find(e=>e.Module=="Pleasure").Percentage
     this.withoutLanguageP=res.ModUserScrPc.find(e=>e.Module=="Look without Language").Percentage
     this.criticismP=res.ModUserScrPc.find(e=>e.Module=="Criticism").Percentage
     this.stressP=res.ModUserScrPc.find(e=>e.Module=="Stress").Percentage
     this.relationshipsP=res.ModUserScrPc.find(e=>e.Module=="Relationships").Percentage
     this.natureP=res.ModUserScrPc.find(e=>e.Module=="Nature").Percentage
     this.breathingP=res.ModUserScrPc.find(e=>e.Module=="Breathing").Percentage
     this.ntP=res.ModUserScrPc.find(e=>e.Module=="Noticing Thoughts").Percentage
     this.gamP=res.ModUserScrPc.find(e=>e.Module=="Guided Audio Meditation").Percentage
     this.communicationP=res.ModUserScrPc.find(e=>e.Module=="Communication").Percentage
     this.siP=res.ModUserScrPc.find(e=>e.Module=="Self Image").Percentage
     this.rmP=res.ModUserScrPc.find(e=>e.Module=="Reactive Mind").Percentage
     this.sinP=res.ModUserScrPc.find(e=>e.Module=="Self Interest").Percentage
     this.enP=res.ModUserScrPc.find(e=>e.Module=="Emotional Needs").Percentage
     this.ibP=res.ModUserScrPc.find(e=>e.Module=="Inner Boredom").Percentage
     this.wP=res.ModUserScrPc.find(e=>e.Module=="Work").Percentage
     this.lP=res.ModUserScrPc.find(e=>e.Module=="Leadership").Percentage
     this.niP=res.ModUserScrPc.find(e=>e.Module=="The Nature of the I").Percentage
     this.seP=res.ModUserScrPc.find(e=>e.Module=="Self Esteem").Percentage
     this.lonelinessP=res.ModUserScrPc.find(e=>e.Module=="Loneliness").Percentage
     this.livingwithpeaceP=res.ModUserScrPc.find(e=>e.Module=="Living With Peace").Percentage
     this.loveP=res.ModUserScrPc.find(e=>e.Module=="Love").Percentage
     this.dealingwithdeathP=res.ModUserScrPc.find(e=>e.Module=="Dealing With Death").Percentage
     this.opinionsandbeliefsP=res.ModUserScrPc.find(e=>e.Module=="Opinions And Beliefs").Percentage
     this.successandfailureP=res.ModUserScrPc.find(e=>e.Module=="Success And Failure").Percentage
     this.addictionP=res.ModUserScrPc.find(e=>e.Module=="Addiction").Percentage
     this.foodP=res.ModUserScrPc.find(e=>e.Module=="Food").Percentage
     this.moneyP=res.ModUserScrPc.find(e=>e.Module=="Money").Percentage
     this.sorrowandlossP=res.ModUserScrPc.find(e=>e.Module=="Sorrow And Loss").Percentage    
    })
  }

  getBookmarks(){
    this.service.getBookmarks(this.userId)
    .subscribe(res=>{
      //console.log("bookmarks",res)
      
      this.bookmarks=res
      this.bookmarks = this.bookmarks.map(a => parseInt(a.ScrNo));
      console.log("bookmarked screens",this.bookmarks)
      localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarks))
      this.bookmarkLength=this.bookmarks.length
     
    })
  
  }
  routeResume(r){
    console.log(r)
  
    switch(r.ModuleId.toString()){
      case "07":{this.routeComparison(1)
                break
                }
      case "14":{this.routeAnger(1)
                break
                }
      case "15":{this.routeConditioning(1)
                break
                }
      case "16":{this.routeCriticism(1)
                break
                }
      case "17":{this.routeSelfEsteem(1)
                break
                }
      case "18":{this.routeEmotionalNeeds(1)
                break
                }
      case "19":{this.routeFearAnxiety(1)
                break
                }
      case "20":{this.routePleasure(1)
                break
                }
      case "21":{this.routeIdentity(1)
                break
                }
      case "22":{this.routeMeditation(1)
                break
                }
      case "23":{this.routeHappiness(1)
                break
                }
      case "25":{this.routeSelfImage(1)
                break
                }
      case "26":{this.routeBenefitsEnquiry(1)
                break
                }
      case "27":{this.routeDiscoveringWisdom(1)
                break
                }
      case "28":{this.routeNature(1)
                break
                }
      case "29":{this.routeBreathing(1)
                break
                }
      case "30":{this.routeNoticingThoughts(1)
                break
                }
      case "32":{this.routeBenefits(1)
                break
                }
      case "33":{this.routeCircles(1)
                break
                }
      case "34":{this.routeIdeas(1)
                break
                }
      case "35":{this.routeGuide(1)
                break
                }
      case "36":{this.routeHowToBegin(1)
                break
                }
      case "37":{this.routeThreeSteps(1)
                break
                }
        case "38":{this.routeInsights(1)
                break
                }
        case "39":{this.routeAwareness(1)
                break
                }
        case "40":{this.routeNoJudgement(1)
                break
                }
        case "41":{this.routeQuestionsAreKey(1)
                break
                }
        case "42":{this.routeLookWithoutLanguage(1)
                break
                }
        case "43":{this.routeObstacles(1)
                break
                }
        case "44":{this.routeStress(1)
                break
                }
      case "47":{this.routeRelationships(1)
                break
                }
      case "49":{this.routeOpinionsAndBeliefs(1)
                break
                } 
      case "51":{this.routeGuidedMeditation(1)
                break
                } 
      case "53":{this.routeCommunication(1)
                break
                } 
      case "54":{this.routeReactiveMind(1)
                break
                } 
      case "55":{this.routeSelfInterest(1)
                break
                } 
      case "56":{this.routeInnerBoredom(1)
                break
                }                            
      case "57":{this.routeNatureOfI(1)
                break
                }              
      case "58":{this.routeWork(1)
                break
                }
      case "59":{this.routeLeadership(1)
                break
                }
      case "61":{this.routeLoneliness(1)
                break
                }
      case "62":{this.routeLove(1)
                break
                }              
      case "63":{this.routeLivingWithPeace(1)
                break
                }
      case "64":{this.routeDealingWithDeath(1)
                break
                }
    }
  }

  // introduction
  routeDiscoveringWisdom(cont: any = 1){
    var discoveringWisdomResume
    console.log("discovering wisdom")
    localStorage.setItem("moduleId",JSON.stringify(27))
    console.log(this.userId)
    this.service.clickModule(27,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        discoveringWisdomResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("discoveringWisdomResume",discoveringWisdomResume)
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/discovering-wisdom/${discoveringWisdomResume}`])
      }
      else
      this.router.navigate([`/adults/discovering-wisdom/s27001`])
      /*console.log("goToPage",this.goToPage)
      if(!discoveringWisdomResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/discovering-wisdom`])
      }
      else
        this.router.navigate([`/adults/discovering-wisdom/s${discoveringWisdomResume}`])*/

    })
    

  }
  
  routeBenefits(cont: any = 1){
    var benefitsWisdomResume
    console.log("benefits of wisdom",cont)
    localStorage.setItem("moduleId",JSON.stringify(32))
    this.service.clickModule(32,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        benefitsWisdomResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("benefitsWisdomResume",benefitsWisdomResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/benefits-of-wisdom/${benefitsWisdomResume}`])
      }
      else
      this.router.navigate([`/adults/benefits-of-wisdom/s32001`])
    })
  }    

  routeCircles(cont: any = 1){
    var fiveCirclesResume
    console.log("five circles")
    localStorage.setItem("moduleId",JSON.stringify(33))
    this.service.clickModule(33,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        fiveCirclesResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fiveCirclesResume",fiveCirclesResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/five-circles/${fiveCirclesResume}`])
      }
      else
      this.router.navigate([`/adults/five-circles/s33001`])
      /*if(!fiveCirclesResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/five-circles`])
      }
      else
        this.router.navigate([`/adults/five-circles/s${fiveCirclesResume}`])*/

    })
   
   
  }

  routeIdeas(cont: any = 1){
    var keyIdeasResume
    console.log("key-ideas")
    localStorage.setItem("moduleId",JSON.stringify(34))
    this.service.clickModule(34,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        keyIdeasResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("keyIdeasResume",keyIdeasResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/key-ideas/${keyIdeasResume}`])
      }
      else
      this.router.navigate([`/adults/key-ideas/s34001`])
      /*if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/key-ideas`])
      }
      else
        this.router.navigate([`/adults/key-ideas/s${keyIdeasResume}`])*/

    })
    
  } 

  routeGuide(cont: any = 1){
    var pgResume
    console.log("guide")
    localStorage.setItem("moduleId",JSON.stringify(35))
    this.service.clickModule(35,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        pgResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pgResume",pgResume)
        pgResume="s"+res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/program-guide/${pgResume}`])
      }
      else
      this.router.navigate([`/adults/program-guide/s35001`])
     /* if(!pgResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/program-guide/s35002`])
      }
      else
        this.router.navigate([`/adults/program-guide/s${ pgResume}`])*/

    })
    
   
  }
  // /introduction

  // nuture a quiet mind
  routeNature(cont: any = 1){
    var natureR
    console.log("nature")
    localStorage.setItem("moduleId",JSON.stringify(28))
    this.service.clickModule(28,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        natureR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("natureR",natureR)      
       
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {
        this.router.navigate([`/adults/nature/${natureR}`])
      }
      else
      this.router.navigate([`/adults/nature/s28001`])
     
     /*if(!natureR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/nature`])
      }
      else
        this.router.navigate([`/adults/nature/s${natureR}`])*/

    })
    
   

  }

  routeBreathing(cont: any = 1){

    var breathingR
    console.log("breathing")
    
    localStorage.setItem("moduleId",JSON.stringify(29))
    this.service.clickModule(29,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        breathingR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("breathingR",breathingR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/breathing/${breathingR}`])
      }
      else
      this.router.navigate([`/adults/breathing/s29000`])
    
     /* if(!breathingR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/breathing`])
       
      }
      else
        this.router.navigate([`/adults/breathing/s${breathingR}`])*/

    })

  }
 
  routeNoticingThoughts(cont: any = 1){
    var ntR
    
    localStorage.setItem("moduleId",JSON.stringify(30))
    this.service.clickModule(30,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        ntR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        /*if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }*/
        // /continue where you left
        sessionStorage.setItem("ntR",ntR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/noticing-thoughts/${ntR}`])
      }
      else
      this.router.navigate([`/adults/noticing-thoughts/s30001`])
      /*if(!ntR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/noticing-thoughts`])
      }
      else
        this.router.navigate([`/adults/noticing-thoughts/s${ntR}`])*/

    })

  }

  routeGuidedMeditation(cont: any = 1){
    var gamR
    localStorage.setItem("moduleId",JSON.stringify(51))
    this.service.clickModule(51,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        gamR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("gamR",gamR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/guided-meditation/${gamR}`])
      }
      else
      this.router.navigate([`/adults/guided-meditation/s51000`])
      
     /* if(!gamR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/guided-meditation`])
        
      }
      else
        this.router.navigate([`/adults/guided-meditation/s${gamR}`])*/

    })

  }
  
  routeMeditation(cont: any = 1){
    var meditationResume
    console.log("meditation")
    localStorage.setItem("moduleId",JSON.stringify(22))
    this.service.clickModule(22,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        meditationResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("meditationResume",meditationResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/meditation/${meditationResume}`])
      }
      else
      this.router.navigate([`/adults/meditation/s22001`])
      /*if(!meditationResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/meditation`])
      }
      else
        this.router.navigate([`/adults/meditation/s${meditationResume}`])*/

    })
   

  }
  // /nuture a quiet mind

  // art of enquiry
  routeBenefitsEnquiry(cont: any = 1){
    var resumeBenefitsEnquiry
    console.log("enquiry benefits")
    localStorage.setItem("moduleId",JSON.stringify(26))
    console.log(this.userId)
    this.service.clickModule(26,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        resumeBenefitsEnquiry="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("resumeBenefitsEnquiry",resumeBenefitsEnquiry)
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/benefits-of-enquiry/${resumeBenefitsEnquiry}`])
      }
      else
        this.router.navigate([`/adults/benefits-of-enquiry/s26001`])
     /* console.log("goToPage",resumeBenefitsEnquiry)
      if(!resumeBenefitsEnquiry)
      {
        console.log("null go to page")
       this.router.navigate([`/adults/benefits-of-enquiry`])
      }
      else
        this.router.navigate([`/adults/benefits-of-enquiry/s${resumeBenefitsEnquiry}`])*/

    })
   
  }

  routeHowToBegin(cont: any = 1){
    var beginResume
    console.log("begin")
    localStorage.setItem("moduleId",JSON.stringify(36))
    this.service.clickModule(36,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        beginResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("beginResume",beginResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/how-to-begin/${beginResume}`])
      }
      else
      this.router.navigate([`/adults/how-to-begin/s36000`])
      /*if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/how-to-begin`])
      }
      else
        this.router.navigate([`/adults/how-to-begin/s${beginResume}`])*/

    })
   
  }

  routeThreeSteps(cont: any = 1){
    var threeStepsResume
    console.log("3 steps")
    localStorage.setItem("moduleId",JSON.stringify(37))
    this.service.clickModule(37,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        threeStepsResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("threeStepsResume",threeStepsResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/three-steps-enquiry/${threeStepsResume}`])
      }
      else
      this.router.navigate([`/adults/three-steps-enquiry/s37000`])
      /*if(!threeStepsResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/three-steps-enquiry`])
      }
      else
        this.router.navigate([`/adults/three-steps-enquiry/s${threeStepsResume}`])*/

    })
    
   
  }

  routeInsights(cont: any = 1){
    var insightResume
    console.log("insight")
    localStorage.setItem("moduleId",JSON.stringify(38))
    this.service.clickModule(38,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        insightResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("insightResume",insightResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/insight/${insightResume}`])
      }
      else
      this.router.navigate([`/adults/insight/s38000`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/insight`])
      }
      else
        this.router.navigate([`/adults/insight/s${insightResume}`])*/

    })
  }

  routeAwareness(cont: any = 1){
    var awarenessResume
    console.log("awareness")
    localStorage.setItem("moduleId",JSON.stringify(39))
    this.service.clickModule(39,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        awarenessResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("awarenessResume",awarenessResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/awareness/${awarenessResume}`])
      }
      else
      this.router.navigate([`/adults/awareness/s39000`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/awareness`])
      }
      else
        this.router.navigate([`/adults/awareness/s${awarenessResume}`])*/

    })
   
   
  }

  routeNoJudgement(cont: any = 1){
    var njResume
    console.log("nj")
    localStorage.setItem("moduleId",JSON.stringify(40))
    this.service.clickModule(40,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        njResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("njResume",njResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/no-judgement/${njResume}`])
      }
      else
      this.router.navigate([`/adults/no-judgement/s40000`])
      /*if(!njResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/no-judgement/`])
      }
      else
        this.router.navigate([`/adults/no-judgement/s${njResume}`])*/

    })
   
  }

  routeQuestionsAreKey(cont: any = 1){
    var qakResume
    console.log("qak")
    localStorage.setItem("moduleId",JSON.stringify(41))
    this.service.clickModule(41,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        qakResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("qakResume",qakResume)
        console.log(qakResume,"qafResume")
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/questions-are-key/${qakResume}`])
      }
      else
      console.log(qakResume,"qafResume")
      this.router.navigate([`/adults/questions-are-key/s41000`])
      /*if(!qakResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/questions-are-key`])
      }
      else
        this.router.navigate([`/adults/questions-are-key/s${qakResume}`])*/

    })
   
    
  }  

  routeLookWithoutLanguage(cont: any = 1){
    var lwlResume
    console.log("lwl")
    localStorage.setItem("moduleId",JSON.stringify(42))
    this.service.clickModule(42,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        lwlResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lwlResume",lwlResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/without-language/${lwlResume}`])
      }
      else
        this.router.navigate([`/adults/without-language/s42000`])
     /* if(!lwlResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/without-language`])
      }
      else
        this.router.navigate([`/adults/without-language/s${lwlResume}`])*/

    })
   
  }

  routeObstacles(cont: any = 1){
    var obstaclesResume
    console.log("obstacles")
    localStorage.setItem("moduleId",JSON.stringify(43))
    this.service.clickModule(43,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        obstaclesResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("obstaclesResume",obstaclesResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/obstacles-enquiry/${obstaclesResume}`])
      }
      else
        this.router.navigate([`/adults/obstacles-enquiry/s43000`])
      /*if(! obstaclesResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/obstacles-enquiry`])
      }
      else
        this.router.navigate([`/adults/obstacles-enquiry/s${obstaclesResume}`])*/

    })
   
   

  }
  // /art of enquiry

  // how the mind works
  routeConditioning(cont: any = 1){
    var conditioningResume
    console.log("conditioning")
    localStorage.setItem("moduleId",JSON.stringify(15))
    this.service.clickModule(15,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        conditioningResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("conditioningResume",conditioningResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/conditioning/${conditioningResume}`])
      }
      else
      this.router.navigate([`/adults/conditioning/s232`])
      /*if(!conditioningResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/conditioning`])
      }
      else
        this.router.navigate([`/adults/conditioning/s${conditioningResume}`])*/

    })

  }

  routeComparison(cont: any = 1){
    var comparisonR
    console.log("comparison",cont)
    localStorage.setItem("moduleId",JSON.stringify(7))
    console.log(this.userId)
    this.service.clickModule(7,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        comparisonR="s"+res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        console.log("comparisonR",comparisonR)
        sessionStorage.setItem("comparisonR",comparisonR)
        this.mediaPercent=parseInt(res.MediaPercent)
        this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      console.log("cont",cont)
      if(cont=="1")
      {       
        this.router.navigate([`/adults/comparison/${comparisonR}`])
      }
      else
        this.router.navigate([`/adults/comparison/s0`])

    })
   

  }

  routeReactiveMind(cont: any = 1){
    var rmR
    console.log("reactive mind")
    localStorage.setItem("moduleId",JSON.stringify(54))
    this.service.clickModule(54,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        rmR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("rmR",rmR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/reactive-mind/${rmR}`])
      }
      else
      this.router.navigate([`/adults/reactive-mind/s54001`])
     /* if(!rmR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/reactive-mind`])
      }
      else
        this.router.navigate([`/adults/reactive-mind/s${rmR}`])*/

    })
   
  }

  routeSelfImage(cont: any = 1){
    console.log("self-image")
    var siR
    
    localStorage.setItem("moduleId",JSON.stringify(25))
    console.log(this.userId)
    this.service.clickModule(25,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        siR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("siR",siR)
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/self-image/${siR}`])
      }
      else
      this.router.navigate([`/adults/self-image/s25001`])
      /*console.log("goToPage",siR)
      if(!siR)
      {
        console.log("null go to page")
       this.router.navigate([`/adults/self-image`])
      }
      else
        this.router.navigate([`/adults/self-image/s${siR}`])*/

    })
    
    
   

  }

  routeSelfInterest(cont: any = 1){
    var sinR
    console.log("self interest")
    localStorage.setItem("moduleId",JSON.stringify(55))
    this.service.clickModule(55,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        sinR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sinR",sinR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/self-interest/${sinR}`])
      }
      else
      this.router.navigate([`/adults/self-interest/s55001`])
      
      /*if(!sinR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/self-interest`])
      }
      else
        this.router.navigate([`/adults/self-interest/s${sinR}`])*/

    })
   
  }

  routeIdentity(cont: any = 1){
    var identityResume
    console.log("identity")
    localStorage.setItem("moduleId",JSON.stringify(21))
    this.service.clickModule(21,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        identityResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("identityResume",identityResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/comparison/${identityResume}`])
      }
      else
      this.router.navigate([`/adults/identity/s21001`])
     /* if(!identityResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/identity`])
      }
      else
        this.router.navigate([`/adults/identity/s${identityResume}`])*/

    })
   
    
  }

  routeEmotionalNeeds(cont: any = 1){
    var enR
    console.log("emotional needs")
    localStorage.setItem("moduleId",JSON.stringify(18))
    this.service.clickModule(18,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        enR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("enR",enR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/emotional-needs/${enR}`])
      }
      else
      this.router.navigate([`/adults/emotional-needs/s18001`])
      
      /*if(!sinR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/self-interest`])
      }
      else
        this.router.navigate([`/adults/self-interest/s${sinR}`])*/

    })
  }

  routeInnerBoredom(cont: any = 1){
      var ibR
      console.log("inner boredom")
      localStorage.setItem("moduleId",JSON.stringify(56))
      this.service.clickModule(56,this.userId)
      .subscribe(res=>
        {console.log(res)
          localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
          this.qrList=res
          ibR="s"+res.lastVisitedScreen
          this.goToPage=res.lastVisitedScreen
          // continue where you left
          if(res.lastVisitedScreen ==='') 
          {
            localStorage.setItem("lastvisited", 'F')
          }
          else 
          {
            localStorage.setItem("lastvisited", 'T')
          }
          // /continue where you left
          sessionStorage.setItem("ibR",ibR)
          localStorage.setItem("qrList",JSON.stringify(this.qrList))
      },
      error=>{
        console.log(error)
      },
      ()=>{
        if(cont=="1")
        {          
          this.router.navigate([`/adults/inner-boredom/${ibR}`])
        }
        else
          this.router.navigate([`/adults/inner-boredom/s56001`])
        
        /*if(!sinR)
        {
          console.log("null go to page")
          this.router.navigate([`/adults/self-interest`])
        }
        else
          this.router.navigate([`/adults/self-interest/s${sinR}`])*/
  
      })
   
  }

  routeNatureOfI(cont: any = 1){
    var niR
    console.log("nature-of-i")
    localStorage.setItem("moduleId",JSON.stringify(57))
    this.service.clickModule(57,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        niR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("niR",niR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
    
      
      if(cont=="1")
      {        
        this.router.navigate([`/adults/nature-of-i/${niR}`])
      }
      else
        this.router.navigate([`/adults/nature-of-i/s57001`])

    })
 
  }
  // /how the mind works
  
  // understand emotions
  routeFearAnxiety(cont: any = 1){
    var fearResume
    localStorage.setItem("moduleId",JSON.stringify(19))
    this.service.clickModule(19,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        fearResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fearResume",fearResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/fear-anxiety/${fearResume}`])
      }
      else
      this.router.navigate([`/adults/fear-anxiety/s486`])
     /* if(!fearResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/fear-anxiety`])
      }
      else
        this.router.navigate([`/adults/fear-anxiety/s${fearResume}`])*/

    })

    
   

  }

  routePleasure(cont: any = 1){
    var pleasureResume
    console.log("pleasure")
    localStorage.setItem("moduleId",JSON.stringify(20))
    console.log(this.userId)
    this.service.clickModule(20,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        pleasureResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pleasureResume",pleasureResume)
        console.log("pleasureResume",pleasureResume)
        this.mediaPercent=parseInt(res.MediaPercent)
       // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {      
        this.router.navigate([`/adults/pleasure/${pleasureResume}`])
      }
      else
       this.router.navigate([`/adults/pleasure/s20001`])
    })   

  }

  routeSorrowandLoss(cont: any = 1){
    var sorrowandlossResume
    console.log("sorrowandloss")
    localStorage.setItem("moduleId",JSON.stringify(60))
    this.service.clickModule(60,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        sorrowandlossResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sorrowandlossResume",sorrowandlossResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/sorrow/${sorrowandlossResume}`])
      }
      else
        this.router.navigate([`/adults/sorrow/s60001`])
  
    })
  }

  routeLoneliness(cont: any = 1){
    var lonelinessResume
    console.log("loneliness")
    localStorage.setItem("moduleId",JSON.stringify(61))
    this.service.clickModule(61,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        lonelinessResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lonelinessResume",lonelinessResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/loneliness/${lonelinessResume}`])
      }
      else
        this.router.navigate([`/adults/loneliness/s61001`])
    /* if(!lonelinessResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/loneliness/s162p0`])
      }
      else
        this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

    })
   
    
    
   
  }

  routeAnger(cont: any = 1){
    var angerResume
    console.log("anger")
    localStorage.setItem("moduleId",JSON.stringify(14))
    this.service.clickModule(14,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        angerResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("angerResume",angerResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/anger/${angerResume}`])
      }
      else
        this.router.navigate([`/adults/anger/s162p0`])
    /* if(!angerResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/anger/s162p0`])
      }
      else
        this.router.navigate([`/adults/anger/s${angerResume}`])*/

    })
   
    
    
   
  }
  // /understand emotions

  // living with wisdom 1
  routeStress(cont: any = 1){
    var stressResume
    console.log("stress")
    localStorage.setItem("moduleId",JSON.stringify(44))
    this.service.clickModule(44,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        stressResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("stressResume",stressResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/stress/${stressResume}`])
      }
      else
        this.router.navigate([`/adults/stress/s44001`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/stress`])
      }
      else
        this.router.navigate([`/adults/stress/s${stressResume}`])*/

    })
   
  }

  routeRelationships(cont: any = 1){
    var relationshipResume
    console.log("relationships")
    localStorage.setItem("moduleId",JSON.stringify(47))
    this.service.clickModule(47,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        relationshipResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("relationshipResume",relationshipResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/relationships/${relationshipResume}`])
      }
      else
      this.router.navigate([`/adults/relationships/s47000`])
     
    /*if(!relationshipResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/relationships`])
      }
      else
        this.router.navigate([`/adults/relationships/s${relationshipResume}`])*/

    })
  }

  routeLove(cont: any = 1){
    var loveResume
    console.log("love")
    localStorage.setItem("moduleId",JSON.stringify(62))
    this.service.clickModule(62,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        loveResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("loveResume",loveResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/love/${loveResume}`])
      }
      else
        this.router.navigate([`/adults/love/s62001`])
    /* if(!lonelinessResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/loneliness/s162p0`])
      }
      else
        this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

    })
   
    
    
   
  }

  routeCriticism(cont: any = 1){
    var criticismResume
    console.log("criticism")
   localStorage.setItem("moduleId",JSON.stringify(16))
    this.service.clickModule(16,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        criticismResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("criticismResume",criticismResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/criticism/${criticismResume}`])
      }
      else
      this.router.navigate([`/adults/criticism/s324`])
     /*if(!criticismResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/criticism/s324`])
      }
      else
        this.router.navigate([`/adults/criticism/s${criticismResume}`])*/

    })
    
   
   
  }

  routeSelfEsteem(cont: any = 1){
    var sR
    localStorage.setItem("moduleId",JSON.stringify(17))
    this.service.clickModule(17,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        sR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sR",sR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/self-esteem/${sR}`])
      }
      else
      this.router.navigate([`/adults/self-esteem/s433`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/conditioning/s232`])
      }
      else
        this.router.navigate([`/adults/conditioning/s${this.goToPage}`])*/

    })

    
    

  }

  routeLivingWithPeace(cont: any = 1){
    var livingwithpeaceResume
    console.log("livingwithpeace")
    localStorage.setItem("moduleId",JSON.stringify(63))
    this.service.clickModule(63,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        livingwithpeaceResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("livingwithpeaceResume",livingwithpeaceResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/living-with-peace/${livingwithpeaceResume}`])
      }
      else
        this.router.navigate([`/adults/living-with-peace/s63001`])
    /* if(!lonelinessResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/loneliness/s162p0`])
      }
      else
        this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

    })
   
    
    
   
  }

  routeDealingWithDeath(cont: any = 1){
    var dealingwithdeathResume
    console.log("dealingwithdeath")
    localStorage.setItem("moduleId",JSON.stringify(64))
    this.service.clickModule(64,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        dealingwithdeathResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("dealingwithdeathResume",dealingwithdeathResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/dealing-with-death/${dealingwithdeathResume}`])
      }
      else
        this.router.navigate([`/adults/dealing-with-death/s64001`])
  
    })
  }

  // /living with wisdom 1

  // living with wisdom 2
  routeHappiness(cont: any = 1){
    var hR
    console.log("happiness")
    localStorage.setItem("moduleId",JSON.stringify(23))
    this.service.clickModule(23,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        hR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("hR",hR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/happiness/${hR}`])
      }
      else
      this.router.navigate([`/adults/happiness/s23001`])
     /* if(!identityResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/identity`])
      }
      else
        this.router.navigate([`/adults/identity/s${identityResume}`])*/

    })
   
   
   
  }

  routeCommunication(cont: any = 1){
    var communicationR
     localStorage.setItem("moduleId",JSON.stringify(53))
     this.service.clickModule(53,this.userId)
     .subscribe(res=>
       {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
         this.qrList=res
         communicationR="s"+res.lastVisitedScreen
         this.goToPage=res.lastVisitedScreen         
          // continue where you left
          if(res.lastVisitedScreen ==='') 
          {
            localStorage.setItem("lastvisited", 'F')
          }
          else 
          {
            localStorage.setItem("lastvisited", 'T')
          }
          // /continue where you left
         sessionStorage.setItem("communicationR",communicationR)
         localStorage.setItem("qrList",JSON.stringify(this.qrList))
     },
     error=>{
       console.log(error)
     },
     ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/communication/${communicationR}`])
      }
       else
       this.router.navigate([`/adults/communication/s53001`])
      
      /* if(!communicationR)
       {
         console.log("null go to page")
         this.router.navigate([`/adults/communication`])
       }
       else
         this.router.navigate([`/adults/communication/s${communicationR}`])*/
 
     })
 
     
     
 
  }

  routeOpinionsAndBeliefs(cont: any = 1){
    var opinionsandbeliefsResume
    console.log("opinionsandbeliefs")
    localStorage.setItem("moduleId",JSON.stringify(49))
    this.service.clickModule(49,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        opinionsandbeliefsResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("opinionsandbeliefsResume",opinionsandbeliefsResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/opinions-beliefs/${opinionsandbeliefsResume}`])
      }
      else
        this.router.navigate([`/adults/opinions-beliefs/s49001`])
  
    })
  }
  
  routeSuccessAndFailure(cont: any = 1){
    var successandfailureResume
    console.log("successandfailure")
    localStorage.setItem("moduleId",JSON.stringify(48))
    this.service.clickModule(48,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        successandfailureResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("successandfailureResume",successandfailureResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/success-failure/${successandfailureResume}`])
      }
      else
        this.router.navigate([`/adults/success-failure/s48001`])
  
    })
  }
  
  routeAddiction(cont: any = 1){
    var addictionResume
    console.log("addiction")
    localStorage.setItem("moduleId",JSON.stringify(45))
    this.service.clickModule(45,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        addictionResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("addictionResume",addictionResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/habit-addiction/${addictionResume}`])
      }
      else
        this.router.navigate([`/adults/habit-addiction/s45001`])
  
    })
  }
  
  routeFood(cont: any = 1){
    var foodResume
    console.log("food")
    localStorage.setItem("moduleId",JSON.stringify(46))
    this.service.clickModule(46,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        foodResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("foodResume",foodResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/food-health/${foodResume}`])
      }
      else
        this.router.navigate([`/adults/food-health/s46001`])
  
    })
  }
  
  routeMoney(cont: any = 1){
    var moneyResume
    console.log("money")
    localStorage.setItem("moduleId",JSON.stringify(73))
    this.service.clickModule(73,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        moneyResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("moneyResume",moneyResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/money/${moneyResume}`])
      }
      else
        this.router.navigate([`/adults/money/s73001`])
  
    })
  }
 
  routeWork(cont: any = 1){
    var wR
    console.log("work")
    localStorage.setItem("moduleId",JSON.stringify(58))
    this.service.clickModule(58,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        wR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("wR",wR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/work/${wR}`])
      }
      else
        this.router.navigate([`/adults/work/s58001`])
  
    })
  
  }

  routeLeadership(cont: any = 1){
    var lR
    console.log("leadership")
    localStorage.setItem("moduleId",JSON.stringify(59))
    this.service.clickModule(59,this.userId)
    .subscribe(res=>
      {console.log(res)
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        lR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lR",lR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/leadership/${lR}`])
      }
      else
        this.router.navigate([`/adults/leadership/s59001`])
      
     
  
    })
  
  }
  // /living with wisdom 2 

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }

  closeEvent() {

  }
}
