import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s20039',
  templateUrl: './s20039.page.html',
  styleUrls: ['./s20039.page.scss'],
})
export class S20039Page implements OnInit {

  bg="pink_orange_w5"  
  hint=""
  toc="/pleasure/s20001"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=20039
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=155
  reflection:any
  reflectionA:any
  r20039=JSON.parse(sessionStorage.getItem("r20039"))

  shared:any
  confirmed:any


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
    console.log("returned response",e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r20039",JSON.stringify(e))
   this.r20039=sessionStorage.getItem("r20039")
   console.log(this.r20039)
  
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r20039
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
          this.router.navigate(['/pleasure/s20040'])

        },
        ()=>{
          this.router.navigate(['/pleasure/s20040'])
        })

  }

  previous(){
    this.router.navigate(['/pleasure/s20038'])
  }
  
  ngOnDestroy(){
   
    //console.log(this.totalTime,"total time")
    //this.submitProgress()
  }


}
