import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from "../../teenagers.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s79021',
  templateUrl: './s79021.page.html',
  styleUrls: ['./s79021.page.scss'],
})
export class S79021Page implements OnInit,OnDestroy {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=79021
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="what-is-wisdom/s79001"
  path=this.router.url

  constructor(
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  }

  routeSurvey()
  {
    this.router.navigate(['/wisdom-survey/wisdom-scale'], { queryParams: { page: '/adults/what-is-wisdom/s79032' } })
  }

  ngOnDestroy()
  {}
}
