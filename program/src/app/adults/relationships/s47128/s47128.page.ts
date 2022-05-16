import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s47128',
  templateUrl: './s47128.page.html',
  styleUrls: ['./s47128.page.scss'],
})
export class S47128Page implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w2"
  hint=""  

  toc="relationships/s47000"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=47128
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=408
  reflection:any
  reflectionA:any
  r47128=JSON.parse(sessionStorage.getItem("r47128"))

  shared:any
  confirmed:any

  constructor(private router: Router,private service:AdultsService,) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r47128)
   
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
    sessionStorage.setItem("r47128",JSON.stringify(e))
    this.r47128=JSON.parse(sessionStorage.getItem("r47128"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r47128"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/relationships/s47129'])
    
      },
      ()=>{
        this.router.navigate(['/adults/relationships/s47129'])
      })
  }
  previous(){
    this.router.navigate(['/adults/relationships/s47127'])
  }    
  ngOnDestroy(){
  }
}