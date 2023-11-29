import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s131175',
  templateUrl: './s131175.page.html',
  styleUrls: ['./s131175.page.scss'],
})
export class S131175Page implements OnInit 
{
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w7"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="5/10"
  link="/relationships/s131176"
  name="#6  Feeling hurt. Responding with intelligence."
  progressImg=""
  toc="relationships/s131001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="relationships").Percentage)
     console.log(this.progressPercent)
    })
  }
}