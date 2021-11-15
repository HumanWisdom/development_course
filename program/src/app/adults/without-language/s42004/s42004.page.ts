import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service";
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s42004',
  templateUrl: './s42004.page.html',
  styleUrls: ['./s42004.page.scss'],
})
export class S42004Page implements OnInit {


bg="purple_blue_w5"

  hint="It's not a trick question. Write down the first thing you think of."  

  toc="without-language/s42000"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=42004
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=311
  reflection:any
  reflectionA:any
  r42004=JSON.parse(sessionStorage.getItem("r42004"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r42004)
   
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
   sessionStorage.setItem("r42004",JSON.stringify(e))
   this.r42004=JSON.parse(sessionStorage.getItem("r42004"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r42004"))
    }).subscribe(res=>
      {
        console.log(res)
      },
      error=>{
        console.log(error)
        this.router.navigate(['/without-language/s42005'])
    
      },
      ()=>{
        this.router.navigate(['/without-language/s42005'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/without-language/s42003'])
   }
  
  ngOnDestroy(){
   
  
  }

}
