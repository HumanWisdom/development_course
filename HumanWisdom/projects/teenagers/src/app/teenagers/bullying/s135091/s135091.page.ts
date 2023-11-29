import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import {  ProgramType } from "../../../../../../shared/models/program-model";


@Component({
  selector: 'HumanWisdom-s135091',
  templateUrl: './s135091.page.html',
  styleUrls: ['./s135091.page.scss'],
})
export class S135091Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="bullying/s135001"

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/16.png"
  
  bg=""
  moduleLink="/criticism"
  moduleName=" Criticism"
  sectionName= "Transform your life - I";
  moduleId=136

  moduleList: any = [
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/19.png',
      link: '/fear-anxiety',
      id: 112
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 105
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 125
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