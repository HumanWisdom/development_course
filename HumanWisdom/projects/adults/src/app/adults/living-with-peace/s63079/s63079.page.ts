import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s63079',
  templateUrl: './s63079.page.html',
  styleUrls: ['./s63079.page.scss'],
})
export class S63079Page implements OnInit {
  
  toc="living-with-peace/s63001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/64.png"
  
  bg=""
  moduleLink="/adults/dealing-with-death"
  moduleName=" Dealing with Death"
  sectionName= "Transform your life - I";
  moduleId=64
  moduleList: any = [
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/20.png',
      link: '/pleasure',
      id: 20

    },
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/07.png',
      link: '/comparison',
      id: 7
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 29
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
    
      this.moduleLink = "/adults/pleasure"
      this.moduleName = "Pleasure"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 20
    
    }
   
    
  }

  ngOnInit() {
  }
}



