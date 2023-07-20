import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s113086',
  templateUrl: './s113086.page.html',
  styleUrls: ['./s113086.page.scss'],
})
export class S113086Page implements OnInit 
{
  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_flat"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

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
    "ScreenNos":"113047,113048,113049,113050,113051,113052,113053,113054,113055,113056,113057,113058,113059,113060,113061,113062,113063,113064,113065,113066,113067,113068,113069,113070,113071,113072,113073,113074,113075,113076,113077,113078,113079,113080"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/reactive-mind/s113087'])
  }

  prev()
  {
    this.router.navigate(['/reactive-mind/s113085'])
  }
}