import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../adults.service';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'HumanWisdom-blog-index',
  templateUrl: './blog-index.page.html',
  styleUrls: ['./blog-index.page.scss'],
})
export class BlogIndexPage implements OnInit {
  blogList:any;
  searchedTitle:any;
  path='#' + this.router.url
  
  constructor(private service: AdultsService, private router: Router, 
    private ngNavigatorShareService: NgNavigatorShareService,
    private meta: Meta, private title: Title) { }

  ngOnInit() {

    this.title.setTitle('Explore Your Inner World with Our Self-Discovery Blog')
    this.meta.updateTag({ property: 'title', content: 'Explore Your Inner World with Our Self-Discovery Blog'})
    this.meta.updateTag({ property: 'description', content: 'Discover your true self with our self-discovery blog. Explore your inner world and unlock your full potential with inspiring articles and wisdom.' })
    this.meta.updateTag({ property: 'keywords', content: 'Personal growth blog,Self-improvement blog,Inspirational blog,Life lessons blog,Mindfulness blog,Adult development blog,Wisdom-based blog,Personal development articles,Self-discovery blog,Reflection blog' })
  
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
    this.router.navigate(['adults/blog/blog-article'], { replaceUrl: true, skipLocationChange: true,queryParams: {sId: `${item['BlogID']}`}})
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
   stripTags (original) {
   // (A1) PARSE STRING INTO NEW HTML DOCUMENT
  let parsed = new DOMParser().parseFromString(original, "text/html");
  // (A2) STRIP TAGS, RETURN AS TEXT CONTENT
  return parsed.body.textContent;
  }
}
