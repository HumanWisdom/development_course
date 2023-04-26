import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s105082t',
  templateUrl: './s105082t.page.html',
  styleUrls: ['./s105082t.page.scss'],
})
export class S105082tPage implements OnInit 
{

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w7"
  bookmark=0
  path=this.router.url
  audioPage="/conditioning/s105082"
  toc="/conditioning/s105001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=105082
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration105082")
  totalTime=localStorage.getItem("totalTime105082")
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
    if(JSON.parse(sessionStorage.getItem("bookmark105082"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark105082"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark105082",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/conditioning/s105083'])
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
    this.router.navigate(['/teenagers/conditioning/s105081'])
  }

}