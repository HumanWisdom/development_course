import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s60112',
  templateUrl: './s60112.page.html',
  styleUrls: ['./s60112.page.scss'],
})
export class S60112Page implements OnInit {
  
  toc="sorrow/s60001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/loneliness.jpg"
  
  bg=""
  moduleLink="/adults/loneliness"
  moduleName=" Loneliness"
  sectionName= "Understand Emotions";
  moduleId=61
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/25.png',
      link: '/identity'
    },
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/36.png',
      link: '/love'
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/dealing_with_death.jpg"
    
      this.moduleLink = "/adults/dealing-with-deathe"
      this.moduleName = " Dealing with Death"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 64
    
    }
   
    
  }

  ngOnInit() {
  }
}

