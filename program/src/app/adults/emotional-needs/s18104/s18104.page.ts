import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s18104',
  templateUrl: './s18104.page.html',
  styleUrls: ['./s18104.page.scss'],
})
export class S18104Page implements OnInit {
  
  toc="emotional-needs/s18001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/inner_boredom.jpg"
  bg=""
  moduleLink="/adults/inner-boredom"
  moduleName="08. Inner Boredom"
  sectionName= "How the Mind Works";
  moduleId=56

  constructor() { }

  ngOnInit() {
  }
}
