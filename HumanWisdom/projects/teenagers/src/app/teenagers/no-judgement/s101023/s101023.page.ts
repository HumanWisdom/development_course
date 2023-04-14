import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s101023',
  templateUrl: './s101023.page.html',
  styleUrls: ['./s101023.page.scss'],
})
export class S101023Page implements OnInit {
  
  toc="no-judgement//s100000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/40.png"
  bg=""
  moduleLink="/no-judgement/s101001"
  moduleName="No Judgement"
  sectionName= "Understand yourself";
  moduleId=101
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 29
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
      link: '/noticing-thoughts',
      id: 30
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/22.png',
      link: '/meditation',
      id: 22
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
