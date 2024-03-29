import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136084',
  templateUrl: './s136084.page.html',
  styleUrls: ['./s136084.page.scss'],
})
export class S136084Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "criticism_w1"
  title = "Step #3 Where did the idea of who you should be come from?"
  mediaAudio = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink = this.mediaAudio + '/Criticism/audios/criticism+4.5.mp3'

  toc = "teenagers/criticism/s136001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("audio")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 136084
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration: any
  transcriptPage = "/criticism/s136084t"

  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))
  progName = "teenagers"
  
  constructor(
    private router: Router,
    private service: TeenagersService,
    private location: Location
  ) { }
  ngOnInit() {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();

    if (JSON.parse(sessionStorage.getItem("bookmark136084")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark136084")) == 1)
      this.bookmark = 1

  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark136084", JSON.stringify(this.bookmark))
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

    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/teenagers/criticism/s136085'])
    this.service.submitProgressAv({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "avDuration": this.avDuration
    }).subscribe(res => {

      this.bookmarkList = res.GetBkMrkScr.map(a => parseInt(a.ScrNo))
      localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarkList))
    })




  }
  prev() {
    this.router.navigate(['/teenagers/criticism/s136083'])


  }
  ngOnDestroy() {
    localStorage.setItem("totalTime136084", this.totalTime)
    localStorage.setItem("avDuration136084", this.avDuration)

  }

  receiveAvDuration(e) {
    console.log(e)
    this.avDuration = e
  }

}
