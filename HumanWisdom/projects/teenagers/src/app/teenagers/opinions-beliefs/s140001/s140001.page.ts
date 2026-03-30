import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';
import { ProgramModel } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s140001',
  templateUrl: './s140001.page.html',
  styleUrls: ['./s140001.page.scss'],
})
export class S140001Page implements OnInit,OnDestroy {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="anger_w1"  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId:any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber="140001"
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  isContentsOpen = false;

  bookmarkList=[]
  pgResume: any;
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/140.webp"
  tocColor="white"
  lastvisited = false;
  stories: any = []
  isLoggedIn = false;
  isSubscriber = false;
  t:any
  moduleData:ProgramModel;

  constructor(
    private router: Router,
    private service:TeenagersService,
    private location:Location,
    private url: ActivatedRoute
  )
  { 
   
    this.url.queryParams.subscribe(params => {
      this.t = params['t'];
    })
    
  }

  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.service.setmoduleID(140);
    this.service.clickModule(140,this.userId).subscribe(res=>
      {
        this.pgResume= (res.lastVisitedScreen !="")? "s"+ res.lastVisitedScreen:"";
        this.lastvisited = res.lastVisitedScreen !=""? true:false;
      })
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
      splitarr.push(arraythree)

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
    localStorage.setItem("NaviagtedFrom", '/teenagers/pathway/live-your-best-life');

    localStorage.setItem("moduleId",JSON.stringify(140))
    this.moduleId=localStorage.getItem("moduleId")
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    this.createScreen()


    
  }
  toggleContents() {
    this.isContentsOpen = !this.isContentsOpen;
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
    this.router.navigate(['/journal'])
  }
  goBack(){
    this.location.back()
  }

  Resume(url)
  {
    this.router.navigate([url+this.pgResume])
  }

}
