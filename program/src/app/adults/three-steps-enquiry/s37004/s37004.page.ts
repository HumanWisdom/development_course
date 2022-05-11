import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s37004',
  templateUrl: './s37004.page.html',
  styleUrls: ['./s37004.page.scss'],
})
export class S37004Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w3"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  toc="three-steps-enquiry/s37000"
  path=this.router.url
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=37004
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  
  sessionOption37004=JSON.parse(sessionStorage.getItem("sessionOption37004"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption37004"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log("sessionOption37004",this.sessionOption37004)
    if(this.sessionOption37004==null)
    
    {
      this.sessionOption37004=[]
      this.sendOption=[]

    }
    if(this.sessionOption37004==null)
    this.sessionOption37004=[]
    this.createScreen()
    this.startTime = Date.now();
    for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
    {
      this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)

    }
      
   
    this.questionA=this.qrList.ListOfQueOpts
    
    this.question=this.findQuestion(140).Question
    this.optionList=this.findQuestion(140).optionList
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
   sessionStorage.setItem("sessionOption37004",JSON.stringify(this.sendOption))
  

 }

 submitProgress(){
  this.endTime = Date.now();
this.totalTime = this.endTime - this.startTime;
this.router.navigate(['/adults/three-steps-enquiry/s37005'])

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
  this.router.navigate(['/adults/three-steps-enquiry/s37003'])


}
  sessionFetch(id){
    if(this.sessionOption37004.includes(id))
    {

      return true
    }
      
    else
      return false
  }
  
  ngOnDestroy(){
    
  
  }

 
}
