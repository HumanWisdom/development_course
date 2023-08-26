import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';


@Component({
  selector: 'app-s136046t',
  templateUrl: './s136046t.page.html',
  styleUrls: ['./s136046t.page.scss'],
})
export class S136046tPage implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "criticism_w2"

  bookmark = 0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage = "/criticism/s136046"
  toc = "/criticism/s136001"

  screenType = localStorage.getItem("audio")
  userId: any
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 136046
  startTime: any
  endTime: any

  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))

  avDuration = localStorage.getItem("avDuration136046")
  totalTime = localStorage.getItem("totalTime136046")
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }


  ngOnInit() {
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }

    if (JSON.parse(sessionStorage.getItem("bookmark136046")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark136046")) == 1)
      this.bookmark = 1


  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark136046", JSON.stringify(this.bookmark))
  }
  submitProgress() {
    this.router.navigate(['/criticism/s136047'])
    this.service.submitProgressAv({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "avDuration": this.avDuration
    }).subscribe(res => {

    })


  }
  prev() {
    this.router.navigate(['/criticism/s136045'])
  }


}

