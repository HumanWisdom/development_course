import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-s118103',
  templateUrl: './s118103.page.html',
  styleUrls: ['./s118103.page.scss'],
})
export class S118103Page implements OnInit 
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
    "ScreenNos":"118059,118060,118061,118062,118063,118064,118065,118066,118067,118068,118069,118070,118071,118072,118073,118074,118075,118076,118077,118078,118079,118080,118081,118082,118083,118084,118085,118086,118087,118088,118089,118090,118091,118092,118093,118094,118095,118096,118097,118098,118099,118100,118101,108102"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/anger/s118104'])
  }

  prev()
  {
    this.router.navigate(['/anger/s118102'])
  }
}