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
      img: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/fi_audio_meditation.svg',
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
      img:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/fi_guided_questions.svg",
    url:'journal'
    },    
    
    { 
      title: 'Short videos', 
      icon: 'play-circle', 
      color: '#191d3a',
      height:'',
      img:'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v1_3/fi_short_videos.svg',
      url:'wisdom-shorts'
    },  
    { 
      title: 'Life Stories', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v1_3/fi_life_stories.svg',
      url:'wisdom-stories'
    },
    { 
      title: 'Audio meditation', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/fi_audio_meditation.svg',
      url:'audio-meditation'
    },
    { 
      title: 'Blog', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v1_3/fi_blog.svg',
      url:'blogs'
    },
    { 
      title: 'Events', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v1_3/fi_events.svg',
      url:'events'
    },
    
    { 
      title: 'PATHWAY', 
      icon: 'star', 
      color: '#191d3a',
      height:'',
      img:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/dots.svg",
      url:'pathway'
    },
    { 
      title: 'Contact a coach', 
      icon: 'message-circle', 
      color: '#191d3a',
      height:'h-24',
      img:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/contact_coach_teens.svg",
      url:'coach'
    }
  ];


  constructor(private router: Router, private location: Location) {}
  
  routeTo(item: any) {
    this.router.navigate([SharedService.getprogramName()+'/' +item]);
  }

}
