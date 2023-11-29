import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s132167',
  templateUrl: './s132167.page.html',
  styleUrls: ['./s132167.page.scss'],
})
export class S132167Page implements OnInit 
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
    "ScreenNos":"132139,132140,132141,132142,132143,132144,132145,132146,132147,132148,132149,132150,132151,132152,132153,132154,132155,132156,132157,132158,132159,132160,132161,132162,132163,132164,132165"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/communication/s132168'])
  }

  prev()
  {
    this.router.navigate(['/communication/s132166'])
  }
}