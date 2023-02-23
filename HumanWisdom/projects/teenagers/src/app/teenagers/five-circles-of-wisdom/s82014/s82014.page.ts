import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s82014',
  templateUrl: './s82014.page.html',
  styleUrls: ['./s82014.page.scss'],
})
export class S82014Page implements OnInit {
  
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w12"
  title="Understand emotions - 5 modules"

  content=[
    {
      "no":1,
      "heading":"Fear and anxiety",
      "text":"Fear is a natural human emotion that can impact our lives in some ways that are protective, and other ways that are harmful and can cause anxiety. We explore the nature of fear, how it can cause anxiety, and how we can respond with wisdom.",
      "link":"/fear-anxiety",
      "linkText":"",
      "module-id":""
    },
    {
      "no":2,
      "heading":"Pleasure",
      "text":"The need for pleasure, operates in the background and shapes our lives in many ways we are not aware of. It affects our relationships, shopping habits, our happiness, and can also lead to addiction. We explore its origins in our thinking and how we can respond with intelligence.",
      "link":"/pleasure",
      "linkText":"",
      "module-id":""
    },
    {
      "no":3,
      "heading":"Sorrow and loss",
      "text":"All of us will lose things we value and the sorrow that follows can be intense. We explore the origins of that feeling in us, the impact it has, how we can prepare for it, and how we can meet it with acceptance and intelligence.",
      "link":"/sorrow-loss",
      "linkText":"",
      "module-id":""
    },
    {
      "no":4,
      "heading":"Loneliness",
      "text":"We can be lonely when we are alone, or with others. It's linked to the depth of connection we have, with ourselves and others. We explore the origins of that feeling in us, how it impacts us, what we can do about it, and how we can make our peace with being alone.",
      "link":"/loneliness",
      "linkText":"",
      "module-id":""
    },
    {
      "no":5,
      "heading":"Anger",
      "text":"Anger can protect us from harm, but can also be harmful, to ourselves and others. We explore its origins, how it impacts our lives, and how we can respond with intelligence, so it has its rightful place in our lives.",
      "link":"/anger",
      "linkText":"",
      "module-id":""
    },  
  ]

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=82014
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
      
      if(JSON.parse(sessionStorage.getItem("bookmark82014"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark82014"))==1)
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
      sessionStorage.setItem("bookmark82014",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/five-circles-of-wisdom/s82015'])
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
        //this.router.navigate(['/conditioning/s8201434'])
      })
  }

  prev()
  {
    this.router.navigate(['/five-circles-of-wisdom/s82013'])
  }
}