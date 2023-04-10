import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s91049',
  templateUrl: './s91049.page.html',
  styleUrls: ['./s91049.page.scss'],
})
export class S91049Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w12"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/2"
  link="/adults/external-approval/s91050"
  name="#2  Responding with wisdom"
  progressImg=""
  toc="external-approval/s91001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Need for approval").Percentage)
     console.log(this.progressPercent)
    })
  }
}