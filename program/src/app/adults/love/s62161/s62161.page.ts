import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s62161',
  templateUrl: './s62161.page.html',
  styleUrls: ['./s62161.page.scss'],
})
export class S62161Page implements OnInit {

  bg="blue_pink_w9"  
 hint=" Our minds do this automatically, and it's not unique to you. Waking up to this process allows you to respond with wisdom "
  toc="/love/s62001"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=62161
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=650
  reflection:any
  reflectionA:any
  r62161=JSON.parse(sessionStorage.getItem("r62161"))

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
    sessionStorage.setItem("r62161",JSON.stringify(e))
   this.r62161=sessionStorage.getItem("r62161")
   console.log(this.r62161)
  
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r62161
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/love/s62162'])

        },
        ()=>{
          this.router.navigate(['/adults/love/s62162'])
        })
 

  }

  previous(){
    this.router.navigate(['/adults/love/s62160'])
  }
  
  ngOnDestroy(){
   
   
  }


}
