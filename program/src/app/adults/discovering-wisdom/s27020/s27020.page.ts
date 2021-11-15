import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s27020',
  templateUrl: './s27020.page.html',
  styleUrls: ['./s27020.page.scss'],
})
export class S27020Page implements OnInit,OnDestroy {

  bg="purple_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=27020
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="discovering-wisdom/s27001"
  path=this.router.url
  

  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }

  ngOnInit() {
  
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  }

  routeSurvey(){
    this.router.navigate(['/wisdom-survey/wisdom-scale'], { queryParams: { page: '/adults/discovering-wisdom/s27032' } })
  }
  
  


 
  ngOnDestroy(){
   

  }


}
