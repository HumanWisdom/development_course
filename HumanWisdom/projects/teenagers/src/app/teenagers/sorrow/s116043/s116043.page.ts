import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s116043',
  templateUrl: './s116043.page.html',
  styleUrls: ['./s116043.page.scss'],
})
export class S116043Page implements OnInit {
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w3"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/3"
  link="teenagers/sorrow/s116044"
  name="#2  Why is loss so painful?"
  progressImg=""
  toc="teenagers/sorrow/s116001"

  constructor(private router: Router, private location:Location,private service: TeenagersService) { }

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Sorrow and Loss").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
