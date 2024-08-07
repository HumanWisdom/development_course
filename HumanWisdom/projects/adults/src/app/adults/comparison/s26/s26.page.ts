import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s26',
  templateUrl: './s26.page.html',
  styleUrls: ['./s26.page.scss'],
})

export class S26Page implements OnInit
{
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bookmark=0
  toc="comparison/s0"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=26
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
    private service:AdultsService,
    private location:Location
  )
  { }

  ngOnInit()
  {
    this.createScreen()
    for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
    {
      this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)
    }

    this.questionA=this.qrList.ListOfQueOpts
    this.q0=this.findQuestion(34).Question
    this.optionList0=this.findQuestion(34).optionList
    this.q1=this.findQuestion(35).Question
    this.optionList1=this.findQuestion(35).optionList
    
    this.q2=this.findQuestion(37).Question
    this.optionList2=this.findQuestion(37).optionList
    this.q3=this.findQuestion(38).Question
    this.optionList3=this.findQuestion(38).optionList
    this.q4=this.findQuestion(39).Question
    this.optionList4=this.findQuestion(39).optionList
    this.q5=this.findQuestion(40).Question
    this.optionList5=this.findQuestion(40).optionList

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
      }
    }
    this.sendOptions.push(id)
    this.sendOptions=[...new Set(this.sendOptions)]
    sessionStorage.setItem("sessionOptions",JSON.stringify(this.sendOptions))
  }

  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/comparison/s27'])
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
        //this.router.navigate(['/adults/conditioning/s234'])
      })
  }

  prev()
  {
    this.router.navigate(['/adults/comparison/s25'])
  }

  receiveBookmark(e)
  {
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
  }

  ngOnDestroy()
  {}

}
