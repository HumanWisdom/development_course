import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s82006',
  templateUrl: './s82006.page.html',
  styleUrls: ['./s82006.page.scss'],
})
export class S82006Page implements OnInit {
  
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w9"
  title="Nurture a quiet mind - 5 modules"

  content=[
    {
      "no":1,
      "heading":"Nature",
      "text":"We have a series of 11 meditations in nature which can inspire your own journeys and help your mind quieten, and help you connect to nature in a new way. This brings many other benefits, including stress reduction.",
      "link":"/nature",
      "linkText":"",
      "module-id":""
    },
    {
      "no":2,
      "heading":"Breathing",
      "text":"We have many different breathing exercises you can practise on your own. These can be done anywhere and are excellent at helping your mind quieten, as well as giving you that little bit of space in a stressful situation for your intelligence to respond.  ",
      "link":"/breathing",
      "linkText":"",
      "module-id":""
    },
    { 
      "no":3,
      "heading":"Noticing Thoughts",
      "text":"In this exercise we write down every thought that arises in our thinking for 5-10 minutes. As we do so, the mind goes quiet.",
      "link":"/noticing-thoughts",
      "linkText":"",
      "module-id":""
    },
    {
      "no":4,
      "heading":"Meditation",
      "text":"We will explore how silence comes to us, not as a result of wanting to be silent, but just by noticing every thought and feeling as it rises. This is a simple exercise, with a profound impact.",
      "link":"/meditation",
      "linkText":"",
      "module-id":""
    },
    {
      "no":5,
      "heading":"Listening",
      "text":"In this module we offer you some guided listening meditations you can practise anywhere.  ",
      "link":"/guided-meditation",
      "linkText":"",
      "module-id":""
    },
  ]

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=82006
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
      
      if(JSON.parse(sessionStorage.getItem("bookmark82006"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark82006"))==1)
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
      sessionStorage.setItem("bookmark82006",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/five-circles-of-wisdom/s82007'])
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
        //this.router.navigate(['/conditioning/s8200634'])
      })
  }

  prev()
  {
    this.router.navigate(['/five-circles-of-wisdom/s82005'])
  }
}