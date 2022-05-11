import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s198p2',
  templateUrl: './s198p2.page.html',
  styleUrls: ['./s198p2.page.scss'],
})

export class S198p2Page implements OnInit {
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w6"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="2/3"
  link="/adults/anger/s199"
  name="#3  Responding to anger with wisdom"
  progressImg=""
  toc="anger/s162p0"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Anger").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
