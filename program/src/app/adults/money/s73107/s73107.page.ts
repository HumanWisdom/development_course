import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s73107',
  templateUrl: './s73107.page.html',
  styleUrls: ['./s73107.page.scss'],
})
export class S73107Page implements OnInit {
  
  toc="money/s73001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/work.jpg"
  
  bg=""
  moduleLink="/adults/work/s58001"
  moduleName=" Work"
  sectionName= "Living with Wisdom - II";
  moduleId=58
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
    },
    {
      name: 'Work',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/54.png',
      link: '/work'
 
    },
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/30.png',
      link: '/pleasure'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
