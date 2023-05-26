import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s118018',
  templateUrl: './s118018.page.html',
  styleUrls: ['./s118018.page.scss'],
})
export class S118018Page implements OnInit 
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
    "ScreenNos":"118002,118003,118004,118005,118006,118007,118008,118009,118010,118011,118012,118013,118014,118015,118016,118017"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/anger/s118019'])
  }

  prev()
  {
    this.router.navigate(['/anger/s118017'])
  }
}