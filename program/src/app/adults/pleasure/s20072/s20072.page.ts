import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s20072',
  templateUrl: './s20072.page.html',
  styleUrls: ['./s20072.page.scss'],
})
export class S20072Page implements OnInit {
  
  toc="pleasure/s20001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/sorrow_loss.jpg"
  bg=""
  moduleLink="/adults/sorrow"
  moduleName="03. Sorrow and Loss"
  sectionName= "Understand Emotions";

  moduleList: any = [
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/41.png',
      link: '/happiness'
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
 
    },
    {
      name: 'Inner Boredom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/27.png',
      link: '/inner-boredom'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
