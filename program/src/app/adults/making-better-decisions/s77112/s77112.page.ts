import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s77112',
  templateUrl: './s77112.page.html',
  styleUrls: ['./s77112.page.scss'],
})
export class S77112Page implements OnInit {
  
  toc="making-better-decisions/s77001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/leadership.jpg"
 
  bg=""
  moduleLink="/adults/leadership"
  moduleName="09. Leadership"
  sectionName= "Living with Wisdom - II";
  moduleId=59
  moduleList: any = [
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/42.png',
      link: '/happiness'
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/26.png',
      link: '/emotional-needs'
    },
    {
      name: 'Communication',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/43.png',
      link: '/communication'
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'leadership') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/leadership.jpg"
      this.moduleLink = "/adults/leadership"
      this.moduleName = "Leadership"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 59
    }
  }

  ngOnInit() {}

}