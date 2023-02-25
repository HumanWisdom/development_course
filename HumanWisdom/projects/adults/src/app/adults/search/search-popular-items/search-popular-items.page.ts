import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/app/forum/forum.service';
import { SearchDataModel } from '../../../../../../shared/models/search-data-model';
import { AdultsService } from '../../adults.service';

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

  constructor(private adultService: AdultsService,
    private sanitizer: DomSanitizer,
    private serivce: ForumService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,) { }

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
      WisdomStoriesRes: []
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
  viewblog(item){
    localStorage.setItem("blogdata",JSON.stringify(item))
    localStorage.setItem("blogId",JSON.stringify(item['BlogID']))
    this.router.navigate(['/blog/blog-article'], { replaceUrl: true, skipLocationChange: true,queryParams: {sId: `${item['BlogID']}`}});
  }
  getSourceForPodBin(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?from=embed&i=" + url + "&square=0&share=0&download=0&fonts=Times%20New%20Roman&skin=1b1b1b&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=60a0c8&size=300");
  }
  getSearchData() {
    this.adultService.getSearchDataForSearchSite(this.search).subscribe(res => {
      if (res) {
        this.searchData = res;
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
    this.adultService.getForumSearchDataSite(this.search).subscribe(res => {
      if (res) {
        this.list(res);
      }
    });
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
      return this.searchData.JournalRes.length;
    }
    return 0;
  }

  goBack() {
    this.router.navigate(['/adults/search']);

  }

  routemodule(res) {
    localStorage.setItem("moduleId", JSON.stringify(res['ModuleId']))
    this.adultService.clickModule(res['ModuleId'], this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }else {
          localStorage.setItem("lastvisited", 'T')
        }
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      })
    this.router.navigate([res['ModuleUrl']]);
  }

}
