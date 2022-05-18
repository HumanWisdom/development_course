import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s47103',
  templateUrl: './s47103.page.html',
  styleUrls: ['./s47103.page.scss'],
})
export class S47103Page implements OnInit {
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w9"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="3/10"
  link="/adults/relationships/s47104"
  name="#4  Our hidden emotional needs"
  progressImg=""
  toc="relationships/s47000"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Relationships").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}

