import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../adults.service";

@Component({
  selector: 'app-s42022',
  templateUrl: './s42022.page.html',
  styleUrls: ['./s42022.page.scss'],
})
export class S42022Page implements OnInit {
  
  toc="without-language/s42000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/obstacles_to_enquiry.jpg"
  bg=""
  moduleLink="/adults/obstacles-enquiry/s43001"
  moduleName="09. Obstacles to Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=43
  
  constructor() { }

  ngOnInit() {
  }
}
