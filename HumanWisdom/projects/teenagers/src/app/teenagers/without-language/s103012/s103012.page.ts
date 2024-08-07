import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s103012',
  templateUrl: './s103012.page.html',
  styleUrls: ['./s103012.page.scss'],
})
export class S103012Page implements OnInit {


  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w5"
  hint = ""
  toc = "teenagers/without-language/s103001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 103012
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1222
  reflection: any
  reflectionA: any
  r103012 = JSON.parse(sessionStorage.getItem("r103012"))
  shared: any
  confirmed: any
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

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
    sessionStorage.setItem("r103012", JSON.stringify(e))
    this.r103012 = sessionStorage.getItem("r103012")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r103012
    }).subscribe(res => {},
      error => {
        console.log(error)
        
this.router.navigate(['/teenagers/without-language/s103013'])

      },
      () => {
        
this.router.navigate(['/teenagers/without-language/s103013'])
      })
  }

  previous() 
  {
    
this.router.navigate(['/teenagers/without-language/s103011'])
  }

  ngOnDestroy() 
  {}

}