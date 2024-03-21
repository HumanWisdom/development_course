import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s123079',
  templateUrl: './s123079.page.html',
  styleUrls: ['./s123079.page.scss'],
})
export class S123079Page implements OnInit 
{
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w2"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="2/3"
  link="/teenagers/external-approval/s123080"
  name="#3  Our need for external validation"
  progressImg=""
  toc="teenagers/external-approval/s123001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId==123).Percentage)
     console.log(this.progressPercent)
    })
  }
}