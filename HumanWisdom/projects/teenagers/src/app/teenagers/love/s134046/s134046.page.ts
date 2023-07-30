import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s134046',
  templateUrl: './s134046.page.html',
  styleUrls: ['./s134046.page.scss'],
})
export class S134046Page implements OnInit 
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
    "ScreenNos":"134002,134003,134004,134005,134006,134007,134008,134009,134010,134011,134012,134013,134014,134015,134016,134017,134018,134019,134020,134021,134022,134023,134024,134025,134026,134027,134028,134029,134030,134031,134032,134033,134034,134035,134036,134037,134038,134039,134040,134041,134042,134043,134044"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/love/s134047'])
  }

  prev()
  {
    this.router.navigate(['/love/s134045'])
  }
}