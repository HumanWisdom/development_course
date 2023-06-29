import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s127152',
  templateUrl: './s127152.page.html',
  styleUrls: ['./s127152.page.scss'],
})
export class S127152Page implements OnInit 
{
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_flat"
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
    "ScreenNos":"127117,127118,127119,127120,127121,127122,127123,127124,127125,127126,127127,127128,127129,127130,127131,127132,127133,127134,127135,127136,127137,127138,127139,127140,127141,127142,127139,127145,127146,127147,127148,127149,127150,127151"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/habit-addiction/s127153'])
  }

  prev()
  {
    this.router.navigate(['/habit-addiction/s127151'])
  }
}