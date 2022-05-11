import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s271',
  templateUrl: './s271.page.html',
  styleUrls: ['./s271.page.scss'],
})
export class S271Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="conditioning_w4"
  hint="You may, for example, pause and ask if you can just accept the other person as they are?"

  toc="/conditioning/s232"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=271
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=86
  reflection:any
  reflectionA:any
  r271=JSON.parse(sessionStorage.getItem("r271"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r271)
   
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
   sessionStorage.setItem("r271",JSON.stringify(e))
   this.r271=JSON.parse(sessionStorage.getItem("r271"))
   if(this.r271!=null)
   {
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":JSON.parse(sessionStorage.getItem("r271"))
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/conditioning/s272'])
        },
        ()=>{
          this.router.navigate(['/adults/conditioning/s272'])
        })

   }
   else{
    this.router.navigate(['/adults/conditioning/s272'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/conditioning/s270'])
  }
  
  ngOnDestroy(){
   
    
    //this.submitProgress()
  }


}



  




 




