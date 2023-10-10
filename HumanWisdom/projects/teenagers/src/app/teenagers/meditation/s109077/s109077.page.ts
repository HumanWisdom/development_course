import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s109077',
  templateUrl: './s109077.page.html',
  styleUrls: ['./s109077.page.scss'],
})
export class S109077Page implements OnInit {
 
  toc=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/51.png"
  
  bg=""
  moduleLink="/guided-meditation/s110001"
  moduleName=" Guided Audio Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=110
  programType : ProgramType = ProgramType.Teenagers;

 moduleList: any = [
  {
    name: 'Breathing',
    image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
    link: '/breathing',
    id: 107
  },
  {
    name: 'Noticing Thoughts',
    image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
    link: '/noticing-thoughts',
    id: 108

  },
  {
    name: 'Guided Audio Meditation',
    image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/51.png',
    link: '/guided-meditation',
    id: 109

  },
]
  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/look_without_language.jpg"
    
      this.moduleLink = "/without-language"
      this.moduleName = " Look Without Language"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 103
    
    }
   
    
   }

  ngOnInit() {
  }
}

