import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s59171',
  templateUrl: './s59171.page.html',
  styleUrls: ['./s59171.page.scss'],
})
export class S59171Page implements OnInit {
  
  toc="leadership/s59001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
  bg=""
  moduleLink="/adults/happiness"
  moduleName="01. Happiness"
  sectionName= "Living with Wisdom - II";
  moduleId=23

  constructor() { }

  ngOnInit() {
  }
}
