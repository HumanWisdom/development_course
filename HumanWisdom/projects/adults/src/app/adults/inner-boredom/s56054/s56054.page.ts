import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s56054',
  templateUrl: './s56054.page.html',
  styleUrls: ['./s56054.page.scss'],
})
export class S56054Page implements OnInit {
  
  toc="inner-boredom/s56001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/57.png"
  
  bg=""
  moduleLink="/adults/nature-of-i"
  moduleName=" The Nature of the ‘I’"
  sectionName= "How the Mind Works";
  moduleId=57
  moduleList: any = [
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/23.png',
      link: '/happiness',
      id: 23
    },
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/20.png',
      link: '/pleasure',
      id: 20
 
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
  ]


  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/comparison_envy.png"
    
      this.moduleLink = "/adults/comparison"
      this.moduleName = "Comparison"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 7
    
    }
   
    
  }

  ngOnInit() {
  }
}



