import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s131269t',
  templateUrl: './s131269t.page.html',
  styleUrls: ['./s131269t.page.scss'],
})
export class S131269tPage implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w2"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/teenagers/relationships/s131269"
  toc="teenagers/relationships/s131001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=131269
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  
  avDuration=localStorage.getItem("avDuration131269")
  totalTime=localStorage.getItem("totalTime131269")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  progName = "teenagers"
  
  constructor(private router: Router,
    private service:TeenagersService,
    ) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark131269"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark131269"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark131269",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/teenagers/relationships/s131270'])
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
  prev(){
    this.router.navigate(['/teenagers/relationships/s131268'])
  }

}
