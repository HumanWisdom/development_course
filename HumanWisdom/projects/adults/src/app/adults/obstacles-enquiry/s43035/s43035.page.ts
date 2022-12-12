import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s43035',
  templateUrl: './s43035.page.html',
  styleUrls: ['./s43035.page.scss'],
})
export class S43035Page implements OnInit {
  
  toc="obstacles-enquiry/s43000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/benefits_of_enquiry.jpg"
  
  bg=""
  moduleLink="/adults/benefits-of-enquiry/s26002"
  moduleName="01. Benefits of Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=26
  moduleList: any = [
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/29.png',
      link: '/fear-anxiety',
      id: 19
    },
    {
      name: 'No Judgement',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/16.png',
      link: '/no-judgement',
      id: 40
 
    },
    {
      name: 'Key Ideas',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/04.png',
      link: '/key-ideas',
      id: 34
  
    },
  ]

  
  constructor() { }

  ngOnInit() {
  }
}
