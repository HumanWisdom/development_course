import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s127054',
  templateUrl: './s127054.page.html',
  styleUrls: ['./s127054.page.scss'],
})
export class S127054Page implements OnInit 
{
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_flat"
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
    "ScreenNos":"127002,127003,127004,127005,127006,127007,127008,127009,127010,127011,127012,127013,127014,127015,127016,127017,127018,127019,127020,127021,127022,127023,127024,127025,127026,127027,127028,127029,127030,127031,127032,127033,127034,127035,127036,127037,127038,127039,127040,127041,127042,127043,127044,127045,127046,127047,127048,127049,127050,127051,127052,127053"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/habit-addiction/s127055'])
  }

  prev()
  {
    this.router.navigate(['/habit-addiction/s127053'])
  }
}