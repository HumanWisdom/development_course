import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s92124t',
  templateUrl: './s92124t.page.html',
  styleUrls: ['./s92124t.page.scss'],
})
export class S92124tPage implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w9"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/dealing-with-depression/s92124"
  toc="/dealing-with-depression/s92001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=92124
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration92124")
  totalTime=localStorage.getItem("totalTime92124")
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

    if(JSON.parse(sessionStorage.getItem("bookmark92124"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark92124"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark92124",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92125'])
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
    this.router.navigate(['/adults/dealing-with-depression/s92123'])
  }

}