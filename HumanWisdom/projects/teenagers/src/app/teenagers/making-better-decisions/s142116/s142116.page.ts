import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'HumanWisdom-s142116',
  templateUrl: './s142116.page.html',
  styleUrls: ['./s142116.page.scss'],
})
export class S142116Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/making-better-decisions/s142001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
 
  // bg=""
  // moduleLink="/adults/happiness"
  // moduleName=" Happiness"
  // sectionName= "Transform your life - II";
  // moduleId=23

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/137.webp"
  
  bg=""
  moduleLink="/kindness"
  moduleName=" Kindness"
  sectionName= "Transform your life - II";
  moduleId=137
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/112.webp',
      link: '/fear-anxiety',
      id: 112
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/120.webp',
      link: '/emotional-needs',
      id: 120
    },
  ]

  constructor() {

  }

  ngOnInit() {}

}