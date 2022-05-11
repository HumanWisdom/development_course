import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s40011',
  templateUrl: './s40011.page.html',
  styleUrls: ['./s40011.page.scss'],
})
export class S40011Page implements OnInit {


    bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w3"

  hint=""  

 toc="no-judgement/s40000"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=40011
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=302
  reflection:any
  reflectionA:any
  r40011=JSON.parse(sessionStorage.getItem("r40011"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r40011)
   
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
   sessionStorage.setItem("r40011",JSON.stringify(e))
   this.r40011=JSON.parse(sessionStorage.getItem("r40011"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r40011"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/no-judgement/s40012'])
    
      },
      ()=>{
        this.router.navigate(['/adults/no-judgement/s40012'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/adults/no-judgement/s40010'])
  }
  
  ngOnDestroy(){
   
  
  }

}
