import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s125036',
  templateUrl: './s125036.page.html',
  styleUrls: ['./s125036.page.scss'],
})
export class S125036Page implements OnInit 
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
    "ScreenNos":"125002,125003,125004,125005,125006,125007,125008,125009,125010,125011,125012,125013,125014,125015,125016,125017,125018,125019,125020,125021,125022,125023,125024,125025,125026,125027,125028,125029,125030,125031,125032"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/stress/s125037'])
  }

  prev()
  {
    this.router.navigate(['/stress/s125035'])
  }
}