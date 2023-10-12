import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";


@Component({
  selector: 'HumanWisdom-s138102',
  templateUrl: './s138102.page.html',
  styleUrls: ['./s138102.page.scss'],
})
export class S138102Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="social-media/s138001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
 
  // bg=""
  // moduleLink="/adults/happiness"
  // moduleName=" Happiness"
  // sectionName= "Transform your life - II";
  // moduleId=23

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/53.png"
  
  bg=""
  moduleLink="/communication"
  moduleName=" Communication"
  sectionName= "Transform your life - II";
  moduleId=132
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 105
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/19.png',
      link: '/fear-anxiety',
      id: 112
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/emotional-needs',
      id: 120
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'leadership') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/leadership.jpg"
      this.moduleLink = "/leadership"
      this.moduleName = "Leadership"
      this.sectionName = "Transform your life";
      this.moduleId = 59
    }
  }

  ngOnInit() {}

}