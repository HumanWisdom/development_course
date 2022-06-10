import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s55059',
  templateUrl: './s55059.page.html',
  styleUrls: ['./s55059.page.scss'],
})
export class S55059Page implements OnInit {
  
  toc="self-interest/s55001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/identity.jpg"
  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg=""
  moduleLink="/adults/identity"
  moduleName=" Identity"
  sectionName= "How the Mind Works";
  moduleId=21
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/36.png',
      link: '/love'
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
 
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/26.png',
      link: '/emotional-needs'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
