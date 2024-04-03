import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s123078',
  templateUrl: './s123078.page.html',
  styleUrls: ['./s123078.page.scss'],
})
export class S123078Page implements OnInit 
{

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_flat"
  toc="teenagers/external-approval/s123001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 123078
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any

  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.sessionPoints()
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"123002,123003,123004,123005,123006,123007,123008,123009,123010,123011,123012,123013,123014,123015,123078,123017,123018,123019,123020,123021,123022,123023,123024,123025,123027,123028,123029,123030,123031,123032,123033,123034,123035,123036,123037,123038,123039,123040,123041,123042,123043,123044,123045,123046,123047"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
  this.router.navigate(['/teenagers/external-approval/s123079'])
  }

  prev()
  {
  this.router.navigate(['/teenagers/external-approval/s123077'])
  }
}