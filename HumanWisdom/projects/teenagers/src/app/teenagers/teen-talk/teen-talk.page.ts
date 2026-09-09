import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../teenagers.service';
import {Meta,Title }  from '@angular/platform-browser';
import { CommonService } from '../../../../../shared/services/common.service';
import { HomeStateService } from '../../../../../shared/services/home-state.service';


@Component({
  selector: 'app-teen-talk',
  templateUrl: './teen-talk.page.html',
  styleUrls: ['./teen-talk.page.scss'],
})
export class TeenTalkPage implements OnInit {

  public teenTalkList = [];
  public unFilterTeenTalkList = [];
  public searchedText ="";
  isSubscriber = false;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
    

  constructor(private router: Router, private service: TeenagersService, private meta: Meta, private title: Title, private commonService: CommonService, private homeStateService: HomeStateService) { }

  ngOnInit() {


    this.title.setTitle('Conversation series with teenagers')
    this.meta.updateTag({ property: 'title', content: 'Conversation series with teenagers' })
    this.meta.updateTag({ property: 'description', content: 'A series of coversations with teenagers around the world' })
    this.meta.updateTag({ property: 'keywords', content: 'Everyday inspiration,Relatable wisdom,Practical life tips,Quick life hacks,Positive life lessons,Self-help wisdom,Encouraging words,Friendly life guidance' })

    this.service.getTeenagerTalk().subscribe(res => {
       this.teenTalkList = res;
       this.unFilterTeenTalkList = JSON.parse(JSON.stringify(res));
    })
     if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
      this.isSubscriber = true;
    }
  }

  teentalkS3(data) {
    let sub: any = localStorage.getItem("Subscriber")
    let id = data.RowID <= 9 ? '0' + data.RowID : data.RowID;
    if (sub == 0 && data.isFree === "0") {
      this.showModal = true;
      return;
    }
    // Only record click and navigate when access is granted
    this.commonService.clickTeenTalk(data.RowID).subscribe(res => {
      data.isRead = '1';
      this.homeStateService.markCardAsSeen(data.RowID.toString());
    });
    this.router.navigate(['teenagers/videopage', `teenagers-teen_talk-videos-${id}.mp4`, 'T', data.Title]);
  }

  onModalClose(event) {
    this.showModal = false;
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
