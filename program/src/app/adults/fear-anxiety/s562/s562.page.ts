import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s562',
  templateUrl: './s562.page.html',
  styleUrls: ['./s562.page.scss'],
})

export class S562Page implements OnInit {
  bg="purple_red_w4"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="3/5"
  link="/adults/fear-anxiety/s563"
  name="#4  What is the mechanism behind fear?  "
  progressImg=""
  toc="fear-anxiety/s486"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Fear & Anxiety").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
