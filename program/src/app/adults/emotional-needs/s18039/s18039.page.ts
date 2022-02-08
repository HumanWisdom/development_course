import { Component, OnInit} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-s18039',
  templateUrl: './s18039.page.html',
  styleUrls: ['./s18039.page.scss'],
})
export class S18039Page implements OnInit {

    bg="blue_pink_w1"
    title="Introduction"
    mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
    audioLink=this.mediaAudio+'/emotional-needs/audios/emotional-needs+2.1.mp3'
  
    transcriptPage="emotional-needs/s18039t"
    toc="emotional-needs/s18001"
    bookmark=0
    path=this.router.url
    avDuration:any
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
    screenType=localStorage.getItem("audio")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=18039
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
      if(JSON.parse(sessionStorage.getItem("bookmark18039"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark18039"))==1)
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
          console.log(res)
        })
      
   
    }
   
    receiveBookmark(e)
    {
      console.log(e)
     if(e==true)
      this.bookmark=1
      else
        this.bookmark=0
      sessionStorage.setItem("bookmark18039",JSON.stringify(this.bookmark))
    }
   
    receiveAvDuration(e){
      console.log(e)
      this.avDuration=e
   
    }
   
    submitProgress(){
     
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;
      this.router.navigate(['/adults/emotional-needs/s18040'])
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
          console.log(res)
          this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
          localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
        })
      
      
     
   
    }
    prev(){
      this.router.navigate(['/adults/emotional-needs/s18038'])
   
   
    }
    ngOnDestroy(){
      localStorage.setItem("totalTime18039",this.totalTime)
      localStorage.setItem("avDuration18039",this.avDuration)
   
    }
  }
  
  