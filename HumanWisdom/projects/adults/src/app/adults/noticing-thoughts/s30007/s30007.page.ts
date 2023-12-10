import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'app-s30007',
  templateUrl: './s30007.page.html',
  styleUrls: ['./s30007.page.scss'],
})
export class S30007Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc=""
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.jpg"
  
  bg=""
  moduleLink="/adults/guided-meditation"
  moduleName="Guided Audio Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=110
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
      this.moduleImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.jpg"
      
      this.moduleLink = "/adults/guided-meditation"
      this.moduleName = "Guided Meditation"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 51
    
    }
   }

  ngOnInit() {
  }
}
