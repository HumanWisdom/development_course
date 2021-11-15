import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-s44111',
  templateUrl: './s44111.page.html',
  styleUrls: ['./s44111.page.scss'],
})
export class S44111Page implements OnInit {

   bg="dark_blue_w5"
  hint=" Anger is neither good or bad - just something to be understood so it does not harm us and others."  

  toc="stress/s44001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=44111
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=346
  reflection:any
  reflectionA:any
  r44111=JSON.parse(sessionStorage.getItem("r44111"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r44111)
   
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
   sessionStorage.setItem("r44111",JSON.stringify(e))
   this.r44111=JSON.parse(sessionStorage.getItem("r44111"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r44111"))
    }).subscribe(res=>
      {
        console.log(res)
      },
      error=>{
        console.log(error)
        this.router.navigate(['/stress/s44112'])
    
      },
      ()=>{
        this.router.navigate(['/stress/s44112'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/stress/s44110'])
  }
  
  ngOnDestroy(){
   
  
  }

}
