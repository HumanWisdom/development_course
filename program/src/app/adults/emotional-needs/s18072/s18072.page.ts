import { Component, OnInit} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-s18072',
  templateUrl: './s18072.page.html',
  styleUrls: ['./s18072.page.scss'],
})
export class S18072Page implements OnInit {

    bg="blue_pink_w3"
    title="#1 Begin by becoming aware of our emotional needs"
    mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
    audioLink=this.mediaAudio+'/emotional-needs/audios/emotional-needs+3.2.mp3'
  
    transcriptPage="emotional-needs/s18072t"
    toc="emotional-needs/s18001"
    bookmark=0
    path=this.router.url
    avDuration:any
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
    screenType=localStorage.getItem("audio")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=18072
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
      if(JSON.parse(sessionStorage.getItem("bookmark18072"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark18072"))==1)
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
      sessionStorage.setItem("bookmark18072",JSON.stringify(this.bookmark))
    }
   
    receiveAvDuration(e){
      console.log(e)
      this.avDuration=e
   
    }
   
    submitProgress(){
     
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;
      this.router.navigate(['/emotional-needs/s18073'])
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
      this.router.navigate(['/emotional-needs/s18071'])
   
   
    }
    ngOnDestroy(){
      localStorage.setItem("totalTime18072",this.totalTime)
      localStorage.setItem("avDuration18072",this.avDuration)
   
    }
  }
  
  