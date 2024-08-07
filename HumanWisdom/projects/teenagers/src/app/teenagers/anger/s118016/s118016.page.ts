import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s118016',
  templateUrl: './s118016.page.html',
  styleUrls: ['./s118016.page.scss'],
})
export class S118016Page implements OnInit 
{

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w2"
  hint = "My son did not call on my birthday, My anger is caused by my own expectations";
  toc = "/teenagers/anger/s118001"
  
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 118016
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1405
  rId_1 = 2349
  reflection: any
  reflectionA: any
  r118016 = sessionStorage.getItem("r118016") 
  r118016_1 = sessionStorage.getItem("r118016_1") 


  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
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

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
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

  submitProgress() 
  {
    
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r118016", this.r118016)
    sessionStorage.setItem("r118016_1", this.r118016_1)
    this.r118016 = sessionStorage.getItem("r118016")
    this.r118016_1 = sessionStorage.getItem("r118016_1")
 //   
 if(this.r118016 !=''){
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r118016
    }).subscribe();
  }
if(this.r118016_1 !='')
{ 
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId_1,
      "Resp": this.r118016_1
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/anger/s118017'])

      },
      () => {
        this.router.navigate(['/teenagers/anger/s118017'])
        
      })
    }
  }

  previous() 
  {
    this.router.navigate(['/teenagers/anger/s118015'])
  }

  ngOnDestroy() 
  {}

}