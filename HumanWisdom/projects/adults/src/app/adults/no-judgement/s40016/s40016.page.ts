import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s40016',
  templateUrl: './s40016.page.html',
  styleUrls: ['./s40016.page.scss'],
})
export class S40016Page implements OnInit {
  
  toc="no-judgement/s40000"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/41.webp"
  
  bg=""
  moduleLink="/adults/questions-are-key/s41001"
  moduleName=" Questions are Key"
  sectionName= "Art of Enquiry";
  moduleId=41

  moduleList: any = [
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/37.png',
      link: '/three-steps-enquiry',
      id: 37
    },
    {
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/38.png',
      link: '/insight',
      id: 38
    },
    {
      name: 'Obstacles to Enquiry',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/43.webp',
      link: '/obstacles-enquiry',
      id: 43
  
    },
  ]

  
  constructor() { }

  ngOnInit() {
  }
}
