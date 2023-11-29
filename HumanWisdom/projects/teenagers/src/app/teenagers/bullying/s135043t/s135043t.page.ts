import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s135043t',
  templateUrl: './s135043t.page.html',
  styleUrls: ['./s135043t.page.scss'],
})
export class S135043tPage implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w11"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/bullying/s135043"
  toc="/bullying/s135001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=135043
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration135043")
  totalTime=localStorage.getItem("totalTime135043")
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
    if(JSON.parse(sessionStorage.getItem("bookmark135043"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark135043"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark135043",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/bullying/s135044'])
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
    this.router.navigate(['/bullying/s135042'])
  }

}