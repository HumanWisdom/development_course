import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s54018',
  templateUrl: './s54018.page.html',
  styleUrls: ['./s54018.page.scss'],
})
export class S54018Page implements OnInit {
  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w3"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/3"
  link="/adults/reactive-mind/s54019"
  name="#2  Effects of a reactive mind"
  progressImg=""
  toc="reactive-mind/s54001"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Reactive Mind").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
