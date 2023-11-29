import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s133085',
  templateUrl: './s133085.page.html',
  styleUrls: ['./s133085.page.scss'],
})
export class S133085Page implements OnInit 
{
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_flat"
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
    "ScreenNos":"133033,133034,133035,133036,133037,133038,133039,133040,133041,133042,133043,133044,133045,133046,133047,133048,133049,133050,133051,133052,133053,133054,133055,133056,133057,133058,133059,133060,133061,133062,133063,133064,133065,133066,133067,133068,133069,133070,133071,133072,133073,133074,133075,133076,133077,133078,133079,133080,133081,133082,133083,133084,133085"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/happiness/s133086'])
  }

  prev()
  {
    this.router.navigate(['/happiness/s133084'])
  }
}