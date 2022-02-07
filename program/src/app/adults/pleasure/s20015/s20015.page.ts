import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s20015',
  templateUrl: './s20015.page.html',
  styleUrls: ['./s20015.page.scss'],
})
export class S20015Page implements OnInit {

  bg="pink_orange_w12"

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
    "ScreenNos":"20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/pleasure/s20016'])
  }
  prev(){
    this.router.navigate(['/adults/pleasure/s20014'])

  }

}
