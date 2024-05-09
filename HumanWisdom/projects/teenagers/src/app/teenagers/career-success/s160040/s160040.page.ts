import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s160040',
  templateUrl: './s160040.page.html',
  styleUrls: ['./s160040.page.scss'],
})
export class S160040Page implements OnInit {

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
    "ScreenNos":"160002,160003,160004,160005,160006,160007,160008,160009,160010,160011,160012,160013,160014,160015,160016,160017,160018,160019,160020,160021,160022,160023,160024,160025,160026,160027,160028,160029,160030,160031,160032,160033,160034,160035,160036,160037,160038,160039,160040"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/career-success/s160041'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/career-success/s160039'])
  }

}