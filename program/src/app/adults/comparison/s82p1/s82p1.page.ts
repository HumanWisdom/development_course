import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s82p1',
  templateUrl: './s82p1.page.html',
  styleUrls: ['./s82p1.page.scss'],
})
export class S82p1Page implements OnInit {

  bg="green_yellow_w10"

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
    "ScreenNos":"70,71,72,73,74,75,76,77,78,79,80,81"})
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
    this.router.navigate(['/comparison/s82p2'])
  }
  prev(){
    this.router.navigate(['/comparison/s81'])

  }

}
