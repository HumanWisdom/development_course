import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s18057',
  templateUrl: './s18057.page.html',
  styleUrls: ['./s18057.page.scss'],
})
export class S18057Page implements OnInit {

    bg="blue_pink_w3"  
  hint="It may be you want someone to think you are special to them, or you want to be the head of your department or organisation or political party, or country."
  toc="/emotional-needs/s18001"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=18057
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=517
  reflection:any
  reflectionA:any
  r18057=JSON.parse(sessionStorage.getItem("r18057"))

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
    sessionStorage.setItem("r18057",JSON.stringify(e))
   this.r18057=sessionStorage.getItem("r18057")
   console.log(this.r18057)
  
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r18057
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
          this.router.navigate(['/emotional-needs/s18058'])

        },
        ()=>{
          this.router.navigate(['/emotional-needs/s18058'])
        })

  }

  previous(){
    this.router.navigate(['/emotional-needs/s18056'])
  }
  
  ngOnDestroy(){
   
    
  }

}
