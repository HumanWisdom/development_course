import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'



@Component({
  selector: 'app-s39011',
  templateUrl: './s39011.page.html',
  styleUrls: ['./s39011.page.scss'],
})
export class S39011Page implements OnInit,OnDestroy {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w9"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/art_of_enquiry/videos/5.1.mp4'  
  title="Exploring awareness"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/art_of_enquiry/art_of_enquiry_01.jpg"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

 screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=39011
  startTime:any
  endTime:any
  totalTime:any  
 
  
  toc="awareness/s39000"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
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
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    
    if(JSON.parse(sessionStorage.getItem("bookmark39011"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark39011"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark39011",JSON.stringify(this.bookmark))
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
        
      })
    
 
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
    
    this.router.navigate(['/adults/awareness/s39012'])
   

  }
  prev(){
    this.router.navigate(['/adults/awareness/s39009'])


  }
  ngOnDestroy(){

  }


}
