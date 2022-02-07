import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s47061',
  templateUrl: './s47061.page.html',
  styleUrls: ['./s47061.page.scss'],
})
export class S47061Page implements OnInit {

  bg="purple_w3"
  hint="Your ideas of how you want things done, or your religious beliefs, or your expectations. for example."  

  toc="relationships/s47000"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=47061
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=396
  reflection:any
  reflectionA:any
  r47061=JSON.parse(sessionStorage.getItem("r47061"))

  shared:any
  confirmed:any

  constructor(private router: Router,private service:AdultsService,) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r47061)
   
    console.log(this.qrList,"Qrlist")
    
    this.reflectionA=this.qrList.ListOfReflection
   
  
    this.findReflection()
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      this.startTime = Date.now();
  }

  createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        console.log(res)
      })
  }

  findReflection(){
    for(var i=0;i<this.reflectionA.length;i++)
    {
      if(this.rId==this.reflectionA[i].ReflectionId)
      {
        this.reflection=this.reflectionA[i].Que
       // this.optionList.push(this.questionA[i])
      }       
    }
    console.log(this.reflection)
  }

  submitProgress(e){
    console.log(e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r47061",JSON.stringify(e))
    this.r47061=JSON.parse(sessionStorage.getItem("r47061"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r47061"))
    }).subscribe(res=>
      {
        console.log(res)
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/relationships/s47062'])
    
      },
      ()=>{
        this.router.navigate(['/adults/relationships/s47062'])
      })
  }
  previous(){
    this.router.navigate(['/adults/relationships/s47060'])
  }    
  ngOnDestroy(){
  }
}