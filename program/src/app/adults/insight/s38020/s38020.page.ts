import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s38020',
  templateUrl: './s38020.page.html',
  styleUrls: ['./s38020.page.scss'],
})
export class S38020Page implements OnInit {
  
  toc="insight/s38000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/awareness.jpg"
  bg=""
  moduleLink="/adults/awareness/s39001"
  moduleName="05. Awareness"
  sectionName= "Art of Enquiry";
  moduleId=39
  moduleList: any = [
    {
      name: 'Awareness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/15.png',
      link: '/awareness'
    },
    {
      name: 'Look without Language',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/18.png',
      link: '/without-language'
 
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/09.png',
      link: '/meditation'
    },
  ]
  constructor() { }

  ngOnInit() {
  }
}
