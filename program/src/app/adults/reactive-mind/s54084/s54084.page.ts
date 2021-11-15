import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s54084',
  templateUrl: './s54084.page.html',
  styleUrls: ['./s54084.page.scss'],
})
export class S54084Page implements OnInit {
  
  toc="reactive-mind/s54001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_image.jpg"
  bg=""
  moduleLink="/adults/self-image"
  moduleName="04. Self Image"
  sectionName= "How the Mind Works";
  moduleId=25

  constructor() { }

  ngOnInit() {
  }
}
