import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s76092',
  templateUrl: './s76092.page.html',
  styleUrls: ['./s76092.page.scss'],
})
export class S76092Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_flat"

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
    "ScreenNos":"76060,76061,76062,76063,76064,76065,76066,76067,76068,76069,76070,76071,76072,76073,76074,76075,76076,76077,76078,76079,76080,76081,76082,76083,76084,76085,76086,76087,76088,76089,76090,76091"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/bullying/s76093'])
  }

  prev()
  {
    this.router.navigate(['/adults/bullying/s76091'])
  }

}