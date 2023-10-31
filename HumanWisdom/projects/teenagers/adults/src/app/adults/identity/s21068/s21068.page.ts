import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s21068',
  templateUrl: './s21068.page.html',
  styleUrls: ['./s21068.page.scss'],
})
export class S21068Page implements OnInit {
  
  toc="identity/s21001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/18.png"
  
  bg=""
  moduleLink="/adults/emotional-needs"
  moduleName=" Emotional Needs"
  sectionName= "How the Mind Works";
  moduleId=18
  moduleList: any = [
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/emotional-needs',
      id: 18
    },
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/25.png',
      link: '/self-image',
      id: 25
 
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/57.png',
      link: '/nature-of-i',
      id: 57
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
