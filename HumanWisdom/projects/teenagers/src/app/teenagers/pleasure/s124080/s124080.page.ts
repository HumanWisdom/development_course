import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s124080',
  templateUrl: './s124080.page.html',
  styleUrls: ['./s124080.page.scss'],
})

export class S124080Page implements OnInit 
{  
  
  toc="pleasure/s124001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/60.png"
  bg=""
  moduleLink="/sorrow"
  moduleName=" Sorrow and Loss"
  sectionName= "Understand Emotions";
  moduleId=116
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/23.png',
      link: '/happiness',
      id: 133
      
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 125
 
    },
    {
      name: 'Inner Boredom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/56.png',
      link: '/inner-boredom',
      id: 121
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
     
      this.moduleLink = "/habit-addiction"
      this.moduleName = "Addiction"
      this.sectionName = "Transform your life";
      this.moduleId = 45
    
    }
   else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
      
      this.moduleLink = "/conditioning"
      this.moduleName = "Conditioning"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 105
     
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/inner_boredom.jpg"
     
      this.moduleLink = "/inner-boredom"
      this.moduleName = "Inner Boredom & Emptiness"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 56
    
    }
  }


  ngOnInit() 
  {}

}