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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
 
  bg=""
  moduleLink="/adults/happiness"
  moduleName=" Happiness"
  sectionName= "Living with Wisdom - II";
  moduleId=23
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/20.png',
      link: '/conditioning'
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/29.png',
      link: '/fear-anxiety'
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/26.png',
      link: '/emotional-needs'
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