import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AdultsService } from '../../adults.service';

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

  constructor(private service: AdultsService, private router: Router) {
   this.blogid=JSON.parse(localStorage.getItem("blogId"))
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
        this.getblog()
      }
    })
  }

  getimg(data){
   return data.split('UsersAvatar\\')[1]
  }

}
