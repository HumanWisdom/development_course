import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s20048',
  templateUrl: './s20048.page.html',
  styleUrls: ['./s20048.page.scss'],
})
export class S20048Page implements OnInit {

  bg="pink_orange_w1"

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
    "ScreenNos":"20034,20035,20036,20037,20038,20039,20040,20041,20042,20043,20044,20045,20046,20047"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/pleasure/s20049'])
  }
  prev(){
    this.router.navigate(['/adults/pleasure/s20047'])

  }

}
