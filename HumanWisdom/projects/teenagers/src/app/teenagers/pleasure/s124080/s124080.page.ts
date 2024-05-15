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
  
  toc="teenagers/pleasure/s124001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/116.webp"
  bg=""
  moduleLink="/sorrow"
  moduleName=" Sorrow and Loss"
  sectionName= "Understand Emotions";
  moduleId=116
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/133.webp',
      link: '/happiness',
      id: 133
      
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
 
    },
    {
      name: 'Inner Boredom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/121.webp',
      link: '/inner-boredom',
      id: 121
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/127.webp"
     
      this.moduleLink = "/teenagers/habit-addiction"
      this.moduleName = "Addiction"
      this.sectionName = "Transform your life";
      this.moduleId = 127
    
    }
   else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp"
      
      this.moduleLink = "/teenagers/conditioning"
      this.moduleName = "Conditioning"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 105
     
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/121.webp"
     
      this.moduleLink = "/teenagers/inner-boredom"
      this.moduleName = "Inner Boredom & Emptiness"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 121
    
    }
  }


  ngOnInit() 
  {}

}