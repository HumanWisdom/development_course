import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ProgramType } from '../../../../../../shared/models/program-model';

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

  gamR = sessionStorage.getItem("pgResume")
  tocImage = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp"
  tocColor = "white"
  lastvisited = false;
  stories: any = []
  baseUrl: string;
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  mediaUrl: any;
  isLoggedIn = false;
  isSubscriber = false;


  constructor(
    private router: Router,
    private service: AdultsService,
    private location: Location,
    private ngNavigatorShareService: NgNavigatorShareService,
  ) {

    this.service.setmoduleID(51);

    let userid = localStorage.getItem('isloggedin');

    if (userid === 'T') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    let sub: any = localStorage.getItem('Subscriber');

    if (sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }

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

    this.mediaUrl = {
      bodyscanAudioContent: {
        url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.1.mp3',
        title: 'Body Scan'
      },
      notificingthoughtsAudioContent: {
        url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.2.mp3',
        title: 'Noticing Thoughts'
      }
    }
  }

  ngOnInit() {

    if(!localStorage.getItem("NaviagtedFrom"))
    localStorage.setItem("NaviagtedFrom", '/adults/pathway/develop-a-calm-mind');

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

 /*  goBack() {
    this.location.back()
  } */

  audiopage(audiofile, title) {
    let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink = mediaAudio + audiofile
    this.router.navigate(['/adults/curated/audiopage', audioLink, title])
  }

  share() {
    this.shareUrl(SharedService.ProgramId);
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.baseUrl + this.path
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });
  }

  shareUrl(programType) {
    switch (programType) {
      case ProgramType.Adults:
        this.baseUrl = SharedService.AdultsBaseUrl;
        break;
      case ProgramType.Teenagers:
        this.baseUrl = SharedService.TeenagerBaseUrl;
        break;
      default:
        this.baseUrl = SharedService.TeenagerBaseUrl;
    }
  }

  audioevent(audioContent) {
    this.router.navigate(['adults/guided-meditation/audiopage/', audioContent.url,audioContent.title, Math.random()])
  }

  routeGuided(url, active = false) {
    if(active || this.isLoggedIn) {
      this.router.navigate([url])
    }else {
      this.router.navigate(['/subscription/start-your-free-trial'])
    }
  }

  
  Resume(url)
  {  
    this.router.navigate([url+sessionStorage.getItem("pgResume")])
  }



}
