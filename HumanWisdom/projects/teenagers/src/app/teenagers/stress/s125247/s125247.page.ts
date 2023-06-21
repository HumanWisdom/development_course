import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s125247',
  templateUrl: './s125247.page.html',
  styleUrls: ['./s125247.page.scss'],
})
export class S125247Page implements OnInit 
{
  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"
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
    "ScreenNos":"125191,125192,125193,125194,125195,125196,125197,125198,125199,125200,125201,125202,125203,125204,125205,125206,125207,125208,125209,125210,125211,125212,125213,125214,125215,125216,125217,125218,125219,125220,125221,125222,125223,125224,125225,125226,125227,125228,125229,125230,125231,125232,125233,125234,125235,125236,125237,125238,125139,125140,125141,125142,125143,125244,125245,125246"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/stress/s125248'])
  }

  prev()
  {
    this.router.navigate(['/stress/s125246'])
  }
}