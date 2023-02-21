import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s73107',
  templateUrl: './s73107.page.html',
  styleUrls: ['./s73107.page.scss'],
})
export class S73107Page implements OnInit {
  
  toc="money/s73001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/work.jpg"
  
  // bg=""
  // moduleLink="/adults/work/s58001"
  // moduleName=" Work"
  // sectionName= "Living with Wisdom - II";
  // moduleId=58

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/49.png"
  
  bg=""
  moduleLink="/adults/opinions-beliefs"
  moduleName="Opinions and Beliefs"
  sectionName= "Living with Wisdom - I";
  moduleId=49
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Work',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/58.png',
      link: '/work',
      id: 58
 
    },
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/20.png',
      link: '/pleasure',
      id: 20
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
