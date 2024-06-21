import { TeenagersService } from './../../../../teenagers/src/app/teenagers/teenagers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

@Component({
  selector: 'app-wisdom-score',
  templateUrl: './wisdom-score.page.html',
  styleUrls: ['./wisdom-score.page.scss'],
})
export class WisdomScorePage implements OnInit {


  bg="purple_blue_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  overallPercentage:any
  bookmark=0
  toc=""
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  points=localStorage.getItem("wisdomScore");
  enableDash = false;
  isAdults: boolean = true;

isUseCloseButton:boolean;
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) {
      if (SharedService.ProgramId == ProgramType.Adults) {
        this.isAdults = true;
      } else {
        this.isAdults = false;
      }
     }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      const {isUseCloseButton} = window.history.state;
      this.isUseCloseButton=isUseCloseButton;
       
      if (this.service.previousUrl === '/' + SharedService.getprogramName() + '/wisdom-survey') {
        this.enableDash = true;
      }
  }
  receiveBookmark(e)
{
  console.log(e)
 if(e==true)
  this.bookmark=1
  else
    this.bookmark=0
}


  submitProgress(){

    this.router.navigateByUrl('/' + SharedService.getprogramName() + '/discovering-wisdom/s27032');

  }
  prev(){
    this.router.navigateByUrl('/' + SharedService.getprogramName() + '/discovering-wisdom/s27020');

  }

}


