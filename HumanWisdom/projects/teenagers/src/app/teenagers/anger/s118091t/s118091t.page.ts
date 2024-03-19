import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s118091t',
  templateUrl: './s118091t.page.html',
  styleUrls: ['./s118091t.page.scss'],
})
export class S118091tPage implements OnInit 
{

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w4"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/anger/s118091"
  toc="/anger/s118001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=118091
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration118091")
  totalTime=localStorage.getItem("totalTime118091")
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
    if(JSON.parse(sessionStorage.getItem("bookmark118091"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark118091"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark118091",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/anger/s118092'])
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
    this.router.navigate(['/teenagers/anger/s118090'])
  }

}