import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s33012',
  templateUrl: './s33012.page.html',
  styleUrls: ['./s33012.page.scss'],
})
export class S33012Page implements OnInit {
  title="How the mind works? - 9 modules"
  content=[{"no":1,
  "heading":"Conditioning",
  "text":"We are all conditioned by our experiences, the media, and our culture without realising it. This conditioning influences our life in many ways we are not aware of. We explore how by understanding conditioning deeply, we can walk our own road in life and live with wisdom.",
  "link":"/adults/conditioning",
  "linkText":"",
  "module-id":""},
  {"no":2,
  "heading":"Comparison and Envy",
  "text":"Our mind unconsciously compares all the time. In some ways this is essential, but can also cause problems including envy, low self-esteem, anger, and imitation. Understanding this process leads to right action.",
  "link":"/adults/comparison",
  "linkText":"",
  "module-id":""},
  {"no":3,
  "heading":"Reactive Mind",
  "text":"The human mind is reactive, and that is one reason we jump to conclusions. We will explore why, the impact on our life, and how we can slow our reactions down so we can respond with our intelligence.",
  "link":"/adults/reactive-minds",
  "linkText":"",
  "module-id":""},
  {"no":4,
  "heading":"Self-images",
  "text":"We all develop unconscious images, or opinions of ourselves and others. We explore how this happens, the impact on our life, and how we can respond with wisdom.",
  "link":"/adults/self-image",
  "linkText":"",
  "module-id":""},
  {"no":5,
  "heading":"Self Interest",
  "text":"The human mind operates from self-interest. This is not right or wrong and we are usually not aware of this. We will explore the many ways this impacts our life and how this understanding awakens wisdom and allows us to live with integrity.",
  "link":"/adults/self-interest",
  "linkText":"",
  "module-id":""},
  {"no":6,
  "heading":"Identity",
  "text":"We unconsciously and automatically identify with our countries, our religion, our language, our possessions, and our opinions and beliefs, and get attached to them. We explore the nature of identity, its benefits, the problems it can cause, and how to respond with wisdom",
  "link":"/adults/identity",
  "linkText":"",
  "module-id":""},
  {"no":7,
  "heading":"Emotional Needs",
  "text":"We have many emotional needs, like a need to feel secure, and be understood, that we may not be aware of. We explore where they come from, and how they impact our relationships and direct the course of our lives.",
  "link":"/adults/emotioanal-needs",
  "linkText":"",
  "module-id":""},
  {"no":8,
  "heading":"Inner Boredom",
  "text":"Hidden from our awareness, at the heart of our thinking, is an inner emptiness or feeling of inner boredom. We notice it when we are lonely, or when a pleasure ends. We explore the many ways this shapes our life and how a deeper understanding of this can lead to peace.",
  "link":"/adults/inner-boredom",
  "linkText":"",
  "module-id":""},
  {"no":9,
  "heading":"The Nature of the ‘I’",
  "text":"Just like water has certain common properties, the ‘I’, which is at the heart of being human has too. We explore how the ‘I’ comes into being, the many ways it operates in the background, and how it shapes our life. This understanding brings wisdom and helps us deal with life and people in fresh ways.",
  "link":"/adults/nature-of-i",
  "linkText":"",
  "module-id":""},

]

userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("text")
moduleId=localStorage.getItem("moduleId")
screenNumber=33012
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
  console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark33012")))
  if(JSON.parse(sessionStorage.getItem("bookmark33012"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark33012"))==1)
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
      console.log(res)
    })
  

}

receiveBookmark(e)
{
  console.log(e)
 if(e==true)
  this.bookmark=1
  else
    this.bookmark=0
    sessionStorage.setItem("bookmark33012",JSON.stringify(this.bookmark))
}

  submitProgress(){
    this.router.navigate(['/adults/five-circles/s33013'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        console.log(res)
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      },
      error=>{console.log(error)},
      ()=>{
        //this.router.navigate(['/adults/conditioning/s3301234'])
      })
     
    

  }
  prev(){
    this.router.navigate(['/adults/five-circles/s33011'])

  }

}
