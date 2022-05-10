import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s231p2',
  templateUrl: './s231p2.page.html',
  styleUrls: ['./s231p2.page.scss'],
})
export class S231p2Page implements OnInit {
  
  toc="anger/s162p0"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/fear_anxiety.jpg"
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg=""
  moduleLink="/adults/fear-anxiety"
  moduleName="01. Fear & Anxiety "
  sectionName= "Understand Emotions";
  moduleId=19 
  moduleList: any = [
    {
      name: 'Reactive mind',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/the_full_program/22.png',
      link: '/reactive-mind'
    },
    {
      name: 'Stress',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Relationships',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
