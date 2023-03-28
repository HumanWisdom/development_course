import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s30002t',
  templateUrl: './s30002t.page.html',
  styleUrls: ['./s30002t.page.scss'],
})
export class S30002tPage implements OnInit {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w1"

  bookmark = 0
  path = this.router.url
  audioPage = "/noticing-thoughts/s30002"
  toc = ""

  screenType = localStorage.getItem("audio")
  userId: any
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 30002
  startTime: any
  endTime: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))




  avDuration = localStorage.getItem("avDuration30002")
  totalTime = localStorage.getItem("totalTime30002")
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(private router: Router,
    private service: AdultsService,
  ) { }


  ngOnInit() {
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }

    if (JSON.parse(sessionStorage.getItem("bookmark30002")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark30002")) == 1)
      this.bookmark = 1

    var container = document.getElementById('not02t');

    container.addEventListener("touchstart", startTouch.bind(this), false);
    container.addEventListener("touchmove", moveTouch.bind(this), false);

    var initialX = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
    };

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      var currentX = e.touches[0].clientX;

      var diffX = initialX - currentX;

      if (diffX > 0) {
        this.submitProgress();
      } else {
        this.prev()
      }

      initialX = null;

      e.preventDefault();
    };


  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark30002", JSON.stringify(this.bookmark))
  }
  submitProgress() {
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/noticing-thoughts/s30003'])
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
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/noticing-thoughts/s30001'])
  }

}
