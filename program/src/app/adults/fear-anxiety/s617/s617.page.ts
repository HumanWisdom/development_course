import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s617',
  templateUrl: './s617.page.html',
  styleUrls: ['./s617.page.scss'],
})
export class S617Page implements OnInit {
  
  toc="fear-anxiety/s486"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg=""
  moduleLink="/adults/pleasure"
  moduleName="07. Pleasure"
  sectionName= "How the Mind Works";
  moduleId=20
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/39.png',
      link: '/living-with-peace'
 
    },
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/41.png',
      link: '/happiness'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
