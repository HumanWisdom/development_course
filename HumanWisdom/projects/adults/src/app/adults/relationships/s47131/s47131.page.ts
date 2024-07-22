import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s47131',
  templateUrl: './s47131.page.html',
  styleUrls: ['./s47131.page.scss'],
})
export class S47131Page implements OnInit {
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w4"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="4/10"
  link="/adults/relationships/s47132"
  name="#5  Causes of conflict"
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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId==47).Percentage)
     
    
    })
  }
}

