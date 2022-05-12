import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s57036',
  templateUrl: './s57036.page.html',
  styleUrls: ['./s57036.page.scss'],
})
export class S57036Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w9"  
  hint=""
  toc="/nature-of-i/s57001"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=57036
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=541
  reflection:any
  reflectionA:any
  r57036=JSON.parse(sessionStorage.getItem("r57036"))

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
    sessionStorage.setItem("r57036",JSON.stringify(e))
   this.r57036=sessionStorage.getItem("r57036")
   console.log(this.r57036)
  
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r57036
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/nature-of-i/s57037'])

        },
        ()=>{
          this.router.navigate(['/adults/nature-of-i/s57037'])
        })
 

  }

  previous(){
    this.router.navigate(['/adults/nature-of-i/s57035'])
  }
  
  ngOnDestroy(){
   
   
  }


}
