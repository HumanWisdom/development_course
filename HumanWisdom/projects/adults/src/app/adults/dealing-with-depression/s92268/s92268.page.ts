import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s92268',
  templateUrl: './s92268.page.html',
  styleUrls: ['./s92268.page.scss'],
})
export class S92268Page implements OnInit {
  
  toc="dealing-with-depression/s92001"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/20.jpg"
  
  bg=""
  moduleLink="/adults/pleasure"
  moduleName=" Pleasure"
  sectionName= "How the Mind Works";
  moduleId=20
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/63.png',
      link: '/living-with-peace',
      id: 63
 
    },
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/23.png',
      link: '/happiness',
      id: 23
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/91.jpg"
     
      this.moduleLink = "/adults/external-approval"
      this.moduleName = "Need for approval"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 91
    
    }
  }
  ngOnInit() {
  }
}