import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s301',
  templateUrl: './s301.page.html',
  styleUrls: ['./s301.page.scss'],
})
export class S301Page implements OnInit {
  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="conditioning_w9"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  path=this.router.url
  toc="/conditioning/s232"
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=301
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  //sendOption=[]
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption301"))
  sessionOption301=JSON.parse(sessionStorage.getItem("sessionOption301"))
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log("sessionOptions",this.sessionOption301)
    if(this.sessionOption301==null)
    
      {
        this.sessionOption301=[]
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
    
    this.question=this.findQuestion(63).Question
    this.optionList=this.findQuestion(63).optionList
    console.log(this.optionList,this.question)
   
  
   
   

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      if(JSON.parse(sessionStorage.getItem("bookmark301"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark301"))==1)
      this.bookmark=1
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark301",JSON.stringify(this.bookmark))
  }

  ngAfterViewInit(): void {
    if(this.optionList && this.sessionOption301) {
      this.optionList.forEach((d) => {
        if(this.sessionOption301.includes(d['OptId'])) {
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
   sessionStorage.setItem("sessionOption301",JSON.stringify(this.sendOption))
  
 }

  submitProgress(){
    this.endTime = Date.now();
  this.totalTime = this.endTime - this.startTime;
 this.router.navigate(['/adults/conditioning/s302'])

  
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
    this.router.navigate(['/adults/conditioning/s300'])


  }
  sessionFetch(id, divid){
    if(this.sessionOption301.includes(id))
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
