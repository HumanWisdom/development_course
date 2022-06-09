import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s44240',
  templateUrl: './s44240.page.html',
  styleUrls: ['./s44240.page.scss'],
})
export class S44240Page implements OnInit {
  
  toc="stress/s44001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/relationships.jpg"
  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg=""
  moduleLink="/adults/relationships"
  moduleName=" Relationships"
  sectionName= "Living with Wisdom - I";
  moduleId=47
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
      name: 'Money',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/47.png',
      link: '/money'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
