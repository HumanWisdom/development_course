import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-find-inspiration',
  templateUrl: './find-inspiration.component.html',
  styleUrls: ['./find-inspiration.component.scss'],
})
export class FindInspiration  {
  inspirationItems = [
    { 
      title: 'Podcasts', 
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/podcast_without_bg.svg',
      icon: 'headphones', 
      height:'',
      color: '#191d3a',
      url:'podcast' 
    },
    { 
      title: 'Guided questions', 
      icon: 'map', 
      color: '#191d3a',
      height:'',
      img:"https://d1tenzemoxuh75.cloudfront.net/assets/icons/guided_without_bg.svg",
    url:'journal'
    },    
    
    { 
      title: 'Short videos', 
      icon: 'play-circle', 
      color: '#191d3a',
      height:'',
      img:'https://d1tenzemoxuh75.cloudfront.net/assets/icons/short_video_without_bg.svg',
      url:'wisdom-shorts'
    },  
    { 
      title: 'PATHWAY', 
      icon: 'star', 
      color: '#191d3a',
      height:'',
      img:"https://d1tenzemoxuh75.cloudfront.net/assets/icons/pathway_without_bg.svg",
      url:'pathway'
    },
    { 
      title: 'Audio meditation', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/audioMeditation_without_bg.svg',
      url:'audio-meditation'
    },
    { 
      title: 'Contact a coach', 
      icon: 'message-circle', 
      color: '#191d3a',
      height:'',
      img:"https://d1tenzemoxuh75.cloudfront.net/assets/icons/coach_without_bg.svg",
      url:'coach'
    },
     { 
      title: 'Events', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/events_without_bg.svg',
      url:'events'
    },   
    
    { 
      title: 'Blog', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/blog_without_bg.svg',
      url:'blogs'
    },
    { 
      title: 'Life Stories', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/lifeStories_without_bg.png',
      url:'wisdom-stories'
    },
    { 
      title: 'Wellness Survey', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/events_without_bg.png',
      url:'wisdom-survey'
    },   
    
  ];


  constructor(private router: Router, private location: Location) {}
  
  routeTo(item: any) {
    this.router.navigate([SharedService.getprogramName()+'/' +item]);
  }

}
