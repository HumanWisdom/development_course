import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s34021',
  templateUrl: './s34021.page.html',
  styleUrls: ['./s34021.page.scss'],
})
export class S34021Page implements OnInit {

 bg="purple_blue_w1"  
  hint="If you see that fear makes us all behave irrationally, you may have more compassion for someone else reacting to fear."
  toc="key-ideas/s34001"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=34021
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=259
  reflection:any
  reflectionA:any
  r34021=JSON.parse(sessionStorage.getItem("r34021"))

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
    sessionStorage.setItem("r34021",JSON.stringify(e))
   this.r34021=sessionStorage.getItem("r34021")
   console.log(this.r34021)
   if(this.r34021!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r34021
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
          this.router.navigate(['/key-ideas/s34022'])

        },
        ()=>{
          this.router.navigate(['/key-ideas/s34022'])
        })
   }

   else{
    this.router.navigate(['/key-ideas/s34022'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/key-ideas/s34020'])
  }
  
  ngOnDestroy(){
   
    //console.log(this.totalTime,"total time")
    //this.submitProgress()
  }


}
