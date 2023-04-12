import { Component, OnInit } from '@angular/core';

import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s100027',
  templateUrl: './s100027.page.html',
  styleUrls: ['./s100027.page.scss'],
})
export class S100027Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


  constructor(private router: Router,
    private service:TeenagersService,
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
    "ScreenNos":"100002,100003,100004,100005,100007,100008,100009,100010,100010,100011,100012,100013,100014,100015,100015,100016,100017,100018,100019,100020,100021,100022,100023,100024,100025,29027"})
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
    this.router.navigate(['/awareness/s100028'])

  }
  prev(){
    this.router.navigate(['/awareness/s100026'])



}

}
