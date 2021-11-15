import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s100',
  templateUrl: './s100.page.html',
  styleUrls: ['./s100.page.scss'],
})
export class S100Page implements OnInit {

  bg="comparison_envy_w6"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=100
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any
 question:any
  optionList=[]
  sessionOption100=JSON.parse(sessionStorage.getItem("sessionOption100"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption100"))
  path=this.router.url
  toc="/comparison/s0"
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
   // sessionStorage.clear()
   
    console.log("sessionResponse",this.sessionOption100)
    if(this.sessionOption100==null)
    {
      this.sessionOption100=[]
      this.sendOption=[]

    }
    this.createScreen()
    this.startTime = Date.now();
    for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
    {
      this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)

    }
      
   //console.log(this.qrList.ListOfQueOpts)
    this.questionA=this.qrList.ListOfQueOpts
    
    this.question=this.findQuestion(42).Question
    this.optionList=this.findQuestion(42).optionList
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
        console.log(res)
      })
    

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
   console.log(this.sendOption)
   sessionStorage.setItem("sessionOption100",JSON.stringify(this.sendOption))

 }
 sessionFetch(id){
  if(this.sessionOption100.length!=0)
  {
    if(this.sessionOption100.includes(id))
    {

      return true
    }
      
    else
      return false

  }

  else{
    return false
  }
 
 
}
submitProgress(){
  //if(this.sendOption!=null)
  {
    this.service.submitProgressQuestion({"ModuleId":this.moduleId,
    "screenType":this.screenType, 
    "ScrNumber":this.screenNumber,  
    "Bookmark":this.bookmark, 
    "UserId":this.userId, 
    "timeSpent":this.totalTime,
    "OptionIDs":this.sendOption.join()})
    .subscribe(res=>console.log(res))


  }
    
 
    this.router.navigate(['/comparison/s102'])

}
prev(){
  this.router.navigate(['/comparison/s99'])


}
receiveBookmark(e)
{
  console.log(e)
 if(e==true)
  this.bookmark=1
  else
    this.bookmark=0
}

 
  
  ngOnDestroy(){
    
 
  }

 
}
