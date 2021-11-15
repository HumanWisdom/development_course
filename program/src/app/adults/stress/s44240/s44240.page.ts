import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s44240',
  templateUrl: './s44240.page.html',
  styleUrls: ['./s44240.page.scss'],
})
export class S44240Page implements OnInit {
  
  toc="stress/s44001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/relationships.jpg"
  bg=""
  moduleLink="/adults/relationships"
  moduleName="02. Relationships"
  sectionName= "Living with Wisdom - I";
  moduleId=47

  constructor() { }

  ngOnInit() {
  }
}
