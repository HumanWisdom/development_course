import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'HumanWisdom-blog-index',
  templateUrl: './blog-index.page.html',
  styleUrls: ['./blog-index.page.scss'],
})
export class BlogIndexPage implements OnInit {
  blogList:any;
  searchedTitle:any;
  path=this.router.url

  constructor(private service: AdultsService, private router: Router, private ngNavigatorShareService: NgNavigatorShareService) { }

  ngOnInit() {
    this.getBlogs()
  }

  getBlogs(){
    this.service.getBlog().subscribe(res=>
      {
        if(res) {
          this.blogList=res
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

  viewblog(item){
    localStorage.setItem("blogdata",JSON.stringify(item))
    localStorage.setItem("blogId",JSON.stringify(item['BlogID']))
    this.router.navigate(['/blog/blog-article'],{ queryParams: {sId: `${item['BlogID']}`}})
  }

  searchTitle(){
    if(this.searchedTitle=="")
    this.getBlogs()
  else{
    this.blogList=this.blogList.filter(res=>{
      return res.Title.toLocaleLowerCase().match(this.searchedTitle.toLocaleLowerCase())

    })
  }

  }

  share(){
    this.ngNavigatorShareService.share({
      title: 'Human Wisdom Program',
      text: 'Hey, check out the Human Wisdom Program',
      url: this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

}
