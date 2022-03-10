import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s64',
  templateUrl: './s64.page.html',
  styleUrls: ['./s64.page.scss'],
})
export class S64Page implements OnInit {

  bg="comparison_envy_w10"  
  hint="I became a doctor because my parents were doctors without questioning why."

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=64
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=15
  reflection:any
  reflectionA:any
  r64=JSON.parse(sessionStorage.getItem("r64"))
  shared:any
  confirmed:any
  toc="/comparison/s0"
  path=this.router.url



  constructor( private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.qrList,"Qrlist")
    
    this.reflectionA=this.qrList.ListOfReflection
   
  
    this.findReflection()
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      this.startTime = Date.now();
   
  
  }
  sharedForum(e){
    console.log(e)
    this.shared=e
  }

  confirmShare(){
    this.confirmed=true
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
    console.log("returned response",e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r64",JSON.stringify(e))
   this.r64=sessionStorage.getItem("r64")
   console.log(this.r64)
   if(this.r64!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r64
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/comparison/s65'])
        },
        ()=>{
          this.router.navigate(['/adults/comparison/s65'])
        })
   }

   else{
    this.router.navigate(['/adults/comparison/s65'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/comparison/s63'])
  }
  
  ngOnDestroy(){
   
    
    //this.submitProgress()
  }

}
