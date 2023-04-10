import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s432',
  templateUrl: './s432.page.html',
  styleUrls: ['./s432.page.scss'],
})
export class S432Page implements OnInit {
  
  toc="criticism/s324"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/opinions_&_beliefs.jpg"
  
  // bg=""
  // moduleLink="/adults/opinions-beliefs"
  // moduleName="Opinions and Beliefs"
  // sectionName= "Transform your life - I";
  // moduleId=49

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/47.png"
  
  bg=""
  moduleLink="/adults/relationships"
  moduleName=" Relationships"
  sectionName= "Transform your life - I";
  moduleId=47
  moduleList: any = [
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/07.png',
      link: '/comparison',
      id: 7
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 15
    },
    {
      name: 'Reactive mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/54.png',
      link: '/reactive-mind',
      id: 54
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
