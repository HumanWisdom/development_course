import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s143003t',
  templateUrl: './s143003t.page.html',
  styleUrls: ['./s143003t.page.scss'],
})
export class S143003tPage implements OnInit 
{

  bg_tn="bg_292d56"
  bg_cft="bg_292d56"
  bg="bg_292d56"
  bookmark=0
  path=this.router.url
  audioPage="/diversity-and-inclusion/s143003"
  toc="/diversity-and-inclusion/s143001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=143003
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration143003")
  totalTime=localStorage.getItem("totalTime143003")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor
  (
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) 
  { }
 
  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    if(JSON.parse(sessionStorage.getItem("bookmark143003"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark143003"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark143003",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143004'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "avDuration":this.avDuration
    }).subscribe(res=>{})
  }

  prev()
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143002'])
  }

}