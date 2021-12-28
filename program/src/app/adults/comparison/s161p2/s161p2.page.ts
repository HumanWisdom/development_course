import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s161p2',
  templateUrl: './s161p2.page.html',
  styleUrls: ['./s161p2.page.scss'],
})
export class S161p2Page implements OnInit {
  
  toc="comparison/s0"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/reactive_mind.jpg"
  bg=""
  moduleLink="/adults/reactive-mind"
  moduleName="03. Reactive Mind"
  sectionName= "How the Mind Works";
  moduleId=54
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/38.png',
      link: '/self-esteem'
 
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/33.png',
      link: '/anger'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
