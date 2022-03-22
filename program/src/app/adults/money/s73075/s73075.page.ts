import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s73075',
  templateUrl: './s73075.page.html',
  styleUrls: ['./s73075.page.scss'],
})
export class S73075Page implements OnInit {

  bg="red_pink_w6"

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
    "ScreenNos":"73044,73045,73046,73047,73048,73049,73050,73051,73052,73053,73054,73055,73056,73057,73058,73059,73060,73061,73062,73063,73064,73065,73066,73067,73068,73069,73070,73071,73072,73073,73074"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/money/s73076'])
  }
  prev(){
    this.router.navigate(['/adults/money/s73074'])

  }

}
