import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service";
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s42009',
  templateUrl: './s42009.page.html',
  styleUrls: ['./s42009.page.scss'],
})
export class S42009Page implements OnInit {


  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w6"


  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  toc="without-language/s42000"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
 
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("question"))
  screenNumber=42009
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  questionA:any

  question:any
  optionList=[]
  
  sessionOption42009=JSON.parse(sessionStorage.getItem("sessionOption42009"))
  sendOption=JSON.parse(sessionStorage.getItem("sessionOption42009"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log("sessionOption42009",this.sessionOption42009)
    if(this.sessionOption42009==null)
    
    {
      this.sessionOption42009=[]
      this.sendOption=[]

    }
    if(this.sessionOption42009==null)
    this.sessionOption42009=[]
    this.createScreen()
    this.startTime = Date.now();
    if(this.qrList.ListOfQueOpts) {
      for(var i=0;i<this.qrList.ListOfQueOpts.length;i++)
      {
        this.qrList.ListOfQueOpts[i].OptId=parseInt(this.qrList.ListOfQueOpts[i].OptId)

      }
    }


    this.questionA=this.qrList?.ListOfQueOpts
    
    this.question=this.findQuestion(141).Question
    this.optionList=this.findQuestion(141).optionList
    
   
  
   
   

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
  }

  ngAfterViewInit(): void {
    if(this.optionList && this.sessionOption42009) {
      this.optionList.forEach((d) => {
        if(this.sessionOption42009.includes(d['OptId'])) {
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
   
   sessionStorage.setItem("sessionOption42009",JSON.stringify(this.sendOption))
  
 }

 submitProgress(){
  this.endTime = Date.now();
this.totalTime = this.endTime - this.startTime;
this.router.navigate(['/adults/without-language/s42010'])

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
  this.router.navigate(['/adults/without-language/s42008'])


}
  sessionFetch(id, divid){
    if(this.sessionOption42009.includes(id))
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
