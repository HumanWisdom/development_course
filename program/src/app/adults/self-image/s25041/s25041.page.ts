import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s25041',
  templateUrl: './s25041.page.html',
  styleUrls: ['./s25041.page.scss'],
})
export class S25041Page implements OnInit {
  
  toc="self-image/s25001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_interest.jpg"
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg=""
  moduleLink="/adults/self-interest"
  moduleName="05. Self Interest"
  sectionName= "How the Mind Works";
  moduleId=55
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/38.png',
      link: '/self-esteem'
 
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/28.png',
      link: '/nature-of-i'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
