import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s617',
  templateUrl: './s617.page.html',
  styleUrls: ['./s617.page.scss'],
})
export class S617Page implements OnInit {
  
  toc="fear-anxiety/s486"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
  bg=""
  moduleLink="/adults/pleasure"
  moduleName="07. Pleasure"
  sectionName= "How the Mind Works";
  moduleId=20

  constructor() { }

  ngOnInit() {
  }
}
