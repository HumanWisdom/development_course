import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Meta, Title } from '@angular/platform-browser';
import { OnboardingService } from '../../../services/onboarding.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

@Component({
  selector: 'HumanWisdom-blog-index',
  templateUrl: './blog-index.page.html',
})
export class BlogIndexPage implements OnInit {
  blogList:any[]=[];
  filteredblogList:any;
  searchedTitle='';
  path:any;
  isAdults= true;
  isSubscribed = false;
  isLoggedIn = false;
  constructor(private service: OnboardingService, private router: Router, 
    private ngNavigatorShareService: NgNavigatorShareService,
    public meta: Meta, private title: Title) { 
      this.path=this.router.url
    }

  ngOnInit() {
    this.title.setTitle('Explore Your Inner World with Our Self-Discovery Blog')
    this.meta.updateTag({ property: 'title', content: 'Explore Your Inner World with Our Self-Discovery Blog'})
    this.meta.updateTag({ property: 'description', content: 'Discover your true self with our self-discovery blog. Explore your inner world and unlock your full potential with inspiring articles and wisdom.' })
    this.meta.updateTag({ property: 'keywords', content: 'Personal growth blog,Self-improvement blog,Inspirational blog,Life lessons blog,Mindfulness blog,Adult development blog,Wisdom-based blog,Personal development articles,Self-discovery blog,Reflection blog' })
   // this.meta.addTag({ property: 'url', content: 'http://staging.humanwisdom.me/adults/blogs' });
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
    this.getBlogs();

    const subValue = localStorage.getItem('Subscriber');
    this.isSubscribed = subValue === '1' || subValue === 'T';
        if (localStorage.getItem("isloggedin") && localStorage.getItem("isloggedin") === 'T') {
          this.isLoggedIn = true;
        }
  }


  getBlogs(){
    this.service.getBlog().subscribe(res=>
      {
        if(res) {
          this.blogList=res
          this.blogList =  this.blogList.filter(x=>x.ProgIDs.includes(SharedService.ProgramId));
          this.filteredblogList = this.blogList
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

viewblog(item) {
  const blogId = item['BlogID'];

  // Log the click
  this.service.clickBlog(blogId).subscribe({
    next: (res) => console.log('Blog click logged:', res),
    error: (err) => console.error('Error logging blog click:', err)
  });

  // Store in localStorage
  localStorage.setItem("blogdata", JSON.stringify(item));
  localStorage.setItem("blogId", JSON.stringify(blogId));

  // Navigate
  const route = this.isAdults
    ? ['/adults/blog-article']
    : ['/teenagers/blog-article'];

  this.router.navigate(route, { queryParams: { sId: `${blogId}` } });
}

  searchTitle($event) 
  {
    if($event=='')
    {
      this.filteredblogList= this.blogList;
    }
    else
    {
      this.searchedTitle=$event;
      this.filteredblogList =this.blogList.filter(it => it.Title.toLowerCase().includes(this.searchedTitle.toLowerCase()) || it.searchtags.toLowerCase().includes(this.searchedTitle.toLowerCase()));
     // this.filteredblogList=this.filteredblogList.slice(0, 10);
    }
  }
  
  /*
  searchTitle()
  {
    if(this.searchedTitle=="")
      this.getBlogs()
    else
    {
      this.blogList=this.blogList.filter(res=>{
        return res.Title.toLocaleLowerCase().match(this.searchedTitle.toLocaleLowerCase())
      })
    }
  }
  */

  share(){
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.path
    }).then( (response) => {
      
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
