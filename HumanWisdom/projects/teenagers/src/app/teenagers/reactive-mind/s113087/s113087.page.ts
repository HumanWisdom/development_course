import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s113087',
  templateUrl: './s113087.page.html',
  styleUrls: ['./s113087.page.scss'],
})
export class S113087Page implements OnInit 
{  
  
  toc = "teenagers/reactive-mind/s113001"
  bg="";
  moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/114.webp"
  moduleLink = "/teenagers/self-image"
  moduleName = "Self Image"
  sectionName = "How the Mind Works";
  moduleId = 114
  programType : ProgramType = ProgramType.Teenagers;

  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/teenagers/stress',
      id: 125
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/118.webp',
      link: '/teenagers/anger',
      id: 118

    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/112.webp',
      link: '/teenagers/fear-anxiety',
      id: 112

    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/124.webp"
      this.moduleLink = "/teenagers/pleasure"
      this.moduleName = "Pleasure"
      this.sectionName = "Manage your emotions";
      this.moduleId = 124
    
    }
   else if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/107.webp"
      this.moduleLink = "/teenagers/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a calm mind";
      this.moduleId = 107
     
    }
    else if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/132.webp"
      this.moduleLink = "/teenagers/communication"
      this.moduleName = "Communication"
      this.sectionName = "Transform your life";
      this.moduleId = 132
    
    }
  }

  ngOnInit() {
  }
}