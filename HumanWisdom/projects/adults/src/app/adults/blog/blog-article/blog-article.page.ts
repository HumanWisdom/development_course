import { Platform } from '@angular/cdk/platform';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../adults.service';
import { Meta, Title } from '@angular/platform-browser'; 

@Component({
  selector: 'HumanWisdom-blog-article',
  templateUrl: './blog-article.page.html',
  styleUrls: ['./blog-article.page.scss'],
})
export class BlogArticlePage implements OnInit {
  blogList: any;
  likecount = 0
  comment = ''
  blogid;
  BlogCommentsLen = 0;
  BlogCommentsList = 0;
  BlogCommentsListabove = []
  path = this.router.url

  constructor(private sanitizer: DomSanitizer, private service: AdultsService, private location: Location,
    private router: Router, private ngNavigatorShareService: NgNavigatorShareService,
    private route: ActivatedRoute,private meta: Meta, private title: Title, public platform: Platform ) {
    this.route.queryParams.subscribe(params => {
      this.blogid = params?.sId
      this.getblog()
    });
    // this.blogid=JSON.parse(localStorage.getItem("blogId"))
   
  
  }

  ngOnInit() {
   
  
   
  }

  getblog() {
    this.service.getBlogId(this.blogid).subscribe(res => {
      if (res) {
        this.blogList = res
        this.BlogCommentsLen = this.blogList['BlogComments'].length
        if (this.BlogCommentsLen !== 0) {
          this.BlogCommentsList = this.blogList['BlogComments'].slice(0, 3)
        }
        if (this.BlogCommentsLen > 3) {
          this.BlogCommentsListabove = this.blogList['BlogComments'].slice(3)
        }
        this.likecount = parseInt(this.blogList['LikeCnt'])
      

         this.title.setTitle(this.blogList['Title'])

        if(this.meta.getTag("property='og:type'"))
          this.meta.updateTag({ property: 'og:type', content: 'article'})
        else
         this.meta.addTag({ property: 'og:type', content: 'article'})

          //this.meta.updateTag({ property: 'og:url', content: "https://staging.humanwisdom.me/course/"+ this.path})
          console.log(this.blogList['Title']+ "|" + "Best Mental Health Apps for Stress, Anger & Depression Management|HumanWisdom")
          
        if(this.meta.getTag("property='og:description'"))
          this.meta.updateTag({ property: 'og:description', content: this.blogList['Title']+ "|" + "Best Mental Health Apps for Stress, Anger & Depression Management|HumanWisdom"})
        else
         this.meta.addTag({ property: 'og:description', content: this.blogList['Title']+ "|" + "Best Mental Health Apps for Stress, Anger & Depression Management|HumanWisdom"})
        
        if(this.meta.getTag("property='og:image'"))
         this.meta.updateTag({ property: 'og:image', content: this.blogList['ImgPath']})
        else
         this.meta.addTag({ property: 'og:image', content: this.blogList['ImgPath']})

        if(this.meta.getTag("property='twitter:description'"))
           this.meta.updateTag({ property: 'twitter:description', content: this.blogList['Title']+ "|" + "Best Mental Health Apps for Stress, Anger & Depression Management|HumanWisdom"})
        else
          this.meta.addTag({ property: 'twitter:description', content: this.blogList['Title']+ "|" + "Best Mental Health Apps for Stress, Anger & Depression Management|HumanWisdom"})


          // this.meta.updateTag({ property: 'og:image', content:"https://miro.medium.com/max/720/1*-MExOq023Stbuk0cngfDOQ.jpeg"})


      }
    },
      error => console.log(error),
      () => {
      }
    )
  }
  getHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  timeSince(date) {
    return moment.utc(date).fromNow();
  }

  likebtn() {
    this.service.likeblog(this.blogList['BlogID']).subscribe((res) => {
      if (res) {
        this.getblog()
      }
    }, error => {
      window.alert(error['error']['Message'])
    },
    )
  }

  postcomment() {
    let obj = {
      "BlogId": this.blogList['BlogID'],
      "Comment": this.comment
    }
    this.service.commentblog(obj).subscribe((res) => {
      if (res) {
        this.comment = '';
        this.getblog()
      }
    })
  }

  getimg(data) {
    return data.split('UsersAvatar\\')[1]
  }

  goBack() {
    this.location.back()
  }

  share() {
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path+'&t='+ JSON.parse(localStorage.getItem("token"))
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  commentbottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  clickbanner(url = '') {
    if (url === '') {
      if (this.platform.IOS || this.platform.SAFARI) {
        window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
      } else if (this.platform.ANDROID) {
        window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      }
    } else {
      window.open(url)
    }
  }
 
  

}
