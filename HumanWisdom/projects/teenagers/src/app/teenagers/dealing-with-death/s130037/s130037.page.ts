import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s130037',
  templateUrl: './s130037.page.html',
  styleUrls: ['./s130037.page.scss'],
})
export class S130037Page implements OnInit 
{
  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w4"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/2"
  link="/dealing-with-death/s130038"
  name="#2  Living with an awareness of death, helps us celebrate life"
  progressImg=""
  toc="dealing-with-death/s130001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="dealing-with-death").Percentage)
     console.log(this.progressPercent)
    })
  }
}