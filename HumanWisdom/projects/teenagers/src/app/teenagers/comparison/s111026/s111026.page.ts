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
  toc="teenagers/comparison/s111001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
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
    
    this.q2=this.findQuestion(426).Question
    this.optionList2=this.findQuestion(426).optionList
    this.q3=this.findQuestion(427).Question
    this.optionList3=this.findQuestion(427).optionList
    this.q4=this.findQuestion(428).Question
    this.optionList4=this.findQuestion(428).optionList
    this.q5=this.findQuestion(429).Question
    this.optionList5=this.findQuestion(429).optionList
    
    
    
    
    
    

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
        if(id==1848)
        {
          if(this.sendOptions.includes(1849))
          {
            var index=this.sendOptions.indexOf(1849)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else if(this.sendOptions.indexOf(1848)===-1)
          {
            this.sendOptions.push(id)
          }
        }
        if(id==1849)
        {
          if(this.sendOptions.includes(1848))
          {
            var index=this.sendOptions.indexOf(1848)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else if(this.sendOptions.indexOf(1849)===-1)
          {
            this.sendOptions.push(id)
          }
        }
        if(id==1850)
        {
          if(this.sendOptions.includes(1851))
          {
            var index=this.sendOptions.indexOf(1851)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else if(this.sendOptions.indexOf(1850)===-1)
          {
            this.sendOptions.push(id)
          }
        }
        if(id==1851)
        {
          if(this.sendOptions.includes(1850))
          {
            var index=this.sendOptions.indexOf(1850)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else if(this.sendOptions.indexOf(1851)===-1)
          {
            this.sendOptions.push(id)
          }
        }
        if(id==1852)
        {
          if(this.sendOptions.includes(1853))
          {
            var index=this.sendOptions.indexOf(1853)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else
            this.sendOptions.push(id)
        }
        if(id==1853)
        {
          if(this.sendOptions.includes(1852))
          {
            var index=this.sendOptions.indexOf(1852)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else
            this.sendOptions.push(id)
        }
        if(id==1854)
        {
          if(this.sendOptions.includes(1855))
          {
            var index=this.sendOptions.indexOf(1855)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else
            this.sendOptions.push(id)
        }
        if(id==1855)
        {
          if(this.sendOptions.includes(1854))
          {
            var index=this.sendOptions.indexOf(1854)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else
            this.sendOptions.push(id)
        }
        if(id==1856)
        {
          if(this.sendOptions.includes(1857))
          {
            var index=this.sendOptions.indexOf(1857)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else
            this.sendOptions.push(id)
        }
        if(id==1857)
        {
          if(this.sendOptions.includes(1856))
          {
            var index=this.sendOptions.indexOf(1856)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else
            this.sendOptions.push(id)
        }
        if(id==1858)
        {
          if(this.sendOptions.includes(1859))
          {
            var index=this.sendOptions.indexOf(1859)
            this.sendOptions.splice(index,1)
            this.sendOptions.push(id)
          }
          else
            this.sendOptions.push(id)
        }
        if(id==1859)
        {
          if(this.sendOptions.includes(1858))
          {
            var index=this.sendOptions.indexOf(1858)
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
    
    sessionStorage.setItem("sessionOptions",JSON.stringify(this.sendOptions))
  }

  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/teenagers/comparison/s111027'])
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
    this.router.navigate(['/teenagers/comparison/s111025'])
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
