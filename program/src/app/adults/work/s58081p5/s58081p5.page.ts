import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s58081p5',
  templateUrl: './s58081p5.page.html',
  styleUrls: ['./s58081p5.page.scss'],
})
export class S58081p5Page implements OnInit {

  bg="dark_blue_w3"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="3/4"
  link="/adults/work/s58081p6"
  name="#4  Being happy at work - Podcast"
  progressImg=""
  toc="work/s58001"

  constructor(private router: Router, private location:Location,private service: AdultsService) { }

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
      console.log(res)
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Work").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
