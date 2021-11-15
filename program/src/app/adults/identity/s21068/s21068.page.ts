import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s21068',
  templateUrl: './s21068.page.html',
  styleUrls: ['./s21068.page.scss'],
})
export class S21068Page implements OnInit {
  
  toc="identity/s21001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/emotional_needs.jpg"
  bg=""
  moduleLink="/adults/emotional-needs"
  moduleName="07. Emotional Needs"
  sectionName= "How the Mind Works";
  moduleId=18

  constructor() { }

  ngOnInit() {
  }
}
