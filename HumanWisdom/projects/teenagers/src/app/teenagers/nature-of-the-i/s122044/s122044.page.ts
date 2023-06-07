import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s122044',
  templateUrl: './s122044.page.html',
  styleUrls: ['./s122044.page.scss'],
})
export class S122044Page implements OnInit 
{
  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
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
    "ScreenNos":"122002,122003,122004,122005,122006,122007,122008,122009,122010,122011,122012,122013,122014,122015,122016,122017,122018,122019,122020,122021,122022,1220123,122024,122025,122026,122027,122028,122029,122030,122031,122032,122033,122034,122034,122035,122044,122037,122038,122039,122040,122041,122042,122043"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/nature-of-the-i/s122045'])
  }

  prev()
  {
    this.router.navigate(['/nature-of-the-i/s122043'])
  }
}