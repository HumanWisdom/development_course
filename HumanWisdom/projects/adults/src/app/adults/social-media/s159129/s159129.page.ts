import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s159129',
  templateUrl: './s159129.page.html',
  styleUrls: ['./s159129.page.scss'],
})
export class S159129Page implements OnInit {

  bg_tn=""
  bg_cft=""
  bg=""
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="3/4"
  link="/adults/social-media/s159130"
  name="A short film"
  progressImg=""
  toc="social-media/s159001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId==159).Percentage)
     
    })
  }
}