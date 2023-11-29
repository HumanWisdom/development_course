import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s97018',
  templateUrl: './s97018.page.html',
  styleUrls: ['./s97018.page.scss'],
})
export class S97018Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_flat"

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
    "ScreenNos":"97002,97003,97004,97005,97006,97007,97008,97009,97010,97011,97012,97013,97014,97015,97016,97017"})
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
    this.router.navigate(['/three-steps-enquiry/s97018p1'])

  }
  prev(){
    this.router.navigate(['/three-steps-enquiry/s97017'])

  }

}
