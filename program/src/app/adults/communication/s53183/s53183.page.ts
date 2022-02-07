import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s53183',
  templateUrl: './s53183.page.html',
  styleUrls: ['./s53183.page.scss'],
})
export class S53183Page implements OnInit {

  bg="blue_w3"
  hint=" It may make you scan the conversation for something interesting, and stop listening if there isn’t anything stimulating there."  

  toc="communication/s53001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=53183
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=470
  reflection:any
  reflectionA:any
  r53183=JSON.parse(sessionStorage.getItem("r53183"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r53183)
   
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
   sessionStorage.setItem("r53183",JSON.stringify(e))
   this.r53183=JSON.parse(sessionStorage.getItem("r53183"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r53183"))
    }).subscribe(res=>
      {
        console.log(res)
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/communication/s53184'])
    
      },
      ()=>{
        this.router.navigate(['/adults/communication/s53184'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/adults/communication/s53182'])
  }
  
  ngOnDestroy(){
   
  
  }

}
