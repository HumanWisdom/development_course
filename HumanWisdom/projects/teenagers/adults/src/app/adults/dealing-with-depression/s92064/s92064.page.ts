import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s92064',
  templateUrl: './s92064.page.html',
  styleUrls: ['./s92064.page.scss'],
})
export class S92064Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:AdultsService,
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
    "ScreenNos":"92002,92003,92004,92005,92006,92007,92008,92009,92010,92011,92012,92013,92014,92015,92016,92017,92018,92019,92020,92021,92022,92023,92024,92025,92026,92027,92028,92029,92030,92031,92032,92033,92034,92035,92036,92037,92038,92039,92040,92041,92042,92043,92044,92045,92046,92047,92048,92049,92050,92051,92052,92053,92054,92055,92056,92057,92058,92059,92060,92061,92062,92063"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92065'])
  }

  prev()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92063'])
  }

}