import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s132',
  templateUrl: './s132.page.html',
  styleUrls: ['./s132.page.scss'],
})
export class S132Page implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="comparison_envy_w11"  
  hint="Just as I can look at a tree without naming it, I can look at a feeling in the same way. For example, I notice the feeling of envy and then all my thoughts that arise until they quieten down, and I am just left with that feeling. I stay with it and find it goes away."
  toc="/comparison/s0"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=132
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=29
  reflection:any
  reflectionA:any
  r132=JSON.parse(sessionStorage.getItem("r132"))
  shared:any
  confirmed:any


  constructor( private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log(this.r132)
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
    sessionStorage.setItem("r132",JSON.stringify(e))
   this.r132=sessionStorage.getItem("r132")
   console.log(this.r132)
   if(this.r132!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r132
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/comparison/s133'])

        },
        ()=>{
          this.router.navigate(['/adults/comparison/s133'])
        })
   }

   else{
    this.router.navigate(['/adults/comparison/s133'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/comparison/s131'])
  }
  
  ngOnDestroy(){
   
    
    //this.submitProgress()
  }

}
