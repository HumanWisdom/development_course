import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'app-s119086',
  templateUrl: './s119086.page.html',
  styleUrls: ['./s119086.page.scss'],
})
export class S119086Page implements OnInit 
{  
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/identity/s119001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/18.png"
  bg=""
  moduleLink="/emotional-needs"
  moduleName=" Emotional Needs"
  sectionName= "How the Mind Works";
  moduleId=120
  moduleList: any = [
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/emotional-needs',
      id: 120
    },
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/25.png',
      link: '/teenagers/self-image',
      id: 114
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/57.png',
      link: '/nature-of-i',
      id: 122
 
    },
  ]

  constructor() 
  {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/loneliness.jpg"
      this.moduleLink = "/loneliness"
      this.moduleName = "Loneliness"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 117
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
      this.moduleLink = "/happiness"
      this.moduleName = "Happiness"
      this.sectionName = "Transform your life";
      this.moduleId = 133
    }
  }

  ngOnInit() 
  {}

}