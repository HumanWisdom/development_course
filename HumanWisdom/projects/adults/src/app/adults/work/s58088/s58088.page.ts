import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s58088',
  templateUrl: './s58088.page.html',
  styleUrls: ['./s58088.page.scss'],
})
export class S58088Page implements OnInit {
  
  toc="work/s58001"
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
      link: '/happiness',
      id: 23
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/26.png',
      link: '/emotional-needs',
      id: 18
    },
    {
      name: 'Communication',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/43.png',
      link: '/communication',
      id: 53
  
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'workplace') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/leadership.jpg"
     
      this.moduleLink = "/adults/leadership"
      this.moduleName = "Leadership"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 59
    
    }
   }

  ngOnInit() {
  }
}


