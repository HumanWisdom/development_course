import { Component, OnInit } from '@angular/core';
import {OnboardingService} from '../onboarding.service'
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email:any
  password:any
  confirmPassword:any
  successPassword=0
  check:any
  urlEmail:any
  showWarning=false
 
  constructor(private router:Router,
    private service: OnboardingService,
    private activate:ActivatedRoute) { }

  ngOnInit() {
    this.activate.queryParams.subscribe(params => {
      this.urlEmail= params['email'];
     
      console.log("urlEmail",this.urlEmail)}); 

   
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
            console.log(resp)
           
            if(resp.toLocaleLowerCase().match("Your password has been reset. "))
            {
            
              
               this.successPassword=1
               sessionStorage.setItem("successPassword",JSON.stringify(this.successPassword))
               this.router.navigate(["/onboarding/login"]);
    
            }
             
    
          })

    }
    

  }

}
