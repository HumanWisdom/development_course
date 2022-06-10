import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s53256',
  templateUrl: './s53256.page.html',
  styleUrls: ['./s53256.page.scss'],
})
export class S53256Page  implements OnInit {
  
  toc="communication/s53001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/success_&_failure.jpg"
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg=""
  moduleLink="/adults/success-failure"
  moduleName=" Success and Failure"
  sectionName= "Living with Wisdom - II";
  moduleId=48

  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'
 
    },
    {
      name: 'Reactive mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/22.png',
      link: '/reactive-mind'
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
