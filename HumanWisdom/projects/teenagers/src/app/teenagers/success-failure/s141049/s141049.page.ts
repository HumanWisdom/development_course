import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s141049',
  templateUrl: './s141049.page.html',
  styleUrls: ['./s141049.page.scss'],
})
export class S141049Page implements OnInit, OnDestroy {

  bg_tn = "bg_light_blue"
  bg_cft = "bg_light_blue"
  bg = "light_blue_w9"
  hint="What excites you? What do you love doing?"
  toc = "teenagers/success-failure/s141001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 141049
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  
  reflection: any
  reflectionA: any
  r141049 = JSON.parse(sessionStorage.getItem("r141049"))
  rId= 1767


  shared: any
  confirmed: any


  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() 
  {
   
    this.createScreen()

    this.reflectionA = this.qrList.ListOfReflection
    
    
    this.findReflection()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();


  }
  sharedForum(e){
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    this.confirmed = true
  }
  createScreen() {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {

    })

 
  }

  findReflection() {
    for (var i = 0; i < this.reflectionA.length; i++) {



      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }

    }
    
  }
  


  submitProgress(e)  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r141049", JSON.stringify(e))
    this.r141049 = sessionStorage.getItem("r141049")
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/teenagers/success-failure/s141050'])
    if (this.userId === 563) return;

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r141049
    }).subscribe(res => {

    },
      error => {
        console.log(error)
       
      },
      () => {
    })


  }

  previous(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/teenagers/success-failure/s141048'])
  }

  ngOnDestroy() 
  {}

}