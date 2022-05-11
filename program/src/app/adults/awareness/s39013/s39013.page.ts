import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s39013',
  templateUrl: './s39013.page.html',
  styleUrls: ['./s39013.page.scss'],
})
export class S39013Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w5"
  hint="This could be all the media stories about the election, your social media feed saying he should have won and the new party in power is going to be terrible."  

  toc="awareness/s39000"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=39013
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=296
  reflection:any
  reflectionA:any
  r39013=JSON.parse(sessionStorage.getItem("r39013"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r39013)
   
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
   sessionStorage.setItem("r39013",JSON.stringify(e))
   this.r39013=JSON.parse(sessionStorage.getItem("r39013"))

   this.router.navigate(['/adults/awareness/s39014'])
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r39013"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/awareness/s39014'])
    
      },
      ()=>{
        //this.router.navigate(['/adults/awareness/s39014'])
      })
    
      
  
    

  }

  previous(){
    this.router.navigate(['/adults/awareness/s39012'])
  }
  
  ngOnDestroy(){
   
  
  }

}
