import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'app-s99021',
  templateUrl: './s99021.page.html',
  styleUrls: ['./s99021.page.scss'],
})
export class S99021Page implements OnInit {
  programType:ProgramType=ProgramType.Teenagers;
  toc="insight/s99000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/39.png"
  
  bg=""
  moduleLink="/awareness/s100001"  
  moduleName=" Awareness"
  sectionName= "Art of Enquiry"; 
  moduleId=100
  moduleList: any = [
    {
      name: 'Awareness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/39.png',
      link: '/awareness',
      id:39
    },
    {
      name: 'Look without Language',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/42.png',
      link: '/without-language',
      id:42
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/22.png',
      link: '/meditation',
      id:22
    },
  ]
  constructor() { }

  ngOnInit() {
  }
}
