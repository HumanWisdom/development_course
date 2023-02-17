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
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
  
  // bg=""
  // moduleLink="/adults/communication"
  // moduleName="02. Communication"
  // sectionName= "Living with Wisdom - II";
  // moduleId=53

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/62.png"
  
  bg=""
  moduleLink="/adults/love/"
  moduleName=" Love"
  sectionName= "Living with Wisdom - I";
  moduleId=62
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/62.png',
      link: '/love',
      id: 62
    },
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/20.png',
      link: '/pleasure',
      id: 20
 
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/63.png',
      link: '/living-with-peace',
      id: 63
  
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


