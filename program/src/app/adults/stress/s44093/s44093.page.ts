import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-s44093',
  templateUrl: './s44093.page.html',
  styleUrls: ['./s44093.page.scss'],
})
export class S44093Page implements OnInit {

   bg="dark_blue_w5"
  hint="This is not always easy to see because it occurs in the background. Look out for it next time."  

  toc="stress/s44001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=44093
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=340
  reflection:any
  reflectionA:any
  r44093=JSON.parse(sessionStorage.getItem("r44093"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r44093)
   
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
   sessionStorage.setItem("r44093",JSON.stringify(e))
   this.r44093=JSON.parse(sessionStorage.getItem("r44093"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r44093"))
    }).subscribe(res=>
      {
        console.log(res)
      },
      error=>{
        console.log(error)
        this.router.navigate(['/stress/s44094'])
    
      },
      ()=>{
        this.router.navigate(['/stress/s44094'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/stress/s44092'])
  }
  
  ngOnDestroy(){
   
  
  }

}
