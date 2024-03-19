import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132096',
  templateUrl: './s132096.page.html',
  styleUrls: ['./s132096.page.scss'],
})
export class S132096Page implements OnInit {
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w6"

  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="2/7"
  link="teenagers/communication/s132097"
  name="#3  Speaking with intelligence"
  progressImg=""
  toc="teenagers/communication/s132001"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId ==132).Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
