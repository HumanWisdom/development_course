import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s39029',
  templateUrl: './s39029.page.html',
  styleUrls: ['./s39029.page.scss'],
})
export class S39029Page implements OnInit {
  
  toc="awareness/s39000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/no_judgement.jpg"
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg=""
  moduleLink="/adults/no-judgement/s40001"
  moduleName="06. No Judgement"
  sectionName= "Art of Enquiry";
  moduleId=40
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png',
      link: '/breathing'
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/08.png',
      link: '/noticing-thoughts'
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/09.png',
      link: '/meditation'
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
