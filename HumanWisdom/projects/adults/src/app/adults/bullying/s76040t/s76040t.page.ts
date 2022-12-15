import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-s76040t',
  templateUrl: './s76040t.page.html',
  styleUrls: ['./s76040t.page.scss'],
})
export class S76040tPage implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w11"

  bookmark=0
  path=this.router.url
  audioPage="/bullying/s76040"
  toc="/bullying/s76001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=76040
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration76040")
  totalTime=localStorage.getItem("totalTime76040")
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

    if(JSON.parse(sessionStorage.getItem("bookmark76040"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark76040"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark76040",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/adults/bullying/s76041'])
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
    this.router.navigate(['/adults/bullying/s76039'])
  }

}