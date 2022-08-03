import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AdultsService } from '../../adults.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import {Location } from '@angular/common'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'HumanWisdom-blog-article',
  templateUrl: './blog-article.page.html',
  styleUrls: ['./blog-article.page.scss'],
})
export class BlogArticlePage implements OnInit {
  blogList:any;
  likecount = 0
  comment = ''
  blogid;
  BlogCommentsLen = 0;
  BlogCommentsList = 0;
  BlogCommentsListabove = []
  path=  this.router.url

  constructor(private sanitizer: DomSanitizer,private service: AdultsService, private router: Router, private ngNavigatorShareService: NgNavigatorShareService,  private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.blogid=params?.sId
  });
  // this.blogid=JSON.parse(localStorage.getItem("blogId"))
    this.getblog()
   }

  ngOnInit() {
   
  }

  getblog() {
    this.service.getBlogId(this.blogid).subscribe(res=>
      {
        if(res) {
          this.blogList=res
          this.BlogCommentsLen = this.blogList['BlogComments'].length
          if(this.BlogCommentsLen !==0) {
            this.BlogCommentsList = this.blogList['BlogComments'].slice(0, 3)
          }
          if(this.BlogCommentsLen > 3) {
            this.BlogCommentsListabove = this.blogList['BlogComments'].slice(3)
          }
          this.likecount = parseInt(this.blogList['LikeCnt'])
        }
      },
      error=>console.log(error),
      ()=>{
      }
    )
  }
  getHtml(html){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  timeSince(date) {
    return moment.utc(date).fromNow();
  }

  likebtn() {
    this.service.likeblog(this.blogList['BlogID']).subscribe((res) => {
      if(res) {
        this.getblog()
      }
    },error=>{
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
      if(res) {
        this.comment = '';
        this.getblog()
      }
    })
  }

  getimg(data){
   return data.split('UsersAvatar\\')[1]
  }

  share(){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  commentbottom() {
    window.scrollTo(0,document.body.scrollHeight);
  }

}
