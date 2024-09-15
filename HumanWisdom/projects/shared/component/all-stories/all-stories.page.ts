import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { Meta, Title } from '@angular/platform-browser';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.page.html',
  styleUrls: ['./all-stories.page.scss'],
})
export class AllStoriesPage implements OnInit {
  storyList=[]
  searchstoryList=[]
  secondstoryList=[]
  readStories=[]
  searchedText='';
  sId:any;
  enable_view_more_less = false;
  view_more_less="View More"
  isSubscriber = false;
  isAdults = true;
  constructor(private router: Router,
    private service:OnboardingService,
    private location:Location,
    private meta: Meta, private title: Title,private navigationService:NavigationService) { }

  ngOnInit() {
    this.getStories()
    this.title.setTitle('Inspiring real-life stories')
    this.meta.updateTag({ property: 'title', content: 'Inspiring real-life stories' })
    this.meta.updateTag({ property: 'description', content: 'Discover the transformative impact of wisdom through the real-life stories of adults and find ways to apply it in your life.' })
    this.meta.updateTag({ property: 'keywords', content: 'Wisdom stories for adults,Inspiring stories for adults,Life lessons from stories,Adult wisdom tales,Uplifting stories for adults,Motivational stories for grown-ups,Adult storytelling,Personal growth through stories,Life-changing stories for adults,Empowering adult stories' })
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    console.log("url=" + url)
    if (url == null) {
     this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  getStories(){
    this.service.getScenarios().subscribe(res=>
      {
        if(res)
        {
          let dateres = res.sort((a, b) => b['PublishedOn'] - a['PublishedOn'])
          dateres = dateres.filter(x=>x.ProgIDs.includes(SharedService.ProgramId));

          // if (localStorage.getItem("isloggedin") == null || localStorage.getItem("isloggedin") == 'F' || localStorage.getItem("Subscriber")=='0' ) {

          //   res = new Array()
          //   res = dateres.filter(p => p.ExclFromChild === "1")
          //   res.forEach(element => {
          //     dateres.splice(dateres.indexOf(element),1)
          //     dateres.unshift(element)
          //   });



          // }

         this.storyList=dateres.slice(0, 10)
          this.secondstoryList=dateres.slice(10)
          this.searchstoryList = dateres;
          localStorage.setItem("storyList",JSON.stringify(this.storyList))
        }
      },
      error=>console.log(error),
      ()=>{
        let res = localStorage.getItem("isloggedin");
        if(res && res === 'T') {
          this.service.readStories().subscribe(r=>{
            this.readStories= r.map(a => a.ScenarioID)
            //this.readStories=r.ScenarioID
          })
        }
      }
    )
  }

  toRead(obj, enable){
    let res = localStorage.getItem("isloggedin");
    if(enable) {
      localStorage.setItem("story",JSON.stringify(obj))
      this.sId=obj.ScenarioID
      if(res && res === 'T') {
        this.service.clickStory(obj.ScenarioID).subscribe(res=>{
                 this.routeToViewStories();
        })
      } else {
        this.routeToViewStories();
      }
    }else{
      if(!this.isSubscriber) {
        this.router.navigateByUrl(SharedService.getprogramName()+'/subscription/start-your-free-trial')
        // this.router.navigate(['/subscription/start-your-free-trial']);
      }
    }
  }
  
  Submit(){
    if(SharedService.ProgramId == ProgramType.Adults){
      this.router.navigate(['/adults/wisdom-stories/submit-story']);
    }else{
      this.router.navigate(['/teenagers/wisdom-stories/submit-story']);
  }
}
  searchStory($event) 
  {
    if($event=='')
    {
      this.storyList= this.searchstoryList;
    }
    else
    {
      this.searchedText=$event;
      let filterlist =this.searchstoryList.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()));
      this.storyList=filterlist.slice(0, 10)
      this.secondstoryList=filterlist.slice(10);
    }
  }

  /*
  searchStory(event){
      let filterlist =this.searchstoryList.filter(it => it.Title.toLowerCase().includes(e.toLowerCase()));
      this.storyList=filterlist.slice(0, 10)
      this.secondstoryList=filterlist.slice(10);
  }
  */

  toggle_view_more_less()
  {
    if(this.view_more_less == "View More")
    {
      this.enable_view_more_less = true;
      this.view_more_less = "View Less";
    }
    else
    {
      this.enable_view_more_less = false;
      this.view_more_less = "View More";
    }
  }

  routeToViewStories(){
    if(SharedService.ProgramId == ProgramType.Adults){
      this.router.navigate(['/adults/wisdom-stories/view-stories'],{ queryParams: {sId: `${this.sId}`}})
    }else{
      this.router.navigate(['/teenagers/wisdom-stories/view-stories'],{ queryParams: {sId: `${this.sId}`}})
    }
  }

}
