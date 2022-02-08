import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s343',
  templateUrl: './s343.page.html',
  styleUrls: ['./s343.page.scss'],
})
export class S343Page implements OnInit {

bg="criticism_w5" 

hint="It may make you avoid some people, and want to be with those who praise you, for example. Are you aware of this? "

toc="/criticism/s324"
userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
qrList=JSON.parse(localStorage.getItem("qrList"))
moduleId=localStorage.getItem("moduleId")
screenType=localStorage.getItem("reflection")
screenNumber=343
startTime:any
endTime:any
totalTime:any
bookmark:any
rId=114
reflection:any
reflectionA:any
r343=JSON.parse(sessionStorage.getItem("r343"))

shared:any
confirmed:any

constructor(private router: Router,
  private service:AdultsService,
  private location:Location) { }

ngOnInit() {
  this.createScreen()
  console.log(this.r343)
 
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
 sessionStorage.setItem("r343",JSON.stringify(e))
 this.r343=JSON.parse(sessionStorage.getItem("r343"))
 if(this.r343!=null)
 {
  this.service.submitProgressReflection({
    "ScrNumber":this.screenNumber,
    "UserId":this.userId,
    "BookMark":this.bookmark,
    "ModuleId":this.moduleId,
    "screenType":this.screenType,
    "timeSpent":this.totalTime,
    "ReflectionId":this.rId,
    "Resp":JSON.parse(sessionStorage.getItem("r343"))
  }).subscribe(res=>
    {
      console.log(res)
    },
    error=>{
      console.log(error)
      this.router.navigate(['/adults/criticism/s344'])
    },
    ()=>{
      this.router.navigate(['/adults/criticism/s344'])
    })
  

 }
 else{
  this.router.navigate(['/adults/criticism/s344'])

 }
  

}

previous(){
  this.router.navigate(['/adults/criticism/s342'])
}

ngOnDestroy(){
 

}

}
