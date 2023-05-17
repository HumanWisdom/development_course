import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s116111',
  templateUrl: './s116111.page.html',
  styleUrls: ['./s116111.page.scss'],
})
export class S116111Page implements OnInit {
  
  toc="sorrow/s112001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/61.png"
  
  bg=""
  moduleLink="/loneliness"
  moduleName=" Loneliness"
  sectionName= "Understand Emotions";
  moduleId=117
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/21.png',
      link: '/identity',
      id: 21
    },
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/love',
      id: 18
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/dealing_with_death.jpg"
    
      this.moduleLink = "/adults/dealing-with-deathe"
      this.moduleName = " Dealing with Death"
      this.sectionName = "Transform your life";
      this.moduleId = 64
    
    }
   
    
  }

  ngOnInit() {
  }
}

