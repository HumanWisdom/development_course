import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AdultsService } from '../../../../adults/src/app/adults/adults.service';
import { ForumService } from '../../../forum/forum.service';
import { SearchDataModel } from '../../../models/search-data-model';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-search-popular-items',
  templateUrl: './search-popular-items.page.html',
  styleUrls: ['./search-popular-items.page.scss'],
})
export class SearchPopularItemsPage implements OnInit {
  searchData: SearchDataModel;
  search: string = "";
  totalRecords: number = 0;
  learningSearchRecords: number = 0;
  forumSearchRecords: number = 0;
  tabName: string = 'Learning';
  post: any;
  iframe: any;
  UserID: any;
  activereply;
  replyflag = false;
  PostComment: string = ''
  public qrList: any
  public userId = 100
  feelBetterNowTopic: string = '';
  isAdults: boolean = true;
  enableBlogViewMore: boolean = false;
  enableShortViewMore: boolean = false;
  enableStoryViewMore: boolean = false;
  searchDataDup: any;

  constructor(private commonService: CommonService,
    private sanitizer: DomSanitizer,
    private serivce: ForumService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    this.search = this.route.snapshot.paramMap.get('word')
    this.UserID = localStorage.getItem('userId');
    this.initializeSearchObject();
    this.getSearchData();
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
  }
  initializeSearchObject() {
    this.searchData = {
      ModuleRes: [],
      BlogRes: [],
      JournalRes: [],
      PodCastRes: [],
      SessionRes: [],
      WisdomShortsRes: [],
      WisdomStoriesRes: [],
      FeelBetterNowRes: null
    } as SearchDataModel;
  }

  searchEvent() {
    this.getSearchData();
  }
  getLearningRecords() {
    if (this.searchData) {
      return this.searchData.ModuleRes.length +
        this.searchData.SessionRes.length +
        this.searchData.PodCastRes.length +
        this.searchData.WisdomShortsRes.length +
        this.searchData.WisdomStoriesRes.length +
        this.searchData.BlogRes.length;
    }
    return 0;

  }
  view(item) {
    /* localStorage.setItem("blogdata",JSON.stringify(item))
    localStorage.setItem("blogId",JSON.stringify(item['BlogID']))
   */
    this.router.navigateByUrl(SharedService.getprogramName() + item['url']);

  }

  getSourceForPodBin(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?from=embed&i=" + url + "&square=0&share=0&download=0&fonts=Times%20New%20Roman&skin=1b1b1b&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=60a0c8&size=300");
  }
  getSearchData() {
    this.commonService.getSearchDataForSearchSite(this.search).subscribe(res => {
      if (res) {
        this.searchDataDup = JSON.parse(JSON.stringify(res));

        if (res.BlogRes && res.BlogRes.length > 2) {
          res.BlogRes = res.BlogRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.WisdomShortsRes && res.WisdomShortsRes.length > 2) {
          res.WisdomShortsRes = res.WisdomShortsRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.WisdomStoriesRes && res.WisdomStoriesRes.length > 2) {
          res.WisdomStoriesRes = res.WisdomStoriesRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        this.feelBetterNowTopic = this.getFeelBetterNowTitle(this.searchData.FeelBetterNowRes);
      }
    });
    this.getForumSearchData();
  }
  getTotalRecords() {
    return this.searchData.ModuleRes.length +
      this.searchData.SessionRes.length +
      this.searchData.PodCastRes.length +
      this.searchData.WisdomShortsRes.length +
      this.searchData.WisdomStoriesRes.length +
      this.searchData.BlogRes.length + this.getForumSearchRecords() + this.journalSearchRecords();

  }
  pageChangeEvent(tabName) {
    this.tabName = tabName;
    //  if(tabName=='Forum'){
    //    this.getForumSearchData();
    //  }
  }

  follow(item, index) {
    if (this.UserID) {
      this.serivce.followPost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res == "1") {
          this.post[index].Followed = item.Followed == '1' ? '0' : '1';
        }
      });
    }
  }
  getForumSearchData() {
    this.serivce.getForumSearchDataSite(this.search).subscribe(res => {
      if (res) {
        this.list(res);
      }
    });
  }

  enableViewMore(section, type) {
    if(section === 'blog') {
      if (type === 'more') {
        if (this.searchDataDup.BlogRes && this.searchDataDup.BlogRes.length > 2) {
          this.searchData.BlogRes = this.searchDataDup.BlogRes;
        }
        this.enableBlogViewMore = true;
      }else {
        if (this.searchDataDup.BlogRes && this.searchDataDup.BlogRes.length > 2) {
          this.searchData.BlogRes = this.searchDataDup.BlogRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableBlogViewMore = false;
      }
    }else if(section === 'short') {
      if (type === 'more') {
        if (this.searchDataDup.WisdomShortsRes && this.searchDataDup.WisdomShortsRes.length > 2) {
          this.searchData.WisdomShortsRes = this.searchDataDup.WisdomShortsRes;
        }
        this.enableShortViewMore = true;
      }else {
        if (this.searchDataDup.WisdomShortsRes && this.searchDataDup.WisdomShortsRes.length > 2) {
          this.searchData.WisdomShortsRes = this.searchDataDup.WisdomShortsRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableShortViewMore = false;
      }
    }else if(section === 'story') {
      if (type === 'more') {
        if (this.searchDataDup.WisdomStoriesRes && this.searchDataDup.WisdomStoriesRes.length > 2) {
          this.searchData.WisdomStoriesRes = this.searchDataDup.WisdomStoriesRes;
        }
        this.enableStoryViewMore = true;
      }else {
        if (this.searchDataDup.WisdomStoriesRes && this.searchDataDup.WisdomStoriesRes.length > 2) {
          this.searchData.WisdomStoriesRes = this.searchDataDup.WisdomStoriesRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableStoryViewMore = false;
      }
    }


  }

  like(item, index) {
    if (this.UserID) {
      this.serivce.likePost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res) {
          this.post[index].PostLikeCount = res;
          this.post[index].Liked = this.post[index].Liked == "1" ? "0" : "1";
        }
      });
    }
  }
  getOrderbyLatestPost(childs) {
    childs.sort(function (a, b) {
      return b.PostID - a.PostID;
    });
    return childs;
  }
  getLocalPostDate(date: string) {
    var dateLocal = new Date(date);
    var newDate = new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000);
    return newDate;
  }
  list(data) {
    if (data) {
      let temp = [];
      let flag = false;
      data.forEach(element => {
        temp.forEach((res) => {
          if (res.PostID === Number(element.ParentPOstID)) {
            res.child.push(element);
            flag = true;
          }
        })
        if (!flag) {
          element.child = [];
          temp.push(element);
          flag = false;
        } else {
          flag = false;
        }

      });
      temp.sort(function (a, b) {
        return b.PostID - a.PostID;
      });
      this.post = temp;
    }
  }
  getForumSearchRecords() {
    if (this.post) {
      return this.post.length;
    }
    return 0;
  }

  postreport(item, actionType) {
    if (this.UserID) {
      console.log(item);
      this.replyflag = !this.replyflag;
      this.serivce.submitPost({ POST: this.PostComment, UserId: this.UserID, ParentPostID: item.PostID }).subscribe(res => {
        if (res) {
          this.getForumSearchData();
          this.PostComment = '';
        }
      })
    }
  }
  reportpost(item) {
    this.replyflag = !this.replyflag;
    this.activereply = item;
    console.log(item);
  }
  journalSearchRecords() {
    if (this.searchData) {
      return this.searchData.JournalRes;
    }
    return 0;
  }

  goBack() {
    this.router.navigate(['/adults/search']);

  }

  routemodule(res) {
    localStorage.setItem("moduleId", JSON.stringify(res['ModuleId']))
    this.commonService.clickModule(res['ModuleId'], this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        } else {
          localStorage.setItem("lastvisited", 'T')
        }
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      })
    this.router.navigate([res['ModuleUrl']]);
  }

  timeSince(date) {
    return moment.utc(date).fromNow();
  }

  stripTags(story) {
    //
  }

  getFeelBetterNowTitle(url) {
    return url?.split('/')?.[2];
  }

  routeToFeelBetterNow(url) {
    this.router.navigate([SharedService.getUrlfromFeatureName(url)]);
  }

}
