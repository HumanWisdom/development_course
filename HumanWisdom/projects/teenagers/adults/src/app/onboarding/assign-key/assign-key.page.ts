import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../../../../../shared/services/onboarding.service'


@Component({
  selector: 'app-assign-key',
  templateUrl: './assign-key.page.html',
  styleUrls: ['./assign-key.page.scss'],
})
export class AssignKeyPage implements OnInit {
 
  activationKey:any
  userEmail:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  disableInvite=false
  keyList=JSON.parse(localStorage.getItem("keyList"))
  message:any
  sentInvite=false
  constructor(private router: Router,private service:OnboardingService, private location:Location) { }

  ngOnInit() {
    console.log(this.keyList)
    for(var i=0;i<this.keyList.length;i++)
    {
      this.keyList[i].sentInvite=false
      this.keyList[i].myself=0
      if(this.keyList[i].Assigned==0)
        this.keyList[i].Assigned=false
      else
        this.keyList[i].Assigned=true
    }

    if(this.saveUsername==false)
    this.userEmail=JSON.parse(sessionStorage.getItem("userEmail"))
    else
    this.userEmail=JSON.parse(localStorage.getItem("userEmail"))
    
  }

  checkMyself(e,key){
    console.log(e,key)
    for(var i=0;i<this.keyList.length;i++)
    {
      if(key==this.keyList[i].ActKey)
      {
        this.keyList[i].myself=1
      }
      else
      this.keyList[i].myself=0
      
    }
   

  }
  assignKey(key,email,name,message,myself,boughtBy){
    console.log(myself)
    
    

    this.service.assignKey({
    "ActKey":key,
    "Email":email,
    "Name":name,
    "Msg":message,
    "Myself":myself})
    .subscribe(res=>{
      

      if(!res)
        this.disableInvite=false
      else
        this.disableInvite=true
      this.keyList=res
    
    })
    if(myself==1)
    {
      email=this.userEmail
      name=boughtBy
      this.router.navigate(['/adults/adult-dashboard'])
    }
    
   
    
  }

}
