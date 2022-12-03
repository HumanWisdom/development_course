import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'HumanWisdom-s76001',
  templateUrl: './s76001.page.html',
  styleUrls: ['./s76001.page.scss'],
})
export class S76001Page implements OnInit, OnDestroy {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w1"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId: any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber = "76001"
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  bookmarkList = []
  bullyingResume = sessionStorage.getItem("bullyingResume")

  tocImage = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/bullying.png"
  tocColor = "white"
  lastvisited = false;
  stories: any = []

  constructor(
    private router: Router,
    private service: AdultsService,
    private location: Location
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
    localStorage.setItem("moduleId", JSON.stringify(76))
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
    this.router.navigate(['/adults/journal'])
  }
  goBack() {
    this.location.back()
  }

}