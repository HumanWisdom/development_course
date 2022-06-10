import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s40016',
  templateUrl: './s40016.page.html',
  styleUrls: ['./s40016.page.scss'],
})
export class S40016Page implements OnInit {
  
  toc="no-judgement/s40000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/questions_are_key.jpg"
  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg=""
  moduleLink="/adults/questions-are-key/s41001"
  moduleName=" Questions are Key"
  sectionName= "Art of Enquiry";
  moduleId=41

  moduleList: any = [
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/13.png',
      link: '/three-steps-enquiry'
    },
    {
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/14.png',
      link: '/insight'
  
 
    },
    {
      name: 'Key Ideas',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/04.png',
      link: '/key-ideas'
  
    },
  ]

  
  constructor() { }

  ngOnInit() {
  }
}
