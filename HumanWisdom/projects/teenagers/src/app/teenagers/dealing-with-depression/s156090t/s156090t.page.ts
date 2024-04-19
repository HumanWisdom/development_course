import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156090t',
  templateUrl: './s156090t.page.html',
  styleUrls: ['./s156090t.page.scss'],
})
export class S156090tPage implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w10"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/teenagers/dealing-with-depression/s156090"
  toc="teenagers/dealing-with-depression/s156001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=156090
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration156090")
  totalTime=localStorage.getItem("totalTime156090")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName="teenagers"
  
  constructor(
    private router: Router,
    private service:TeenagersService,
    ) { }
 
  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}

    if(JSON.parse(sessionStorage.getItem("bookmark156090"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark156090"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark156090",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/dealing-with-depression/s156091'])
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
    this.router.navigate(['/teenagers/dealing-with-depression/s156089'])
  }

}