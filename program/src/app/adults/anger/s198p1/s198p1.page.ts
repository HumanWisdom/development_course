import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s198p1',
  templateUrl: './s198p1.page.html',
  styleUrls: ['./s198p1.page.scss'],
})
export class S198p1Page implements OnInit {

  bg="red_pink_w5"

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
    "ScreenNos":"179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   /* this.service.getPoints(this.userId)
    .subscribe(res=>{
      console.log(res)
      this.points=res.PointsScored
      this.overallPercentage=res.overallPercentage
    })*/

  }
  submitProgress(){
    this.router.navigate(['/anger/s198p2'])

  }
  previous(){
    this.router.navigate(['/anger/s197'])

  }

}
