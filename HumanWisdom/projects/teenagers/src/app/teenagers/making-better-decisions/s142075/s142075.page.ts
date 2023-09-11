import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s142075',
  templateUrl: './s142075.page.html',
  styleUrls: ['./s142075.page.scss'],
})
export class S142075Page implements OnInit 
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
    "ScreenNos":"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/making-better-decisions/s142076'])
  }

  prev()
  {
    this.router.navigate(['/making-better-decisions/s142074'])
  }
}