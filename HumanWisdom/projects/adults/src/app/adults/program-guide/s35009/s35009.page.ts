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
  
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w9"
  title="Program Features "
  content=[{"no":1,
  "heading":"Online Journal",
  "text":"A record of your reflections as you go through the program, either within a module, or just a thought you had. There are also guided questions on a topic, and a question of the day.",
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
  "link":"/wisdom-community",
  "linkText":"",
  "module-id":""},
  {"no":3,
  "heading":"Wisdom Survey",
  "text":"A series of 10 questions to Keep track of your progress (wisdom score) as you do the program.",
  "link":"/adults/wisdom-survey",
  "linkText":"",
  "module-id":""},
  {"no":4,
  "heading":"Bookmarks",
  "text":"Bookmark individual screens and see them in your dashboard.",
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
  "text":"Get a certificate of completion of the HumanWisdom Program.",
  "link":"/adults/certificate",
  "linkText":"",
  "module-id":""},
  */
  {"no":6,
  "heading":"Wisdom Stories",
  "text":"Specially curated stories from around the world where wisdom was applied to address common life challenges. Contribute your own stories.",
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
  "heading":"Podcasts",
  "text":"These are a mix of commentaries and conversations on popular subjects for you to explore.",
  "link":"/adults/podcast/podcast-toc",
  "linkText":"",
  "module-id":""},
  {"no":11,
  "heading":"Short videos",
  "text":"Short videos - which explore a nugget of wisdom.",
  "link":"/adults/wisdom-shorts",
  "linkText":"",
  "module-id":""},
  {"no":12,
  "heading":"Blog",
  "text":"Read and comment on our regular blog articles",
  "link":"/adults/blog",
  "linkText":"",
  "module-id":""},
  {"no":13,
  "heading":"Awareness exercises",
  "text":"A series of exercises to deepen your self-awareness and understanding of how your mind works, and live with wisdom",
  "link":"/adults/wisdom-exercise",
  "linkText":"",
  "module-id":""},
  {"no":14,
  "heading":"Global Events",
  "text":"Explore a library of global conversations on a wide variety of topics",
  "link":"/adults/events",
  "linkText":"",
  "module-id":""},
  {"no":15,
  "heading":"My Daily Practice",
  "text":"A daily practice to start your day with mindfulness and purpose",
  "link":"/adults/daily-practise",
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
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/program-guide/s35009p1'])
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
        //this.router.navigate(['/adults/conditioning/s3500934'])
      })
     
    

  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/program-guide/s35008'])

  }

}
