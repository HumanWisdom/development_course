import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../onboarding.service'

@Component({
  selector: 'app-activationkey',
  templateUrl: './activationkey.page.html',
  styleUrls: ['./activationkey.page.scss'],
})
export class ActivationkeyPage implements OnInit {
  activationCode:any
  showWarning=false
  promptLogin=false
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  urlKey=sessionStorage.getItem("urlKey")


  constructor(private router: Router,private service:OnboardingService, private location:Location) { }

  ngOnInit() {
    console.log("save username",this.saveUsername)
    console.log(this.urlKey)

    if(this.urlKey)
    {
      this.urlKey=JSON.parse(this.urlKey)
      this.activationCode=this.urlKey
    }
    this.checkLogin()
     

    
  }

  checkLogin(){
    if(this.saveUsername==false)
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId=JSON.parse(localStorage.getItem("userId"))
    if(!this.userId)
      {
        this.promptLogin=true
      }

  }

  goToLogin(){
    this.router.navigate(['/onboarding/login'])
  }
  verifyActivationKey(){
    this.service.verifyActivationKey(this.activationCode,this.userId, 'IND')
    .subscribe(
      res=>
      {
        if(res!=0)
          {this.showWarning=false}
          let code: any = 1
          localStorage.setItem('Subscriber', code)
        //this.activationCode=res
        //localStorage.setItem("activationCode",JSON.stringify(this.activationCode))
      },
      error=>{
        console.log(error)
        this.showWarning=true
        this.activationCode=""
      },
     
      ()=>{
        if(this.showWarning==false)
        {
          this.router.navigate(["/adults/adult-dashboard"])

        }
        

      }
    )

  }

}
