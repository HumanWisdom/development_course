import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s57074',
  templateUrl: './s57074.page.html',
  styleUrls: ['./s57074.page.scss'],
})
export class S57074Page implements OnInit {
  
  toc="nature-of-i/s57001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
  bg_tn="bg_green"
  bg_cft="bg_green"
  bg=""
  moduleLink="/adults/conditioning"
  moduleName="01. Conditioning"
  sectionName= "How the Mind Works";
  moduleId=15
  moduleList: any = [
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/25.png',
      link: '/identity'
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/24.png',
      link: '/self-interest'
    },
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/23.png',
      link: '/self-image'
    },
  ]


  constructor() { }

  ngOnInit() {
  }
}
