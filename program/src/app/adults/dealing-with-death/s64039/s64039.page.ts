import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s64039',
  templateUrl: './s64039.page.html',
  styleUrls: ['./s64039.page.scss'],
})
export class S64039Page implements OnInit {
  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w4"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/2"
  link="/adults/dealing-with-death/s64040"
  name="#2  Living with an awareness of death, helps us celebrate life"
  progressImg=""
  toc="dealing-with-death/s64001"

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
      
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.Module=="Dealing With Death").Percentage)
     console.log(this.progressPercent)
    
    })
  }
}
