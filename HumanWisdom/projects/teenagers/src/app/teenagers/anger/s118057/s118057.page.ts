import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s118057',
  templateUrl: './s118057.page.html',
  styleUrls: ['./s118057.page.scss'],
})
export class S118057Page implements OnInit 
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
    "ScreenNos":"118019,118020,118021,118022,118023,118024,118025,118026,118027,118028,118029,118030,118031,118032,118033,118034,118035,118036,118037,118038,118039,118040,118041,118042,118043,118044,118045,118046,118047,118048,118049,118050,118051,118052,118053,118054,118055,118056"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/anger/s118058'])
  }

  prev()
  {
    this.router.navigate(['/anger/s118056'])
  }
}