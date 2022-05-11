import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-learning-forum-journal',
  templateUrl: './search-learning-forum-journal.page.html',
  styleUrls: ['./search-learning-forum-journal.page.scss'],
})
export class SearchLearningForumJournalPage implements OnInit {

  searchData:SearchDataModel;

  constructor() { }

  ngOnInit() {

  }

    initializeSearchObject(){
      this.searchData={
        ModuleRes:[],
        BlogRes:[],
        JournalRes:[],
        PodCastRes:[],
        SessionRes:[],
        WisdomShortsRes:[],
        WisdomStoriesRes:[]
      } as SearchDataModel;
    }


}
