import { Component, OnInit } from '@angular/core';
import {TeenagersService} from "../../teenagers.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s78009',
  templateUrl: './s78009.page.html',
  styleUrls: ['./s78009.page.scss'],
})
export class S78009Page implements OnInit {
  
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w9"
  title="Program Features "
  content=[
  {"no":1,
  "heading":"Journal",
  "text":"A record of your reflections as you go through the program, either within a module, or just a thought you had. There are also guided questions on a topic, and a question of the day.",
  "link":"/teenagers/journal",
  "linkText":"",
  "module-id":""},
  {"no":2,
  "heading":"Wisdom Survey",
  "text":"Keep track of your progress(wisdom score) as you do the program.",
  "link":"/teenagers/wisdom-survey",
  "linkText":"",
  "module-id":""},
  {"no":3,
  "heading":"Bookmarks",
  "text":"Bookmark individual slides and see them in your dashboard.",
  "link":"/teenagers/bookmarks",
  "linkText":"",
  "module-id":""},
  {"no":4,
  "heading":"Certificate",
  "text":"Get a certificate of completion of each module - you can share this with friends.",
  "link":"/teenagers/certificate",
  "linkText":"",
  "module-id":""},
  {"no":5,
  "heading":"Wisdom Stories",
  "text":"Specially curated stories from around the world where wisdom was applied to address common life challenges. Contribute your own stories.",
  "link":"/teenagers/wisdom-stories",
  "linkText":"",
  "module-id":""},
  {"no":6,
  "heading":"Wisdom Points",
  "text":"As you go through the program you accumulate wisdom points which can be exchanged for features and services.",
  "link":"/teenagers/wisdom-points",
  "linkText":"",
  "module-id":""},
  {"no":7,
  "heading":"Share with friends",
  "text":"If you come across something that particularly resonates with you, you can share that with friends",
  "link":"/teenagers/share-with-friends",
  "linkText":"",
  "module-id":""},
  {"no":8,
  "heading":"Podcasts",
  "text":"We record podcasts you may enjoy listening to - and you can do this through the app",
  "link":"/teenagers/podcast/podcast-toc",
  "linkText":"",
  "module-id":""},
  {"no":9,
  "heading":"Wisdom Shorts",
  "text":"These are short videos - each with a nugget of wisdom",
  "link":"/teenagers/wisdom-shorts",
  "linkText":"",
  "module-id":""},
  {"no":10,
  "heading":"Blog",
  "text":"Longer articles on relevant subjects for you to read and comment on",
  "link":"/teenagers/blog",
  "linkText":"",
  "module-id":""},
]

userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("text")
moduleId=localStorage.getItem("moduleId")
screenNumber=78009
startTime:any
endTime:any
totalTime:any



bookmark=0
toc="start-here/s78001"
path=this.router.url


bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))



constructor(
  private router: Router,
  private service:TeenagersService,
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
  
  if(JSON.parse(sessionStorage.getItem("bookmark78009"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark78009"))==1)
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
    sessionStorage.setItem("bookmark78009",JSON.stringify(this.bookmark))
}


  submitProgress(){
    this.router.navigate(['/teenagers/start-here/s78009p1'])
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
        //this.router.navigate(['/teenagers/conditioning/s7800934'])
      })
     
    

  }
  prev(){
    this.router.navigate(['/teenagers/start-here/s78008'])

  }

}
