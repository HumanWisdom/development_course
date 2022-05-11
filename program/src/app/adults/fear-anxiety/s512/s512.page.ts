import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s512',
  templateUrl: './s512.page.html',
  styleUrls: ['./s512.page.scss'],
})
export class S512Page implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w5"
  hint="It could be a fear of being poor, that makes us chase money for example, or a fear of being alone that makes us keep busy from morning to night "  

  toc="fear-anxiety/s486"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=512
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=223
  reflection:any
  reflectionA:any
  r512=JSON.parse(sessionStorage.getItem("r512"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r512)
   
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
   sessionStorage.setItem("r512",JSON.stringify(e))
   this.r512=JSON.parse(sessionStorage.getItem("r512"))
  
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":JSON.parse(sessionStorage.getItem("r512"))
    }).subscribe(res=>
      {
        
      },
      error=>{
        console.log(error)
        this.router.navigate(['/adults/fear-anxiety/s513'])
    
      },
      ()=>{
        this.router.navigate(['/adults/fear-anxiety/s513'])
      })
    

  
    

  }

  previous(){
    this.router.navigate(['/adults/fear-anxiety/s511'])
  }
  
  ngOnDestroy(){
   
  
  }


}
