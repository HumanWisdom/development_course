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
  toc="teenagers/insight/s99001"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/teenagers/100.webp"
  
  bg=""
  moduleLink="/awareness/s100001"  
  moduleName=" Awareness"
  sectionName= "Art of Enquiry"; 
  moduleId=100
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105
    },
    {
      name: 'Look without Language',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/103.webp',
      link: '/without-language',
      id:103
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/109.webp',
      link: '/meditation',
      id:109
    },
  ]
  constructor() { }

  ngOnInit() {
  }
}
