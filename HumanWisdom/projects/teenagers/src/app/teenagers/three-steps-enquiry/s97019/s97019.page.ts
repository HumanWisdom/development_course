import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s97019',
  templateUrl: './s97019.page.html',
  styleUrls: ['./s97019.page.scss'],
})
export class S97019Page implements OnInit {
  
  toc="three-steps-enquiry/s97001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/38.png"
  
  bg=""
  moduleLink="/insight/s98001"
  moduleName="04. Insight"
  sectionName= "Art of Enquiry";
  moduleId=98
  moduleList: any = [
    {
      name: 'Awareness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/39.png',
      link: '/awareness',
      id: 39
    },
    {
      name: 'Questions are Key',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/41.png',
      link: '/questions-are-key',
      id: 41
 
    },
    { 
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/38.png',
      link: '/insight',
      id: 38
  
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
