import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s120067',
  templateUrl: './s120067.page.html',
  styleUrls: ['./s120067.page.scss'],
})
export class S120067Page implements OnInit 
{
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w6"
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
    "ScreenNos":"120038,120039,120040,120041,120042,120043,120044,120045,120046,120047,120048,120049,120050,120051,120052,120053,120054,120055,120056,120057,120058,120059,120060,120061,120062,120063,120064,120065,120066"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/emotional-needs/s120068'])
  }

  prev()
  {
    this.router.navigate(['/emotional-needs/s120066'])
  }
}