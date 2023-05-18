import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s115032',
  templateUrl: './s115032.page.html',
  styleUrls: ['./s115032.page.scss'],
})
export class S115032Page implements OnInit 
{
  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_flat"
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
    "ScreenNos":"115002,115003,115004,115005,115006,115007,115008,115009,115010,115011,115012,115013,115014,115015,115016,115017,115018,115019,115020,115021,115022,115023,115024,115025,115026,115027,115028,115029,115030,115031"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/self-interest/s115033'])
  }

  prev()
  {
    this.router.navigate(['/self-interest/s115031'])
  }
}