import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s141057',
  templateUrl: './s141057.page.html',
  styleUrls: ['./s141057.page.scss'],
})
export class S141057Page implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w3"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="2/4"
  link="/success-failure/s141058"
  name="#3  How can we be successful?"
  progressImg=""
  toc="success-failure/s141001"

  constructor
  (
    private router: Router, 
    private location:Location,
    private service: TeenagersService,
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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId==141).Percentage)
     console.log(this.progressPercent)
    })
  }
}