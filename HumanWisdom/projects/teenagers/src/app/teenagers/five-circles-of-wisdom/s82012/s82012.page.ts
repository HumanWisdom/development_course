import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s82012',
  templateUrl: './s82012.page.html',
  styleUrls: ['./s82012.page.scss'],
})
export class S82012Page implements OnInit {
  
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w10"
  title="How the mind works? - 9 modules"

  content=[
    {
      "no":1,
      "heading":"Conditioning",
      "text":"We are all conditioned by our experiences, the media, and our culture without realising it. This conditioning influences our life in many ways we are not aware of. We explore how by understanding conditioning deeply, we can walk our own road in life and live with wisdom.",
      "link":"/conditioning",
      "linkText":"",
      "module-id":""
    },
    {
      "no":2,
      "heading":"Comparison and Envy",
      "text":"Our mind unconsciously compares all the time. In some ways this is essential, but can also cause problems including envy, low self-esteem, anger, and imitation. Understanding this process leads to right action.",
      "link":"/comparison",
      "linkText":"",
      "module-id":""
    },
    {
      "no":3,
      "heading":"Reactive Mind",
      "text":"The human mind is reactive, and that is one reason we jump to conclusions. We will explore why, the impact on our life, and how we can slow our reactions down so we can respond with our intelligence.",
      "link":"/reactive-minds",
      "linkText":"",
      "module-id":""
    },
    {
      "no":4,
      "heading":"Self-images",
      "text":"We all develop unconscious images, or opinions of ourselves and others. We explore how this happens, the impact on our life, and how we can respond with wisdom.",
      "link":"/self-image",
      "linkText":"",
      "module-id":""
    },
    {
      "no":5,
      "heading":"Self Interest",
      "text":"The human mind operates from self-interest. This is not right or wrong and we are usually not aware of this. We will explore the many ways this impacts our life and how this understanding awakens wisdom and allows us to live with integrity.",
      "link":"/self-interest",
      "linkText":"",
      "module-id":""
    },
    {
      "no":6,
      "heading":"Identity",
      "text":"We unconsciously and automatically identify with our countries, our religion, our language, our possessions, and our opinions and beliefs, and get attached to them. We explore the nature of identity, its benefits, the problems it can cause, and how to respond with wisdom",
      "link":"/identity",
      "linkText":"",
      "module-id":""
    },
    {
      "no":7,
      "heading":"Emotional Needs",
      "text":"We have many emotional needs, like a need to feel secure, and be understood, that we may not be aware of. We explore where they come from, and how they impact our relationships and direct the course of our lives.",
      "link":"/emotioanal-needs",
      "linkText":"",
      "module-id":""
    },
    {
      "no":8,
      "heading":"Inner Boredom",
      "text":"Hidden from our awareness, at the heart of our thinking, is an inner emptiness or feeling of inner boredom. We notice it when we are lonely, or when a pleasure ends. We explore the many ways this shapes our life and how a deeper understanding of this can lead to peace.",
      "link":"/inner-boredom",
      "linkText":"",
      "module-id":""
    },
    {
      "no":9,
      "heading":"The Nature of the ‘I’",
      "text":"Just like water has certain common properties, the ‘I’, which is at the heart of being human has too. We explore how the ‘I’ comes into being, the many ways it operates in the background, and how it shapes our life. This understanding brings wisdom and helps us deal with life and people in fresh ways.",
      "link":"/nature-of-i",
      "linkText":"",
      "module-id":""
    },
  ]

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=82012
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
      
      if(JSON.parse(sessionStorage.getItem("bookmark82012"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark82012"))==1)
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
      sessionStorage.setItem("bookmark82012",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/five-circles-of-wisdom/s82013'])
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
        //this.router.navigate(['/conditioning/s8201234'])
      })
  }

  prev()
  {
    this.router.navigate(['/five-circles-of-wisdom/s82011'])
  }
}