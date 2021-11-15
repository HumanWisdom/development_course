import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s51013',
  templateUrl: './s51013.page.html',
  styleUrls: ['./s51013.page.scss'],
})
export class S51013Page implements OnInit {
  
  toc="guided-meditation/s51000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/meditation.jpg"
  bg=""
  moduleLink="/adults/meditation"
  moduleName="05. Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=22

  constructor() { }

  ngOnInit() {
  }
}
