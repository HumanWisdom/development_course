import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s134153',
  templateUrl: './s134153.page.html',
  styleUrls: ['./s134153.page.scss'],
})
export class S134153Page implements OnInit 
{
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_flat"
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
    "ScreenNos":"134118,134119,134120,134121,134122,134123,134124,134125,134126,134127,134128,134129,134130,134131,134132,134133,134134,134135,134136,134137,134138,134139,134140,134141,134142,134143,134144,134145,134146,134147,134148,134149,134150,134151,134,152,134153"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/love/s134154'])
  }

  prev()
  {
    this.router.navigate(['/love/s134152'])
  }
}