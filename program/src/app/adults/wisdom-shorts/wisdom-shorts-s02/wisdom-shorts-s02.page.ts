import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-wisdom-shorts-s02',
  templateUrl: './wisdom-shorts-s02.page.html',
  styleUrls: ['./wisdom-shorts-s02.page.scss'],
})
export class WisdomShortsS02Page implements OnInit {

  bg="red_pink_w2"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/wisdom_shorts/videos/1.2.mp4'
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/wisdom_shorts/wisdom_shorts_02.jpg"

  title="Being grateful"
  toc="/wisdom-shorts"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  path=this.router.url

  screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber="s02"
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  avDuration:any
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
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();
    
    if(JSON.parse(sessionStorage.getItem("bookmarks02"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmarks02"))==1)
      this.bookmark=1   
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
      sessionStorage.setItem("bookmarks02",JSON.stringify(this.bookmark))
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

  receiveAvDuration(e){
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
    this.router.navigate(['/adults/wisdom-shorts/wisdom-shorts-s03'])
  }

  prev(){
    this.router.navigate(['/adults/wisdom-shorts'])
  }
}