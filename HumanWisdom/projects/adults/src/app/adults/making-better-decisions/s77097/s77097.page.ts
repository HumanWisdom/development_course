import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'HumanWisdom-s77097',
  templateUrl: './s77097.page.html',
  styleUrls: ['./s77097.page.scss'],
})
export class S77097Page implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w10"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=77097
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any
  question:any
  optionList=[]
  //sendOption=[]
  sessionOption77097=JSON.parse(sessionStorage.getItem("sessionOption77097"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption77097"))
  path=this.router.url
  toc="/making-better-decisions/s77001"

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log(this.sendOption,this.sessionOption77097)
    if(this.sessionOption77097==null)
    {
      this.sessionOption77097=[]
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
    this.question=this.findQuestion(312).Question
    this.optionList=this.findQuestion(312).optionList
    console.log(this.optionList,this.question)

    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
  }

  ngAfterViewInit(): void 
  {
    if(this.optionList && this.sessionOption77097) {
      this.optionList.forEach((d) => {
        if(this.sessionOption77097.includes(d['OptId'])) {
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
    sessionStorage.setItem("sessionOption77097",JSON.stringify(this.sendOption))
  }

  submitProgress()
  {
    localStorage.setItem("pageaction", 'next')

    this.router.navigate(['/adults/making-better-decisions/s77098'])
    if (this.userId === 563) return;
    
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

  prev()
  {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/making-better-decisions/s77096'])
  }

  sessionFetch(id, divid)
  {
    if(this.sessionOption77097.includes(id))
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