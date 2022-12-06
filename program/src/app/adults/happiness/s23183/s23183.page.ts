import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s23183',
  templateUrl: './s23183.page.html',
  styleUrls: ['./s23183.page.scss'],
})
export class S23183Page implements OnInit {
  
  toc="happiness/s23001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
  
  bg=""
  moduleLink="/adults/communication"
  moduleName="02. Communication"
  sectionName= "Living with Wisdom - II";
  moduleId=53
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/36.png',
      link: '/love'
    },
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/30.png',
      link: '/pleasure'
 
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/40.png',
      link: '/living-with-peace'
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/living_with_peace.jpg"
    
      this.moduleLink = "/adults/living-with-peace"
      this.moduleName = "Living with Peace"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 63
    
    }
   
    
  }

  ngOnInit() {
  }
}


