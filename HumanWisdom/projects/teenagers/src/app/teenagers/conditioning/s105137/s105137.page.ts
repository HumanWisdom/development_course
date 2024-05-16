import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'app-s105137',
  templateUrl: './s105137.page.html',
  styleUrls: ['./s105137.page.scss'],
})

export class S105137Page implements OnInit 
{  
  
   toc = "teenagers/conditioning/s105001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/111.webp"
  bg=""
  moduleLink="/comparison"
  moduleName=" Comparison"
  sectionName= "Explore How Your Mind Works";
  moduleId=111
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/131.webp',
      link: '/relationships',
      id: 131
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/112.webp',
      link: '/fear-anxiety',
      id: 112
    },
  ]

  constructor() 
  {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/113.webp"
      this.moduleLink = "/teenagers/reactive-mind"
      this.moduleName = "Reactive Mind"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 113
    }
    else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp"
      this.moduleLink = "/teenagers/stress"
      this.moduleName = "Stress"
      this.sectionName = "Transform your life";
      this.moduleId = 125
    }
  }

  ngOnInit() 
  {}

}