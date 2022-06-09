import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s323',
  templateUrl: './s323.page.html',
  styleUrls: ['./s323.page.scss'],
})
export class S323Page implements OnInit {
  
  toc=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/comparison_envy.png"
  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg=""
  moduleLink="/adults/comparison/s0"
  moduleName=" Comparison"
  sectionName= "How the Mind Works";
  moduleId=7
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
 
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/29.png',
      link: '/fear-anxiety'
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
