import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-s77045t',
  templateUrl: './s77045t.page.html',
  styleUrls: ['./s77045t.page.scss'],
})
export class S77045tPage implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w1"

  bookmark=0
  path=this.router.url
  audioPage="/making-better-decisions/s77045"
  toc="/making-better-decisions/s77001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=77045
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration77045")
  totalTime=localStorage.getItem("totalTime77045")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(
    private router: Router,
    private service:AdultsService,
    ) { }
 
  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}

    if(JSON.parse(sessionStorage.getItem("bookmark77045"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark77045"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark77045",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/adults/making-better-decisions/s77046'])
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
        
      })
  }

  prev()
  {
    this.router.navigate(['/adults/making-better-decisions/s77044'])
  }

}