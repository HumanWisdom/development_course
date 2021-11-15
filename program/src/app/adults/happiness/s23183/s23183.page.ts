import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s23183',
  templateUrl: './s23183.page.html',
  styleUrls: ['./s23183.page.scss'],
})
export class S23183Page implements OnInit {
  
  toc="happiness/s23001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
  bg=""
  moduleLink="/adults/communication"
  moduleName="02. Communication"
  sectionName= "Living with Wisdom - II";
  moduleId=53

  constructor() { }

  ngOnInit() {
  }
}
