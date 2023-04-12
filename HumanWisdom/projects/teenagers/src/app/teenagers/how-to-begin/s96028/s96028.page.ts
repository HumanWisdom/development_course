import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s96028',
  templateUrl: './s96028.page.html',
  styleUrls: ['./s96028.page.scss'],
})

export class S96028Page implements OnInit 
{
  
  toc="how-to-begin/s96001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/37.png"
  bg=""
  moduleLink="/teenagers/three-steps-enquiry"
  moduleName=" Three Steps to Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=97
  
  constructor() 
  { }

  ngOnInit() 
  { }
  
}