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
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/living_with_peace.jpg"
 
  // bg=""
  // moduleLink="/adults/living-with-peace"
  // moduleName=" Living with Peace"
  // sectionName= "Transform your life - I";
  // moduleId=63
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/45.png"
 
  bg=""
  moduleLink="/adults/habit-addiction"
  moduleName=" Addiction"
  sectionName= "Transform your life - II";
  moduleId=45
  moduleList: any = [
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/25.png',
      link: '/self-image',
      id: 25
    },
    {
      name: 'Criticisms',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/16.png',
      link: '/criticism',
      id: 16
 
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 15
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
