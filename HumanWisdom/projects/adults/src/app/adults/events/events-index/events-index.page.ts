import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Platform } from "@angular/cdk/platform";
import { AdultsService } from '../../adults.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-events-index',
  templateUrl: './events-index.page.html',
  styleUrls: ['./events-index.page.scss'],
})
export class EventsIndexPage implements OnInit {
  path: string;
  address: string;
  futureeventList: any = [];
  eventList: any = [];
  searchinp="";
  backupList:any=[];
  
  constructor(private location: Location, private router: Router,
    public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService,
    public adult: AdultsService, private meta: Meta, private title: Title) {
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.address = this.router.url
  }

  getSearchResult(value){
    this.searchinp=value;
    setTimeout(() => {
      this.eventList=this.backupList.filter
      (x=>x.Title.toLocaleLowerCase().includes
        (this.searchinp.toLocaleLowerCase()));
    }, 30);
  }

  clearSearch(){
    setTimeout(() => {
    this.searchinp='';
    this.eventList=JSON.parse(JSON.stringify(this.backupList));
    }, 40);
  }

  ngOnInit() {

    this.title.setTitle('Mindfulness Events - Learn to Live in the Present')
    this.meta.updateTag({ property: 'title', content: 'Mindfulness Events - Learn to Live in the Present'})
    this.meta.updateTag({ property: 'description', content: 'Experience the benefits of mindfulness and learn to live in the present. Join our mindfulness events for a chance to gain clarity and peace of mind.' })
    this.meta.updateTag({ property: 'keywords', content: 'Personal development events,Self-improvement events,Mindfulness events,Wisdom-based events,Inspirational events,Adult learning events,Life lessons events,Meditation events,Mental health events,Mindful events' })
  

    this.adult.getAllEvents().subscribe(x => {
      console.log(x)
      this.futureeventList= x.FutureEvents;
      this.eventList=x.PastEvents;
       this.backupList=JSON.parse(JSON.stringify(this.eventList));
    });
  }

  getStyle(url){
    return "background-image: url("+url+")";
  }
  
  goBack() {
    this.location.back()
  }
  youtube(link, RowID) {
    let Access='free'
    if(RowID>=4) Access='paid'
console.log(Access)
    this.router.navigate(['/adults/curated/youtubelink', link, Access])
  }
  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    console.log("url")
    this.path = "https://humanwisdom.me" + this.address;
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

}
