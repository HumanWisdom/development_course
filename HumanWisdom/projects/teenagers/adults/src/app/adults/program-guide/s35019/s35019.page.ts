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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/27.png"
  
  bg=""
  moduleLink="/adults/discovering-wisdom/"
  moduleName="What is Wisdom?"
  sectionName= "Introduction";
  moduleId=27

  constructor() { }

  ngOnInit() {
  }
}
