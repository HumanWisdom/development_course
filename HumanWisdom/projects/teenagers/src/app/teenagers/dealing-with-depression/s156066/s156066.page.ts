import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156066',
  templateUrl: './s156066.page.html',
  styleUrls: ['./s156066.page.scss'],
})
export class S156066Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:TeenagersService,
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
    "ScreenNos":"156002,156003,156004,156005,156006,156007,156008,156009,156010,156011,156012,156013,156014,156015,156016,156017,156018,156019,156020,156021,156022,156023,156024,156025,156026,156027,156028,156029,156030,156031,156032,156033,156034,156035,156036,156037,156038,156039,156040,156041,156042,156043,156044,156045,156046,156047,156048,156049,156050,156051,156052,156053,156054,156055,156056,156057,156058,156059,156060,156061,156062,156063,156064,156065"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/dealing-with-depression/s156067'])
  }

  prev()
  {
    this.router.navigate(['/dealing-with-depression/s156065'])
  }

}