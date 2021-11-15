import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s46079',
  templateUrl: './s46079.page.html',
  styleUrls: ['./s46079.page.scss'],
})
export class S46079Page implements OnInit {
  
  toc="food-health/s46001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/money.jpg"
  bg=""
  moduleLink="/adults/money"
  moduleName="07. Money"
  sectionName= "Living with Wisdom - II";
  moduleId=73

  constructor() { }

  ngOnInit() {
  }
}
