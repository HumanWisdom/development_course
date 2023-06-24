import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s126032',
  templateUrl: './s126032.page.html',
  styleUrls: ['./s126032.page.scss'],
})
export class S126032Page implements OnInit 
{
  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_flat"
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
    "ScreenNos":"126002,126003,126004,126005,126006,126007,126008,126009,126010,126011,126012,126013,126014,126015,126016,126017,126018,126019,126020,126021,126022,126023,126024,126025,126026,126027,126028,126029,126030,126031"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/self-esteem/s126033'])
  }

  prev()
  {
    this.router.navigate(['/self-esteem/s126031'])
  }
}