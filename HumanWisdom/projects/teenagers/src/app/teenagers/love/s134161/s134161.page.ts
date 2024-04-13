import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s134161',
  templateUrl: './s134161.page.html',
  styleUrls: ['./s134161.page.scss'],
})
export class S134161Page implements OnInit, OnDestroy {

  bg_tn = "bg_blue_pink"
  bg_cft = "bg_blue_pink"
  bg = "blue_pink_w6"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 134161
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "teenagers/love/s134001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))
 
  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }

  ngOnInit() 
  {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();
    
    if(JSON.parse(sessionStorage.getItem("bookmark134161"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark134161"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark134161",JSON.stringify(this.bookmark))
  }

  createScreen()
  {
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      { 
      })
  }

  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
<<<<<<< HEAD
    this.router.navigate(['teenagers/love/s134162'])
=======
    this.router.navigate(['/teenagers/love/s134162'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      { 
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      },
      error=>{console.log(error)},
      ()=>{

      })
  }

  prev()
  {
<<<<<<< HEAD
    this.router.navigate(['teenagers/love/s134160'])
=======
    this.router.navigate(['/teenagers/love/s134160'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  }

  ngOnDestroy()
  {}

}