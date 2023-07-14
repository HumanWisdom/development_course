import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132045',
  templateUrl: './s132045.page.html',
  styleUrls: ['./s132045.page.scss'],
})
export class S132045Page implements OnInit 
{

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w2"
  hint = "Maybe someone used an inappropriate word to refer to a person from a particular ethnic background, but did not mean any disrespect or harm, for example."
  toc = "/communication/s132001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 132045
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1567
  reflection: any
  reflectionA: any
  r132045 = JSON.parse(sessionStorage.getItem("r132045"))
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
    sessionStorage.setItem("r132045", JSON.stringify(e))
    this.r132045 = sessionStorage.getItem("r132045")
    console.log(this.r132045)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r132045
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/communication/s132046'])

      },
      () => {
        this.router.navigate(['/communication/s132046'])
      })
  }

  previous() 
  {
    this.router.navigate(['/communication/s132044'])
  }

  ngOnDestroy() 
  {}

}