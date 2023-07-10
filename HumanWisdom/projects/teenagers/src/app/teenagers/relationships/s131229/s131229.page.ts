import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s131229',
  templateUrl: './s131229.page.html',
  styleUrls: ['./s131229.page.scss'],
})
export class S131229Page implements OnInit 
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
    "ScreenNos":",131204,131205,131206,131207,131208,131209,131210,131211,131212,131213,131214,131215,131216,131217,131218,131219,131220,131221,131222,131223,131224,131225,131226,131227,131228"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/relationships/s131230'])
  }

  prev()
  {
    this.router.navigate(['/relationships/s131228'])
  }
}