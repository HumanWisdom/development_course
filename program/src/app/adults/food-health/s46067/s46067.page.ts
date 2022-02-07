import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s46067',
  templateUrl: './s46067.page.html',
  styleUrls: ['./s46067.page.scss'],
})
export class S46067Page implements OnInit {

  bg="green_w9"  
 toc="/food-health/s46001"
 hint=" It could be that we need to have 4 meals a day, or that every meal needs to include something sweet, or that fizzy drinks are good for health"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=46067
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=744
  reflection:any
  reflectionA:any
  r46067=JSON.parse(sessionStorage.getItem("r46067"))

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
    sessionStorage.setItem("r46067",JSON.stringify(e))
   this.r46067=sessionStorage.getItem("r46067")
   console.log(this.r46067)
  
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r46067
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/food-health/s46068'])

        },
        ()=>{
          this.router.navigate(['/adults/food-health/s46068'])
        })
 

  }

  previous(){
    this.router.navigate(['/adults/food-health/s46066'])
  }
  
  ngOnDestroy(){
   
   
  }


}
