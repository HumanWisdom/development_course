import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s485',
  templateUrl: './s485.page.html',
  styleUrls: ['./s485.page.scss'],
})
export class S485Page implements OnInit {
  
  toc="self-esteem/s433"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/living_with_peace.jpg"
  bg=""
  moduleLink="/adults/living-with-peace"
  moduleName="06. Living with Peace"
  sectionName= "Living with Wisdom - I";
  moduleId=63

  constructor() { }

  ngOnInit() {
  }
}
