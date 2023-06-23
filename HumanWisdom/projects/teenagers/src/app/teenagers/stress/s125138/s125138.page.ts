import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s125138',
  templateUrl: './s125138.page.html',
  styleUrls: ['./s125138.page.scss'],
})
export class S125138Page implements OnInit 
{
  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"
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
    "ScreenNos":"125086,125087,125088,125089,125090,125091,125092,125093,125094,125095,125096,125097,125098,125099,125100,125101,125102,125103,125104,125105,125106,125107,125108,125109,125110,125111,125112,125113,125114,125115,125116,125117,125118,125119,125120,125121,125122,125123,125124,125125,125126,125127,125128,125129,125130,125131,125132,125133,125134,125135,125136,125137"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/stress/s125139'])
  }

  prev()
  {
    this.router.navigate(['/stress/s125137'])
  }
}