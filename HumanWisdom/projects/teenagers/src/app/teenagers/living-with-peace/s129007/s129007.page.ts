import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s129007',
  templateUrl: './s129007.page.html',
  styleUrls: ['./s129007.page.scss'],
})
export class S129007Page implements OnInit 
{

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w6"

  hint = "it could be you don’t like others, because you think they are different."

  toc = "/living-with-peace/s129001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 129007
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1997
  reflection: any
  reflectionA: any
  r129007 = JSON.parse(sessionStorage.getItem("r129007"))
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
    sessionStorage.setItem("r129007", JSON.stringify(e))
    this.r129007 = sessionStorage.getItem("r129007")
    console.log(this.r129007)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r129007
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/living-with-peace/s129008'])

      },
      () => {
        this.router.navigate(['/living-with-peace/s129008'])
      })
  }

  previous() 
  {
    this.router.navigate(['/living-with-peace/s129006'])
  }

  ngOnDestroy() 
  {}

}