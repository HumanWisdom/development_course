import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s40016',
  templateUrl: './s40016.page.html',
  styleUrls: ['./s40016.page.scss'],
})
export class S40016Page implements OnInit {
  
  toc="no-judgement/s40000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/questions_are_key.jpg"
  bg=""
  moduleLink="/adults/questions-are-key/s41001"
  moduleName="07. Questions are Key"
  sectionName= "Art of Enquiry";
  moduleId=41
  
  constructor() { }

  ngOnInit() {
  }
}
