import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136056',
  templateUrl: './s136056.page.html',
  styleUrls: ['./s136056.page.scss'],
})
export class S136056Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "criticism_w11"
  title = "Step #1  Don’t react to the hurt you feel"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink = this.mediaAudio + '/Criticism/audios/criticism+3.2.mp3'

  toc = "/criticism/s136001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("audio")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 136056
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration: any
  transcriptPage = "/criticism/s136056t"

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

    if (JSON.parse(sessionStorage.getItem("bookmark136056")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark136056")) == 1)
      this.bookmark = 1





  }
  receiveAvDuration(e) {
    this.avDuration = e

  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark136056", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/criticism/s136057'])
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
    this.router.navigate(['/criticism/s136055'])

  }
  ngOnDestroy() {
    localStorage.setItem("totalTime435", this.totalTime)
    localStorage.setItem("avDuration435", this.avDuration)

  }

}
