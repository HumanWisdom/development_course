import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s29010',
  templateUrl: './s29010.page.html',
  styleUrls: ['./s29010.page.scss'],
})
export class S29010Page implements OnInit {
  
  toc="breathing/s29000"
  bg=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/30.png"
  moduleLink="/adults/noticing-thoughts"
  moduleName="Noticing Thoughts"
  sectionName= "Develop a calm mind";
  moduleId=30
  moduleList: any = [
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/28.png',
      link: '/nature',
      id: 28
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
      link: '/noticing-thoughts',
      id: 30
 
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/51.png',
      link: '/guided-meditation',
      id: 51
  
    },
  ]


  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png"
      this.moduleLink = "/adults/stress"
      this.moduleName = "stress"
      this.sectionName = "Transform your life";
      this.moduleId = 44
    
    }
  
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/60.webp"
      this.moduleLink = "/adults/sorrow"
      this.moduleName = "Sorrow"
      this.sectionName = "Manage your emotions";
      this.moduleId = 60
     
    }

   }

  ngOnInit() {
  }

}
