import { Component, OnInit ,OnDestroy} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s47267t',
  templateUrl: './s47267t.page.html',
  styleUrls: ['./s47267t.page.scss'],
})
export class S47267tPage implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w3"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/relationships/s47267"
  toc="/relationships/s47000"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=47267
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  avDuration=localStorage.getItem("avDuration47267")
  totalTime=localStorage.getItem("totalTime47267")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    ) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark47267"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark47267"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark47267",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/adults/relationships/s47268'])
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
    this.router.navigate(['/adults/relationships/s47266'])
  }

}
