import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s56028',
  templateUrl: './s56028.page.html',
  styleUrls: ['./s56028.page.scss'],
})
export class S56028Page implements OnInit {

  bg="purple_blue_w1"

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
    "ScreenNos":"56002,56003,56004,56005,56006,56007,56008,56009,56010,56011,56012,56013,56014,56015,56016,56017,56018,56019,56020,56021,56022,56023,56024,56025,56026,56027"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/inner-boredom/s56029'])
  }
  prev(){
    this.router.navigate(['/inner-boredom/s56027'])

  }

}
