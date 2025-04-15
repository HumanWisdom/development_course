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
      img: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/podcast_without_bg.png',
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
      img:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/guided_without_bg.png",
    url:'journal'
    },    
    
    { 
      title: 'Short videos', 
      icon: 'play-circle', 
      color: '#191d3a',
      height:'',
      img:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/shortVideos_without_bg.png',
      url:'wisdom-shorts'
    },  
    { 
      title: 'PATHWAY', 
      icon: 'star', 
      color: '#191d3a',
      height:'',
      img:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/pathway_without_bg.png",
      url:'pathway'
    },
    { 
      title: 'Audio meditation', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/audioMeditation_without_bg.svg',
      url:'audio-meditation'
    },
    { 
      title: 'Contact a coach', 
      icon: 'message-circle', 
      color: '#191d3a',
      height:'',
      img:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/contactacouch_without_bg.png",
      url:'coach'
    },
    { 
      title: 'Life Stories', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/blog_without_bg.png',
      url:'wisdom-stories'
    },
    
    { 
      title: 'Blog', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/blog_without_bg.png',
      url:'blogs'
    },
    { 
      title: 'Events', 
      icon: 'volume-2', 
      color: '#191d3a',
      height:'',
      img: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/events_without_bg.png',
      url:'events'
    },   
    
    
  ];


  constructor(private router: Router, private location: Location) {}
  
  routeTo(item: any) {
    this.router.navigate([SharedService.getprogramName()+'/' +item]);
  }

}
