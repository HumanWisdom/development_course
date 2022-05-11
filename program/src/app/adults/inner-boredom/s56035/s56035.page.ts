import { Component, OnInit} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s56035',
  templateUrl: './s56035.page.html',
  styleUrls: ['./s56035.page.scss'],
})
export class S56035Page implements OnInit {

    bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w5"
    title="How can we face our emptiness?"
    mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
    audioLink=this.mediaAudio+'/inner-boredom/audios/inner-boredom+2.2.mp3'
  
    transcriptPage="inner-boredom/s56035t"
    toc="inner-boredom/s56001"
    bookmark=0
    path=this.router.url
    avDuration:any
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
    screenType=localStorage.getItem("audio")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=56035
    startTime:any
    endTime:any
    totalTime:any
    
    bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
    
    constructor(private router: Router,
      private service:AdultsService,
      ) { }
   
    ngOnInit() {
      if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
      else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
     this.startTime = Date.now();
   
      this.startTime = Date.now();
      this.createScreen()
      if(JSON.parse(sessionStorage.getItem("bookmark56035"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark56035"))==1)
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
      sessionStorage.setItem("bookmark56035",JSON.stringify(this.bookmark))
    }
   
    receiveAvDuration(e){
      console.log(e)
      this.avDuration=e
   
    }
   
    submitProgress(){
     
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;
      this.router.navigate(['/adults/inner-boredom/s56036'])
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
    prev(){
      this.router.navigate(['/adults/inner-boredom/s56034'])
   
   
    }
    ngOnDestroy(){
      localStorage.setItem("totalTime56035",this.totalTime)
      localStorage.setItem("avDuration56035",this.avDuration)
   
    }
  }
  
  