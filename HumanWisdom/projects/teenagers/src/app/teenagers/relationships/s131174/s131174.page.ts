import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s131174',
  templateUrl: './s131174.page.html',
  styleUrls: ['./s131174.page.scss'],
})
export class S131174Page implements OnInit 
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
    "ScreenNos":"131132,131133,131134,131135,131136,131137,131138,131139,131140,131141,131142,131143,131144,131145,131146,1311147,131148,131149,131150,131151,131152,131153,131154,131155,131156,131157,131158,131159,131160,131161,131162,131163,131164,131165,131166,131167,131168,131169,131170"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/relationships/s131175'])
  }

  prev()
  {
    this.router.navigate(['/relationships/s131173'])
  }
}