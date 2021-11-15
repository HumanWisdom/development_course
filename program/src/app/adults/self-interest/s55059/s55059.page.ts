import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s55059',
  templateUrl: './s55059.page.html',
  styleUrls: ['./s55059.page.scss'],
})
export class S55059Page implements OnInit {
  
  toc="self-interest/s55001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/identity.jpg"
  bg=""
  moduleLink="/adults/identity"
  moduleName="06. Identity"
  sectionName= "How the Mind Works";
  moduleId=21

  constructor() { }

  ngOnInit() {
  }
}
