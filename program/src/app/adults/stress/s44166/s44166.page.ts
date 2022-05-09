import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-s44166',
  templateUrl: './s44166.page.html',
  styleUrls: ['./s44166.page.scss'],
})
export class S44166Page implements OnInit {

 bg_tn="bg_dark_blue"
  bg="dark_blue_w5"
  hint="You may decide to cut down on screen time, or take time to eat consciously, or walk to the shops instead of driving there."  

  toc="stress/s44001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=44166
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=360
  reflection:any
  reflectionA:any
  r44166=JSON.parse(sessionStorage.getItem("r44166"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r44166)
   
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
   sessionStorage.setItem("r44166",JSON.stringify(e))
   this.r44166=JSON.parse(sessionStorage.getItem("r44166"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r44166"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/stress/s44167'])
    
      },
      ()=>{
        this.router.navigate(['/adults/stress/s44167'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/adults/stress/s44165'])
  }
  
  ngOnDestroy(){
   
  
  }

}
