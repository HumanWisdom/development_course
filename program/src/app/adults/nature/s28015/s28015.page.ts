import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s28015',
  templateUrl: './s28015.page.html',
  styleUrls: ['./s28015.page.scss'],
})
export class S28015Page implements OnInit {

  toc="nature/s28001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/breathing.jpg"
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg=""
  moduleLink="/adults/breathing"
  moduleName=" Breathing"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=29
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
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/10.png',
      link: '/guided-meditation'
  
    },
  ]


  constructor() { }

  ngOnInit() {
  }
}
