import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s65',
  templateUrl: './s65.page.html',
  styleUrls: ['./s65.page.scss'],
})
export class S65Page implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="comparison_envy_w11"  

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=65
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  
  sessionOption65=JSON.parse(sessionStorage.getItem("sessionOption65"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption65"))
  path=this.router.url
  toc="/comparison/s0"
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log("sessionOptions",this.sessionOption65)
    if(this.sessionOption65==null)
    {
      this.sessionOption65=[]
      this.sendOption=[]

    }
    this.createScreen()
    this.startTime = Date.now();
    if(this.qrList.ListOfQueOpts) {
      for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
      {
        this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)

      }
    }


    this.questionA=this.qrList?.ListOfQueOpts
    
    this.question=this.findQuestion(44).Question
    this.optionList=this.findQuestion(44).optionList
    console.log(this.optionList,this.question)
   
  
   
   

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
  }

  ngAfterViewInit(): void {
    if(this.optionList && this.sessionOption65) {
      this.optionList.forEach((d) => {
        if(this.sessionOption65.includes(d['OptId'])) {
          document.getElementById(d['OptStr']).style.backgroundColor = '#FFC455';
        }
      }) 
    }   

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

 selectOption(id,e, divid){
   console.log(id,e)
   if(e==true)
   {
    document.getElementById(divid).style.backgroundColor = '#FFC455';
     this.sendOption.push(id)
   }
   else if(e==false)
   {
    document.getElementById(divid).style.backgroundColor = 'rgba(255,255,255,0.75)';
    this.sendOption.forEach((element,index)=>{
      if(element==id) this.sendOption.splice(index,1);
   });
   }
   console.log(this.sendOption)
   sessionStorage.setItem("sessionOption65",JSON.stringify(this.sendOption))
  
 }

 submitProgress(){
  this.endTime = Date.now();
  this.totalTime = this.endTime - this.startTime;

  this.router.navigate(['/adults/comparison/s67'])
  //if(this.sendOption!=null)
  {
    this.service.submitProgressQuestion({"ModuleId":this.moduleId,
    "screenType":this.screenType, 
    "ScrNumber":this.screenNumber,  
    "Bookmark":this.bookmark, 
    "UserId":this.userId, 
    "timeSpent":this.totalTime,
    "OptionIDs":this.sendOption.join()})
    .subscribe((res) => {});


  }
    
 
  

}
prev(){

  console.log("prev")
  this.router.navigate(['/adults/comparison/s64'])
}
receiveBookmark(e)
{
  console.log(e)
 if(e==true)
  this.bookmark=1
  else
    this.bookmark=0
}
  sessionFetch(id, divid){
    if(this.sessionOption65.includes(id))
    {
      // document.getElementById(divid).style.backgroundColor = '#FFC455';
      return true
    }

    else {
      // document.getElementById(divid).style.backgroundColor = 'rgba(255,255,255,0.75)';
      return false
    }
  }
  
  ngOnDestroy(){
    
  
  
  }

 
}
