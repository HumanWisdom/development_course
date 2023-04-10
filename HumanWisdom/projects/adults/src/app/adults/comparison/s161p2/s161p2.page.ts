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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/54.png"
 
  bg=""
  moduleLink="/adults/reactive-mind"
  moduleName=" Reactive Mind"
  sectionName= "How the Mind Works";
  moduleId=54
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/17.png',
      link: '/self-esteem',
      id: 17
 
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/14.png',
      link: '/anger',
      id: 14
  
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
      this.sectionName = "Transform your life";
      this.moduleId = 23
    
    }
    
  }

  ngOnInit() {
  }
}
