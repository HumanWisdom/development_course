import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136019',
  templateUrl: './s136019.page.html',
  styleUrls: ['./s136019.page.scss'],
})
export class S136019Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="criticism_w4" 
  title="Seeking praise, avoiding criticism"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/Criticism/audios/criticism+1.4.mp3'  

 toc="teenagers/criticism/s136001"
 userId:any
 saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 screenType=localStorage.getItem("audio")
 moduleId=localStorage.getItem("moduleId")
 screenNumber=136019
 startTime:any
 endTime:any
 totalTime:any
 bookmark=0
 path = setTimeout(() => {
    return this.router.url;
  }, 1000);
 avDuration:any
 transcriptPage="/criticism/s136019t"
 
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
  this.startTime = Date.now();
  this.startTime = Date.now();
  this.createScreen()
  if(JSON.parse(sessionStorage.getItem("bookmark136019"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark136019"))==1)
    this.bookmark=1
}

createScreen()
{
  this.service.createScreen({
    "ScrId":0,
    "ModuleId":this.moduleId,
    "GSetID":this.screenType,
    "ScreenNo":this.screenNumber
  }).subscribe(res=>{})
}

receiveBookmark(e)
{
  console.log(e)
  if(e==true)
    this.bookmark=1
  else
    this.bookmark=0
  sessionStorage.setItem("bookmark136019",JSON.stringify(this.bookmark))
}

receiveAvDuration(e)
{
  console.log(e)
  this.avDuration=e
}

submitProgress()
{
  this.endTime = Date.now();
  this.totalTime = this.endTime - this.startTime;
  this.router.navigate(['/teenagers/criticism/s136020'])
  this.service.submitProgressAv({
    "ScrNumber":this.screenNumber,
    "UserId":this.userId,
    "BookMark":this.bookmark,
    "ModuleId":this.moduleId,
    "screenType":this.screenType,
    "timeSpent":this.totalTime,
    "avDuration":this.avDuration
  }).subscribe(res=>
    { 
      this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
      localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
    })
}

prev()
{
  this.router.navigate(['/teenagers/criticism/s136018'])
}

ngOnDestroy()
{
  localStorage.setItem("totalTime136019",this.totalTime)
  localStorage.setItem("avDuration136019",this.avDuration)
}

}