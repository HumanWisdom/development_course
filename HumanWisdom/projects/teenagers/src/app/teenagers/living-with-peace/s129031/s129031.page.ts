import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s129031',
  templateUrl: './s129031.page.html',
  styleUrls: ['./s129031.page.scss'],
})
export class S129031Page implements OnInit 
{
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w6"
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
    "ScreenNos":"129002,129003,129004,129005,129006,129007,129008,129009,129010,129011,129012,129013,129014,129015,129031,129017,129018,129018,129019,129020,129021,129022,129023,129031,129025,129026,129027,129028,129029,129030"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/living-with-peace/s129032'])
  }

  prev()
  {
    this.router.navigate(['/living-with-peace/s129030'])
  }
}