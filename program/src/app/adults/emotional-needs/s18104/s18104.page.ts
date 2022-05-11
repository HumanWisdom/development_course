import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s18104',
  templateUrl: './s18104.page.html',
  styleUrls: ['./s18104.page.scss'],
})
export class S18104Page implements OnInit {
  
  toc="emotional-needs/s18001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/inner_boredom.jpg"
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg=""
  moduleLink="/adults/inner-boredom"
  moduleName="08. Inner Boredom"
  sectionName= "How the Mind Works";
  moduleId=56
  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
 
    },
    {
      name: 'No Judgement',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/16.png',
      link: '/no-judgement'

  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
