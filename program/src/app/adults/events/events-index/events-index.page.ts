import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'HumanWisdom-events-index',
  templateUrl: './events-index.page.html',
  styleUrls: ['./events-index.page.scss'],
})
export class EventsIndexPage implements OnInit {
  path:string;
  address:string;
  constructor(private location:Location, private router: Router,
    private ngNavigatorShareService:NgNavigatorShareService) { 
      this.ngNavigatorShareService = ngNavigatorShareService;
      this.address=this.router.url
    }

  ngOnInit() {
    
  }

  goBack(){
    this.location.back()
  }

  youtube(link) {
    this.router.navigate(['/adults/curated/youtubelink', link])
  }
  share() {
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
     console.log("url")
    this.path="https://humanwisdom.me/course"+this.address;
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

}
