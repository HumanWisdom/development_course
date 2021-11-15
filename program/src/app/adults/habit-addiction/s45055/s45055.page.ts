import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s45055',
  templateUrl: './s45055.page.html',
  styleUrls: ['./s45055.page.scss'],
})
export class S45055Page implements OnInit {
  bg="purple_w5"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/6"
  link="/adults/habit-addiction/s45056"
  name="#2  The hidden causes of addiction"
  progressImg=""
  toc="habit-addiction/s45001"

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
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Addiction").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
