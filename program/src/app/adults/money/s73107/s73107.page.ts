import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s73107',
  templateUrl: './s73107.page.html',
  styleUrls: ['./s73107.page.scss'],
})
export class S73107Page implements OnInit {
  
  toc="money/s73001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/work.jpg"
  bg=""
  moduleLink="/adults/work/s58001"
  moduleName="08. Work"
  sectionName= "Living with Wisdom - II";
  moduleId=25

  constructor() { }

  ngOnInit() {
  }
}
