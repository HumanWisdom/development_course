import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s159050',
  templateUrl: './s159050.page.html',
  styleUrls: ['./s159050.page.scss'],
})
export class S159050Page implements OnInit {

  bg_tn=""
  bg_cft=""
  bg=""
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/4"
  link="/adults/social-media/s159051"
  name="Hidden thinking patterns that influence our use of social media"
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
     console.log(this.progressPercent)
    })
  }
}