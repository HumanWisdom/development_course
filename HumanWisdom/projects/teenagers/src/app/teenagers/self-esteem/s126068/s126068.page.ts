import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s126068',
  templateUrl: './s126068.page.html',
  styleUrls: ['./s126068.page.scss'],
})
export class S126068Page implements OnInit 
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
    "ScreenNos":"126034,126035,126036,126037,126038,126039,126040,126041,126042,126043,126044,126045,126046,126047,126048,126049,126050,126051,126052,126053,126054,126055,126056,126057,126058,126059,126060,126061,126062,126063,126064,126065,126066,126067"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/self-esteem/s126069'])
  }

  prev()
  {
    this.router.navigate(['/self-esteem/s126067'])
  }
}