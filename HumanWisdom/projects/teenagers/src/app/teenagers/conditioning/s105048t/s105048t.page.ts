import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s105048t',
  templateUrl: './s105048t.page.html',
  styleUrls: ['./s105048t.page.scss'],
})
export class S105048tPage implements OnInit 
{

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w3"
  bookmark=0
  path=this.router.url
  audioPage="/conditioning/s105048"
  toc="/conditioning/s105001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=105048
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration105048")
  totalTime=localStorage.getItem("totalTime105048")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName = "teenagers"
  
  constructor
  (
    private router: Router,
    private service:TeenagersService,
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
    if(JSON.parse(sessionStorage.getItem("bookmark105048"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark105048"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark105048",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/conditioning/s105049'])
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
    this.router.navigate(['/teenagers/conditioning/s105047'])
  }

}