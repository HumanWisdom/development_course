import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s99020',
  templateUrl: './s99020.page.html',
  styleUrls: ['./s99020.page.scss'],
})
export class S99020Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w6"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


  constructor(private router: Router,
    private service: TeenagersService,
    private location:Location) { }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }

  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"99002,99003,99004,99005,99006,99007,99008,99009,99010,99011,99012,99013,99014,99015,99016,99017,99018,99019"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    /*this.service.getPoints(this.userId)
    .subscribe(res=>{
      
      this.points=res.PointsScored
      this.overallPercentage=res.overallPercentage
    })*/

  }
  submitProgress(){
    this.router.navigate(['/insight/s99021'])

  }
  prev(){
    this.router.navigate(['/insight/s99019'])

  }

}
