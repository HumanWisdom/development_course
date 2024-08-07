import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s63032',
  templateUrl: './s63032.page.html',
  styleUrls: ['./s63032.page.scss'],
})
export class S63032Page implements OnInit {
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w4"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/2"
  link="/adults/living-with-peace/s63033"
  name="#2  How can we use wisdom to live in peace?"
  progressImg=""
  toc="living-with-peace/s63001"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId==63).Percentage)
     
    
    })
  }
}
