import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s61113',
  templateUrl: './s61113.page.html',
  styleUrls: ['./s61113.page.scss'],
})
export class S61113Page implements OnInit {
  
  toc="loneliness/s61001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/anger.png"
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg=""
  moduleLink="/adults/anger"
  moduleName="05. Anger"
  sectionName= "Understand Emotions";
  moduleId=14
  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/28.png',
      link: '/nature-of-i'
 
    },
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/31.png',
      link: '/sorrow'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
