import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s33016',
  templateUrl: './s33016.page.html',
  styleUrls: ['./s33016.page.scss'],
})
export class S33016Page implements OnInit {
  title="Living with wisdom - 15 modules"
  content=[{"no":1,
  "heading":"Happiness",
  "text":"Wanting to be happy is the driver for what we do in the world, but often end up unhappy. We explore the many causes of unhappiness which arise in our thinking, and how with that understanding we can lead happier lives.",
  "link":"/adults/happiness",
  "linkText":"",
  "module-id":""},
  {"no":2,
  "heading":"Relationships",
  "text":"We explore why so many of our relationships are unhappy, despite our best intentions, and what we can do about it. Successful relationships contribute to our happiness and our success in the world.",
  "link":"/adults/relationships",
  "linkText":"",
  "module-id":""},
  {"no":3,
  "heading":"Addiction",
  "text":"We explore what makes our mind, which is otherwise so intelligent, develop its strong habits and addictions. Understanding this can help us avoid them, and more easily overcome them.",
  "link":"/adults/addiction",
  "linkText":"",
  "module-id":""},
  {"no":4,
  "heading":"Communication",
  "text":"The art of listening deeply, speaking with wisdom and understanding the meaning beyond the words being spoken, is one we can all learn, and it can help us in all our relationships, at home and work. We explore this in depth.",
  "link":"/adults/communication",
  "linkText":"",
  "module-id":""},
  {"no":5,
  "heading":"Opinions and Beliefs",
  "text":"We explore where our opinions and beliefs come from, why we get attached to them, how they can be a cause of conflict, their benefits, and how we can respond with wisdom. This can also help us understand others.",
  "link":"/adults/opinions-beliefs",
  "linkText":"",
  "module-id":""},
  {"no":6,
  "heading":"Self-esteem",
  "text":"We explore the nature of self-esteem, what leads to low self-esteem and low self-confidence, and how this understanding can help us become comfortable in our own skin.",
  "link":"/adults/self-esteem",
  "linkText":"",
  "module-id":""},
  {"no":7,
  "heading":"Stress",
  "text":"80% of people remport being stressed. We explore the origins of stress in our thinking, and how we can respond to the challenges of life with calm.",
  "link":"/adults/stress",
  "linkText":"",
  "module-id":""},
  {"no":8,
  "heading":"Love",
  "text":"Love is a core human need, and something all of us thirst for. We explore the many facets of love, including romantic love, what gets in the way of loving another, and how we can live with compassion for others, and with wisdom.",
  "link":"/adults/love",
  "linkText":"",
  "module-id":""},
  {"no":9,
  "heading":"Criticism",
  "text":"We explore why we find criticism so hard to take, what makes us critical of others, why we are often so self-critical, and how we can respond with wisdom. Regarding criticism as an opportunity for growth requires wisdom.",
  "link":"/adults/criticism",
  "linkText":"",
  "module-id":""},
  {"no":10,
  "heading":"Success & Failure",
  "text":"We explore why we want to be successful, what it means beyond money and fame, the risks of chasing it, how we can be successful and how we can meet failure with wisdom.",
  "link":"/adults/success-failure",
  "linkText":"",
  "module-id":""},
  {"no":11,
  "heading":"Live with Peace",
  "text":"Each one of us wants to live with a sense of peace, but this eludes many of us, no matter how successful we may be in the world. We explore the many reasons for this, and how this understanding can help us discover this peace within ourselves.",
  "link":"/adults/live-with-peace",
  "linkText":"",
  "module-id":""},
  {"no":12,
  "heading":"Money",
  "text":"We explore the many relationships we have with money - to meet our basic needs, for pleasure, as a status symbol, for security and how a deeper understanding of these factors allows us to live with wisdom, so it has its rightful place in our lives.",
  "link":"/adults/money",
  "linkText":"",
  "module-id":""},
  {"no":13,
  "heading":"Dealing with death",
  "text":"To be human is to experience the loss of loved ones. We explore the reasons behind the sorrow that follows bereavement and the many ways we can respond with wisdom.",
  "link":"/adults/dealing-with-death",
  "linkText":"",
  "module-id":""},
  {"no":14,
  "heading":"Food and health",
  "text":"Obesity rates are 42% in some countries. This can cause heart disease, diabetes and many other health problems. Eating disorders are equally challenging. We explore the many hidden forces in our thinking that govern our relationship with food, and how a deeper understanding of them can help us live healthy lives.",
  "link":"/adults/food-and-health",
  "linkText":"",
  "module-id":""},
  {"no":15,
  "heading":"Leadership",
  "text":"Enlightened leaders, who lead with wisdom, get the best out of their employees, create a great working culture, and contribute to the success of all organisations. We explore the many ways wisdom can help you do this, whatever your role may be.",
  "link":"/adults/leadership",
  "linkText":"",
  "module-id":""},

]

userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("text")
moduleId=localStorage.getItem("moduleId")
screenNumber=33016
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
  console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark33016")))
  if(JSON.parse(sessionStorage.getItem("bookmark33016"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark33016"))==1)
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
    sessionStorage.setItem("bookmark33016",JSON.stringify(this.bookmark))
}

  submitProgress(){
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
        //this.router.navigate(['/conditioning/s3301634'])
      })
      this.router.navigate(['/five-circles/s33017'])
    

  }
  prev(){
    this.router.navigate(['/five-circles/s33015'])

  }

}
