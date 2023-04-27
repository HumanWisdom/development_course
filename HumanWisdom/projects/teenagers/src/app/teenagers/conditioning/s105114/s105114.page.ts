import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-s105114',
  templateUrl: './s105114.page.html',
  styleUrls: ['./s105114.page.scss'],
})
export class S105114Page implements OnInit 
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
    "ScreenNos":"105076,105077,105078,105079,105080,105081,105082,105083,105084,105085,105086,105087,105088,105089,105090,105091,105092,105093,105094,105095,105096,105097,105098,105099,105100,105101,105102,105103,105104,105105,105106,105107,105108,105109,105110,105111,105112,105113"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/conditioning/s105115'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/conditioning/s105113'])
  }
}