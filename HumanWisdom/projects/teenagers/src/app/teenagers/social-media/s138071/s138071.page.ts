import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s138071',
  templateUrl: './s138071.page.html',
  styleUrls: ['./s138071.page.scss'],
})
export class S138071Page implements OnInit {

  bg_tn=""
  bg_cft=""
  bg=""
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/3"
  link="/social-media/s138072"
  name="Using social media with intelligence"
  progressImg=""
  toc="social-media/s138001"

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