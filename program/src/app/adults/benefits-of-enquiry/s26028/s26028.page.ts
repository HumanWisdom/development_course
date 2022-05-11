import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s26028',
  templateUrl: './s26028.page.html',
  styleUrls: ['./s26028.page.scss'],
})
export class S26028Page implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="green_yellow_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


  constructor(private router: Router,
    private service:AdultsService,
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
    "ScreenNos":"26002,26003,26004,26005,26006,26007,26008,26009,26010,26011,26012,26013,26014,26015,26016,26017,26018,26019,26020,26021,26022,26023,26024,26025,26026,26027"})
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
    this.router.navigate(['/adults/benefits-of-enquiry/s26029'])

  }
  prev(){
    this.router.navigate(['/adults/benefits-of-enquiry/s26027'])

  }

}
