import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s135059',
  templateUrl: './s135059.page.html',
  styleUrls: ['./s135059.page.scss'],
})
export class S135059Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w3"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=135059
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any
  question:any
  optionList=[]
  //sendOption=[]
  sessionOption135059=JSON.parse(sessionStorage.getItem("sessionOption135059"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption135059"))
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  toc="/bullying/s135001"

  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() {
    console.log(this.sendOption,this.sessionOption135059)
    if(this.sessionOption135059==null)
    {
      this.sessionOption135059=[]
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
    this.question=this.findQuestion(303).Question
    this.optionList=this.findQuestion(303).optionList
    console.log(this.optionList,this.question)

    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
  }

  ngAfterViewInit(): void 
  {
    if(this.optionList && this.sessionOption135059) {
      this.optionList.forEach((d) => {
        if(this.sessionOption135059.includes(d['OptId'])) {
          document.getElementById(d['OptStr']).style.backgroundColor = '#FFC455';
        }
      }) 
    }   
  }

  createScreen()
  {
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

  selectOption(id,e, divid)
  {
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
    sessionStorage.setItem("sessionOption135059",JSON.stringify(this.sendOption))
  }

  submitProgress()
  {
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
    this.router.navigate(['/bullying/s135060'])
  }

  prev()
  {
    this.router.navigate(['/bullying/s135058'])
  }

  sessionFetch(id, divid)
  {
    if(this.sessionOption135059.includes(id))
    {
      // document.getElementById(divid).style.backgroundColor = '#FFC455';
      return true
    }
    else 
    {
      // document.getElementById(divid).style.backgroundColor = 'rgba(255,255,255,0.75)';
      return false
    }
  }
  
  ngOnDestroy()
  {}

}