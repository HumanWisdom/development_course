import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s47056',
  templateUrl: './s47056.page.html',
  styleUrls: ['./s47056.page.scss'],
})
export class S47056Page implements OnInit {

  bg="purple_w9"

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
    "ScreenNos":"47029,47030,47031,47032,47033,47034,47035,47036,47037,47038,47039,47040,47041,47042,47043,47044,47045,47046,47047,47048,47049,47050,47051,47052,47053,47054,47055"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/relationships/s47057'])
  }
  prev(){
    this.router.navigate(['/adults/relationships/s47055'])

  }

}

