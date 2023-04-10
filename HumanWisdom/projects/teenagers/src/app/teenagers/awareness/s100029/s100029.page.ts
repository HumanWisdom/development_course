import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s100029',
  templateUrl: './s100029.page.html',
  styleUrls: ['./s100029.page.scss'],
})
export class S100029Page implements OnInit {
  
  toc="awareness/s100000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/40.png"
  bg=""
  moduleLink="/no-judgement/s40001"
  moduleName="No Judgement"
  sectionName= "Understand yourself";
  moduleId=40
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
