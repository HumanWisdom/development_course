import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112027',
  templateUrl: './s112027.page.html',
  styleUrls: ['./s112027.page.scss'],
})

export class S112027Page implements OnInit {
  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w7"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/5"
  link="/adults/fear-anxiety/s507"
  name="#2  10 ways fear shapes our lives"
  progressImg=""
  toc="fear-anxiety/s112001"

  constructor(private router: Router, private location:Location,private service: TeenagersService) { }

  ngOnInit() {
   
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
  getProgress(){
    this.service.getPoints(this.userId)
    .subscribe(res=>{
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Fear & Anxiety").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
