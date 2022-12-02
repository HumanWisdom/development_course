import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s51000',
  templateUrl: './s51000.page.html',
  styleUrls: ['./s51000.page.scss'],
})
export class S51000Page implements OnInit, OnDestroy {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "anger_w1"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId: any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber = "51000"
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  bookmarkList = []
  audiomeditation = []

  gamR = sessionStorage.getItem("gamR")
  tocImage = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/guided_audio_meditation_01.png"
  tocColor = "white"
  lastvisited = false;
  stories: any = []

  constructor(
    private router: Router,
    private service: AdultsService,
    private location: Location
  ) {
    this.getaudiomeditation()
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
    localStorage.setItem("moduleId", JSON.stringify(51))
    this.moduleId = localStorage.getItem("moduleId")
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()
  }

  getaudiomeditation() {
    this.service.GetAudioMeditation().subscribe((res) => {
      if (res) {
        this.audiomeditation = res;
      }
    })
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



  }

  routeJournal() {
    this.router.navigate(['/adults/journal'])
  }
  goBack() {
    this.location.back()
  }

  audiopage(audiofile, title) {
    let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink = mediaAudio + audiofile
    this.router.navigate(['/adults/curated/audiopage', audioLink, title])
  }

  audioevent(data) {
    this.router.navigate(['/adults/curated/audiopage', data['Text_URL'], data['Title']])
  }
}
