import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";
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
  audiomeditation = []

  gamR = sessionStorage.getItem("gamR")
  tocImage = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/guided_audio_meditation_01.png"
  tocColor = "white"
  lastvisited = false;
  stories: any = []

  baseUrl:string;
  path=this.router.url

  constructor(
    private router: Router,
    private service: AdultsService,
    private location: Location,
    private meta: Meta, private title: Title, private ngNavigatorShareService: NgNavigatorShareService,
  ) {
    this.service.setmoduleID(51);
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

    this.title.setTitle('Relaxation Meditations for Sleep and Calmness')
    this.meta.updateTag({ property: 'title', content: 'Relaxation Meditations for Sleep and Calmness' })
    this.meta.updateTag({ property: 'description', content: 'Enhance your sleep and find inner peace with our relaxation meditation sessions. Guided audio meditations for a calm mind and body.' })
    this.meta.updateTag({ property: 'keywords', content: 'Audio Meditation,Guided Meditation,Mindfulness Meditation,Relaxation Meditation,Stress Relief Meditation,Sleep Meditation,Calmness Meditation,Peaceful Meditation,Focus Meditation' })




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

  audiopage(audiofile, title, RowID) {
    let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink = mediaAudio + audiofile
    this.router.navigate(['/adults/curated/audiopage', audioLink, title, RowID])
  }

  audioevent(data) {
    let sub: any = localStorage.getItem("Subscriber")
    if (sub == 0 && data['RowID'] >= 4) {
      this.router.navigate(['/onboarding/free-limit']);
    } else {
      // this.router.navigate(['/adults/curated/audiopage', data['Text_URL'], data['Title'], data['RowID']])
      this.router.navigate(['adults/guided-meditation/audiopage/', data['Text_URL'], data['Title'], data['RowID']])
    }
  }

  share(){
    this.shareUrl(SharedService.ProgramId);
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.baseUrl+this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  shareUrl (programType) {
    switch (programType) {
      case ProgramType.Adults:
        this.baseUrl=SharedService.AdultsBaseUrl;
      break;
      case ProgramType.Teenagers:
        this.baseUrl=SharedService.TeenagerBaseUrl;
       break;
      default:
      this.baseUrl=SharedService.TeenagerBaseUrl;
    }
  }
}
