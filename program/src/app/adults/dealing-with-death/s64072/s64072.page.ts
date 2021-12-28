import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s64072',
  templateUrl: './s64072.page.html',
  styleUrls: ['./s64072.page.scss'],
})
export class S64072Page implements OnInit {
  
  toc="dealing-with-death/s64001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/stress.jpg"
  bg=""
  moduleLink="/adults/stress"
  moduleName="01. Stress"
  sectionName= "Living with Wisdom - I";
  moduleId=44
  moduleList: any = [
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/31.png',
      link: '/sorrow'

    },
    {
      name: ' Podcasts ',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/key_features/08.svg',
      link: '/framework-v1//podcast-toc'
 
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png',
      link: '/breathing'
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
