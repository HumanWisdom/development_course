import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s132048',
  templateUrl: './s132048.page.html',
  styleUrls: ['./s132048.page.scss'],
})
export class S132048Page implements OnInit 
{
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_flat"
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
    "ScreenNos":"132002,132003,132004,132005,132006,132007,132008,132009,132010,132011,132012,132013,132014,132015,132016,132017,132018,132019,132020,132021,132022,132023,132024,132025,132026,132027,132028,132029,132030,132031,132032,132033,132034,132035,132036,132037,132038,132039,132040,132041,132042,132043,132044,132045,132046"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/communication/s132049'])
  }

  prev()
  {
    this.router.navigate(['/communication/s132047'])
  }
}