import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s57074',
  templateUrl: './s57074.page.html',
  styleUrls: ['./s57074.page.scss'],
})
export class S57074Page implements OnInit {
  
  toc="nature-of-i/s57001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
  bg=""
  moduleLink="/adults/conditioning"
  moduleName="01. Conditioning"
  sectionName= "How the Mind Works";
  moduleId=15

  constructor() { }

  ngOnInit() {
  }
}
