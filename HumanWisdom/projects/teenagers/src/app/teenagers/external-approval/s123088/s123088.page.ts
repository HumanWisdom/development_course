import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s123088',
  templateUrl: './s123088.page.html',
  styleUrls: ['./s123088.page.scss'],
})
export class S123088Page implements OnInit 
{  
  
  toc="teenagers/external-approval/s123001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/113.webp"
  bg=""
  moduleLink="/reactive-mind"
  moduleName=" Reactive Mind"
  sectionName= "How the Mind Works";
  moduleId=113
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/126.webp',
      link: '/self-esteem',
      id: 126
 
    },
    {
      name: 'Anger',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/teenagers/118.webp',
      link: '/anger',
      id: 118
  
    },
  ]

  constructor() 
  {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/117.webp"
      this.moduleLink = "/loneliness"
      this.moduleName = "Loneliness"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 117
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/133.webp"
      this.moduleLink = "/happiness"
      this.moduleName = "Happiness"
      this.sectionName = "Transform your life";
      this.moduleId = 133
    }
  }

  ngOnInit() 
  {}

}