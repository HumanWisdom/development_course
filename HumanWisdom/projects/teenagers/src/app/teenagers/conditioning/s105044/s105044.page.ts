import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s105044',
  templateUrl: './s105044.page.html',
  styleUrls: ['./s105044.page.scss'],
})
export class S105044Page implements OnInit 
{
  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_flat"
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
    "ScreenNos":"105002,105003,105004,105005,105006,105007,105008,105009,105010,105011,105012,105013,105014,105015,105016,105017,105018,105019,105020,105021,105022,105023,105024,105025,105026,105027,105028,105029,105030,105031,105032,105033,105034,105035,105036,105037,105038,105039,105040,105041,105042,105043"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/conditioning/s105045'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/conditioning/s105043'])
  }
}