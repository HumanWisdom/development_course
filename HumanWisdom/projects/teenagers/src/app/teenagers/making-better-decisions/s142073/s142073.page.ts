import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s142073',
  templateUrl: './s142073.page.html',
  styleUrls: ['./s142073.page.scss'],
})
export class S142073Page implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w3"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=142073
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any
  question:any
  optionList=[]
  //sendOption=[]
  sessionOption142073=JSON.parse(sessionStorage.getItem("sessionOption142073"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption142073"))
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  toc="teenagers/making-better-decisions/s142001"

  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() {
    
    if(this.sessionOption142073==null)
    {
      this.sessionOption142073=[]
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
    this.question=this.findQuestion(623).Question
    this.optionList=this.findQuestion(623).optionList
    

    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
  }

  ngAfterViewInit(): void 
  {
    if(this.optionList && this.sessionOption142073) {
      this.optionList.forEach((d) => {
        if(this.sessionOption142073.includes(d['OptId'])) {
        document.getElementById(d['OptStr']).style.backgroundColor = '#E58D82';
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
      document.getElementById(divid).style.backgroundColor = '#E58D82';
      this.sendOption.push(id)
    }
    else if(e==false)
    {
    document.getElementById(divid).style.backgroundColor = 'rgba(255,255,255,0.1)';
      this.sendOption.forEach((element,index)=>{
        if(element==id) this.sendOption.splice(index,1);
      });
    }
    
    sessionStorage.setItem("sessionOption142073",JSON.stringify(this.sendOption))
  }

  submitProgress()
  {
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/teenagers/making-better-decisions/s142074'])
    if (this.userId === 563) return;

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

  prev()
  {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/teenagers/making-better-decisions/s142072'])
  }

  sessionFetch(id, divid)
  {
    if(this.sessionOption142073.includes(id))
    {
      // document.getElementById(divid).style.backgroundColor = '#E58D82';
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