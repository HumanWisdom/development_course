import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s91084',
  templateUrl: './s91084.page.html',
  styleUrls: ['./s91084.page.scss'],
})
export class S91084Page implements OnInit {
  
  toc="external-approval/s91001"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/15.webp"
  
  bg=""
  moduleLink="/adults/conditioning"
  moduleName=" Conditioning"
  sectionName= "How the Mind Works";
  moduleId=15
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/62.png',
      link: '/love',
      id: 62
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
 
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/emotional-needs',
      id: 18
  
    },
    
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/29.webp"
      this.moduleLink = "/adults/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a calm mind";
      this.moduleId = 29
    
    }

   }

  ngOnInit() { }

}