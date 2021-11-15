import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s22060',
  templateUrl: './s22060.page.html',
  styleUrls: ['./s22060.page.scss'],
})
export class S22060Page implements OnInit {

  toc="meditation/s22001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/nature.jpg"
  bg=""
  moduleLink="/adults/nature"
  moduleName="01. Nature"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=28

  constructor() { }

  ngOnInit() {
  }
}
