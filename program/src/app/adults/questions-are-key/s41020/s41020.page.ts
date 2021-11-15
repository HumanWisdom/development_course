import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s41020',
  templateUrl: './s41020.page.html',
  styleUrls: ['./s41020.page.scss'],
})
export class S41020Page implements OnInit {
  
  toc="questions-are-key/s41000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/look_without_language.jpg"
  bg=""
  moduleLink="/adults/without-language/s42001"
  moduleName="08. Look without Language"
  sectionName= "Art of Enquiry";
  moduleId=42
  
  constructor() { }

  ngOnInit() {
  }
}
