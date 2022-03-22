import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s152p1',
  templateUrl: './s152p1.page.html',
  styleUrls: ['./s152p1.page.scss'],
})
export class S152p1Page implements OnInit {

  bg="green_yellow_w12"

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
    "ScreenNos":"140,141,142,143,144,145,146,147,148,149,150,151"})
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
    this.router.navigate(['/adults/comparison/s152p2'])
  }
  prev(){
    this.router.navigate(['/adults/comparison/s151'])

  }

}
