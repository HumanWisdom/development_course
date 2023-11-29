import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156265',
  templateUrl: './s156265.page.html',
  styleUrls: ['./s156265.page.scss'],
})
export class S156265Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w6"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="7/9"
  link="/dealing-with-depression/s156266"
  name="#8 A conversation wtih someone who has overcome thier depression"
  progressImg=""
  toc="dealing-with-depression/s156001"

  constructor(private router: Router, private location:Location,private service: TeenagersService) { }

  ngOnInit() 
  {
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

  getProgress()
  {
    this.service.getPoints(this.userId)
    .subscribe(res=>{
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Dealing with Depression").Percentage)
     console.log(this.progressPercent)
    })
  }
}