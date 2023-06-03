import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s121032',
  templateUrl: './s121032.page.html',
  styleUrls: ['./s121032.page.scss'],
})
export class S121032Page implements OnInit 
{
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_flat"
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
    "ScreenNos":"121002,121003,121004,121005,121006,121007,121008,121009,121010,121011,121012,121013,121014,121015,121032,121017,121018,121019,121020,121021,121022,121023,121024,121025,121026,121027,121028,121029,121030,121031"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/inner-boredom/s121033'])
  }

  prev()
  {
    this.router.navigate(['/inner-boredom/s121030'])
  }
}