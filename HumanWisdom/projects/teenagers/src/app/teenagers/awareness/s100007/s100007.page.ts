import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s100007',
  templateUrl: './s100007.page.html',
  styleUrls: ['./s100007.page.scss'],
})
export class S100007Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w5"
  mediaAudio:any;
  audioLink='';
  title=""

 toc="teenagers/awareness/s100001"
  transcriptPage="awareness/s100007t"

  userId:any
  saveUsername:any;
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=100007
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  progName="teenagers"
  

  
  avDuration:any
  
  bookmarkList:any;
  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }
 
  ngOnInit() {
     var userName = localStorage.getItem("saveUsername");
     if(userName!=null && userName){
      this.saveUsername = JSON.parse(userName)
     }
     var bookmark =   localStorage.getItem("bookmarkList")
     if(bookmark && bookmark!=null){
     this.bookmarkList = JSON.parse(bookmark);
     }


    var mediaAudio = localStorage.getItem("mediaAudio")
    if(mediaAudio && mediaAudio!=null){
     this.mediaAudio= JSON.parse(mediaAudio);
     this.audioLink=this.mediaAudio+'/teenagers/modules/awareness/audios/1.3.mp3'
    }

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();
 
    this.startTime = Date.now();
    this.createScreen()
    if(JSON.parse(sessionStorage.getItem("bookmark100007"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark100007"))==1)
      this.bookmark=1
 
  }
 
  createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
    
 
  }
 
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark100007",JSON.stringify(this.bookmark))
  }
 
  receiveAvDuration(e){
    console.log(e)
    this.avDuration=e
 
  }
 
  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
 
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
    
      this.router.navigate(['/teenagers/awareness/s100008'])
   
 
  }
  prev(){
    this.router.navigate(['/teenagers/awareness/s100006'])
 
 
  }
  ngOnDestroy(){
    localStorage.setItem("totalTime100007",this.totalTime)
    localStorage.setItem("avDuration100007",this.avDuration)
  }
}



