import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AdultsService } from 'src/app/adults/adults.service';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

@Component({
  selector: 'app-subscription-options',
  templateUrl: './subscription-options.page.html',
  styleUrls: ['./subscription-options.page.scss'],
})
export class SubscriptionOptionsPage implements OnInit {
  @ViewChild('actclosemodal') actclosemodal:ElementRef;

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
 enablebanner = false;
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
  mediaAudio="https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo="https://d1tenzemoxuh75.cloudfront.net"  
  mediaPercent:any
  freeScreens=[]
  cardlist=[]

 registrationForm=this.fb.group({
  fname:['',[Validators.required,Validators.minLength(3)]],
  lname:['',[Validators.required,Validators.minLength(3)]],
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required, Validators.minLength(3)]],
  confirmPassword:['', [Validators.required, Validators.minLength(3)]],
},{validator: this.PasswordValidator})


  constructor(public router: Router, private service: AdultsService,private services: OnboardingService, private cd: ChangeDetectorRef, private fb: FormBuilder,private authService: SocialAuthService) { }

  ngOnInit() {
    this.getCountry()
  }
  
  getCountry(){
    this.services.getCountry().subscribe((res:any)=>{  
      
      if(res['in_eu']) {
        this.countryCode = 'EUR'
      }else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
    },

      error=>{
        console.log(error)
      },
      ()=>{
      });  

  }

  getPricing(){
    this.services.getPricing(this.countryCode).subscribe(res=>
      {
        console.log(res,"product list from api")
        this.cardlist = res[0]; 
      }, (err) => {
        window.alert(err.error['Message'])
      }
    )
  }  


  getclick(val) {
    if(val === 'click here') {
    }else if(val === 'Yearly' || val === 'Monthly') {
      localStorage.setItem('cartlist', JSON.stringify(this.cardlist));
      localStorage.setItem('personalised subscription', val);
      this.router.navigate(['/onboarding/login'])
    }else {
      this.router.navigate(['/adults/adult-dashboard'])
    }
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


  already(value) {
    if(value === 'home') {
      this.actclosemodal.nativeElement.click()
      let userid = localStorage.getItem('isloggedin');
      if(userid === 'T') {
        localStorage.setItem('personalised', 'F');
        this.router.navigate(['/adults/adult-dashboard'])
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

  emaillogin(val=''){
    let email = val === '' || val === 'second' ? localStorage.getItem("email") : this.loginemail;
    let password = val === '' || val === 'second' ? localStorage.getItem("pswd") : this.loginpassword;
    this.services.emailLogin(email, password)
    .subscribe(
      res=>
      {//
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
        if(res.Subscriber === 0) {
          this.isSubscribe =  true;
        }
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
        localStorage.setItem("text",JSON.stringify(this.text))
        localStorage.setItem("video",JSON.stringify(this.video))
        localStorage.setItem("audio",JSON.stringify(this.audio))
        localStorage.setItem("moduleId",JSON.stringify(this.moduleId))
        localStorage.setItem("question",JSON.stringify(this.question))
        localStorage.setItem("reflection",JSON.stringify(this.reflection))
        localStorage.setItem("feedbackSurvey",JSON.stringify(this.feedbackSurvey))
        this.userId=JSON.parse(localStorage.getItem("userId"))
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
        if(res.UserId==0)
        {

        }
        else{
          this.userId=res.UserId
          this.userName=res.Name
          sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
          localStorage.setItem("userId",JSON.stringify(this.userId))
          localStorage.setItem("token",JSON.stringify(res.access_token))
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


  verifyCode(){
    this.services.verifyCode({"Email":this.registrationForm.get('email').value,
                              "VCode":this.verificationCode})
    .subscribe(res=>{
      
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
      
      if(res)
      {
      
      }

      }, (err) => {
        console.log(err);
      })

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

 getcode(value) {
  this.activationCode = value;
}

verifyactkey() {
  this.service.verifyactkey(this.activationCode)
  .subscribe(
    res=>
    {
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
      console.log(error);
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
    {
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
      console.log(error);
      // window.alert(error.error['Message'])
    },
   
    ()=>{
      

    }
  )

}

  googleLogin(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.idToken=user.idToken
      this.socialFirstName=user.firstName
      this.socialLastName=user.lastName
      this.socialEmail=user.email

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
          
          if(res){
            
            this.firstpage = false
            this.fifthpage = false
            this.thirdpage = true
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
            
            if(res){
                this.firstpage = false
                this.fifthpage = false
                this.thirdpage = true
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

}
