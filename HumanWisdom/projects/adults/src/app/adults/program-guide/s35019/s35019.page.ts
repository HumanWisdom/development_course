import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s35019',
  templateUrl: './s35019.page.html',
  styleUrls: ['./s35019.page.scss'],
})
export class S35019Page implements OnInit {
  
  toc="program-guide/s35001"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/27.jpg"
  
  bg=""
  moduleLink="/adults/discovering-wisdom/"
  moduleName="What is Wisdom?"
  sectionName= "Introduction";
  moduleId=27

  constructor() { }

  ngOnInit() {
  }
}
