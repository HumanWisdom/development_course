import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s131104',
  templateUrl: './s131104.page.html',
  styleUrls: ['./s131104.page.scss'],
})
export class S131104Page implements OnInit 
{
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_flat"
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
    "ScreenNos":"131060,131061,131062,131063,131064,131065,131066,131067,131068,131069,131070,131071,131072,131073,131074,131075,131076,131077,131078,131079,131080,131081,131082,131083,131084,131085,131086,131087,131088,131089,131090,131091,131092,131093,131094,131095,131096,131097,131098,131099,131100,131101,131102,131103"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/relationships/s131105'])
  }

  prev()
  {
    this.router.navigate(['/relationships/s131103'])
  }
}