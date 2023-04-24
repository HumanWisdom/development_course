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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/22.png"
  bg=""
  moduleLink="/meditation"
  moduleName="04. Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=109
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 29
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/22.png',
      link: '/meditation',
      id: 22
    },
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/28.png',
      link: '/nature',
      id: 28
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
