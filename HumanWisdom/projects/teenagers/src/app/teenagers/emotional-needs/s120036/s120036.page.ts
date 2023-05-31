import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s120036',
  templateUrl: './s120036.page.html',
  styleUrls: ['./s120036.page.scss'],
})
export class S120036Page implements OnInit 
{
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w6"
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
    "ScreenNos":"120002,120003,120004,120005,120006,120007,120008,120009,120010,120011,120012,120013,120014,120015,120016,120017,120018,120019,120020,120021,120022,1200123,120024,120025,120026,120027,120028,120029,120030,120031,120032,120033,120034,120034"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/emotional-needs/s120037'])
  }

  prev()
  {
    this.router.navigate(['/emotional-needs/s120035'])
  }
}