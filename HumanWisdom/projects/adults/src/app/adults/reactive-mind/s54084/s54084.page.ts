import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s54084',
  templateUrl: './s54084.page.html',
  styleUrls: ['./s54084.page.scss'],
})
export class S54084Page implements OnInit {

  toc = "reactive-mind/s54001"
  bg="";
  moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/25.png"
  moduleLink = "/adults/self-image"
  moduleName = "Self Image"
  sectionName = "How the Mind Works";
  moduleId = 25
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/adults/stress',
      id: 44
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/14.png',
      link: '/adults/anger',
      id: 14

    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/19.png',
      link: '/adults/fear-anxiety',
      id: 19

    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
      this.moduleLink = "/adults/pleasure"
      this.moduleName = "Pleasure"
      this.sectionName = "Manage your emotions";
      this.moduleId = 20
    
    }
   else if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/breathing.jpg"
      this.moduleLink = "/adults/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a calm mind";
      this.moduleId = 29
     
    }
    else if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
      this.moduleLink = "/adults/communication"
      this.moduleName = "Communication"
      this.sectionName = "Transform your life";
      this.moduleId = 53
    
    }
  }

  ngOnInit() {
  }
}
