import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s277',
  templateUrl: './s277.page.html',
  styleUrls: ['./s277.page.scss'],
})
export class S277Page implements OnInit {

  // bg="module1_so_s1"
  bg="pink_orange_w9"

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
    "ScreenNos":"255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/conditioning/s278'])

  }
  prev(){
    this.router.navigate(['/conditioning/s276'])

  }

}
