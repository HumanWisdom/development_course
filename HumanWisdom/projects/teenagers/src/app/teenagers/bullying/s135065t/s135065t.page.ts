import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s135065t',
  templateUrl: './s135065t.page.html',
  styleUrls: ['./s135065t.page.scss'],
})
export class S135065tPage implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w2"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/bullying/s135065"
  toc="/bullying/s135001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=135065
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration135065")
  totalTime=localStorage.getItem("totalTime135065")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))

  progName = "teenagers"
  
  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }
 
  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    if(JSON.parse(sessionStorage.getItem("bookmark135065"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark135065"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark135065",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/bullying/s135066'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "avDuration":this.avDuration
    }).subscribe(res=>{})
  }

  prev()
  {
    this.router.navigate(['/bullying/s135064'])
  }

}