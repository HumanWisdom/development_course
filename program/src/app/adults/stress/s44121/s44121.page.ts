import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-s44121',
  templateUrl: './s44121.page.html',
  styleUrls: ['./s44121.page.scss'],
})
export class S44121Page implements OnInit {

   bg_tn="bg_dark_blue"
  bg="dark_blue_w5"
  hint="Our opinions become part of our identity, of ‘who we think we are’ and that results in attachment and stress when they are challenged. "  

  toc="stress/s44001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=44121
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=349
  reflection:any
  reflectionA:any
  r44121=JSON.parse(sessionStorage.getItem("r44121"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r44121)
   
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
   sessionStorage.setItem("r44121",JSON.stringify(e))
   this.r44121=JSON.parse(sessionStorage.getItem("r44121"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r44121"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/stress/s44122'])
    
      },
      ()=>{
        this.router.navigate(['/adults/stress/s44122'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/adults/stress/s44120'])
  }
  
  ngOnDestroy(){
   
  
  }

}
