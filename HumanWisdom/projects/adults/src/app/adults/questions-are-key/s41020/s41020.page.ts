import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s41020',
  templateUrl: './s41020.page.html',
  styleUrls: ['./s41020.page.scss'],
})
export class S41020Page implements OnInit {
  
  toc="questions-are-key/s41000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/42.png"
  
  bg=""
  moduleLink="/adults/without-language/s42001"
  moduleName=" Look without Language"
  sectionName= "Art of Enquiry";
  moduleId=42
  moduleList: any = [
    {
      name: 'Key Ideas',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/34.png',
      link: '/key-ideas',
      id: 34
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/57.png',
      link: '/nature-of-i',
      id: 57
    },
    {
      name: 'No Judgement',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/40.png',
      link: '/no-judgement',
      id: 40
    },
  ]

  
  constructor() { }

  ngOnInit() {
  }
}
