import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s102022',
  templateUrl: './s102022.page.html',
  styleUrls: ['./s102022.page.scss'],
})
export class S102022Page implements OnInit {
  
  toc="questions-are-key//s102001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/40.png"
  bg=""
  moduleLink="/no-judgement/s101001"
  moduleName="No Judgement"
  sectionName= "Understand yourself";
  moduleId=101
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 29
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
      link: '/noticing-thoughts',
      id: 30
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/22.png',
      link: '/meditation',
      id: 22
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
