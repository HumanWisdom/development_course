import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s104035',
  templateUrl: './s104035.page.html',
  styleUrls: ['./s104035.page.scss'],
})
export class S104035Page implements OnInit {
  
  toc="obstacles-enquiry/s43000"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/teenagers/95.webp"
  programType : ProgramType = ProgramType.Teenagers;
  bg=""
  moduleLink="/benefits-of-enquiry/s95002"
  moduleName="Benefits of Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=95
  moduleList: any = [
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/112.webp',
      link: '/fear-anxiety',
      id: 112
    },
    {
      name: 'No Judgement',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/101.webp',
      link: '/no-judgement',
      id: 101
    },
    {
      name: 'Awareness',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/teenagers/100.webp',
      link: '/awareness',
      id: 100
    },
  ]

  
  constructor() { }

  ngOnInit() {
  }
}
