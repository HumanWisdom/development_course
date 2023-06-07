import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s122045',
  templateUrl: './s122045.page.html',
  styleUrls: ['./s122045.page.scss'],
})
export class S122045Page implements OnInit 
{
  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/3"
  link="/nature-of-the-i/s122046"
  name="#2 Four ways nature-of-the-i impacts our life"
  progressImg=""
  toc="nature-of-the-i/s122001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="nature-of-the-i").Percentage)
     console.log(this.progressPercent)
    })
  }
}