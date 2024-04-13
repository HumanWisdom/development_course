import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s125110t',
  templateUrl: './s125110t.page.html',
  styleUrls: ['./s125110t.page.scss'],
})
export class S125110tPage implements OnInit 
{

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w7"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
<<<<<<< HEAD
  audioPage="teenagers/stress/s125110"
=======
  audioPage="/stress/s125110"
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  toc="teenagers/stress/s125001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=125110
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration125110")
  totalTime=localStorage.getItem("totalTime125110")
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
    if(JSON.parse(sessionStorage.getItem("bookmark125110"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark125110"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark125110",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
<<<<<<< HEAD
    this.router.navigate(['teenagers/stress/s125111'])
=======
    this.router.navigate(['/teenagers/stress/s125111'])
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
    this.router.navigate(['teenagers/stress/s125109'])
=======
    this.router.navigate(['/teenagers/stress/s125109'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  }

}