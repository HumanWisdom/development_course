import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s113018',
  templateUrl: './s113018.page.html',
  styleUrls: ['./s113018.page.scss'],
})
export class S113018Page implements OnInit 
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
    "ScreenNos":"113002,113003,113004,113005,113006,113007,113008,113009,113010,113011,113012,113013,113014,113015,113016,113017"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/reactive-mind/s113019'])
  }

  prev()
  {
    this.router.navigate(['/reactive-mind/s113017'])
  }
}