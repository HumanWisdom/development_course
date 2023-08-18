import { Component, OnInit, QueryList,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {Options} from '@angular-slider/ngx-slider'
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s131007',
  templateUrl: './s131007.page.html',
  styleUrls: ['./s131007.page.scss'],
})
export class S131007Page implements OnInit { 

  bg_tn="bg_purple"
  bg_cft="bg_purple"

  userId:any
  toc="relationships/s131001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("feedbackSurvey"))
  screenNumber=131007
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  q1:any
  optionList1=[]
  sessionOption=JSON.parse(sessionStorage.getItem("sessionOption"))
  option:any
  rating1=0
  questionA:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() {
    this.questionA=this.qrList.ListOfQueOpts
    this.q1=this.findQuestion(159).Question
    this.optionList1=this.findQuestion(159).optionList
   
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      this.startTime = Date.now();
      if(JSON.parse(sessionStorage.getItem("bookmark131007"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark131007"))==1)
      this.bookmark=1
 
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
  receiveRating(e){
    console.log(e)
    e=JSON.parse(e)
  
    this.rating1=e.Rating
    this.option=this.optionList1.find(x=>x.Points==e.Rating).OptId
    console.log("selected rating",this.option)
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark131007",JSON.stringify(this.bookmark))
  }

  findQuestion(q){
    var optionList=[]
    console.log(q,"questionId")
    for(var i=0;i<this.questionA.length;i++)
    {
      if(this.questionA[i].CorrectAns=="0")
        this.questionA[i].CorrectAns=false
      else
        this.questionA[i].CorrectAns=true
     

      if(q==this.questionA[i].QueId)
      {
       
        var question=this.questionA[i].Que
       
        optionList.push(this.questionA[i])
      
       //this.optionList.push(this.questionA[i])
 
      }
      
       
    }
    console.log(question,optionList)
    return({"Question":question,"optionList":optionList})

  }


  submitProgress(){
    this.endTime = Date.now();
   this.totalTime = this.endTime - this.startTime;
   this.router.navigate(['/relationships/s131008'])
    this.service.submitProgressQuestion({"ModuleId":this.moduleId,
      "screenType":this.screenType, 
      "ScrNumber":this.screenNumber,  
      "Bookmark":this.bookmark, 
      "UserId":this.userId, 
      "timeSpent":this.totalTime,
      "OptionIDs":this.option})
      .subscribe((res) => {});
     


  }
  prev(){
    this.router.navigate(['/relationships/s131006'])

  }
 

}
