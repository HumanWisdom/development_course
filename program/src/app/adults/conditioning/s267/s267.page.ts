import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s267',
  templateUrl: './s267.page.html',
  styleUrls: ['./s267.page.scss'],
})
export class S267Page implements OnInit {

  bg="conditioning_w12"
  hint=""
  toc="/conditioning/s232"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=267
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=85
  reflection:any
  reflectionA:any
  r267=JSON.parse(sessionStorage.getItem("r267"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r267)
   
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
   sessionStorage.setItem("r267",JSON.stringify(e))
   this.r267=JSON.parse(sessionStorage.getItem("r267"))
   if(this.r267!=null)
   {
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":JSON.parse(sessionStorage.getItem("r267"))
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/conditioning/s268'])
        },
        ()=>{
          this.router.navigate(['/adults/conditioning/s268'])
        })

   }
   else{
    this.router.navigate(['/adults/conditioning/s268'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/conditioning/s266'])
  }
  
  ngOnDestroy(){
   
    //console.log(this.totalTime,"total time")
    //this.submitProgress()
  }


}



  




 


