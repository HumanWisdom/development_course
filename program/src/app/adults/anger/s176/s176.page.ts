import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s176',
  templateUrl: './s176.page.html',
  styleUrls: ['./s176.page.scss'],
})
export class S176Page implements OnInit,OnDestroy {
  
  userId:any
  toc="/anger/s162p0"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=176
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=64
  reflection:any
  reflectionA:any
  r176=JSON.parse(sessionStorage.getItem("r176"))
  hint="My son did not call on my birthday, My anger is caused by my own expectations";
  path=this.router.url
  bg="bg_176"

  shared:any
  confirmed:any
  scrNumber:any
  progress:any

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
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
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

  submitProgress(){
    sessionStorage.setItem("r176",JSON.stringify(this.r176))
    this.service.submitProgressReflection({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "ReflectionId":this.rId,
      "Resp":this.r176
    }).subscribe(res=>
      {
        
      })
    

  }
  
  ngOnDestroy(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    
    this.submitProgress()
  }

  getProgress(p)
  {
    this.service.screenProgress(p)
    .subscribe(
      r=>{
        this.progress=parseFloat(r)
        console.log(this.progress,"sessionProgress")
      }
    )

  }
  
  goToToc(){
    this.router.navigate(['/adults/'+this.toc])
  }
  goToDash(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
}
