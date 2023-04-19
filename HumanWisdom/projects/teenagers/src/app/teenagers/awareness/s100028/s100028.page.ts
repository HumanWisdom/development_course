import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s100028',
  templateUrl: './s100028.page.html',
  styleUrls: ['./s100028.page.scss'],
})
export class S100028Page implements OnInit {
  
  toc="awareness/s100001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/40.png"
  bg=""
  moduleLink="/no-judgement/s100001"
  moduleName="No Judgement"
  sectionName= "Understand yourself";
  moduleId=100
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
