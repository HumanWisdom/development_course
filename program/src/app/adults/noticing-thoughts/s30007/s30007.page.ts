import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s30007',
  templateUrl: './s30007.page.html',
  styleUrls: ['./s30007.page.scss'],
})
export class S30007Page implements OnInit {
  
  toc=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/guided_audio_meditation.jpg"
  bg=""
  moduleLink="/adults/guided-meditation"
  moduleName="04. Guided Audio Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=51

  constructor() { }

  ngOnInit() {
  }
}
