import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s48108',
  templateUrl: './s48108.page.html',
  styleUrls: ['./s48108.page.scss'],
})
export class S48108Page implements OnInit {
  
  toc="success-failure/s48001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
  bg=""
  moduleLink="/adults/habit-addiction"
  moduleName="05. Addiction"
  sectionName= "Living with Wisdom - II";
  moduleId=45
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/29.png',
      link: '/fear-anxiety'
 
    },
    {
      name: 'Money',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/47.png',
      link: '/money'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
