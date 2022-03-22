import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s54077',
  templateUrl: './s54077.page.html',
  styleUrls: ['./s54077.page.scss'],
})
export class S54077Page implements OnInit {

  bg="light_blue_w3"
  hint=""  

  toc="reactive-mind/s54001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=54077
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=485
  reflection:any
  reflectionA:any
  r54077=JSON.parse(sessionStorage.getItem("r54077"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r54077)
   
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
    this.router.navigate(['/adults/reactive-mind/s54078'])
   sessionStorage.setItem("r54077",JSON.stringify(e))
   this.r54077=JSON.parse(sessionStorage.getItem("r54077"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r54077"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
       
    
      },
      ()=>{
        this.router.navigate(['/adults/reactive-mind/s54078'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/adults/reactive-mind/s54076'])
  }
  
  ngOnDestroy(){
   
  
  }

}
