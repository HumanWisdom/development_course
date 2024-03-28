import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s112168',
  templateUrl: './s112168.page.html',
  styleUrls: ['./s112168.page.scss'],
})
export class S112168Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/fear-anxiety/s112001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/20.png"
  
  bg=""
  moduleLink="/pleasure"
  moduleName=" Pleasure"
  sectionName= "Manage your emotions";
  moduleId=124
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 125
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/63.png',
      link: '/living-with-peace',
      id: 129
 
    },
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/23.png',
      link: '/happiness',
      id: 133
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
     
      this.moduleLink = "/conditioning"
      this.moduleName = "Conditioning"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 15
    
    }
  }
  ngOnInit() {
  }
}
