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
  
  toc="anger/s118001"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/19.png"
  bg=""
  programType : ProgramType = ProgramType.Teenagers;
  moduleLink="/comparison"
  moduleName="Fear & Anxiety "
  sectionName= "Understand Emotions";
  moduleId=19 
  moduleList: any = [
    {
      name: 'Reactive mind',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/resume/54.png',
      link: '/reactive-mind',
      id: 54
    },
    {
      name: 'Stress',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Relationships',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/reactive_mind.jpg"
      this.moduleLink = "/adults/reactive-mind"
      this.moduleName = "Reactive Mind"
      this.sectionName = "Explore how your mind works";
      this.moduleId = 54
    
    }
   }

  ngOnInit() 
  {}

}