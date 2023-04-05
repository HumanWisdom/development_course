import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s95027',
  templateUrl: './s95027.page.html',
  styleUrls: ['./s95027.page.scss'],
})
export class S95027Page implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="green_yellow_flat"

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
    "ScreenNos":"95002,95003,95004,95005,95006,95007,95008,95009,95010,95011,95012,95013,95014,95015,95016,95017,95018,95019,95020,95021,95022,95023,95024,95025,95026"})
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
    this.router.navigate(['/benefits-of-enquiry/s95028'])

  }
  prev(){
    this.router.navigate(['/benefits-of-enquiry/s95021'])

  }

}
