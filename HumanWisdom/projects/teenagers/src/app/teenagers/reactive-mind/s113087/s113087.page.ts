import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s113087',
  templateUrl: './s113087.page.html',
  styleUrls: ['./s113087.page.scss'],
})
export class S113087Page implements OnInit 
{  
  
  toc = "reactive-mind/s113001"
  bg="";
  moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/25.png"
  moduleLink = "/teenagers/self-image"
  moduleName = "Self Image"
  sectionName = "How the Mind Works";
  moduleId = 114
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/teenagers/stress',
      id: 44
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/14.png',
      link: '/teenagers/anger',
      id: 14

    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/19.png',
      link: '/teenagers/fear-anxiety',
      id: 19

    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
      this.moduleLink = "/teenagers/pleasure"
      this.moduleName = "Pleasure"
      this.sectionName = "Manage your emotions";
      this.moduleId = 20
    
    }
   else if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/29.png"
      this.moduleLink = "/teenagers/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a calm mind";
      this.moduleId = 29
     
    }
    else if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
      this.moduleLink = "/teenagers/communication"
      this.moduleName = "Communication"
      this.sectionName = "Transform your life";
      this.moduleId = 53
    
    }
  }

  ngOnInit() {
  }
}