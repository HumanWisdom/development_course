import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-toc-resume',
  templateUrl: './toc-resume.page.html',
  styleUrls: ['./toc-resume.page.scss'],
})
export class TocResumePage implements OnInit,OnDestroy {

  bg="anger_w1"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId:any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber="162p0"
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  bookmarkList=[]
  

  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }

  ngOnInit() {
    localStorage.setItem("moduleId",JSON.stringify(14))
    this.moduleId=localStorage.getItem("moduleId")
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    this.createScreen()


    
  }
  toggleBookmark(){
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0

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
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      })
    

  }
  ngOnDestroy(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    
    this.submitProgress()



  }

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
  goBack(){
    this.location.back()
  }

}
