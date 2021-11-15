import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s58088',
  templateUrl: './s58088.page.html',
  styleUrls: ['./s58088.page.scss'],
})
export class S58088Page implements OnInit {
  
  toc="work/s58001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/leadership.jpg"
  bg=""
  moduleLink="/adults/leadership"
  moduleName="09. Leadership"
  sectionName= "Living with Wisdom - II";
  moduleId=59

  constructor() { }

  ngOnInit() {
  }
}
