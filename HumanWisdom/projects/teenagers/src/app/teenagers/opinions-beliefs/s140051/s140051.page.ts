import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s140051',
  templateUrl: './s140051.page.html',
  styleUrls: ['./s140051.page.scss'],
})
export class S140051Page implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w10"

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
    "ScreenNos":"140001,140002,140003,140004,140005,140006,140007,140008,140009,140010,140011,140012,140013,140014,140015,140016,140017,140018,140019,140020,140021,140022,140023,140024,140025,140026,140027,140028,140029,140030,140031,140032,140033,140034,140035,140036,140037,140038,140039,140040,140041,140042,140043,140044,140045,140046,140047,140048,140049,140050"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/opinions-beliefs/s140052'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/opinions-beliefs/s140050'])
  }
}