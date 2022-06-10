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
  moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_image.jpg"
  moduleLink = "/adults/self-image"
  moduleName = "Self Image"
  sectionName = "How the Mind Works";
  moduleId = 25
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/adults/stress'
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/33.png',
      link: '/adults/anger'

    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/29.png',
      link: '/adults/fear-anxiety'

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
      this.sectionName = "Live with wisdom";
      this.moduleId = 53
    
    }
  }

  ngOnInit() {
  }
}
