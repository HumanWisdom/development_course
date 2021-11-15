import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s63079',
  templateUrl: './s63079.page.html',
  styleUrls: ['./s63079.page.scss'],
})
export class S63079Page implements OnInit {
  
  toc="living-with-peace/s63001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/dealing_with_death.jpg"
  bg=""
  moduleLink="/adults/dealing-with-death"
  moduleName="07. Dealing with Death"
  sectionName= "Living with Wisdom - I";
  moduleId=64

  constructor() { }

  ngOnInit() {
  }
}
