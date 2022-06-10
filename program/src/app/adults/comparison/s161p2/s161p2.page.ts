import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s161p2',
  templateUrl: './s161p2.page.html',
  styleUrls: ['./s161p2.page.scss'],
})
export class S161p2Page implements OnInit {
  
  toc="comparison/s0"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/reactive_mind.jpg"
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg=""
  moduleLink="/adults/reactive-mind"
  moduleName=" Reactive Mind"
  sectionName= "How the Mind Works";
  moduleId=54
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/38.png',
      link: '/self-esteem'
 
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/33.png',
      link: '/anger'
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/loneliness.jpg"
     
      this.moduleLink = "/adults/loneliness"
      this.moduleName = "Loneliness"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 61
    
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
     
      this.moduleLink = "/adults/happiness"
      this.moduleName = "Happiness"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 23
    
    }
    
  }

  ngOnInit() {
  }
}
