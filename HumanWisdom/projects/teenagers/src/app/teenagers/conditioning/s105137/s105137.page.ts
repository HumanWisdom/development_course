import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s105137',
  templateUrl: './s105137.page.html',
  styleUrls: ['./s105137.page.scss'],
})

export class S105137Page implements OnInit 
{  
  
  toc="conditioning/s105001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/07.png"
  bg=""
  moduleLink="/teenagers/comparison"
  moduleName=" Comparison"
  sectionName= "Explore How Your Mind Works";
  moduleId=7
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/19.png',
      link: '/fear-anxiety',
      id: 19
    },
  ]

  constructor() 
  {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/reactive_mind.jpg"
      this.moduleLink = "/adults/reactive-mind"
      this.moduleName = "Reactive Mind"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 54
    }
    else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/stress.jpg"
      this.moduleLink = "/adults/stress"
      this.moduleName = "Stress"
      this.sectionName = "Transform your life";
      this.moduleId = 44
    }
  }

  ngOnInit() 
  {}

}