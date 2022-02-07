import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s466',
  templateUrl: './s466.page.html',
  styleUrls: ['./s466.page.scss'],
})
export class S466Page implements OnInit {

  bg="teal_w10"
  hint=" We often misjudge what others think about us, and give it more importance than it deserves. "  

  toc="/self-esteem/s433"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=466
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=140
  reflection:any
  reflectionA:any
  r466=JSON.parse(sessionStorage.getItem("r466"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r466)
   
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
   sessionStorage.setItem("r466",JSON.stringify(e))
   this.r466=JSON.parse(sessionStorage.getItem("r466"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r466"))
    }).subscribe(res=>
      {
        console.log(res)
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/self-esteem/s467'])
      },
      ()=>{
        this.router.navigate(['/adults/self-esteem/s467'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/adults/self-esteem/s465'])
  }
  
  ngOnDestroy(){
   
  
  }

}
