import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-s26014',
  templateUrl: './s26014.page.html',
  styleUrls: ['./s26014.page.scss'],
})
export class S26014Page implements OnInit {

  bg="green_yellow_w5"
  hint=" This could include problems like stress, anxiety, mental health problems, relationship conflict, addiction, war and climate change.  "  

  toc="benefits-of-enquiry/s26001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=26014
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=280
  reflection:any
  reflectionA:any
  r26014=JSON.parse(sessionStorage.getItem("r26014"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r26014)
   
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
   sessionStorage.setItem("r26014",JSON.stringify(e))
   this.r26014=JSON.parse(sessionStorage.getItem("r26014"))
  
   this.router.navigate(['/benefits-of-enquiry/s26015'])
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r26014"))
    }).subscribe(res=>
      {
        console.log(res)
      },
      error=>{
        console.log(error)
        this.router.navigate(['/benefits-of-enquiry/s26015'])
    
      },
      ()=>{
       
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/benefits-of-enquiry/s26012'])
  }
  
  ngOnDestroy(){
   
  
  }


}
