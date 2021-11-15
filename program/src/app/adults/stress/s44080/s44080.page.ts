import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s44080',
  templateUrl: './s44080.page.html',
  styleUrls: ['./s44080.page.scss'],
})
export class S44080Page implements OnInit {

  bg="dark_blue_w2"

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
    "ScreenNos":"44057,44058,44059,44060,44061,44062,44063,44064,44065,44066,44067,44068,44069,44070,44071,44072,44073,44074,44075,44076,44077,44078,44079"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/stress/s44081'])
  }
  prev(){
    this.router.navigate(['/stress/s44079'])

  }

}
