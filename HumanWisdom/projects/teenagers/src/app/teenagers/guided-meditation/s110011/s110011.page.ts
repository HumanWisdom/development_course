import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s110011',
  templateUrl: './s110011.page.html',
  styleUrls: ['./s110011.page.scss'],
})
export class S110011Page implements OnInit {
  
  toc="guided-meditation/s110001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/22.png"
  
  bg=""
  moduleLink="/meditation"
  moduleName="04. meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=109
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/14.png',
      link: '/anger',
      id: 118
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 125
 
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 107
    },
  ]


  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/meditation.jpg"
      
      this.moduleLink = "/meditation"
      this.moduleName = "Meditation"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 109
    
    }
   }

  ngOnInit() {
  }
}