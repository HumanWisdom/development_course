import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s142076',
  templateUrl: './s142076.page.html',
  styleUrls: ['./s142076.page.scss'],
})
export class S142076Page implements OnInit 
{
  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w5"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/9"
  link="teenagers/making-better-decisions/s142077"
  name="#3  Four ways comparison impacts our life"
  progressImg=""
  toc="teenagers/making-better-decisions/s142001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Comparison & Envy").Percentage)
     console.log(this.progressPercent)
    })
  }
}