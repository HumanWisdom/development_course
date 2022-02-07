import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s61060',
  templateUrl: './s61060.page.html',
  styleUrls: ['./s61060.page.scss'],
})
export class S61060Page implements OnInit {

  bg="green_yellow_w3"

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
    "ScreenNos":"61035,61036,61037,61038,61039,61040,61041,61042,61043,61044,61045,61046,61047,61048,61049,61050,61051,61052,61053,61054,61055,61056,61057,61058,61059"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/loneliness/s61061'])
  }
  prev(){
    this.router.navigate(['/adults/loneliness/s61059'])

  }

}
