import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s217',
  templateUrl: './s217.page.html',
  styleUrls: ['./s217.page.scss'],
})
export class S217Page implements OnInit {

  bg="anger_w5" 
  toc="/anger/s162p0"
  path=this.router.url 

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=217
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  
  sessionOption217=JSON.parse(sessionStorage.getItem("sessionOption217"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption217"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log("sessionOption217",this.sessionOption217)
    if(this.sessionOption217==null)
    
    {
      this.sessionOption217=[]
      this.sendOption=[]

    }
    console.log("sessionOption217s",this.sessionOption217)
    if(this.sessionOption217==null)
    this.sessionOption217=[]
    this.createScreen()
    this.startTime = Date.now();
    for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
    {
      this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)

    }
      
   //console.log(this.qrList.ListOfQueOpts)
    this.questionA=this.qrList.ListOfQueOpts
    
    this.question=this.findQuestion(48).Question
    this.optionList=this.findQuestion(48).optionList
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
   sessionStorage.setItem("sessionOption217",JSON.stringify(this.sendOption))
  //console.log("local Storage sess",sessionStorage.getItem("sessionOption217"))

 }

 submitProgress(){
  this.endTime = Date.now();
  this.totalTime = this.endTime - this.startTime;
  this.router.navigate(['/adults/anger/s218'])

  this.service.submitProgressQuestion({"ModuleId":this.moduleId,
    "screenType":this.screenType, 
    "ScrNumber":this.screenNumber,  
    "Bookmark":this.bookmark, 
    "UserId":this.userId, 
    "timeSpent":this.totalTime,
    "OptionIDs":this.sendOption.join()})
    .subscribe((res) => {});

    // this.router.navigate(['/adults/anger/s218'])


}
previous(){
  this.router.navigate(['/adults/anger/s216p7'])


}
  sessionFetch(id){
    if(this.sessionOption217.includes(id))
    {

      return true
    }
      
    else
      return false
  }
  
  ngOnDestroy(){
    
 
  }

 
}
