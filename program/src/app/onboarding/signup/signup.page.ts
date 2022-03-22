import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../onboarding.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  value: number = 100;
  showWarning=false
  showMessage=false
  agree=false
  showVerify=false
  verificationCode:any
  codeVerified=false
  signUser:any
 
  t = new Date();
  minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  message:any
  
  get firstName(){
    return this.registrationForm.get('firstName')
  }
  get lastName(){
    return this.registrationForm.get('lastName')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  // registrationForm=new FormGroup({
  //   firstName:new FormControl(''),
  //   lastName:new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // })
  registrationForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['', [Validators.required]],
    verificationCode:['']
  },{validator: this.PasswordValidator})

  constructor(private fb: FormBuilder,
    private router: Router,
    private service:OnboardingService,
    private location:Location) { }

  ngOnInit() {
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
     "FName":this.registrationForm.get('firstName').value,
     "LName":this.registrationForm.get('lastName').value,
     "Email":this.registrationForm.get('email').value,
     "Pwd":this.registrationForm.get('password').value,
     })
     .subscribe(res=>
       {
       
       if(res>0){
        this.showMessage=true
        this.signUser=res
        localStorage.setItem("signUser",JSON.stringify(this.signUser))
        

       }
        

       },
       error=>{
         console.log(error.error.Message)
         this.message=error.error.Message
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
      
      if(res>0)
      {
        this.codeVerified=true
        localStorage.setItem("codeVerified",JSON.stringify(this.codeVerified))
        localStorage.setItem("email",JSON.stringify(this.registrationForm.get('email').value))
        localStorage.setItem("password",JSON.stringify(this.registrationForm.get('password').value))
        this.router.navigate(["/onboarding/login"])
      }
      
    })

  }

  sharedForum(value) {
    this.agree = value;
  }

}
