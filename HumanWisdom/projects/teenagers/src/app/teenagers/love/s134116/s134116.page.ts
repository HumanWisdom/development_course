import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s134116',
  templateUrl: './s134116.page.html',
  styleUrls: ['./s134116.page.scss'],
})
export class S134116Page implements OnInit 
{
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_flat"
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
    "ScreenNos":"134080,134081,134082,134083,134084,134085,134086,134087,134088,134089,134090,134091,134092,134093,134094,134095,134096,134097,134098,134099,134100,134101,134102,134103,134104,134105,134106,134107,134108,134109,134110,134111,134112,134113,134114,134115,134116"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/love/s134117'])
  }

  prev()
  {
    this.router.navigate(['/love/s134115'])
  }
}