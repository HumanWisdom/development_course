import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s29010',
  templateUrl: './s29010.page.html',
  styleUrls: ['./s29010.page.scss'],
})
export class S29010Page implements OnInit {
  
  toc="breathing/s29000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/noticing_thoughts.jpg"
  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg=""
  moduleLink="/adults/noticing-thoughts"
  moduleName="03. Noticing Thoughts"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=30
  moduleList: any = [
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/06.png',
      link: '/nature'
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
