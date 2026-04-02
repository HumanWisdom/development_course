import { Platform } from '@angular/cdk/platform';
import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';
import { OnboardingService } from '../../../services/onboarding.service';
import { NavigationService } from "../../../services/navigation.service";
import { LogEventService } from '../../../services/log-event.service';
@Component({
  selector: 'HumanWisdom-blog-article',
  templateUrl: './blog-article.page.html',
})
export class BlogArticlePage {
  list: any;
  blogList;
  likecount = 0
  comment = ''
  blogid;
  BlogCommentsLen = 0;
  BlogCommentsList = 0;
  BlogCommentsListabove = []
  path:any;
  content = '';
  enableAlert = false;
  enablecancel = false;
  public isLoggedIn = false
  address:any;
  token = localStorage.getItem("shareToken")
  isAdults =  true;
  sanitizedBlogHtml: any;
  showAllComments = false;
  constructor(private readonly sanitizer: DomSanitizer, private readonly service: OnboardingService, private readonly location: Location, private readonly renderer: Renderer2,
    private readonly router: Router, private readonly ngNavigatorShareService: NgNavigatorShareService, private readonly elRef: ElementRef,
    private readonly route: ActivatedRoute, private readonly meta: Meta, private readonly title: Title, public platform: Platform,
    private readonly navigationService: NavigationService,
    public readonly logeventservice: LogEventService) {
      const login: any = localStorage.getItem("isloggedin");
      if (login && login === 'T') {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      this.address = this.router.url;
      this.route.queryParams.subscribe(params => {
        this.showAllComments = false;
        this.blogid = this.extractUntilQuestionMark(params?.sId)
        if (Number.isNaN(+this.blogid)) {
          this.getBlogList(this.blogid);
        } else {
          this.getblog();
        }
      });

      if (SharedService.ProgramId == ProgramType.Adults) {
        this.isAdults = true;
      } else {
        this.isAdults = false;
      }
    }


  extractUntilQuestionMark(inputString) {
    const index = inputString.indexOf('?');
    if (index !== -1) {
      return inputString.substring(0, index);
    } 
    return inputString;
  }

  getblog() {
    localStorage.setItem('blogId', this.blogid);
    this.service.getBlogId(this.blogid).subscribe(res => {
      if (res) {
        this.handleBlogResponse(res);
      }
    },
      error => console.log(error)
    );
  }

  handleBlogResponse(res) {
    this.blogList = res;
    const tempEl = document.createElement('div');
    if (SharedService.ProgramId == 9) {
      tempEl.innerHTML = res.Blog;
    } else if (SharedService.ProgramId == 11) {
      tempEl.innerHTML = res.Blog.replaceAll("/adults/", "/teenagers/").replaceAll("/pathway/live-your-best-life", "/pathway/succeed-in-life");
    }

    const images = tempEl.querySelectorAll('img');
    for (const img of Array.from(images)) {
      (img as HTMLElement).style.width = '100%';
    }

    res.Blog = tempEl.innerHTML;
    // Sanitize HTML once and store it to prevent re-renders
    this.sanitizedBlogHtml = this.sanitizer.bypassSecurityTrustHtml(res.Blog);
    this.BlogCommentsLen = this.blogList['BlogComments'].length;
    if (this.BlogCommentsLen !== 0) {
      this.BlogCommentsList = this.blogList['BlogComments'].slice(0, 3);
    }
    if (this.BlogCommentsLen > 3) {
      this.BlogCommentsListabove = this.blogList['BlogComments'].slice(3);
    }
    this.likecount = Number.parseInt(this.blogList['LikeCnt']);
    
    this.title.setTitle(this.blogList['Title']);
    this.updateMetaTags();
  }

  updateMetaTags() {
    const tags = [
      { property: 'title', content: this.blogList['MetaTitle'] },
      { property: 'description', content: this.blogList['MetaDesc'] },
      { property: 'og:type', content: 'article' },
      { property: 'og:description', content: this.blogList['MetaDesc'] },
      { property: 'og:image', content: this.blogList['ImgPath'] },
      { property: 'twitter:description', content: this.blogList['MetaDesc'] },
      { property: 'keywords', content: this.blogList['MetaKeywords'] }
    ];

    for (const tag of tags) {
      if (this.meta.getTag(`property='${tag.property}'`)) {
        this.meta.updateTag(tag);
      } else {
        this.meta.addTag(tag);
      }
    }
  }
  getHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  timeSince(date) {
    return moment.utc(date).fromNow();
  }

  likebtn() {
    this.logeventservice.logEvent('click_heart_icon');
    if (this.isLoggedIn) {
      this.service.likeblog(this.blogList['BlogID']).subscribe((res) => {
        if (res) {
          this.getblog()
        }
      }, error => {
        this.content = error['error']['Message'];
        this.enableAlert = true;
      });
    } else {
      this.enablecancel = true;
      this.content = "Please Register to activate this feature";
      this.enableAlert = true;
    }
  }

  postcomment() {
    this.logeventservice.logEvent('click_comment_post');
    if (this.isLoggedIn) {
      const obj = {
        "BlogId": this.blogList['BlogID'],
        "Comment": this.comment
      }
      this.service.commentblog(obj).subscribe((res) => {
        if (res) {
          this.comment = '';
          this.getblog()
        }
      })
    } else {
      this.enablecancel = true;
      this.content = "Please Register to activate this feature";
      this.enableAlert = true;
    }
  }

  getimg(data) {
    if (!data || data === 'undefined' || data.includes('undefined')) {
      return '';
    }
    const cleanedPath = data.replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/');
    return 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/' + cleanedPath;
  }

  goBack() {
    const url = this.navigationService.navigateToBackLink();
    console.log("url=" + url)
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }


  share() {
    this.logeventservice.logEvent('click_share_icon');
    this.shareUrl(SharedService.ProgramId);
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text:  "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.path
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });
  }

  shareUrl(programType:ProgramType) {
    switch (programType) {
      case ProgramType.Adults:
          this.path = SharedService.AdultsBaseUrl + this.address + `?t=${this.token}`
        break;
      case ProgramType.Teenagers:
        this.path = SharedService.TeenagerBaseUrl + this.address + `?t=${this.token}`
        break;
      default:
          this.path = SharedService.AdultsBaseUrl + this.address + `?t=${this.token}`
    }
  }


  commentbottom() {
    this.logeventservice.logEvent('click_comment_icon');
    if (this.isLoggedIn) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      this.enablecancel = true;
      this.content = "Please Register to activate this feature";
      this.enableAlert = true;
    }
  }

  clickbanner(url = '') {
    if (url === '') {
      if (this.platform.IOS || this.platform.SAFARI) {
        this.logeventservice.logEvent('click_appstore_icon');
        window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
      } else if (this.platform.ANDROID) {
        this.logeventservice.logEvent('click_googleplay_icon');
        window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      }
    } else {
      if (url.includes("apple.com")) {
        this.logeventservice.logEvent('click_appstore_icon');
      } else {
        this.logeventservice.logEvent('click_googleplay_icon');
      }
      window.open(url)
    }
  }

  getBlogList(title) {
    this.service.getBlog().subscribe(res => {
      if (res) {
        this.list = res
        const data = this.list.find(resp => resp.Title.toLocaleLowerCase().includes(title.toLocaleLowerCase().replaceAll("-", " ")))
        if (data) {
          this.blogid = data['BlogID'];
          this.getblog();
        }
      }
    },
      error => console.log(error)
    )
  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
    if(event === 'ok' && this.enablecancel) {
      this.enablecancel = false;
        if (this.platform.isBrowser) {
          localStorage.setItem("isloggedin", "F");
          localStorage.setItem("guest", "T");
          localStorage.setItem("navigateToUpgradeToPremium", "false");
          localStorage.setItem("btnClickBecomePartner", "false");
          this.router.navigate(["/onboarding/login"]);
        }
    }
  }

  toggleAllComments() {
    this.showAllComments = true;
  }

}
