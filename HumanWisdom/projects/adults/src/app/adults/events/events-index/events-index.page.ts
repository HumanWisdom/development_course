import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Platform } from "@angular/cdk/platform";
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-events-index',
  templateUrl: './events-index.page.html',
  styleUrls: ['./events-index.page.scss'],
})
export class EventsIndexPage implements OnInit {
  path: string;
  address: string;
  eventList: any = [];
  searchinp="";
  backupList:any=[];
  
  constructor(private location: Location, private router: Router,
    public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService,
    public adult: AdultsService) {
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
    this.adult.getAllEvents().subscribe(x => {
      this.eventList=x;
       this.backupList=JSON.parse(JSON.stringify(this.eventList));
    });
  }

  getStyle(url){
    return "background-image: url("+url+")";
  }
  
  goBack() {
    this.location.back()
  }
  youtube(link) {
    this.router.navigate(['/adults/curated/youtubelink', link])
  }
  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    console.log("url")
    this.path = "https://humanwisdom.me/course" + this.address;
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
