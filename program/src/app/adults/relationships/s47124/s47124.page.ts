import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s47124',
  templateUrl: './s47124.page.html',
  styleUrls: ['./s47124.page.scss'],
})
export class S47124Page implements OnInit {

  bg="purple_w10"
  hint=""  

  toc="relationships/s47000"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=47124
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=406
  reflection:any
  reflectionA:any
  r47124=JSON.parse(sessionStorage.getItem("r47124"))

  shared:any
  confirmed:any

  constructor(private router: Router,private service:AdultsService,) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r47124)
   
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
    sessionStorage.setItem("r47124",JSON.stringify(e))
    this.r47124=JSON.parse(sessionStorage.getItem("r47124"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r47124"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/relationships/s47125'])
    
      },
      ()=>{
        this.router.navigate(['/adults/relationships/s47125'])
      })
  }
  previous(){
    this.router.navigate(['/adults/relationships/s47123'])
  }    
  ngOnDestroy(){
  }
}