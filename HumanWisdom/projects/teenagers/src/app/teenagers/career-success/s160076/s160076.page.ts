import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s160076',
  templateUrl: './s160076.page.html',
  styleUrls: ['./s160076.page.scss'],
})
export class S160076Page implements OnInit {

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
    "ScreenNos":"160002,160003,160004,160005,160006,160007,160008,160009,160010,160011,160012,160013,160014,160015,160016,160017,160018,160019,160020,160021,160022,160023,160024,160025,160026,160027,160028,160029,160030,160031,160032,160033,160034,160035,160036,160037,160038,160039,160040,160041,160042,160043,160044,160045,160046,160047,160048,160049,160050,160051,160052,160053,160054,160055,160056,160057,160058,160059,160060,160061,160062,160063,160064,160065,160066,160067,160068,160069,160070,160071,160072,160073,160074,160075"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/career-success/s160077'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/career-success/s160075'])
  }

}