import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s25041',
  templateUrl: './s25041.page.html',
  styleUrls: ['./s25041.page.scss'],
})
export class S25041Page implements OnInit {
  
  toc="self-image/s25001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_interest.jpg"
  bg=""
  moduleLink="/adults/self-interest"
  moduleName="05. Self Interest"
  sectionName= "How the Mind Works";
  moduleId=55

  constructor() { }

  ngOnInit() {
  }
}
