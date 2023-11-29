import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s133155',
  templateUrl: './s133155.page.html',
  styleUrls: ['./s133155.page.scss'],
})
export class S133155Page implements OnInit {
  
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w10"

  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="4/5"
  link="/happiness/s133156"
  name="#5  What can we do to be happier?"
  progressImg=""
  toc="happiness/s133001"

  constructor(private router: Router, private location:Location,private service: TeenagersService) { }

  ngOnInit() {
   
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
      this.userName=JSON.parse(sessionStorage.getItem("userName"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
      this.userName=JSON.parse(localStorage.getItem("userName"))
  
    }
      this.getProgress()
  
  }
  getProgress(){
    this.service.getPoints(this.userId)
    .subscribe(res=>{
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Happiness").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
