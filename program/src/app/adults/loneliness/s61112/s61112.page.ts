import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s61112',
  templateUrl: './s61112.page.html',
  styleUrls: ['./s61112.page.scss'],
})
export class S61112Page implements OnInit {

  bg="green_yellow_w7"

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
    "ScreenNos":"61062,61063,61064,61065,61066,61067,61068,61069,61070,61071,61072,61073,61074,61075,61076,61077,61078,61079,61080,61081,61082,61083,61084,61085,61086,61087,61088,61089,61090,61091,61092,61093,61094,61095,61096,61097,61098,61099,61100,61101,61102,61103,61104,61105,61106,61107,61108,61109,61110,61111"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/loneliness/s61113'])
  }
  prev(){
    this.router.navigate(['/adults/loneliness/s61111'])

  }

}
