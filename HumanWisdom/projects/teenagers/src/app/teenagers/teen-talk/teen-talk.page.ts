import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../teenagers.service';
import {Meta,Title }  from '@angular/platform-browser';


@Component({
  selector: 'app-teen-talk',
  templateUrl: './teen-talk.page.html',
  styleUrls: ['./teen-talk.page.scss'],
})
export class TeenTalkPage implements OnInit {

  public teenTalkList = [];
  public unFilterTeenTalkList = [];
  public searchedText ="";
  constructor(private router: Router, private service: TeenagersService, private meta: Meta, private title: Title) { }

  ngOnInit() {


    this.title.setTitle('Conversation series with teenagers')
    this.meta.updateTag({ property: 'title', content: 'Conversation series with teenagers' })
    this.meta.updateTag({ property: 'description', content: 'A series of coversations with teenagers around the world' })
    this.meta.updateTag({ property: 'keywords', content: 'Everyday inspiration,Relatable wisdom,Practical life tips,Quick life hacks,Positive life lessons,Self-help wisdom,Encouraging words,Friendly life guidance' })

    this.service.getTeenagerTalk().subscribe(res => {
       this.teenTalkList = res;
       this.unFilterTeenTalkList = JSON.parse(JSON.stringify(res));
    })
  }

  teentalkS3(id, title) {
    this.router.navigate(['teenagers/videopage', `teenagers-teen_talk-videos-${id}.mp4`, 'T', title])
  }
 
  searchTeenTalk($event) 
  {
    if($event=='')
    {
      this.teenTalkList= this.unFilterTeenTalkList;
    }
    else
    {
      this.searchedText=$event;
      this.teenTalkList =this.unFilterTeenTalkList.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()));
    }
  }
}
