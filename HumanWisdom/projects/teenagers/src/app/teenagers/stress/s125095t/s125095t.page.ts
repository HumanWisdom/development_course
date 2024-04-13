import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s125095t',
  templateUrl: './s125095t.page.html',
  styleUrls: ['./s125095t.page.scss'],
})
export class S125095tPage implements OnInit 
{

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w4"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
<<<<<<< HEAD
  audioPage="teenagers/stress/s125095"
=======
  audioPage="/stress/s125095"
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  toc="teenagers/stress/s125001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=125095
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration125095")
  totalTime=localStorage.getItem("totalTime125095")
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
    if(JSON.parse(sessionStorage.getItem("bookmark125095"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark125095"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark125095",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
<<<<<<< HEAD
    this.router.navigate(['teenagers/stress/s125096'])
=======
    this.router.navigate(['/teenagers/stress/s125096'])
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
    this.router.navigate(['teenagers/stress/s125094'])
=======
    this.router.navigate(['/teenagers/stress/s125094'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  }

}