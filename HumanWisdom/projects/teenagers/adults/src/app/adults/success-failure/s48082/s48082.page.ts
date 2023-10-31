import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s48082',
  templateUrl: './s48082.page.html',
  styleUrls: ['./s48082.page.scss'],
})
export class S48082Page implements OnInit {
  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w12"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="3/4"
  link="/adults/success-failure/s48083"
  name="#4  Meeting failure with intelligence"
  progressImg=""
  toc="success-failure/s48001"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Success and Failure").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
