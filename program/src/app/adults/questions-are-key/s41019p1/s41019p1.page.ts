import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s41019p1',
  templateUrl: './s41019p1.page.html',
  styleUrls: ['./s41019p1.page.scss'],
})
export class S41019p1Page implements OnInit {
  bg="blue_pink_w3"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/2"
  link="/adults/questions-are-key/s41019p2"
  name="#2 Questions open the door to freedom "
  progressImg=""
  toc="questions-are-key/s41000"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Questions are Key").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
