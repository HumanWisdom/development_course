import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s104035',
  templateUrl: './s104035.page.html',
  styleUrls: ['./s104035.page.scss'],
})
export class S104035Page implements OnInit {
  
  toc="obstacles-enquiry/s43000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/26.png"
  programType : ProgramType = ProgramType.Teenagers;
  bg=""
  moduleLink="/obstacles-enquiry/s104002"
  moduleName="Obstacles Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=104
  moduleList: any = [
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/19.png',
      link: '/fear-anxiety',
      id: 19
    },
    {
      name: 'No Judgement',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/40.png',
      link: '/no-judgement',
      id: 40
    },
    {
      name: 'Key Ideas',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/34.png',
      link: '/key-ideas',
      id: 34
    },
  ]

  
  constructor() { }

  ngOnInit() {
  }
}
