import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s27036',
  templateUrl: './s27036.page.html',
  styleUrls: ['./s27036.page.scss'],
})
export class S27036Page implements OnInit {
  
  toc="discovering-wisdom/s27001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/benefits_of_wisdom.jpg"
  bg=""
  moduleLink="/adults/benefits-of-wisdom/"
  moduleName="03. Benefits of Wisdom"
  sectionName= "Introduction";
  moduleId=32
  
  constructor() { }

  ngOnInit() {
  }
}
