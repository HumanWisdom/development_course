import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s54083',
  templateUrl: './s54083.page.html',
  styleUrls: ['./s54083.page.scss'],
})
export class S54083Page implements OnInit {

  bg="light_blue_w6"

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
    "ScreenNos":"54045,54046,54047,54048,54049,54050,54051,54052,54053,54054,54055,54056,54057,54058,54059,54060,54061,54062,54063,54064,54065,54066,54067,54068,54069,54070,54071,54072,54073,54074,54075,54076,54077,54078,54079,54080,54081,54082"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/reactive-mind/s54084'])
  }
  prev(){
    this.router.navigate(['/adults/reactive-mind/s54082'])

  }

}
