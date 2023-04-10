import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s92259',
  templateUrl: './s92259.page.html',
  styleUrls: ['./s92259.page.scss'],
})
export class S92259Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w6"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="7/8"
  link="/adults/dealing-with-depression/s92260"
  name="#8 A conversation wtih someone who has overcome thier depression"
  progressImg=""
  toc="dealing-with-depression/s92001"

  constructor(private router: Router, private location:Location,private service: AdultsService) { }

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