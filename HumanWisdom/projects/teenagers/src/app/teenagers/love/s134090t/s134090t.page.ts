import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s134090t',
  templateUrl: './s134090t.page.html',
  styleUrls: ['./s134090t.page.scss'],
})
export class S134090tPage implements OnInit 
{

  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w7"
  bookmark=0
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="teenagers/love/s134090"
  toc="teenagers/love/s134001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=134090
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration134090")
  totalTime=localStorage.getItem("totalTime134090")
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
    if(JSON.parse(sessionStorage.getItem("bookmark134090"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark134090"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark134090",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
<<<<<<< HEAD
    this.router.navigate(['teenagers/love/s134091'])
=======
    this.router.navigate(['/teenagers/love/s134091'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
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
<<<<<<< HEAD
    this.router.navigate(['teenagers/love/s134089'])
=======
    this.router.navigate(['/teenagers/love/s134089'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  }

}