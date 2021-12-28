import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s485',
  templateUrl: './s485.page.html',
  styleUrls: ['./s485.page.scss'],
})
export class S485Page implements OnInit {
  
  toc="self-esteem/s433"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/living_with_peace.jpg"
  bg=""
  moduleLink="/adults/living-with-peace"
  moduleName="06. Living with Peace"
  sectionName= "Living with Wisdom - I";
  moduleId=63
  moduleList: any = [
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/23.png',
      link: '/self-image'
    },
    {
      name: 'Criticisms',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/37.png',
      link: '/criticism'
 
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
