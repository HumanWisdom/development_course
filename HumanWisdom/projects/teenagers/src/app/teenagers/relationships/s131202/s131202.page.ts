import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s131202',
  templateUrl: './s131202.page.html',
  styleUrls: ['./s131202.page.scss'],
})
export class S131202Page implements OnInit 
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
    "ScreenNos":"131176,131177,131178,131179,131180,131181,131182,131183,131184,131185,131186,131187,131188,131189,131190,131191,131192,131193,131194,131195,131196,131197,131198,131199,131200"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/relationships/s131203'])
  }

  prev()
  {
    this.router.navigate(['/relationships/s131201'])
  }
}