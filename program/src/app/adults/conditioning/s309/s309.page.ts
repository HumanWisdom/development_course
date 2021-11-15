import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s309',
  templateUrl: './s309.page.html',
  styleUrls: ['./s309.page.scss'],
})
export class S309Page implements OnInit {

  bg="conditioning_w4"
  hint=""

  toc="/conditioning/s232"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=309
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=94
  reflection:any
  reflectionA:any
  r309=JSON.parse(sessionStorage.getItem("r309"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r309)
   
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
   sessionStorage.setItem("r309",JSON.stringify(e))
   this.r309=JSON.parse(sessionStorage.getItem("r309"))
   if(this.r309!=null)
   {
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":JSON.parse(sessionStorage.getItem("r309"))
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
          this.router.navigate(['/conditioning/s310'])
        },
        ()=>{
          this.router.navigate(['/conditioning/s310'])
        })

   }
   else{
    this.router.navigate(['/conditioning/s310'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/conditioning/s308'])
  }
  
  ngOnDestroy(){
   
    //console.log(this.totalTime,"total time")
    //this.submitProgress()
  }


}



  




 






