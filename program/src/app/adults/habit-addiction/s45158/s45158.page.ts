import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s45158',
  templateUrl: './s45158.page.html',
  styleUrls: ['./s45158.page.scss'],
})
export class S45158Page implements OnInit {
  
  toc="habit-addiction/s45001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/food.jpg"
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg=""
  moduleLink="/adults/food-health"
  moduleName="06. Food"
  sectionName= "Living with Wisdom - II";
  moduleId=46
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'

    },
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/21.png',
      link: '/comparison'

    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
