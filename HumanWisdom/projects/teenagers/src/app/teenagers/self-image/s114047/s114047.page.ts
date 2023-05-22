import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s114047',
  templateUrl: './s114047.page.html',
  styleUrls: ['./s114047.page.scss'],
})
export class S114047Page implements OnInit 
{
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_flat"
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
    "ScreenNos":"114002,114003,114004,114005,114006,114007,114008,114009,114010,114011,114012,114013,114014,114015,114016,114017,114018,114019,114020,114021,114022,114023,114024,114025,114026,114027,114028,114029,114030,114031,114032,114033,114034,114035,114036,114037,114038,114039,114040,114041"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/self-image/s114048'])
  }

  prev()
  {
    this.router.navigate(['/self-image/s114046'])
  }
}