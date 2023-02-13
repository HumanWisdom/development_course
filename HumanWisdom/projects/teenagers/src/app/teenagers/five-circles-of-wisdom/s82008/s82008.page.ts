import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from "../../teenagers.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s82008',
  templateUrl: './s82008.page.html',
  styleUrls: ['./s82008.page.scss'],
})
export class S82008Page implements OnInit {
  
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w6"
  title="Art of Enquiry - 9 modules"

  content=[
    {
      "no":1,
      "heading":"Why bother?",
      "text":"Do we just want to treat the symptoms or the root cause of the problems we face, like stress? If a car breaks down we study what's wrong with the engine. We explore why it's important to explore the origins of our problems in our thinking.",
      "link":"/teenagers/benefits-of-enquiry",
      "linkText":"",
      "module-id":""
    },
    {
      "no":2,
      "heading":"How do we begin?",
      "text":"We know how to look at the world, but not ourselves, because we have never been taught how to do so. How we look at ourselves is key to the discoveries we will make. We explore simple ways to begin this journey of enquiry.",
      "link":"/teenagers/how-to-begin",
      "linkText":"",
      "module-id":""
    },
    {
      "no":3,
      "heading":"Three steps to Enquiry",
      "text":"To simplify the process of looking at yourself, we introduce you to 3 simple steps you can use to examine any thought or feeling that arises. This opens the door to a deeper understanding, and wisdom.",
      "link":"/teenagers/three-steps-enquiry",
      "linkText":"",
      "module-id":""
    },
    {
      "no":4,
      "heading":"Insight",
      "text":"Insight or the art of seeing clearly, is the penetrative understanding that brings transformation. It's the ‘aha!’ moment of clarity and we explore how you can discover that for yourself.",
      "link":"/teenagers/insight",
      "linkText":"",
      "module-id":""
    },
    {
      "no":5,
      "heading":"Awareness",
      "text":"Awareness is the ability to be sensitive, to notice what is going on in our thinking. We are going to show you how to go deeper to explore the hidden patterns of thinking that shape your thoughts and actions.",
      "link":"/teenagers/awareness",
      "linkText":"",
      "module-id":""
    },
    {
      "no":6,
      "heading":"No Judgement",
      "text":"Our mind is used to labeling what it sees as right or wrong, good or bad. We will explore why we need to pause this process, to look at ourselves clearly, and how to do this.",
      "link":"/teenagers/no-judgement",
      "linkText":"",
      "module-id":""
    },
    {
      "no":7,
      "heading":"Questions are Key",
      "text":"To explore the deeper layers of our thinking, and the hidden patterns that shape our thinking and behaviour, asking the right questions is so important. Questions like - where do my opinions come from, and why am I so attached to them?",
      "link":"/teenagers/questions-are-key",
      "linkText":"",
      "module-id":""
    },
    {
      "no":8,
      "heading":"Look without Language",
      "text":"Noticing comes before naming. We explore the art of looking simply, without language, and explore the many benefits of doing that. It offers a completely new way of ending stress, for example.",
      "link":"/teenagers/without-language",
      "linkText":"",
      "module-id":""
    },
    {
      "no":9,
      "heading":"Obstacles to Enquiry",
      "text":"By understanding the many obstacles on this journey of understanding ourselves, we can avoid them and get past them if we do encounter them.",
      "link":"/teenagers/obstacles-enquiry",
      "linkText":"",
      "module-id":""
    },
  ]

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=82008
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="five-circles-of-wisdom/s82001"
  path=this.router.url
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  {}

  ngOnInit() 
  {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}

      this.startTime = Date.now();
      this.startTime = Date.now();
      
      if(JSON.parse(sessionStorage.getItem("bookmark82008"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark82008"))==1)
        this.bookmark=1
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

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
      sessionStorage.setItem("bookmark82008",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/five-circles-of-wisdom/s82009'])
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
        //this.router.navigate(['/teenagers/conditioning/s8200834'])
      })
  }

  prev()
  {
    this.router.navigate(['/teenagers/five-circles-of-wisdom/s82007'])
  }
}