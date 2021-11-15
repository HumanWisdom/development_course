import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {Options} from '@angular-slider/ngx-slider'

@Component({
  selector: 'app-s73008',
  templateUrl: './s73008.page.html',
  styleUrls: ['./s73008.page.scss'],
})
export class S73008Page implements OnInit {

  bg="red_pink_w5"
  toc="/money/s73001"
  path=this.router.url
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=73008
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  x=[]
  q1:any
  q2:any
  q3:any
  
  optionList1=[]
  optionList2=[]
  optionList3=[]
 
  s1:any
  s2:any
  s3:any
  
  question:any
  optionList=[]
  questionA:any
  checkedRight=false
  option:any
  sessionOption=JSON.parse(sessionStorage.getItem("sessionOption"))
  sendOption=[]
  value1:number =100
 
  dummychange:any
  options1: Options={
    floor:0,
    ceil:5
  }

  options2: Options={
    floor:0,
    ceil:5
  }
  options3: Options={
    floor:0,
    ceil:5
  }
  
  
  rating1=0
  rating2=0
  rating3=0
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

    ngOnInit() {
    

    
  
      this.createScreen()
      console.log(this.qrList,"Qrlist")
      console.log(this.qrList.ListOfQueOpts)
      this.questionA=this.qrList.ListOfQueOpts
     
      this.q1=this.findQuestion(283).Question
      this.optionList1=this.findQuestion(283).optionList
      this.q2=this.findQuestion(284).Question
      this.optionList2=this.findQuestion(284).optionList
      this.q3=this.findQuestion(285).Question
      this.optionList3=this.findQuestion(285).optionList
      
     
     
      
      console.log(this.q1,this.optionList1)
    
  
      if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
      else
        {this.userId=JSON.parse(localStorage.getItem("userId"))}
        this.startTime = Date.now();
    }

  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
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
  receiveRating(e){
    console.log(e)
    e=JSON.parse(e)
    
    switch(e.Id){
      case "1":{
        this.rating1=e.Rating
        this.s1=this.optionList1.find(x=>x.Points==e.Rating).OptId
        console.log("selected rating",this.s1)
        break;

      }

      case "2":{
        this.rating2=e.Rating
        this.s2=this.optionList1.find(x=>x.Points==e.Rating).OptId
        console.log("selected rating",this.s2)
        break;

      }
      case "3":{
        this.rating3=e.Rating
        this.s3=this.optionList1.find(x=>x.Points==e.Rating).OptId
        console.log("selected rating",this.s3)
        break;

      }
    
      default:{
        console.log("week")
        break;
      }
    }
    

  }

  
 

  submitProgress(){
    this.endTime = Date.now();
  this.totalTime = this.endTime - this.startTime;
  //console.log(this.totalTime,"total time")
 

    var optionT=[this.s1]
    this.option=optionT.join()
    this.service.submitProgressQuestion({"ModuleId":this.moduleId,
      "screenType":this.screenType, 
      "ScrNumber":this.screenNumber,  
      "Bookmark":this.bookmark, 
      "UserId":this.userId, 
      "timeSpent":this.totalTime,
      "OptionIDs":this.option})
      .subscribe(res=>console.log(res),
      error=>{
        console.log(error)
      },
      ()=>{
        this.router.navigate(['/money/s73009'])
      })


  }
  
  prev(){
    this.router.navigate(['/money/s73007'])

  }
  ngOnDestroy(){
    
  
  }


}
