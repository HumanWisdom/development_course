import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s20072',
  templateUrl: './s20072.page.html',
  styleUrls: ['./s20072.page.scss'],
})
export class S20072Page implements OnInit {
  
  toc="pleasure/s20001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/sorrow_loss.jpg"
 
  bg=""
  moduleLink="/adults/sorrow"
  moduleName=" Sorrow and Loss"
  sectionName= "Understand Emotions";
  moduleId=60

  moduleList: any = [
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/41.png',
      link: '/happiness'
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
 
    },
    {
      name: 'Inner Boredom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/27.png',
      link: '/inner-boredom'
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
     
      this.moduleLink = "/adults/habit-addiction"
      this.moduleName = "Addiction"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 45
    
    }
   else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
      
      this.moduleLink = "/adults/conditioning"
      this.moduleName = "Past Influences"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 15
     
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/inner_boredom.jpg"
     
      this.moduleLink = "/adults/inner-boredom"
      this.moduleName = "Inner Boredom & Emptiness"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 56
    
    }
  }

  ngOnInit() {
  }
}
