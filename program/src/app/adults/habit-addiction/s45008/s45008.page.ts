import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s45008',
  templateUrl: './s45008.page.html',
  styleUrls: ['./s45008.page.scss'],
})
export class S45008Page implements OnInit {

  bg="purple_w6"  
  hint=" It could be a habit like using your phone too much, or an addiction to alcohol.  "
  toc="/habit-addiction/s45001"
  path=this.router.url

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=45008
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=719
  reflection:any
  reflectionA:any
  r45008=JSON.parse(sessionStorage.getItem("r45008"))

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
    this.router.navigate(['/habit-addiction/s45009'])
    sessionStorage.setItem("r45008",JSON.stringify(e))
   this.r45008=sessionStorage.getItem("r45008")
   console.log(this.r45008)
  
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r45008
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
         

        },
        ()=>{
          this.router.navigate(['/habit-addiction/s45009'])
        })
 

  }

  previous(){
    this.router.navigate(['/habit-addiction/s45007'])
  }
  
  ngOnDestroy(){
   
   
  }


}
