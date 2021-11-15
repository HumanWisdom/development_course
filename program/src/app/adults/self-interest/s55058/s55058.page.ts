import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s55058',
  templateUrl: './s55058.page.html',
  styleUrls: ['./s55058.page.scss'],
})
export class S55058Page implements OnInit {

  bg="purple_red_w7"

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
    "ScreenNos":"55033,55034,55035,55036,55037,55038,55039,55040,55041,55042,55043,55044,55045,55046,55047,55048,55049,55050,55051,55052,55053,55054,55055,55056,55057"})    
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/self-interest/s55059'])
  }
  prev(){
    this.router.navigate(['/self-interest/s55057'])

  }

}
