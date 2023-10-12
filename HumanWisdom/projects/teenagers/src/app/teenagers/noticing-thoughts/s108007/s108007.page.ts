import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s108007',
  templateUrl: './s108007.page.html',
  styleUrls: ['./s108007.page.scss'],
})
export class S108007Page implements OnInit {
  
  toc=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/51.png"
  bg=""
  moduleLink="/guided-meditation"
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
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/22.png',
      link: '/meditation',
      id: 109
    },
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/28.png',
      link: '/nature',
      id: 106
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/guided_audio_meditation.jpg"
      
      this.moduleLink = "/adults/guided-meditation"
      this.moduleName = "Guided Meditation"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 51
    
    }
   }

  ngOnInit() {
  }
}
