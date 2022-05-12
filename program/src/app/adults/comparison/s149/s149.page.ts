import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s149',
  templateUrl: './s149.page.html',
  styleUrls: ['./s149.page.scss'],
})
export class S149Page implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="comparison_envy_w9" 
  hint="if she had an understanding of the process behind envy."
  toc="/comparison/s0"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=149
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=37
  reflection:any
  reflectionA:any
  r149=JSON.parse(sessionStorage.getItem("r149"))
  shared:any
  confirmed:any


  constructor( private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log(this.r149)
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
    sessionStorage.setItem("r149",JSON.stringify(e))
   this.r149=sessionStorage.getItem("r149")
   console.log(this.r149)
   if(this.r149!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r149
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/comparison/s150'])
        },
        ()=>{
          this.router.navigate(['/adults/comparison/s150'])
        })
   }

   else{
    this.router.navigate(['/adults/comparison/s150'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/comparison/s148'])
  }
  
  ngOnDestroy(){
   
    
    //this.submitProgress()
  }

}
