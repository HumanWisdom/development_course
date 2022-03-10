import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s27018',
  templateUrl: './s27018.page.html',
  styleUrls: ['./s27018.page.scss'],
})
export class S27018Page implements OnInit {

  bg="purple_blue_w1"  
  hint=" It could be stress, anxiety, relationships challenges, or just not feeling at ease with yourself."
  toc="discovering-wisdom/s27001"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=27018
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=252
  reflection:any
  reflectionA:any
  r27018=JSON.parse(sessionStorage.getItem("r27018"))

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
    sessionStorage.setItem("r27018",JSON.stringify(e))
   this.r27018=sessionStorage.getItem("r27018")
   console.log(this.r27018)
   if(this.r27018!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r27018
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/discovering-wisdom/s27019'])

        },
        ()=>{
          this.router.navigate(['/adults/discovering-wisdom/s27019'])
        })
   }

   else{
    this.router.navigate(['/adults/discovering-wisdom/s27019'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/discovering-wisdom/s27017'])
  }
  
  ngOnDestroy(){
   
    
    //this.submitProgress()
  }


}
