import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s57035',
  templateUrl: './s57035.page.html',
  styleUrls: ['./s57035.page.scss'],
})
export class S57035Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=57035
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  //sendOption=[]
  sessionOption57035=JSON.parse(sessionStorage.getItem("sessionOption57035"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption57035"))
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  toc="/nature-of-i/s57001"
 
 
  
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    
    if(this.sessionOption57035==null)
    {
      this.sessionOption57035=[]
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
   
    this.questionA=this.qrList.ListOfQueOpts
    
    this.question=this.findQuestion(287).Question
    this.optionList=this.findQuestion(287).optionList
    
   
     

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
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

  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
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

  selectOption(id,e,  divid){
    console.log(id,e)
    if(e==true)
    {
      document.getElementById(divid).style.backgroundColor = '#E58D82';

      this.sendOption.push(id)
    }
    if(e==false)
    {
      document.getElementById(divid).style.backgroundColor = 'rgba(255,255,255,0.1)';
     this.sendOption.forEach((element,index)=>{
       if(element==id) this.sendOption.splice(index,1);
    });
    }
    
    sessionStorage.setItem("sessionOption57035",JSON.stringify(this.sendOption))
   
 
  }
 

  submitProgress(){
    this.router.navigate(['/adults/nature-of-i/s57036'])
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
  prev(){
    this.router.navigate(['/adults/nature-of-i/s57034'])


  }
  sessionFetch(id){
    if(this.sessionOption57035.includes(id))
    {

      return true
    }
      
    else
      return false
  }
  
  ngOnDestroy(){
    
 
  }

 
}
