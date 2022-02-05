import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-blog-article',
  templateUrl: './blog-article.page.html',
  styleUrls: ['./blog-article.page.scss'],
})
export class BlogArticlePage implements OnInit {
  blogList:any;

  constructor() {
    this.blogList=JSON.parse(localStorage.getItem("blogdata"))
   }

  ngOnInit() {
  }

}
