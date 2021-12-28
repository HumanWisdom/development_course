import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AdultsService } from 'src/app/adults/adults.service';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {
  //static progress mapping
  mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  mediaVideo="https://humanwisdoms3.s3.eu-west-2.amazonaws.com" 
  
  @ViewChild('enablemodal') enablemodal:ElementRef;
  @ViewChild('closemodal') closemodal:ElementRef;
  @ViewChild('enabletab') enabletab:ElementRef;

  user:any
  userId:any
  idToken:any
  email:any;
  password:any
  showAlert=false
  successPassword=JSON.parse(sessionStorage.getItem("successPassword"))
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
 
  t = new Date();
  minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  message:any
  
  get fullname(){
    return this.registrationForm.get('fullname')
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
  // registrationForm=new FormGroup({
  //   firstName:new FormControl(''),
  //   lastName:new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // })
  registrationForm=this.fb.group({
    fullname:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(3)]],
    confirmPassword:['', [Validators.required, Validators.minLength(3)]],
  },{validator: this.PasswordValidator})

  

  constructor(private fb: FormBuilder,
    private router: Router,
    private activate:ActivatedRoute,
    private authService: SocialAuthService,
    private aservice:AdultsService,
    private service:OnboardingService) { 
      // let acceptCookie = localStorage.getItem('acceptcookie');
      // if(acceptCookie === null)
      //   this.router.navigate(['/adults/framework-v1/cookie-policy'])
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
    });
    }

  ngOnInit() {
    setTimeout(() => {
      if(localStorage.getItem("emailCode") === 'T') {
        let userid = localStorage.getItem("userIdCode")
        this.service.verifyUser(userid)
        .subscribe(res=>{
          console.log(res)
        })
      }
    }, 4000)
  }
  forbiddenNameValidator(control: AbstractControl):{[key: string]:any} | null
   {
     const forbidden= /admin/.test(control.value)
     return forbidden ?{'forbiddenName': {value: control.value}}:null

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

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  signup(){
     this.service.addUser({ 
     "FName":this.registrationForm.get('fullname').value.split(' ')[0],
     "Lname":this.registrationForm.get('fullname').value.split(' ')[1] === undefined ? '' :  this.registrationForm.get('fullname').value.split(' ')[1],
     "Email":this.registrationForm.get('email').value,
     "Pwd":this.registrationForm.get('password').value,
     })
     .subscribe(res=>
       {
       console.log(res)
       if(res>0){
        window.alert('An email has been sent to you. Please click on the link shared with you')
        // let code = window.prompt('Verify Code', '')
        // if(code !== null) {
        //   this.verificationCode = code;
        //   this.verifyCode()
        // }
        this.showMessage=true
        this.signUser=res
        this.showWarning=false
        localStorage.setItem("signUser",JSON.stringify(this.signUser))
        

       }
        

       },
       error=>{
         console.log(error.error.Message)
         this.message=error.error.Message
         window.alert(this.message)
         this.showWarning=true
        

      },
      ()=>{
        /*if(this.showWarning=false)
        {
          this.showMessage=true
        }*/
         
       
      
       }
     )
    

  }

  verifyCode(){
    this.service.verifyCode({"Email":this.registrationForm.get('email').value,
                              "VCode":this.verificationCode})
    .subscribe(res=>{
      console.log(res)
      if(res>0)
      {
        this.codeVerified=true
        localStorage.setItem("codeVerified",JSON.stringify(this.codeVerified))
        localStorage.setItem("email",JSON.stringify(this.registrationForm.get('email').value))
        localStorage.setItem("password",JSON.stringify(this.registrationForm.get('password').value))
        window.location.reload()
      }
      
    }, (err) => {
      window.alert(err.error['Message'])
    })

  }

  sharedForum(value) {
    this.agree = value;
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

      this.service.verifyGoogle({
        "TokenID": user.idToken,
        "FName":this.socialFirstName,
        "LName": this.socialLastName,
        "Email": this.socialEmail,
         "VCode": ""
      })
      .subscribe(res=>
        {
          console.log(res)
          if(res){
            
          
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
        this.service.verifyFb({
          "TokenID": user.idToken,
          "FName":this.socialFirstName,
          "LName": this.socialLastName,
          "Email": this.socialEmail,
           "VCode": ""
        })
        .subscribe(res=>
          {
            console.log(res)
            if(res){
             
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

  emailLogin(){
    localStorage.removeItem("token")
    if(this.urlEmail)
          {
            this.service.verifyUser(this.urlEmail)
            .subscribe(res=>{
              console.log(res)
            })
          }
    this.service.emailLogin(this.email,this.password)
    .subscribe(
      res=>
      {//console.log(res)
        this.loginResponse=res
        console.log(this.loginResponse)
        localStorage.setItem('socialLogin', 'F');
        localStorage.setItem('guest', 'F');
        localStorage.setItem('btnclick', 'F')
        localStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        sessionStorage.setItem("loginResponse",JSON.stringify(this.loginResponse))
        localStorage.setItem("token",JSON.stringify(res.access_token))
        localStorage.setItem("Subscriber", res.Subscriber)
        localStorage.setItem("userId",JSON.stringify(this.userId))
        localStorage.setItem("RoleID",JSON.stringify(res.RoleID))
        localStorage.setItem("email", this.email)
        localStorage.setItem("pswd", this.password)
        localStorage.setItem("name", res.Name)
        localStorage.setItem("first", 'T')
        localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
        localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
        localStorage.setItem("video",JSON.stringify(this.video))
        localStorage.setItem("audio",JSON.stringify(this.audio))
        if(res.UserId==0)
        {
          this.showAlert=true
          window.alert('You have enetered wrong credentials. Please try again.')
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
          this.freescreens()
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
                  this.router.navigate(['/onboarding/change-password'])
                }else {
                  if(localStorage.getItem("emailCode") === 'T') {
                    localStorage.setItem("emailCode", 'F');
                  }
                  this.router.navigate(['/onboarding/add-to-cart'])
                }
              } else {
                if (roleid === 8 && emailcode === 'T') {
                  localStorage.setItem("isloggedin", 'T')
                  this.router.navigate(['/onboarding/change-password'])
                }else {
                  if(localStorage.getItem("emailCode") === 'T') {
                    localStorage.setItem("emailCode", 'F');
                  }
                  localStorage.setItem("isloggedin", 'T')
                  if(roleid === 8) {
                    let userId = JSON.parse(localStorage.getItem("userId"))
                    window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
                  }else {
                    this.router.navigate(['/adults/adult-dashboard'])
                  }
                
              }
            }
              
            
         /* if(this.urlEmail)
          {
            this.service.verifyUser(this.userId)
            .subscribe(res=>{
              console.log(res)
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

  getsignuptab(){
    this.showAlert = false;
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
          this.x = []
          let result = res.map(a => a.FreeScrs);
          let arr;
          result=result.forEach(element => {
            if(element && element.length !== 0) {
              this.x.push(element.map(a=>parseInt(a.ScrNo)))
              arr = Array.prototype.concat.apply([], this.x);
            }
          })
          // this.closemodal.nativeElement.click()
          localStorage.setItem("freeScreens",JSON.stringify(arr))
          // localStorage.setItem("isloggedin", 'T')
          // this.router.navigate(['/adults/adult-dashboard'])
         console.log('homescreen')
        
        }
        
       
       
      )
  }

 signInWithApple() {
    const CLIENT_ID = "humanwisdom.web.service"
    const REDIRECT_API_URL = "https://humanwisdom.info/api/verifyAppleTokenAndLogin"
    window.open(
        `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_API_URL)}&response_type=code id_token&scope=name email&response_mode=form_post`,
        '_blank'
    );

    window.addEventListener('message', async event => {
      console.log(event.data.id_token)
        const decodedToken = event.data.id_token;
        let requestData = {}
        if (event.data.user) {
            const userName = JSON.parse(event.data.user);
            requestData = {
                "email": decodedToken.email,
                "name": `${userName.name.firstName} ${userName.name.lastName}`,
                "socialId": decodedToken.sub,
            };
        } else {
            requestData = {
                "email": decodedToken.email,
                "socialId": decodedToken.sub,
            };
        }
        console.log(`User Data : ${requestData}`);
        // do your next stuff here
    });
};

}