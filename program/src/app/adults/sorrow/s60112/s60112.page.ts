import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s60112',
  templateUrl: './s60112.page.html',
  styleUrls: ['./s60112.page.scss'],
})
export class S60112Page implements OnInit {
  
  toc="sorrow/s60001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/loneliness.jpg"
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg=""
  moduleLink="/adults/loneliness"
  moduleName=" Loneliness"
  sectionName= "Understand Emotions";
  moduleId=61
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/25.png',
      link: '/identity'
    },
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/36.png',
      link: '/love'
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
