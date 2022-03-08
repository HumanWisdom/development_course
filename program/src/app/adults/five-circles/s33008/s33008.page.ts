import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s33008',
  templateUrl: './s33008.page.html',
  styleUrls: ['./s33008.page.scss'],
})
export class S33008Page implements OnInit {
  title="Art of Enquiry - 9 modules"
  content=[{"no":1,
  "heading":"Why bother?",
  "text":"Do we just want to treat the symptoms or the root cause of the problems we face, like stress? If a car breaks down we study what's wrong with the engine. We explore why it's important to explore the origins of our problems in our thinking.",
  "link":"/adults/benefits-of-enquiry",
  "linkText":"",
  "module-id":""},
  {"no":2,
  "heading":"How do we begin?",
  "text":"We know how to look at the world, but not ourselves, because we have never been taught how to do so. How we look at ourselves is key to the discoveries we will make. We explore simple ways to begin this journey of enquiry.",
  "link":"/adults/how-to-begin",
  "linkText":"",
  "module-id":""},
  {"no":3,
  "heading":"Three steps to Enquiry",
  "text":"To simplify the process of looking at yourself, we introduce you to 3 simple steps you can use to examine any thought or feeling that arises. This opens the door to a deeper understanding, and wisdom.",
  "link":"/adults/three-steps-enquiry",
  "linkText":"",
  "module-id":""},
  {"no":4,
  "heading":"Insight",
  "text":"Insight or the art of seeing clearly, is the penetrative understanding that brings transformation. It's the ‘aha!’ moment of clarity and we explore how you can discover that for yourself.",
  "link":"/adults/insight",
  "linkText":"",
  "module-id":""},
  {"no":5,
  "heading":"Awareness",
  "text":"Awareness is the ability to be sensitive, to notice what is going on in our thinking. We are going to show you how to go deeper to explore the hidden patterns of thinking that shape your thoughts and actions.",
  "link":"/adults/awareness",
  "linkText":"",
  "module-id":""},
  {"no":6,
  "heading":"No Judgement",
  "text":"Our mind is used to labeling what it sees as right or wrong, good or bad. We will explore why we need to pause this process, to look at ourselves clearly, and how to do this.",
  "link":"/adults/no-judgement",
  "linkText":"",
  "module-id":""},
  {"no":7,
  "heading":"Questions are Key",
  "text":"To explore the deeper layers of our thinking, and the hidden patterns that shape our thinking and behaviour, asking the right questions is so important. Questions like - where do my opinions come from, and why am I so attached to them?",
  "link":"/adults/questions-are-key",
  "linkText":"",
  "module-id":""},
  {"no":8,
  "heading":"Look without Language",
  "text":"Noticing comes before naming. We explore the art of looking simply, without language, and explore the many benefits of doing that. It offers a completely new way of ending stress, for example.",
  "link":"/adults/without-language",
  "linkText":"",
  "module-id":""},
  {"no":9,
  "heading":"Obstacles to Enquiry",
  "text":"By understanding the many obstacles on this journey of understanding ourselves, we can avoid them and get past them if we do encounter them.",
  "link":"/adults/obstacles-enquiry",
  "linkText":"",
  "module-id":""},
]

userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("text")
moduleId=localStorage.getItem("moduleId")
screenNumber=33008
startTime:any
endTime:any
totalTime:any



bookmark=0
toc="five-circles/s33001"
path=this.router.url


bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))



constructor(
  private router: Router,
  private service:AdultsService,
  private location:Location
) { }
ngOnInit() {
  //localStorage.removeItem("bookmarkList")
  this.createScreen()
  
  if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
else
  {this.userId=JSON.parse(localStorage.getItem("userId"))}
  this.startTime = Date.now();

  this.startTime = Date.now();
  console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark33008")))
  if(JSON.parse(sessionStorage.getItem("bookmark33008"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark33008"))==1)
    this.bookmark=1
  
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
    sessionStorage.setItem("bookmark33008",JSON.stringify(this.bookmark))
}

  submitProgress(){
    this.router.navigate(['/adults/five-circles/s33009'])
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
        //this.router.navigate(['/adults/conditioning/s3300834'])
      })
     
    

  }
  prev(){
    this.router.navigate(['/adults/five-circles/s33007'])

  }

}
