import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s69p1',
  templateUrl: './s69p1.page.html',
  styleUrls: ['./s69p1.page.scss'],
})
export class S69p1Page implements OnInit {

  bg="green_yellow_w1"

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
    "ScreenNos":"53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })

    /*this.service.getPoints(this.userId)
    .subscribe(res=>{
      console.log(res)
      this.points=res.PointsScored
      this.overallPercentage=res.overallPercentage
    })*/

  }
  submitProgress(){
    this.router.navigate(['/comparison/s69p2'])
  }
  prev(){
    this.router.navigate(['/comparison/s68'])

  }

}
