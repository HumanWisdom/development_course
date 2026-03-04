import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s39000',
  templateUrl: './s39000.page.html',
  styleUrls: ['./s39000.page.scss'],
})
export class S39000Page implements OnInit,OnDestroy {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="anger_w1"  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId:any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber="39000"
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  bookmarkList=[]
  pgResume: any;
  tocImage="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/39.webp"
  tocColor="white"
  lastvisited = false;
  stories: any = []
  isLoggedIn = false;
  isSubscriber = false;


  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  )
  { 
    this.service.setmoduleID(39);
   
    // this.stories = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
    // this.stories = JSON.parse(this.stories)
  }

  ngOnInit() {
    setTimeout(() => {
      let story = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
      story = JSON.parse(story)
      let splitarr = []
      let arraythree = []
      if(story?.length <= 2) 
      {
        story.forEach((e) => 
        {
          arraythree.push(e)
        })
        splitarr.push(arraythree)
      }
      else
      {
        story?.forEach((e) => 
        {
          if(arraythree.length < 2) 
          {
            arraythree.push(e)
          }
          else 
          {
            splitarr.push(arraythree)
            arraythree = []
            arraythree.push(e)
          }
        })
      }
      this.stories = splitarr
    }, 2000)
    if (localStorage.getItem("isloggedin") && localStorage.getItem("isloggedin") === 'T') {
      this.isLoggedIn = true;
    }
    if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
      this.isSubscriber = true;
    }
    
    if(!localStorage.getItem("NaviagtedFrom"))  
    localStorage.setItem("NaviagtedFrom", '/adults/pathway/understand-yourself');

    if (this.saveUsername == false) {
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
    }
    else {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }

    this.service.clickModule(39, this.userId).subscribe(res => {
      this.pgResume = (res.lastVisitedScreen != "") ? "s" + res.lastVisitedScreen : "";
      this.lastvisited = res.lastVisitedScreen != "" ? true : false;
    })

    localStorage.setItem("moduleId", JSON.stringify(39))
    this.moduleId = localStorage.getItem("moduleId")
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    this.createScreen()


    
  }
  toggleBookmark(){
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0

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
        
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      })
    

  }
  ngOnDestroy(){
    



  }

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
  goBack(){
    this.location.back()
  }

  Resume(url) {
    this.router.navigate([url + this.pgResume])
  }


}
