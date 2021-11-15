import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s60112',
  templateUrl: './s60112.page.html',
  styleUrls: ['./s60112.page.scss'],
})
export class S60112Page implements OnInit {
  
  toc="sorrow/s60001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/loneliness.jpg"
  bg=""
  moduleLink="/adults/loneliness"
  moduleName="04. Loneliness"
  sectionName= "Understand Emotions";
  moduleId=61

  constructor() { }

  ngOnInit() {
  }
}
