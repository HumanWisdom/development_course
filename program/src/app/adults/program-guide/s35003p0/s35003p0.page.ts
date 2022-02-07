import { Component,OnInit,Input,Output,ViewChild,AfterViewInit,EventEmitter,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { NgxCaptureService } from 'ngx-capture';
import {AdultsService} from "../../adults.service";
import {Location } from '@angular/common';

@Component({
  selector: 'app-s35003p0',
  templateUrl: './s35003p0.page.html',
  styleUrls: ['./s35003p0.page.scss'],
})
export class S35003p0Page implements OnInit,OnDestroy {

  bg="purple_blue_w4"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/program_guide/videos/1.1.mp4'  
  title="Video tour of the app"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/introduction/introduction_01.jpg"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

 screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber='35003p0'
  startTime:any
  endTime:any
  totalTime:any  
 
  
  toc="program-guide/s35001"
  bookmark=0
  path=this.router.url
  avDuration:any

  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))

  // getcurrenttime function changes
  currentTime:any
  @Output() sendAvDuration = new EventEmitter<string>();
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  scrId:any
  freeScreens=JSON.parse(localStorage.getItem("freeScreens"))
  mediaPercent:any
  pauseTime:any
  @ViewChild('video') video;
  // /getcurrenttime function changes
 
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
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark35003p0")))
    if(JSON.parse(sessionStorage.getItem("bookmark35003p0"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark35003p0"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  
  // getcurrenttime function changes
  getCurrentTime(data){
  
    this.currentTime = data.target.currentTime;
    this.sendAvDuration.emit(JSON.parse(data.target.currentTime))
    
    if (this.loginResponse.Subscriber!=1)
    {
      if(!this.freeScreens.includes(parseInt(this.scrId)))
      {
          this.pauseTime=((this.mediaPercent/100)*data.target.duration)
          if(this.currentTime>this.pauseTime){
              this.video.nativeElement.pause()
              window.alert('You Have Reached Free Limit')
            }
      }
      else{
        console.log("free screen")
      }

    }
    
  }
  // /getcurrenttime function changes
  
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark35003p0",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/program-guide/s35004'])
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
    this.router.navigate(['/adults/program-guide/s35003'])


  }
  ngOnDestroy(){

  }


}
