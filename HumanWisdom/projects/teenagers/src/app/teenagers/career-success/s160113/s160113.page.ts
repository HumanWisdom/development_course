import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s160113',
  templateUrl: './s160113.page.html',
  styleUrls: ['./s160113.page.scss'],
})
export class S160113Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"160075,160076.160077,160078,160079,160080,160081,160082,160083,160084,160085,160086,160087,160088,160089,160090,160091,160092,160093,160094,160095,160096,160097,160098,160099,160100,160101,160102,160103,160104,160105,160106,160107,160108,160109,160110,160111,160112"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/career-success/s160114'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/career-success/s160112'])
  }

}