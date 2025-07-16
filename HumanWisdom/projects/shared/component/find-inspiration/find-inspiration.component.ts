import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../../shared/services/shared.service';
import { LogEventService } from '../../services/log-event.service';


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
      title: 'Blog', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/blog_without_bg.svg',
      url:'blogs'
    },   
     
    { 
      title: 'Guided journaling', 
      icon: 'map', 
      color: '#191d3a',
      height:'',
      img:"https://d1tenzemoxuh75.cloudfront.net/assets/icons/guided_without_bg.svg",
    url:'journal'
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
      title: 'Wellness Survey', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/wellness_without_bg.svg',
      url:'wisdom-survey'
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
      title: 'Short videos', 
      icon: 'play-circle', 
      color: '#191d3a',
      height:'',
      img:'https://d1tenzemoxuh75.cloudfront.net/assets/icons/short_video_without_bg.svg',
      url:'wisdom-shorts'
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
      title: 'Life Stories', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/story_without_bg.svg',
      url:'wisdom-stories'
    },
     
    { 
      title: 'Find answers', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/find_ans_wihout_bg.svg',
      url:'find-answers/why-do-i'
    }, 
    { 
      title: 'Soundscapes', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/SoundScapes_without_bg.svg',
      url:'soundscapes'
    },   
     
    { 
      title: 'Events', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/events_without_bg.svg',
      url:'events'
    },   
   
    
    
  ];


  constructor(private router: Router, private location: Location,public logeventservice: LogEventService) {}
  
  routeTo(item: any) {
    this.logeventservice.logEvent("click_FI_"+item);
    this.router.navigate([SharedService.getprogramName()+'/' +item]);
  }

}
