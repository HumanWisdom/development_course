import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s404',
  templateUrl: './s404.page.html',
  styleUrls: ['./s404.page.scss'],
})
export class S404Page implements OnInit {

  bg="criticism_w11" 
  title="Step #1 Become aware of your inner critic"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/Criticism/audios/criticism+4.3.mp3'  

  toc="/criticism/s324"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=404
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  avDuration:any
  transcriptPage="/criticism/s404t"

  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  
 
  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }
 ngOnInit() {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark404")))
    if(JSON.parse(sessionStorage.getItem("bookmark404"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark404"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark404",JSON.stringify(this.bookmark))
  }
  receiveAvDuration(e){
    this.avDuration=e
    
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
  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/criticism/s405'])
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
    this.router.navigate(['/criticism/s403'])


  }
  ngOnDestroy(){
    localStorage.setItem("totalTime435",this.totalTime)
    localStorage.setItem("avDuration435",this.avDuration)
 
  }


}
