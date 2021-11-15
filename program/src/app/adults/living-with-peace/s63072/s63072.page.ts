import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s63072',
  templateUrl: './s63072.page.html',
  styleUrls: ['./s63072.page.scss'],
})
export class S63072Page implements OnInit {

  bg="blue_w7"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=63072
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  //sendOption=[]
  sessionOption63072=JSON.parse(sessionStorage.getItem("sessionOption63072"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption63072"))
  path=this.router.url
  toc="/living-with-peace/s63001"
 
 
  
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log(this.sendOption,this.sessionOption63072)
    if(this.sessionOption63072==null)
    {
      this.sessionOption63072=[]
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
    
    this.question=this.findQuestion(232).Question
    this.optionList=this.findQuestion(232).optionList
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
    if(e==false)
    {
     this.sendOption.forEach((element,index)=>{
       if(element==id) this.sendOption.splice(index,1);
    });
    }
    console.log(this.sendOption)
    sessionStorage.setItem("sessionOption63072",JSON.stringify(this.sendOption))
   //console.log("local Storage sess",sessionStorage.getItem("sessionOption"))
 
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
      
   
      this.router.navigate(['/living-with-peace/s63073'])

  }
  prev(){
    this.router.navigate(['/living-with-peace/s63071'])


  }
  sessionFetch(id){
    if(this.sessionOption63072.includes(id))
    {

      return true
    }
      
    else
      return false
  }
  
  ngOnDestroy(){
    
 
  }

 
}
