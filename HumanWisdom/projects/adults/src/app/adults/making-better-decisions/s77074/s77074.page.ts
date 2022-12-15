import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s77074',
  templateUrl: './s77074.page.html',
  styleUrls: ['./s77074.page.scss'],
})
export class S77074Page implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w5"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="2/3"
  link="/adults/making-better-decisions/s77075"
  name="#3  Making better decisions"
  progressImg=""
  toc="making-better-decisions/s77001"

  constructor(private router: Router, private location:Location,private service: AdultsService) { }

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Making better decisions").Percentage)
     console.log(this.progressPercent)
    })
  }
}