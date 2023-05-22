import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s113045',
  templateUrl: './s113045.page.html',
  styleUrls: ['./s113045.page.scss'],
})
export class S113045Page implements OnInit 
{
  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_flat"
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
    "ScreenNos":"113020,113021,113022,113023,113024,113025,113026,113027,113028,113029,113030,113031,113032,113033,113034,113035,113036,113037,113038,113039,113040,113041,113042,113043,113044"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/reactive-mind/s113046'])
  }

  prev()
  {
    this.router.navigate(['/reactive-mind/s113044'])
  }
}