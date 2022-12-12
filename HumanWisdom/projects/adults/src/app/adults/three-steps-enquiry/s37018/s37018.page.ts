import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s37018',
  templateUrl: './s37018.page.html',
  styleUrls: ['./s37018.page.scss'],
})
export class S37018Page implements OnInit {
  
  toc="three-steps-enquiry/s37000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/insight.jpg"
  
  bg=""
  moduleLink="/adults/insight/s38000"
  moduleName="04. Insight"
  sectionName= "Art of Enquiry";
  moduleId=38
  moduleList: any = [
    {
      name: 'Awareness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/15.png',
      link: '/awareness',
      id: 39
    },
    {
      name: 'Questions are Key',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/17.png',
      link: '/questions-are-key',
      id: 41
 
    },
    {
      
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/14.png',
      link: '/insight',
      id: 38
  
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
