import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s143070',
  templateUrl: './s143070.page.html',
  styleUrls: ['./s143070.page.scss'],
})
export class S143070Page implements OnInit 
{
  bg_tn="bg_292d56"
  bg_cft="bg_292d56"
  bg="bg_292d56"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="2/3"
  link="/adults/diversity-and-inclusion/s143071"
  name="#3  Bringing about change"
  progressImg=""
  toc="diversity-and-inclusion/s143001"

  constructor
  (
    private router: Router, 
    private location:Location,
    private service: AdultsService
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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId==143).Percentage)
     
    })
  }
}