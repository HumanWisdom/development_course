import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s83035',
  templateUrl: './s83035.page.html',
  styleUrls: ['./s83035.page.scss'],
})
export class S83035Page implements OnInit {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=83035
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any
  question:any
  optionList=[]
  //sendOption=[]
  sessionOption83035=JSON.parse(sessionStorage.getItem("sessionOption83035"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption83035"))
  path=this.router.url
  toc="/key-ideas/s83001"

  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() {
    console.log(this.sendOption,this.sessionOption83035)
    if(this.sessionOption83035==null)
    {
      this.sessionOption83035=[]
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
    if(this.optionList && this.sessionOption83035) {
      this.optionList.forEach((d) => {
        if(this.sessionOption83035.includes(d['OptId'])) {
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
    sessionStorage.setItem("sessionOption83035",JSON.stringify(this.sendOption))
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
    this.router.navigate(['/key-ideas/s83036'])
  }

  prev()
  {
    this.router.navigate(['/key-ideas/s83034'])
  }

  sessionFetch(id, divid)
  {
    if(this.sessionOption83035.includes(id))
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