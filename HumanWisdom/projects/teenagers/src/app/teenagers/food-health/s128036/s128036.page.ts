import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s128036',
  templateUrl: './s128036.page.html',
  styleUrls: ['./s128036.page.scss'],
})
export class S128036Page implements OnInit 
{
  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
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
    "ScreenNos":"128002,128003,128004,128005,128006,128007,128008,128009,128010,128011,128012,128013,128014,128015,128036,128017,128018,128018,128019,128020,128021,128022,128023,128036,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/food-health/s128037'])
  }

  prev()
  {
    this.router.navigate(['/food-health/s128035'])
  }
}