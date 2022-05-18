import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s47098',
  templateUrl: './s47098.page.html',
  styleUrls: ['./s47098.page.scss'],
})
export class S47098Page implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w5"
  hint="What are you afraid of in your relationships?"  

  toc="relationships/s47000"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=47098
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=400
  reflection:any
  reflectionA:any
  r47098=JSON.parse(sessionStorage.getItem("r47098"))

  shared:any
  confirmed:any

  constructor(private router: Router,private service:AdultsService,) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r47098)
   
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
    sessionStorage.setItem("r47098",JSON.stringify(e))
    this.r47098=JSON.parse(sessionStorage.getItem("r47098"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r47098"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/relationships/s47099'])
    
      },
      ()=>{
        this.router.navigate(['/adults/relationships/s47099'])
      })
  }
  previous(){
    this.router.navigate(['/adults/relationships/s47097'])
  }    
  ngOnDestroy(){
  }
}