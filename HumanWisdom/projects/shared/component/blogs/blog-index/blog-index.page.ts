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
  styleUrls: ['./blog-index.page.scss'],
})
export class BlogIndexPage implements OnInit {
  blogList:any;
  filteredblogList:any;
  searchedTitle='';
  path:any;
  isAdults= true;
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
    this.getBlogs()
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

  viewblog(item){
    localStorage.setItem("blogdata",JSON.stringify(item))
    localStorage.setItem("blogId",JSON.stringify(item['BlogID']))

    if(this.isAdults){
      //this.router.navigate(['/adults/blog-article'], { replaceUrl: true, skipLocationChange: true,queryParams: {sId: `${item['BlogID']}`}})
      this.router.navigate(['/adults/blog-article'], { queryParams: { sId: `${item['BlogID']}` } })
    }else{
      //this.router.navigate(['/teenagers/blog-article'], { replaceUrl: true, skipLocationChange: true,queryParams: {sId: `${item['BlogID']}`}})
      this.router.navigate(['/teenagers/blog-article'], { queryParams: { sId: `${item['BlogID']}` } })
    }
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
      this.filteredblogList =this.blogList.filter(it => it.Title.toLowerCase().includes(this.searchedTitle.toLowerCase()));
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
