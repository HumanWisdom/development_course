import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s133086',
  templateUrl: './s133086.page.html',
  styleUrls: ['./s133086.page.scss'],
})
export class S133086Page implements OnInit 
{
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w8"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="2/5"
  link="/happiness/s133087"
  name="#3  What makes us unhappy?"
  progressImg=""
  toc="happiness/s133001"

  constructor
  (
    private router: Router, 
    private location:Location,
    private service: TeenagersService
  ) 
  { }

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="happiness").Percentage)
     console.log(this.progressPercent)
    })
  }
}