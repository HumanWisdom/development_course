import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s23167',
  templateUrl: './s23167.page.html',
  styleUrls: ['./s23167.page.scss'],
})
export class S23167Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  toc="/happiness/s23001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=23167
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  
  sessionOption23167=JSON.parse(sessionStorage.getItem("sessionOption23167"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption23167"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log("sessionOption23167",this.sessionOption23167)
    if(this.sessionOption23167==null)
    
    {
      this.sessionOption23167=[]
      this.sendOption=[]

    }
    if(this.sessionOption23167==null)
    this.sessionOption23167=[]
    this.createScreen()
    this.startTime = Date.now();
    if(this.qrList.ListOfQueOpts) {
      for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
      {
        this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)

      }
    }


    this.questionA=this.qrList?.ListOfQueOpts
    
    this.question=this.findQuestion(104).Question
    this.optionList=this.findQuestion(104).optionList
    
   
  
   
   

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
  }

  ngAfterViewInit(): void {
    if(this.optionList && this.sessionOption23167) {
      this.optionList.forEach((d) => {
        if(this.sessionOption23167.includes(d['OptId'])) {
          document.getElementById(d['OptStr']).style.backgroundColor = '#E58D82';
        }
      }) 
    }   

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

 selectOption(id,e, divid){
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
   
   sessionStorage.setItem("sessionOption23167",JSON.stringify(this.sendOption))
  
 }

 submitProgress(){
  this.endTime = Date.now();
this.totalTime = this.endTime - this.startTime;
localStorage.setItem("pageaction", 'next')
this.router.navigate(['/adults/happiness/s23178'])
if (this.userId === 563) return;
  this.service.submitProgressQuestion({"ModuleId":this.moduleId,
    "screenType":this.screenType, 
    "ScrNumber":this.screenNumber,  
    "Bookmark":this.bookmark, 
    "UserId":this.userId, 
    "timeSpent":this.totalTime,
    "OptionIDs":this.sendOption.join()})
    .subscribe((res) => {});

   


}
prev(){
  localStorage.setItem("pageaction", 'prev')
  this.router.navigate(['/adults/happiness/s23166'])


}
  sessionFetch(id, divid){
    if(this.sessionOption23167.includes(id))
    {
      //document.getElementById(divid).style.backgroundColor = '#E58D82';
      return true
    }

    else {
      // document.getElementById(divid).style.backgroundColor = 'rgba(255,255,255,0.1)';
      return false
    }
  }
  
  ngOnDestroy(){
    
  
  }

 
}
