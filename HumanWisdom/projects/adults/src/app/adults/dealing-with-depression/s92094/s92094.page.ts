import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s92094',
  templateUrl: './s92094.page.html',
  styleUrls: ['./s92094.page.scss'],
})
export class S92094Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:AdultsService,
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
    "ScreenNos":"92066,92067,92068,92069,92070,92071,92072,92073,92074,92075,92076,92077,92078,92079,92080,92081,92082,92083,92084,92085,92086,92087,92088,92089,92090,92091,92092,92093"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92095'])
  }

  prev()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92093'])
  }

}