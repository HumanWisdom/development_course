import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s143105',
  templateUrl: './s143105.page.html',
  styleUrls: ['./s143105.page.scss'],
})
export class S143105Page implements OnInit 
{
  bg_tn="bg_292d56"
  bg_cft="bg_292d56"
  bg="bg_292d56"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor
  (
    private router: Router,
    private service:AdultsService,
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
    "ScreenNos":"143071,143072,143073,143074,143075,143076,143077,143078,143079,143080,143081,143082,143083,143084,143085,143086,143087,143088,143089,143090,143091,143092,143093,143094,143095,143096,143097,143098,143099"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143106'])
  }

  prev()
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143104'])
  }
}