import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s32010',
  templateUrl: './s32010.page.html',
  styleUrls: ['./s32010.page.scss'],
})
export class S32010Page implements OnInit {

  bg="purple_blue_w8"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  toc="benefits-of-wisdom/s32001"
  path=this.router.url
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=32010
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  
  sessionOption32010=JSON.parse(sessionStorage.getItem("sessionOption32010"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption32010"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log("sessionOption32010",this.sessionOption32010)
    if(this.sessionOption32010==null)
    
    {
      this.sessionOption32010=[]
      this.sendOption=[]

    }
    if(this.sessionOption32010==null)
    this.sessionOption32010=[]
    this.createScreen()
    this.startTime = Date.now();
    for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
    {
      this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)

    }
      
   
    this.questionA=this.qrList.ListOfQueOpts
    
    this.question=this.findQuestion(120).Question
    this.optionList=this.findQuestion(120).optionList
    console.log(this.optionList,this.question)
   
  
   
   

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
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
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
  }


  findQuestion(q){
    this.optionList=[]
    for(var i=0;i<this.questionA.length;i++)
    {
      if(this.questionA[i].CorrectAns=="0")
        this.questionA[i].CorrectAns=false
      else
        this.questionA[i].CorrectAns=true
     

      if(q==this.questionA[i].QueId)
      {
        var question=this.questionA[i].Que
        this.optionList.push(this.questionA[i])
        
      }  
    }
    return({"Question":question,"optionList":this.optionList})
  }

 selectOption(id,e){
   console.log(id,e)
   if(e==true)
   {
     this.sendOption.push(id)
   }
   else if(e==false)
   {
    this.sendOption.forEach((element,index)=>{
      if(element==id) this.sendOption.splice(index,1);
   });
   }
   console.log(this.sendOption)
   sessionStorage.setItem("sessionOption32010",JSON.stringify(this.sendOption))
  

 }

 submitProgress(){
  this.endTime = Date.now();
this.totalTime = this.endTime - this.startTime;

this.router.navigate(['/adults/benefits-of-wisdom/s32011'])
  this.service.submitProgressQuestion({"ModuleId":this.moduleId,
    "screenType":this.screenType, 
    "ScrNumber":this.screenNumber,  
    "Bookmark":this.bookmark, 
    "UserId":this.userId, 
    "timeSpent":this.totalTime,
    "OptionIDs":this.sendOption.join()})
    .subscribe((res) => {});

    


}
prev(){
  this.router.navigate(['/adults/benefits-of-wisdom/s32009'])


}
  sessionFetch(id){
    if(this.sessionOption32010.includes(id))
    {

      return true
    }
      
    else
      return false
  }
  
  ngOnDestroy(){
    
  
  }

 
}
