import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s35009',
  templateUrl: './s35009.page.html',
  styleUrls: ['./s35009.page.scss'],
})
export class S35009Page implements OnInit {
  title="Program Features "
  content=[{"no":1,
  "heading":"Online Journal",
  "text":"A record of your reflections as you go through the program, either within a module, or just a thought you had. We also prompt you with questions for the day e.g. What are you grateful for?",
  "link":"/adults/journal",
  "linkText":"",
  "module-id":""},
  /*
  {"no":2,
  "heading":"Wisdom Community (Coming)",  
  "text":"Connect with others on our online forum. Share your insights with others. Make new friends.",
  "link":"/adults/wisdom-community",
  "linkText":"",
  "module-id":""},
  */
  {"no":2,
  "heading":"Forum",  
  "text":"Connect with others on our online forum. Share your insights with others. Make new friends.",
  "link":"/forum",
  "linkText":"",
  "module-id":""},
  {"no":3,
  "heading":"Wisdom Survey",
  "text":"Keep track of your progress(wisdom score) as you do the program.",
  "link":"/adults/wisdom-survey",
  "linkText":"",
  "module-id":""},
  {"no":4,
  "heading":"Bookmarks",
  "text":"Bookmark individual slides and see them in your dashboard.",
  "link":"/adults/bookmarks",
  "linkText":"",
  "module-id":""},
  {"no":5,
  "heading":"Wisdom Coach (Coming)",
  "text":"Message or speak to our wisdom coaching team.",
  "link":"/adults/wisdom-coach",
  "linkText":"",
  "module-id":""},
  /*
  {"no":6,
  "heading":"Certificate",
  "text":"Get a certificate of completion of the Human Wisdom Program.",
  "link":"/adults/certificate",
  "linkText":"",
  "module-id":""},
  */
  {"no":6,
  "heading":"Wisdom Stories",
  "text":"Specially curated stories from around the world where wisdom was applied to address common life challenges. You can also contribute your own stories.",
  "link":"/adults/wisdom-stories",
  "linkText":"",
  "module-id":""},
  {"no":7,
  "heading":"Wisdom Points",
  "text":"As you go through the program you accumulate wisdom points which can be exchanged for features and services.",
  "link":"/adults/wisdom-points",
  "linkText":"",
  "module-id":""},
  {"no":8,
  "heading":"Share with friends",
  "text":"If you come across something that particularly resonates with you, you can share that with friends",
  "link":"/adults/share-with-friends",
  "linkText":"",
  "module-id":""},
  {"no":9,
  "heading":"Tree planting program",
  "text":"For every friend you refer, and who subscribes, we will plant a tree on your behalf",
  "link":"/adults/tree-planting-program",
  "linkText":"",
  "module-id":""},
  {"no":10,
  "heading":"Wisdom Cafe (Coming)",
  "text":"These are small moderated group discussions which we will curate where you can discuss a particular topic on the program",
  "link":"/adults/wisdom-cafe",
  "linkText":"",
  "module-id":""},
  {"no":11,
  "heading":"Podcasts",
  "text":"These are a mix of commentaries and conversations on popular subjects for you to explore.",
  "link":"/adults/framework-v1/podcast-toc",
  "linkText":"",
  "module-id":""},
  {"no":12,
  "heading":"Wisdom Shorts (Coming)",
  "text":"Short videos, 1 minute long, which explore 1 nugget of wisdom.",
  "link":"/adults/framework-v1/wisdom-shorts",
  "linkText":"",
  "module-id":""},

]

userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("text")
moduleId=localStorage.getItem("moduleId")
screenNumber=35009
startTime:any
endTime:any
totalTime:any



bookmark=0
toc="program-guide/s35001"
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
  console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark35009")))
  if(JSON.parse(sessionStorage.getItem("bookmark35009"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark35009"))==1)
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
    sessionStorage.setItem("bookmark35009",JSON.stringify(this.bookmark))
}


  submitProgress(){
    this.router.navigate(['/program-guide/s35011'])
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
        //this.router.navigate(['/adults/conditioning/s3500934'])
      })
     
    

  }
  prev(){
    this.router.navigate(['/program-guide/s35008'])

  }

}
