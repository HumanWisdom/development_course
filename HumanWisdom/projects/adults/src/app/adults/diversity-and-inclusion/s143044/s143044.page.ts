import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s143044',
  templateUrl: './s143044.page.html',
  styleUrls: ['./s143044.page.scss'],
})
export class S143044Page implements OnInit 
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
    private service:AdultsService,
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
    "ScreenNos":"143002,143003,143004,143005,143006,143007,143008,143009,143010,143011,143012,143013,143014,143015,143016,143017,143018,143019,143020,143021,143022,143023,143024,143025,143026,143027,143028,143029,143030,143031,143032,143033,143034,143035,143036,143037,143038,143039,143040,143041,143042,143043"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143045'])
  }

  prev()
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143043'])
  }
}