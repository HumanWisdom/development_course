import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'HumanWisdom-blog-index',
  templateUrl: './blog-index.page.html',
  styleUrls: ['./blog-index.page.scss'],
})
export class BlogIndexPage implements OnInit {
  blogList:any;
  searchedTitle:any;

  constructor(private service: AdultsService, private router: Router) { }

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
    return moment().fromNow(date);
  }

  viewblog(item){
    localStorage.setItem("blogdata",JSON.stringify(item))
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

}
