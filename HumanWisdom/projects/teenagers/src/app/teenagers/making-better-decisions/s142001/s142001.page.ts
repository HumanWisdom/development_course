import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramModel } from '../../../../../../shared/models/program-model';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s142001',
  templateUrl: './s142001.page.html',
  styleUrls: ['./s142001.page.scss'],
})
export class S142001Page implements OnInit, OnDestroy {

  bg_tn = "bg_light_blue"
  bg_cft = "bg_light_blue"
  bg = "light_blue_w1"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId: any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber = "142001"
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  bookmarkList = []

  path=this.router.url
  token="1234"
  shareUrl=this.path+"?t="+this.token
  localFreeScreens =localStorage.getItem("freeScreens");
  freeScreens= this.localFreeScreens != "undefined"? JSON.parse(localStorage.getItem("freeScreens")):"";
  socialShare=false
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  t:any


  pgResume = sessionStorage.getItem("pgResume")

  tocImage = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/77.png"
  tocColor = "white"
  lastvisited = false;
  stories: any = []

  moduleData:ProgramModel;

  constructor(
    private router: Router,
    private service: TeenagersService,
    private location: Location,
    private url: ActivatedRoute
  )
  /*
  { 
      let story = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
      story = JSON.parse(story)
      let splitarr = []
      let arraythree = []
      story.forEach((e) => {
        if(arraythree.length < 2) {
          arraythree.push(e)
        }else {
        splitarr.push(arraythree)
        arraythree = []
        arraythree.push(e)
        }
      })
      this.stories = splitarr
    }
  */ {
    this.service.setmoduleID(142);
    this.getSetModuleData(142);
    this.url.queryParams.subscribe(params => {
      this.t = params['t'];
    })
    let story = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
    story = JSON.parse(story)
    let splitarr = []
    let arraythree = []
    if (story?.length <= 2) {
      story.forEach((e) => {
        arraythree.push(e)
      })
      splitarr.push(arraythree)
    }
    else {
      story?.forEach((e) => {
        if (arraythree.length < 2) {
          arraythree.push(e)
        }
        else {
          splitarr.push(arraythree)
          arraythree = []
          arraythree.push(e)
        }
      })
    }
    this.stories = splitarr
    // this.stories = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
    // this.stories = JSON.parse(this.stories)
  }

  ngOnInit() {
    // continue where you left    
    let last = localStorage.getItem('lastvisited');
    if (last === 'T') {
      this.lastvisited = true;
    }
    else {
      this.lastvisited = false;
    }
    // /continue where you left
    localStorage.setItem("moduleId", JSON.stringify(142))
    this.moduleId = localStorage.getItem("moduleId")
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()



  }
  toggleBookmark() {
    if (this.bookmark == 0)
      this.bookmark = 1
    else
      this.bookmark = 0

  }
  createScreen() {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {

    })


  }


  submitProgress() {
    this.service.submitProgressText({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime
    }).subscribe(res => {

      this.bookmarkList = res.GetBkMrkScr.map(a => parseInt(a.ScrNo))
      localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarkList))
    })


  }
  ngOnDestroy() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    //
    if (this.userId !== 563) this.submitProgress()



  }

  routeJournal() {
    this.router.navigate(['/teenagers/journal'])
  }
  goBack() {
    this.location.back()
  }

  getSetModuleData(moduleId){
    this.service.setmoduleID(moduleId);
    this.service.getModulebyId(moduleId).subscribe(res=>{
      this.moduleData=res;
      this.pgResume= (res[0].lastScreen !="")? "s"+ res[0].lastScreen:"";
      console.log(res[0].lastScreen)
     });
  }

}