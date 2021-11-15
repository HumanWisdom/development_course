import { Component, OnInit, QueryList,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s11',
  templateUrl: './s11.page.html',
  styleUrls: ['./s11.page.scss'],
})
export class S11Page implements OnInit {

  bg="comparison_envy_w7"  
  toc="/comparison/s0"
  path=this.router.url
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=11
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  queId=33
  question:any
  optionList=[]
  questionA:any
  checkedRight=false
  option:any
  sessionOption=JSON.parse(sessionStorage.getItem("sessionOption"))
  sendOption=[]
  elseSelected=false  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))


  constructor( private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    if(JSON.parse(sessionStorage.getItem("bookmark115"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark115"))==1)
    this.bookmark=1
    this.createScreen()
    console.log(this.qrList,"Qrlist")
    console.log(this.qrList.ListOfQueOpts)
    this.questionA=this.qrList.ListOfQueOpts
   
  
    this.findQuestion()
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

  findQuestion(){
    for(var i=0;i<this.questionA.length;i++)
    {
      if(this.questionA[i].CorrectAns=="0")
        this.questionA[i].CorrectAns=false
      else
        this.questionA[i].CorrectAns=true
     

      if(this.queId==this.questionA[i].QueId)
      {
        this.question=this.questionA[i].Que
        this.optionList.push(this.questionA[i])
      }
       
    }
    console.log(this.question,this.optionList)

  }

  checkOption(optId){

   this.sessionOption=[]
    console.log(optId)
    this.option=optId
    console.log(this.option)
    sessionStorage.setItem("sessionOption",JSON.stringify(this.option))
  
    //this.option.push(optId)
    //console.log(this.option)
    //this.sendOption.push(this.option[this.option.length-1])
  }
 

  submitProgress(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.service.submitProgressQuestion({"ModuleId":this.moduleId,
      "screenType":this.screenType, 
      "ScrNumber":this.screenNumber,  
      "Bookmark":this.bookmark, 
      "UserId":this.userId, 
      "timeSpent":this.totalTime,
      "OptionIDs":this.option})
      .subscribe(res=>console.log(res))
      this.router.navigate(['/comparison/s13'])


  }
  receiveBookmark(e){
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark11",JSON.stringify(this.bookmark))

  }
  prev(){
    this.router.navigate(['/comparison/s10'])
  }
  
  ngOnDestroy(){
    
 
  
  }

 

}
