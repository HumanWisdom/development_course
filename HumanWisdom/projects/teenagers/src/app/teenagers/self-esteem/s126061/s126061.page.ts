import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s126061',
  templateUrl: './s126061.page.html',
  styleUrls: ['./s126061.page.scss'],
})
export class S126061Page implements OnInit 
{

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w2"
  hint = "It could be a quality you have, like kindness, or the clouds moving across the sky, or the extraordinary beauty of a tree"
  toc = "teenagers/self-esteem/s126001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 126061
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1565
  reflection: any
  reflectionA: any
  r126061 = JSON.parse(sessionStorage.getItem("r126061"))
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
    
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r126061", JSON.stringify(e))
    this.r126061 = sessionStorage.getItem("r126061")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r126061
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/self-esteem/s126062'])

      },
      () => {
        this.router.navigate(['/teenagers/self-esteem/s126062'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/self-esteem/s126060'])
  }

  ngOnDestroy() 
  {}

}