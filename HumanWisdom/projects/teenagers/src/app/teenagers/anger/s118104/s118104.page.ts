import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s118104',
  templateUrl: './s118104.page.html',
  styleUrls: ['./s118104.page.scss'],
})

export class S118104Page implements OnInit 
{  
  
  toc="/teenagers/anger/s118001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/130.webp"
  bg=""
  programType : ProgramType = ProgramType.Teenagers;
  moduleLink="/comparison"
  moduleName="Fear Of Death "
  sectionName= "Understand Emotions";
  moduleId=130
  moduleList: any = [
    {
      name: 'Reactive mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/113.webp',
      link: '/reactive-mind',
      id: 113
    },
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
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/113.webp"
      this.moduleLink = "/teenagers/reactive-mind"
      this.moduleName = "Reactive Mind"
      this.sectionName = "Explore how your mind works";
      this.moduleId = 113
    
    }
   }

  ngOnInit() 
  {}

}