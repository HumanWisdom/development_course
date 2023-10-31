import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../../../../../shared/services/onboarding.service'
@Component({
  selector: 'app-raf',
  templateUrl: './raf.page.html',
  styleUrls: ['./raf.page.scss'],
})
export class RafPage implements OnInit {

  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  friendName:any
  friendEmail:any


  constructor(private router: Router,private service:OnboardingService, private location:Location) { }

  ngOnInit(): void {
    if(this.saveUsername==false)
    this.userId=JSON.parse(sessionStorage.getItem("userId"))
  else
    this.userId=JSON.parse(localStorage.getItem("userId"))
  }
  addRefer(){
    this.service.addRefer({
      "ReferId":0,
      "UserId":this.userId,
      "FriendName":this.friendName,
      "FriendEmail":this.friendEmail
    }).subscribe(res=>{
      
    })

  }

}
