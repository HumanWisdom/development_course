import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s167',
  templateUrl: './s167.page.html',
  styleUrls: ['./s167.page.scss'],
})
export class S167Page implements OnInit,OnDestroy {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="anger_w5"
  hint="I get angry when someone does not do what they said they would, and when my son forgets my birthday"
  toc="/anger/s162p0"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber=167
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=62
  reflection:any
  reflectionA:any
  r167=JSON.parse(sessionStorage.getItem("r167"))

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
    this.router.navigate(['/adults/anger/s168'])
    console.log("returned response",e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r167",JSON.stringify(e))
   this.r167=sessionStorage.getItem("r167")
   console.log(this.r167)
   if(this.r167!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r167
        }).subscribe(res=>
        {
          
        },
        error=>{
          console.log(error)
          // this.router.navigate(['/adults/anger/s168'])

        },
        ()=>{
          // this.router.navigate(['/adults/anger/s168'])
        })
   }

   else{
    this.router.navigate(['/adults/anger/s168'])

   }
   
    
    

  }

  previous(){
    this.router.navigate(['/adults/anger/s166'])
  }
  
  ngOnDestroy(){
   
    
    //this.submitProgress()
  }


}
