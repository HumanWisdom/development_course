import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s18104',
  templateUrl: './s18104.page.html',
  styleUrls: ['./s18104.page.scss'],
})
export class S18104Page implements OnInit {
  
  toc="emotional-needs/s18001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/56.png"
  
  bg=""
  moduleLink="/adults/inner-boredom"
  moduleName=" Inner Boredom"
  sectionName= "How the Mind Works";
  moduleId=56
  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47

    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
 
    },
    {
      name: 'No Judgement',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/40.png',
      link: '/no-judgement',
      id: 40
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/reactive_mind.jpg"
     
      this.moduleLink = "/adults/reactive-mind"
      this.moduleName = "Reactive Mind"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 54
    
    }
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/42.png"
     
      this.moduleLink = "/adults/without-language"
      this.moduleName = "Look Without Language"
      this.sectionName = "Understand Yourself";
      this.moduleId = 42
    
    }
    
  }

  ngOnInit() {
  }
}
