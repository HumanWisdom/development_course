import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s123014',
  templateUrl: './s123014.page.html',
  styleUrls: ['./s123014.page.scss'],
})
export class S123014Page implements OnInit 
{

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w7"
  hint = " It could be expecting others to praise you, or have more likes for your post on social media  "
  toc = "teenagers/external-approval/s123001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 123014
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1934
  reflection: any
  reflectionA: any
  r123014 = JSON.parse(sessionStorage.getItem("r123014"))
  shared: any
  confirmed: any

  constructor
  (
    private router: Router,
    private service: TeenagersService,
    private location: Location
  ) 
  { }

  ngOnInit() 
  {
    this.createScreen()
    this.reflectionA = this.qrList.ListOfReflection
    this.findReflection()
    if (this.saveUsername == false) 
    { 
      this.userId = JSON.parse(sessionStorage.getItem("userId")) 
    }
    else 
    { 
      this.userId = JSON.parse(localStorage.getItem("userId")) 
    }
    this.startTime = Date.now();
  }

  sharedForum(e) 
  {
    console.log(e)
    this.shared = e
  }

  confirmShare() 
  {
    this.confirmed = true
  }

  createScreen() 
  {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {})
  }

  findReflection() 
  {
    for (var i = 0; i < this.reflectionA.length; i++) 
    {
      if (this.rId == this.reflectionA[i].ReflectionId) 
      {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }
    }
    console.log(this.reflection)
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r123014", JSON.stringify(e))
    this.r123014 = sessionStorage.getItem("r123014")
    console.log(this.r123014)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r123014
    }).subscribe(res => {},
      error => {
        console.log(error)
     this.router.navigate(['/teenagers/external-approval/s123015'])

      },
      () => {
     this.router.navigate(['/teenagers/external-approval/s123015'])
      })
  }

  previous() 
  {
 this.router.navigate(['/teenagers/external-approval/s123013'])
  }

  ngOnDestroy() 
  {}

}