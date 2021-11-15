import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s39029',
  templateUrl: './s39029.page.html',
  styleUrls: ['./s39029.page.scss'],
})
export class S39029Page implements OnInit {
  
  toc="awareness/s39000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/no_judgement.jpg"
  bg=""
  moduleLink="/adults/no-judgement/s40001"
  moduleName="06. No Judgement"
  sectionName= "Art of Enquiry";
  moduleId=40
  
  constructor() { }

  ngOnInit() {
  }
}
