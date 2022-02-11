import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s225',
  templateUrl: './s225.page.html',
  styleUrls: ['./s225.page.scss'],
})
export class S225Page implements OnInit,OnDestroy {

  bg="anger_w9"     
  hint="There are so many ways you can do that now. THik of at least 3."
  toc="/anger/s162p0"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=225
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=73
  reflection:any
  reflectionA:any
  r225=JSON.parse(sessionStorage.getItem("r225"))

  shared:any
  confirmed:any

  constructor(private router: Router,
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
  sharedForum(e){
    console.log(e)
    this.shared=e
  }

  confirmShare(){
    this.confirmed=true
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
    this.router.navigate(['/adults/anger/s226'])
    console.log("returned response",e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r225",JSON.stringify(e))
   this.r225=sessionStorage.getItem("r225")
   console.log(this.r225)
   if(this.r225!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r225
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
          // this.router.navigate(['/adults/anger/s226'])
        },
        ()=>{
          // this.router.navigate(['/adults/anger/s226'])
        })
   }

   else{
    this.router.navigate(['/adults/anger/s226'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/anger/s224'])
  }
  ngOnDestroy(){
   
    
  }

}
