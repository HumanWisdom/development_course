import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../teenagers.service';

@Component({
  selector: 'app-teen-talk',
  templateUrl: './teen-talk.page.html',
  styleUrls: ['./teen-talk.page.scss'],
})
export class TeenTalkPage implements OnInit {

  public teenTalkList = [];

  constructor(private router: Router, private service: TeenagersService) { }

  ngOnInit() {
    this.service.getTeenagerTalk().subscribe(res => {
       this.teenTalkList = res;
       
    })
  }

  teentalkS3(id, title) {
    this.router.navigate(['teenagers/videopage', `teenagers-teen_talk-videos-${id}.mp4`, 'T', title])
  }

}
