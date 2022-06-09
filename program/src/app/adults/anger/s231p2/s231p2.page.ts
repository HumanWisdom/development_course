import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s231p2',
  templateUrl: './s231p2.page.html',
  styleUrls: ['./s231p2.page.scss'],
})
export class S231p2Page implements OnInit {
  
  toc="anger/s162p0"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/fear_anxiety.jpg"
  moduleLink="/adults/fear-anxiety"
  moduleName="Fear & Anxiety "
  sectionName= "Understand Emotions";
  moduleId=19 
  moduleList: any = [
    {
      name: 'Reactive mind',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/vectorless/22.png',
      link: '/reactive-mind'
    },
    {
      name: 'Stress',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
    },
    {
      name: 'Relationships',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/vectorless/35.png',
      link: '/relationships'
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/reactive_mind.jpg"
      this.moduleLink = "/adults/reactive-mind"
      this.moduleName = "Reactive Mind"
      this.sectionName = "Explore how your mind works";
      this.moduleId = 54
    
    }
   }

  ngOnInit() {
  }
}
