import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s21068',
  templateUrl: './s21068.page.html',
  styleUrls: ['./s21068.page.scss'],
})
export class S21068Page implements OnInit {
  
  toc="identity/s21001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/emotional_needs.jpg"
  
  bg=""
  moduleLink="/adults/emotional-needs"
  moduleName=" Emotional Needs"
  sectionName= "How the Mind Works";
  moduleId=18
  moduleList: any = [
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/26.png',
      link: '/emotional-needs'
    },
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/23.png',
      link: '/self-image'
 
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/28.png',
      link: '/nature-of-i'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
