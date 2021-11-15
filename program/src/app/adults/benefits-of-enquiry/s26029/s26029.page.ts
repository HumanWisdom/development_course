import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s26029',
  templateUrl: './s26029.page.html',
  styleUrls: ['./s26029.page.scss'],
})
export class S26029Page implements OnInit {
  
  toc="benefits-of-enquiry/s26001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/how_to_begin.jpg"
  bg=""
  moduleLink="/adults/how-to-begin/s36001"
  moduleName="02. How to begin?"
  sectionName= "Art of Enquiry";
  moduleId=36
  
  constructor() { }

  ngOnInit() {
  }
}
