import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teen-talk',
  templateUrl: './teen-talk.page.html',
  styleUrls: ['./teen-talk.page.scss'],
})
export class TeenTalkPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  teentalkS3(id, title) {
    this.router.navigate([`/videopage/teenagers-teen_talk-videos-${id}.mp4`, 'F', title])
  }

}
