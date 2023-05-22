import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s111026',
  templateUrl: './s111026.page.html',
  styleUrls: ['./s111026.page.scss'],
})
export class S111026Page implements OnInit 
{
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bookmark=0
  toc="comparison/s111001"
  path=this.router.url
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList")) 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=111026
  startTime:any
  endTime:any
  totalTime:any
  questionA:any
  q0:any
  q1:any
  q2:any
  q3:any
  q4:any
  q5:any
  optionList=[]
  optionList0=[]
  optionList1=[]
  optionList2=[]
  optionList3=[]
  optionList4=[]
  optionList5=[]
  sendOptions=[]
  sessionOptions=JSON.parse(sessionStorage.getItem("sessionOptions"))

  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }

  ngOnInit() 
  {
    console.log("sessionOptions",this.sessionOptions)
    this.createScreen()
    for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
    {
      this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)
    }
   
    this.questionA=this.qrList.ListOfQueOpts
    this.q0=this.findQuestion(424).Question
    this.optionList0=this.findQuestion(424).optionList
    this.q1=this.findQuestion(425).Question
    this.optionList1=this.findQuestion(425).optionList
    console.log(this.optionList0,this.q0)
    this.q2=this.findQuestion(426).Question
    this.optionList2=this.findQuestion(426).optionList
    this.q3=this.findQuestion(427).Question
    this.optionList3=this.findQuestion(427).optionList
    this.q4=this.findQuestion(428).Question
    this.optionList4=this.findQuestion(428).optionList
    this.q5=this.findQuestion(429).Question
    this.optionList5=this.findQuestion(429).optionList
    console.log(this.optionList0)
    console.log(this.optionList1)
    console.log(this.optionList2)
    console.log(this.optionList3)
    console.log(this.optionList4)
    console.log(this.optionList5)

    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
  }

  createScreen()
  {
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>{})
  }

  findQuestion(q)
  {
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

  selectOption(id)
  {
    console.log(id)
    for(var j=0;j<this.sendOptions.length;j++)
    {
      if(this.sendOptions.includes(id)==false)
      {
        if(id==39)
        {
          if(this.sendOptions.includes(40))
          {
            var index=this.sendOptions.indexOf(40)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id) 
          }
          else if(this.sendOptions.indexOf(39)===-1)
          {
            this.sendOptions.push(id)
          } 
        }
        if(id==40)
        {
          if(this.sendOptions.includes(39))
          {
            var index=this.sendOptions.indexOf(39)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id) 
          }
          else if(this.sendOptions.indexOf(40)===-1)
          {
            this.sendOptions.push(id)
          }
        }
        if(id==41)
        {
          if(this.sendOptions.includes(42))
          {
            var index=this.sendOptions.indexOf(42)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id) 
          }
          else if(this.sendOptions.indexOf(42)===-1)
          {
            this.sendOptions.push(id)
          } 
        }
        if(id==42)
        {
          if(this.sendOptions.includes(41))
          {
            var index=this.sendOptions.indexOf(41)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==44)
        {
          if(this.sendOptions.includes(45))
          {
            var index=this.sendOptions.indexOf(45)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==45)
        {
          if(this.sendOptions.includes(44))
          {
            var index=this.sendOptions.indexOf(44)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==46)
        {
          if(this.sendOptions.includes(47))
          {
            var index=this.sendOptions.indexOf(47)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==47)
        {
          if(this.sendOptions.includes(46))
          {
            var index=this.sendOptions.indexOf(46)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==48)
        {
          if(this.sendOptions.includes(49))
          {
            var index=this.sendOptions.indexOf(49)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==49)
        {
          if(this.sendOptions.includes(48))
          {
            var index=this.sendOptions.indexOf(48)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==50)
        {
          if(this.sendOptions.includes(51))
          {
            var index=this.sendOptions.indexOf(51)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
        if(id==51)
        {
          if(this.sendOptions.includes(50))
          {
            var index=this.sendOptions.indexOf(50)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)  
          }
          else
            this.sendOptions.push(id)
        }
      }
      else{
        console.log("exists")
      }
    }
    this.sendOptions.push(id)
    this.sendOptions=[...new Set(this.sendOptions)]
    console.log(this.sendOptions)
    sessionStorage.setItem("sessionOptions",JSON.stringify(this.sendOptions))
  }

  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/comparison/s111027'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      },
      error=>{console.log(error)},
      ()=>{
        //this.router.navigate(['/conditioning/s234'])
      })
  }

  prev()
  {
    this.router.navigate(['/comparison/s111025'])
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
  }
  
  ngOnDestroy()
  {}

}